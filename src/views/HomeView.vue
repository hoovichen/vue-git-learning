<template>
    <!-- 划分区域 -->
    <el-container class="home" >
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

      <el-container >
        <el-aside width="auto" >
          <!-- Aside content 菜单栏 靠左 -->
          <menu-bar></menu-bar>
        </el-aside>

        <el-container >
          <el-main style="padding :0; ">
            <!-- Main content 主要的页面内容 -->
            <div class="arrow-icon" :class="[isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']" @click="arrowBtn"></div>

            <!-- 页面显示 会覆盖收缩图标导致图标无法点击-->
            <tab-bar></tab-bar>
            <router-view></router-view>

          </el-main>

          <el-footer class="footer ub main-center cross-center" >
            <!-- Footer content 底部的信息-->
            @Copyright: FDGE 
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  import MenuBar from "../components/MenuBar.vue";
  import TabBar from "../components/TabBar.vue";
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
      MenuBar,
      TabBar

    },
    methods: {
      // 伸缩事件
      arrowBtn() {
        // 调用属性切换
        this.$store.commit('setOpenOrClose');
        // console.log("arrowBtn");
      },
      // 时间
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
    // 生命周期勾子函数，这里主要来调用显示时间的方法
    mounted() {
      $vueIndex = this;
      this.showTime();
      this.timer = setInterval(function () {
        $vueIndex.showTime();
      }, 1000);
    },
    // 结束周期的摧毁阶段
    destroyed() {
      // vue销毁的时候清除定时器
      if (this.timer) {
        clearInterval(this.timer);
      }
    },
    
    computed: {
      ...mapState({
        isCollapse: (state) => state.MenuStore.isCollapse,
      }),
    },
  }
</script>

<style lang="scss" scoped type="text/scss">
  @import url("../assets/css/home.css");
</style>