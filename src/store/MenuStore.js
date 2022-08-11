import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default{
    state: {
        editableTabsValue: "frontPage",
        tabs: [{
            title: "首页",
            name: "frontPage"
        }, ],
        menu_data: [],
        // 伸缩属性
        isCollapse: false
    },
    getters: {

    },
    mutations: {
         // 切换属性
         setOpenOrClose(state) {
            state.isCollapse = !state.isCollapse;
        },
        selectMenu(state, val) {
            console.log(val);
            // 点击对象传递到tabs
            let res = state.tabs.findIndex(item => item.name === val.name);
            // 判断tabs是否不存在
            if (res === -1) {
                let obj = {};
                obj.title = val.label;
                obj.name = val.name;
                // 加入tabs
                state.tabs.push(obj);
            }
            // 当前选中对象
            state.editableTabsValue = val.name;
            // 当前打开的选项卡
            sessionStorage.setItem('tabsList')
        },
        // 设置单选中的选项卡
        getTabs(state) {
            let tabs = sessionStorage.getItem('tabsList');
            if (tabs) {
                state.tabs = JSON.parse(tabs);
            }
        },
         // 设置当前激活的选项卡
         setActiveTabs(state, val) {
            state.editableTabsValue = val;
        },
        // 获取菜单数据和生成路由
        getMenuList(state, router) {
            // 取出菜单数据
            let menuList = sessionStorage.getItem('menuList');
            // 设置菜单数据
            if (menuList) {
                state.menu_data = JSON.parse(menuList);
            }
            // 取出路由数据
            let oldrouterList = sessionStorage.getItem('routerList');
            let routerList = [];
            if (oldrouterList) {
                routerList = JSON.parse(oldrouterList);
            }

            // 动态生成路由
            // 获取原来路由
            let oldRouter = router.options.routes;
            // 遍历后台返回路由数据，动态生成路由
            routerList.forEach(item => {
                item.component = () => import(`@/view${item.url}.vue`);
                oldRouter[1].children.push(item);
            });
            // 添加到现有路由里面
            router.addRoutes(oldRouter);
        },
       

    },
    actions: {

    },
    modules: {

    }
}