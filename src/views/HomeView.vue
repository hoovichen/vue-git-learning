<template>
  <div class="home">
    <!-- 划分区域 -->
    <el-container :direction="vertical">
      <el-header class="header ub main-justify cross-center">
        <!-- Header content 头部 LOGO 登陆信息 -->
        <div class="header-left-text"> 管理系统</div>
        <div class="header-right ub main-center cross-center">
          <!-- 用户信息 -->
          <div>
            <el-dropdown placement="bottom-start">

               <img class="user-img" src="../assets/images/user215.png" alt="用户头像">
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <!-- 登陆信息 -->
          <div class="user-role">
            <div class="header-welcome">欢迎您，管理员</div>
            <!-- 时间 -->
            <div class="header-time">{{homeDate}}</div>
          </div>
        </div>
      </el-header>
      <el-container :direction="horizontal">
        <el-aside width="200px">
          <!-- Aside content 菜单栏 靠左 -->
        </el-aside>
        <el-container :direction="vertical">
          <el-main height="">
            <!-- Main content 主要的页面内容 -->
          </el-main>
          <el-footer height="">
            <!-- Footer content 底部的信息-->
          </el-footer>
        </el-container>
      </el-container>
    </el-container>

  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  import { mapState } from 'vuex';
  var $vueIndex;

  export default {
    name: 'HomeView',
    data() {
      return {
        homeDate: null,
      }
    },
    components: {

    },
    methods: {
      arrowBtn() {
        this.$store.commit("setOpenOrClose");
      },
      showTime() {
        var week = new Array(
          " 星期日",
          " 星期一",
          " 星期二",
          " 星期三",
          " 星期四",
          " 星期五",
          " 星期六"
        );
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var minutes = date.getMinutes();
        var second = date.getSeconds();
        this.homeDate = year + "." + (month < 10 ? "0" + month : month) + "." + day + " " + " " + (hour < 10 ? "0" +
          hour : hour) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (second < 10 ? "0" + second :
          second) + "" + (week[date.getDay()] || "");
      }
    },
    mounted() {
      $vueIndex = this;
      this.showTime();
      this.timer = setInterval(function () {
        $vueIndex.showTime();
      }, 1000);
    },
    destroyed() {
      // vue销毁的时候清除定时器
      if (this.timer) {
        clearInterval(this.timer);
      }
    },
    computed: {
      ...mapState({
        isCollapsed: state => state.MenuStore.isCollapsed
      })
    },
  }
</script>

<style lang="scss" scoped type="text/scss">
  @import url("../assets/css/home.css");
</style>