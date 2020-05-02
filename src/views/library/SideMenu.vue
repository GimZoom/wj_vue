<template>
    <el-menu
            class="categories"
            default-active="0"
            @select="handleSelect"
            active-text-color="#409EFF"
            ref="sideMenuElMenu">
        <el-menu-item index="0">
            <i class="el-icon-menu"></i>
            <!--            <span slot="title">全部</span>-->
            <span>全部</span>
        </el-menu-item>
        <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <!--            <span slot="title">文学</span>-->
            <span>文学</span>
        </el-menu-item>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <!--            <span slot="title">流行</span>-->
            <span>流行</span>
        </el-menu-item>
        <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <!--            <span slot="title">文化</span>-->
            <span>文化</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-menu"></i>
            <!--            <span slot="title">生活</span>-->
            <span>生活</span>
        </el-menu-item>
        <el-menu-item index="5">
            <i class="el-icon-menu"></i>
            <!--            <span slot="title">经管</span>-->
            <span>经管</span>
        </el-menu-item>
        <el-menu-item index="6">
            <i class="el-icon-menu"></i>
            <!--            <span slot="title">科技</span>-->
            <span>科技</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "SideMenu",
        data() {
            return {
                cid: ''
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                this.cid = key
                this.$emit('indexSelect')
            }
        }
    }
</script>

<style scoped>
    .categories {
        margin: 0 0 0 48px;
        /*position: fixed;*/
        /*margin-left: 50%;*/
        /*left: -600px;*/
        /*top: 100px;*/
        width: 150px;
    }
</style>