<template>
	<div class="newsinfo-container">
		<!--大标题-->
		<h3 class="title">{{newsinfo.title}}</h3>
		<p class="subtitle">
			<span>发布时间:{{newsinfo.add_time | dataFormat}}</span>
			<span>点击:{{newsinfo.click}}次</span>
		</p>
		<hr>
		<!--内容-->
		<div class="content" v-html="newsinfo.content">
			
		</div>
		<!--评论-->
		<comment :id=this.id></comment>
	</div>
</template>

<script>
import comment from '../subcomponents/comment'
import {Toast} from 'mint-ui'
export default{
	data(){
		return{
			id:this.$route.params.id, //将URL地址中传递过来的 id值，挂载到 data上方便以后调用
			newsinfo:{}
		}
	},
	created(){
		this.getNewsInfo();
	},
	methods:{
		getNewsInfo(){//获取新闻详情
			this.$http.get('http://www.liulongbin.top:3005/api/getnew/'+this.id).then(result=>{
				if(result.body.status===0){
					this.newsinfo=result.body.message[0];
				}else{
					Toast('获取新闻详情失败！');
				}
			})
		}
	},
	components:{
		comment
	}
}	
</script>

<style >
.newsinfo-container{
	padding:0 4px;
}
.title{
	color:red;
	font-size:16px;
	text-align: center;
	margin:15px 0;
}	
.subtitle{
	font-size:13px;
	color:#226aff;
	display:flex;
	justify-content:space-between;
}
.content img{
	width:100%;
}
</style>