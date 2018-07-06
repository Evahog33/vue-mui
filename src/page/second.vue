<template>
    <div class="second">
        <p @click="goBack">假装我是返回按钮</p>
        <p>这个是第二个子页</p>
        <p v-if="$.isApp" @click="Photograph">点击拍照</p>
        <img v-if="imgSrc" :src="imgSrc" alt="">
    </div>
</template>

<script>
import getImage from '../tools/getImage.js'
export default {
    name:'second',
    data(){
        return {
            imgSrc:''
        }
    },
    mounted(){
        mui.plusReady(()=>{
            console.log('plus加载完成')
            console.log(JSON.stringify(plus))
        })
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        },
        Photograph(){
            getImage(res=>{
                this.imgSrc = res
            })
        }
    }
}
</script>
<style>
.second img{
    width: 90%;
    margin:20px 5%;
}
</style>