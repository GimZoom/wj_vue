<template>
    <el-container>
        <el-aside style="width: 200px;margin-top: 20px;">
            <side-menu @indexSelect="findBooksByCid" ref="sideMenu"></side-menu>
        </el-aside>
        <el-main>
            <books class="books-area" ref="books"></books>
        </el-main>
    </el-container>
</template>

<script>
    import SideMenu from './SideMenu'
    import Books from './Books'

    export default {
        name: "LibraryIndex",
        components: {
            SideMenu,
            Books
        },
        methods: {
            findBooksByCid() {
                let cid = this.$refs.sideMenu.cid
                let url = '/library/books/cid/' + cid
                this.getRequest(url).then(res => {
                    if (res && res.status === 200) {
                        this.$refs.books.books = res.data.data
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .books-area {
        width: 990px;
        margin-left: auto;
        margin-right: auto;
    }
</style>