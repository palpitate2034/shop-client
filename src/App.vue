<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHideFooter"></Footer>
    <!-- v-show="$route.path!='/login' && $route.path!='/register'" -->
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// import { getCategoryList } from './api';
export default {
  name: "App",

  mounted() {
    // 异步获取三级分类列表
    // getCategoryList().then(res => {
    //   console.log('res', res);
    // })

    this.$store.dispatch('getCategoryList');
    this.$store.dispatch('getBannerList');

  },

  components: { Header, Footer }
}
</script>

<style lang="less" scoped>

</style>

