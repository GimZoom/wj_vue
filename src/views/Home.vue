<template>
    <div>
        <nav-menu></nav-menu>
        <router-view ref="homeRouterView"></router-view>
    </div>
</template>

<script>
    import NavMenu from 'components/common/NavMenu'

    export default {
        name: "Home",
        components: {
            NavMenu
        }
    }
</script>

<style scoped>

</style>