<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  watch:{
			$route:{
				deep: true,
				immediate:true,
				handler:function(value){
					let vm = this
					if(value.path == '/first' || value.path == '/home'){
						var first = null;
						mui.back = function() {
							if (!first) {
								first = new Date().getTime();
								mui.toast('再按一次退出应用');
								setTimeout(function() {
									first = null;
								}, 1000);
							} else {
								if (new Date().getTime() - first < 1000) {
									plus.runtime.quit();
								}
							}
						}
					}else{
						mui.back = function(){
							vm.$router.go(-1)
						}
					}
				}
			}
		}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
