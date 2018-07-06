<template>
    <div class="home">
        <h4>这是主页</h4>
        <p @click="goFirst">点击跳转</p>
    </div>
</template>

<script>
// import mui from 'mui'
export default {
    name:'home',
    data(){
        return {

        }
    },
    mounted(){  
        console.log(mui)
    },
    methods:{
        goFirst(){
            this.$router.push('first')
        }
    }
}
</script>
<style>

</style>


