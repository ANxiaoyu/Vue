<template>
	<div>
		<mt-swipe :auto="4000">
  			<mt-swipe-item v-for="item in lunbotuList" :key="item.img">
				<img :src="item.img" alt="">
  			</mt-swipe-item>
  			
		</mt-swipe>

		<ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		    	<router-link to="/home/newslist">
		        <img src="@/assets/menu1.png" alt="">
		        <div class="mui-media-body">新闻资讯</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		    	<router-link to="/home/photolist">
            	<img src="@/assets/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            	<router-link to="/home/goodslist">
               <img src="../../assets/menu3.png" alt="">
            	<div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../assets/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../assets/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
               <img src="../../assets/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></a></li>
            
        </ul> 
		
	</div>
</template>

<script>
import {Toast} from 'mint-ui';
export default{
	data(){
		return{
			lunbotuList:[] //保存轮播图
		}
	},
	created(){
		this.getLunbotu();
	},
	methods:{
		getLunbotu(){
			//获取轮播图数据的方法
			this.$http.get("http://www.liulongbin.top:3005/api/getlunbo").then(result=>{
				if(result.body.status===0){
					this.lunbotuList=result.body.message;
				}else{
					Toast('加载失败');
				}
			})
		}
	}
}	
</script>

<style scoped>
.mint-swipe{
	height:200px;
}
.mint-swipe-item:nth-child(1){
	background-color:#FF7F50;
}
.mint-swipe-item:nth-child(2){
	background-color:#DEB887;
}
.mint-swipe-item:nth-child(3){
	background-color:#6495ED;
}
.mint-swipe-item img{
	width:100%;
	height:100%;
}
.mui-grid-view.mui-grid-9 .mui-media{
	background-color:#fff;
	border:none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
	border:none;
}
.mui-grid-view.mui-grid-9 .mui-media img{
	width:60px;
	height:60px;
}
.mui-media-body{
	font-size:12px;
}
</style>