<template>
    <div>
        <el-row>
            <search-bar @onSearch="searchResult" ref="searchBar"></search-bar>
        </el-row>
        <el-row style="height: 780px;padding-left:45px">
            <el-tooltip effect="dark" placement="right"
                        v-for="item in books.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                        :key="item.id">
                <p slot="content" style="text-align:center;font-size: 17px;margin:6px auto 6px;">《{{item.title}}》</p>
                <p slot="content" style="text-align:center;font-size: 13px;margin-bottom: 6px">
                    <span>{{item.author}}</span> /
                    <span>{{item.date}}</span> /
                    <span>{{item.press}}</span>
                </p>
                <p slot="content" style="width: 300px" class="abstract">{{item.abs}}</p>
                <el-card style="width: 135px;margin-bottom: 20px;height: 233px;float: left;margin-right: 15px"
                         bodyStyle="padding:10px" shadow="hover">
                    <div class="cover" @click="editBook(item)">
                        <img :src="item.cover" alt="封面">
                    </div>
                    <div>
                        <div class="title">
                            <a href="javascript:;">{{item.title}}</a>
                        </div>
                        <i class="el-icon-delete" @click="deleteBook(item.id)"></i>
                    </div>
                    <div class="author">
                        {{item.author}}
                    </div>
                </el-card>
            </el-tooltip>
            <edit-form @onSubmit="loadBooks" ref="edit"></edit-form>
        </el-row>
        <el-row>
            <el-pagination
                    background
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-size="pageSize"
                    :total="books.length">
            </el-pagination>
        </el-row>
    </div>
</template>

<script>
    import EditForm from './EditForm'
    import SearchBar from './SearchBar'

    export default {
        name: "Books",
        components: {
            EditForm,
            SearchBar
        },
        data() {
            return {
                books: [],
                currentPage: 1,
                pageSize: 17
            }
        },
        methods: {
            loadBooks() {
                this.getRequest('/library/books').then(res => {
                    if (res && res.status === 200) {
                        this.books = res.data.data
                    }
                })
            },
            handleCurrentChange(currentPage) {
                this.currentPage = currentPage
                console.log(currentPage);
            },
            searchResult() {
                this.getRequest('/search?keywords=' + this.$refs.searchBar.keywords).then(res => {
                    if (res && res.status === 200) {
                        this.books = res.data
                    }
                })
            },
            deleteBook(id) {
                this.$confirm('此操作将永久删除该书籍, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.postKeyValueRequest('/library/delete', {'id': id}).then(res => {
                        if (res && res.status === 200) {
                            this.loadBooks()
                        }
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    })
                })
            },
            editBook(item) {
                this.$refs.edit.dialogFormVisible = true
                this.$refs.edit.form = {
                    id: item.id,
                    cover: item.cover,
                    title: item.title,
                    author: item.author,
                    date: item.date,
                    press: item.press,
                    abs: item.abs,
                    category: {
                        id: item.category.id.toString()
                    }
                }
            }
        },
        mounted() {
            this.loadBooks()
        }
    }
</script>

<style scoped>
    .cover {
        width: 115px;
        height: 172px;
        margin-bottom: 7px;
        overflow: hidden;
        cursor: pointer;
    }

    img {
        width: 115px;
        height: 172px;
        /*margin: 0 auto;*/
    }

    .title {
        font-size: 14px;
        text-align: left;
    }

    .author {
        color: #333;
        width: 102px;
        font-size: 13px;
        margin-bottom: 6px;
        text-align: left;
    }

    .abstract {
        display: block;
        line-height: 17px;
    }

    .el-icon-delete {
        cursor: pointer;
        float: right;
    }

    a {
        text-decoration: none;
    }

    a:link, a:visited, a:focus {
        color: #3377aa;
    }
</style>