<template>
    <div id="login">
        <el-form class="login-container">
            <h3 class="login_title">系统登录</h3>
            <el-form-item>
                <el-input type="text" v-model="loginForm.username" placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="text" v-model="loginForm.password" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width:100%;background: #505458;" @click="login">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                loginForm: {
                    username: 'admin',
                    password: '123456'
                },
                responseResult: []
            }
        },
        methods: {
            login() {
                this.postKeyValueRequest('/login', this.loginForm).then(res => {
                    if (res.data.code === 200) {
                        //将用户信息存入Vuex中和localStorage中
                        this.$store.commit('login', this.loginForm)
                        //获取跳转到登录页面前的页面的全路径
                        let path = this.$route.query.redirect
                        //若path为undefined，说明直接进入登录页面；非undefined，说明进登录页面前正访问其他页面
                        this.$router.push(path===undefined?'/index':path)
                    }
                }).catch(error => {
                    console.log(error);
                })
            }
        }
    }
</script>

<style scoped>
    #login {
        background: url("~assets/img/AR.jpg") no-repeat fixed center/cover;
        height: 100%;
        width: 100%;
        position: fixed;
    }

    .login-container {
        border-radius: 15px;
        background-clip: padding-box;
        margin: 90px auto;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }

    .login_title {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
    }
</style>