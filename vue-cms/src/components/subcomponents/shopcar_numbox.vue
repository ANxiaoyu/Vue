<template>

	<div class="mui-numbox" data-numbox-min='1' style="height:25px">
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
		<input id="test" class="mui-input-numbox" type="number" :value="initcount" @change="countChanged" ref="goodsinfo_numbox" readonly />
		<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>

	<!--分析：子组件什么时候把数据传给父组件-->
</template>

<script>
//import mui from '../../lib/mui/js/mui.min.js'
export default{
	
	mounted(){
		//初始化数字选择框组件
		mui(".mui-numbox").numbox();
	},
	methods:{
		countChanged(){
		 //数量改变
		 //每当数量值改变，则立即把最新的数量同步到 购物车的 store中，覆盖之前的数量值
		 this.$store.commit("updateGoodsInfo",{
		 	id:this.goodsid,
		 	count:this.$refs.goodsinfo_numbox.value
		 })	
		}
	},
	props:["initcount","goodsid"]
	
}
</script>

<style scoped>
	
</style>