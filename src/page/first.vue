<template>
    <div class="first">
        <p v-if="!$.isApp" @click="goBack">假装我是返回按钮</p>
        <p>这是第一个子页</p>
        <p @click="toast">点击mui的toast</p>
        <p @click="goSecond">跳转第二个子页</p>
        <p v-if="$.isApp">只在手机运行的时候显示</p>
    </div>
</template>

<script>
export default {
    name:'first',
    data(){
        return {

        }
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        },
        toast(){
            mui.toast('mui.toast')
        },
        goSecond(){
            this.$router.push('second')
        }
    }
}
</script>
<style>

</style>