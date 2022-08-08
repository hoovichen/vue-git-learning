<template>
    <div class="login-container ub main-center cross-center">
        <el-form size="medium" :rules="rules" ref="loginForm" :model="loginForm" class="login-form">
            <el-form-item label="">
                <div class="login-title ub main-center cross-center">系统登陆</div>
            </el-form-item>

            <el-form-item label="" prop="username">
                <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="" prop="password">
                <el-input v-model="loginForm.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="" prop="code">
                <el-row :gutter="10">
                    <el-col :span="16">
                        <el-input v-model="loginForm.code" placeholder="请输入验证码"></el-input>
                    </el-col>
                    <el-col :span="8" :offset="0">
                        <el-input placeholder="点击刷新" readonly></el-input>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item>
                <el-row :gutter="20">
                    <el-col :span="12" :offset="0">
                        <el-button class="my-button" @click="submit" type="primary">登陆</el-button>
                    </el-col>
                    <el-col :span="12" :offset="0">
                        <el-button class="my-button" @click="restSubmit" type="primary">重置</el-button>
                    </el-col>
                </el-row>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loginForm: {
                    username: "",
                    password: "",
                    code: ""
                },
                rules: {
                    username: [{
                        required: true,
                        trigger: "change",
                        message: "请输入用户名"
                    }],
                    password: [{
                        required: true,
                        trigger: "change",
                        message: "请输入密码"
                    }],
                    code: [{
                        required: true,
                        trigger: "change",
                        message: "请输入验证码"
                    }],
                },
            }
        },
        methods: {
            // 响应事件
            submit() {
                this.$refs['loginForm'].validate(valid => {
                    if (valid) {
                        console.log(valid);
                        /*
                        //保存菜单数据
                        sessionStorage.setItem("menuList", JSON.stringify(menuList));
                        //保存路由数据
                        sessionStorage.setItem("routerList", JSON.stringify(routerList));
                        //动态生成路由
                        this.$store.commit("getMenuList", this.$router);
                        //跳转到home页面
                        */
                        this.$router.push("/");
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                })
            },
            restSubmit() {
                this.$refs.loginForm.resetFields();
            }

        },
    }
</script>
<style lang="scss" scoped>
    .login-container .el-form-item__content {

        margin-left: 0 !important;
    }

    .login-title {
        font-size: 24px;
        font-weight: 600;
    }

    .login-form {
        height: 300px;
        width: 350px;
        border-radius: 10px;
        box-shadow: 0 0 25px #cac6c6;
        padding: 20px 25px;
    }

    .my-button {
        width: 100%;
    }
</style>