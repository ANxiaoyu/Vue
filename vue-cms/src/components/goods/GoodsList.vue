<template>
	<div class="goods-list">
		<!--<router-link class="goods-item" v-for="item in goodslist" :key="item.id" :to="'/home/goodsinfo/'+item.id" tag="div">
			<img :src="item.img_url" alt="">
			<h1 class="title">{{item.title}}</h1>
			<div class="info">
				<p class="price">
					<span class="now">￥{{item.sell_price}}</span>
					<span class="old">￥{{item.market_price}}</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩{{item.stock_quantity}}件</span>
				</p>
			</div>
		</router-link>-->
		

		<!--在网页中，有两种跳转方式(vue-router)：-->
		<!--方式1：使用a标签的形式叫做 标签跳转-->
		<!--方式2：使用 window.location.href 的形式，叫做编程式导航-->
		<div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
			<img :src="item.img_url" alt="">
			<h1 class="title">{{item.title}}</h1>
			<div class="info">
				<p class="price">
					<span class="now">￥{{item.sell_price}}</span>
					<span class="old">￥{{item.market_price}}</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩{{item.stock_quantity}}件</span>
				</p>
			</div>
		</div>

		<div class="goods-item">
			<img src="//img13.360buyimg.com/n7/jfs/t18823/345/1228699666/162056/c7975289/5ac1c2a1Nbc6ba0c2.jpg" alt="">
			<h1 class="title">HUAWEI P20 AI智慧徕卡双摄全面屏游戏6GB+64GB 极光色 全网通移动联通电信4G</h1>
			<div class="info">
				<p class="price">
					<span class="now">￥4300</span>
					<span class="old">￥3288</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩100件</span>
				</p>
			</div>
		</div>


		<div class="goods-item">
			<img src="//img12.360buyimg.com/n7/jfs/t1/4528/10/3590/153299/5b997bf5E4a513949/45ab3dd6c35d981b.jpg" alt="">
			<h1 class="title">Apple iPhone XS Max (A2104) 256GB 金色 移动联通电信4G手机 双卡双待</h1>
			<div class="info">
				<p class="price">
					<span class="now">￥8299</span>
					<span class="old">￥8299</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩100件</span>
				</p>
			</div>
		</div>

		<mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
	</div>
	
</template>

<script>

export default{
	data(){
		return{
			pageindex:1, //分页的页数
			goodslist:[]
		}
	},
	created(){
		this.getGoodsList();
	},
	methods:{
		getGoodsList(){
			//获取物品列表
			this.$http.get('http://www.liulongbin.top:3005/api/getgoods?pageindex='+this.pageindex).then(result=>{
				if(result.body.status===0){
					//this.goodslist=result.body.message;
					this.goodslist=this.goodslist.concat(result.body.message);
				}else{
					Toast('获取失败！');
				}
			})
		},
		getMore(){
			this.pageindex++;
			this.getGoodsList();
		},
		goDetail(id){
			//使用js的形式进行路由导航

			//注意：一定要区分 this.$route 和 this.$router这两个对象
			//其中：this.$route是路由【参数对象】，所有路由中的参数，params,query都属于它
			//其中：this.$router是一个路由【导航对象】，用它可以方便的使用JS代码，实现路由的前进、后退、跳转到新的URL地址
			//console.log(this);
			this.$router.push('/home/goodsinfo/'+id);
		}
	}
	
}
</script>

<style scoped>
.goods-list{
	display:flex;
	flex-wrap: wrap;
	padding:7px;
	justify-content:space-between;
}
.goods-item{
	width:49%;
	border:1px solid #ccc;
	box-shadow:0 0 8px #ccc;
	margin:4px 0;
	padding:2px;
	display:flex;
	flex-direction:column;
	justify-content:space-between;
	min-height:293px;
}
img{
	width:100%;
}
.title{
	font-size:14px;
}
.info{
	background-color:#eee;
}
p{
	margin:0;
}
 .now{
	color:red;
	font-size:16px;
	font-weight:bold;
}
.old{
	text-decoration:line-through;
	font-size:12px;
	margin-left:10px;
}
.sell{
	display:flex;
	justify-content: space-between;
	font-size:12px;
	font-weight: bold;
}
</style>