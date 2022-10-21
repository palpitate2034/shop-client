<template>
    <div class="home">
        <TypeNav></TypeNav>
        <ListContainer></ListContainer>
        <TodayRecommend></TodayRecommend>
        <Rank></Rank>
        <Like></Like>
        <Floor v-for="floor in floors" :key="floor.id" :floor="floor"></Floor>
        <Brand></Brand>
    </div>

</template>

<script>
import { mapState } from "vuex";
import ListContainer from './ListContainer/index.vue';
import TodayRecommend from './TodayRecommend';
import Rank from './Rank';
import Like from './Like';
import Floor from './Floor';
import Brand from './Brand';

/* 
1.dispatch()触发请求的异步action调用    ==>     数据从后台接口请求到vuex的state中
2.store.state / mapState() 读取vuex的state中的数据  ==>  数据从state到组件的computed
3.在模板中动态显示
*/

export default {
    name: "Home",

    mounted() {
        this.$store.dispatch('getRecommends')
        this.$store.dispatch('getFloors')

    },

    computed: {
        ...mapState({
            floors: state => state.home.floors
        })
    },
    components: { ListContainer, TodayRecommend, Rank, Like, Floor, Brand },
}
</script>

<style lang="less" scoped>

</style>
