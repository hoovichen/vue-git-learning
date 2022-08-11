<template>
    <!-- fragment是为了收缩后只显示图标，隐藏字符串 -->
    <fragment>
        <!-- 循环读取传入 menuList 的菜单数据内容 -->
        <template v-for="menu in menuList">
            <!-- 若有子菜单则展开 -->
            <el-submenu v-if='menu.children.length>0' :index="menu.path" :key='menu.path'>
                <template slot="title">
                    <i :class="menu.icon"></i>
                    <span class="menuFont" slot="title">{{menu.label}}</span>
                </template>
                <!--循环调用子菜单-->
                <menu-item :menuList='menu.children'></menu-item>
            </el-submenu>
            <!-- vue2.x 需要绑定key 要不然会报错 -->
            <el-menu-item @click="selectMenu(menu)" v-else :index="menu.path" :key='menu.path+1'>
                <i :class="menu.icon"></i>
                <span class="menuFont" slot="title">{{menu.label}}</span>
            </el-menu-item>
        </template>
    </fragment>
</template>

<script>
    import MenuItem from './MenuItem.vue'
    //@isanaliasto/src
    export default {
        name: 'MenuItem',
        props: ['menuList'],
        components: {
            MenuItem,
        },
        methods: {
            selectMenu(item) {
                // console.log(item);
                //设置选项卡
                this.$store.commit('selectMenu', item);
                //设置路由
                this.$router.push({
                    name: item.name
                });
                this.$router.push(item.name);
            }

        },
    }
</script>
<style lang="scss" scoped>
    .menuFont {
        font-size: 15px;
        font-weight: 600px;
    }
</style>