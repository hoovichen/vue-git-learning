<template>
    <div>
        <el-menu :default-active="$route.path" class="menu-bar" :collapse="isCollapse" :unique-opened="true">
            <menu-item :menuList="menuList"></menu-item>
        </el-menu>
    </div>
</template>

<script>
    import MenuItem from './MenuItem.vue';

    import {
        mapState
    } from "vuex";

    export default {
        name: 'MenuBar',
        components: {
            MenuItem,
        },
        data() {
            return {
                // 菜单数据
                menuList: [{
                    children: [{
                        children: [],
                        code: "sys:acc",
                        icon: "el-icon-s-data",
                        id: 36,
                        isHome: 0,
                        label: "会计",
                        name: "accountingList",
                        orderNum: 1,
                        parentId: 34,
                        path: "/accountingList",
                        type: "1",
                        url: "/system/Accounting/AccountingList"
                    }, ],
                    code: "sys:main",
                    icon: "el-icon-copy-document",
                    id: 33,
                    isHome: 0,
                    label: "功能管理",
                    name: "about",
                    orderNum: 2,
                    parentId: 17,
                    path: "/about",
                    remark: "功能管理",
                    type: "1",
                    url: "/AboutView"
                }, ],
               
            }
        },
        computed: {
            ...mapState({
                // 收缩属性
                isCollapse: state => state.MenuStore.isCollapse,
                
            })
        },

    }
</script>

<style lang="scss" scoped>
    @import url("../assets/css/menuBar.css")
</style>