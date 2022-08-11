<template >
    <el-tabs v-model="editableTabsValue" type="card" closable @tab-click="tabClick"
        @tab-remove="removeTab">
        <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
            {{item.content}}
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name: 'TabBar',
        computed: {
            ...mapState({
                // tabs 选项卡数据
                editableTabs: state => state.MenuStore.tabs,
                // 当前激活的选项卡
                editableTabsValue: state => state.MenuStore.editableTabsValue
            })
        },
        data() {
            return {

            };
        },
        methods: {
            removeTab(targetName) {
                /*
                // 首页不能关闭
                if (targetName === "frontPage") {
                    return;
                }
                */
                let tabs = this.editableTabs;
                // 激活的页面
                let activeName = this.editableTabsValue;
                if (activeName === targetName) {
                    tabs.forEach((tab, index) => {
                        if (tab.name === targetName) {
                            let nextTab = tabs[index + 1] || tabs[index - 1];
                            if (nextTab) {
                                activeName = nextTab.name;
                            }
                        }
                    });
                }
                this.editableTabsValue = activeName;
                this.editableTabs = tabs.filter(tab => tab.name !== targetName);
                // 存储当前打开的选项卡
                sessionStorage.setItem('tabsList', JSON.stringify(this.editableTabs));
                // 存储当前激活的选项卡
                this.$store.commit('setActiveTabs', this.editableTabsValue);
                // 显示路由
                this.$router.push({
                    name: this.editableTabsValue
                });
            },

            tabClick(tab) {
                let obj = {};
                if (tab.name === "frontPage") {
                    obj.label = "首页";
                } else {
                    obj.label = tab.label;
                }
                obj.name = tab.name;
                this.$store.commit("selectMenu", obj);
                this.$router.push({
                    name: tab.name
                });
            }

        },
    }
</script>


<style lang="scss" scoped>

</style>