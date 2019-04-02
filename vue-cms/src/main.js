// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//导入vuex包
import Vuex from 'vuex'
Vue.use(Vuex) //注册vuex

//每次刚进入网站，肯定会调用main.js在刚调用的时候，先从本地存储中，把购物车的数据读出来，放到store中
var car=JSON.parse(localStorage.getItem('car')||'[]');
//创建new Vuex.Store()实例
var store=new Vuex.Store({
	state:{
		car:car//将购物车中是商品的数据，用一个数组存储起来，在car数组中，存储一些商品的对象，可以暂时将这个商品对象，设计成这个样子
		//{id:商品的id,count:要购买的数量,price:商品的单价,selected:false}
		

	},
	mutations:{ //this.$store.commit('方法的名称','按需传递唯一的参数')
		addToCar(state){
			//点击加入购物车，把商品信息，保存到store中的car上
			//分析：1.如果购物车中，之前就有这个对应商品了，那么，只需要更新数量
			//2.如果没有	，则直接把商品数据，push到car中即可

			//假设在购物车中，没有找到对应的商品
			var flag=false;
			state.car.some(item=>{
				if(item.id==goodsinfo.id){
					item.count+=parseInt(goodsinfo.count)
					return true;
				}
			})
			if(!flag){
				state.car.push(goodsinfo);
			}

			//当更新car之后，把car数组，存储到本地localStorage中
				localStorage.setItem('car',JSON.stringify(state.car));		
		},
		updateGoodsInfo(state,goodsinfo){
			//修改购物车中商品的数据
			state.car.some(item=>{
				if(item.id==goodsinfo.id){
					item.count=parseInt(goodsinfo.count);
					return true;
				}
			})
			//当修改完商品的数量，把最新的购物车数据 存储到本地localStorage中
			localStorage.setItem('car',JSON.stringify(state.car));	
		},
		removeFormCar(state,id){
			//根据id，从store中的购物车中删除对应的那条商品数据
			state.car.some((item,i)=>{
				if(item.id==id){
					state.car.splice(i,1);
					return true;
				}
			})
			//当删除完商品的数量，把最新的购物车数据 同步到本地存储
			localStorage.setItem('car',JSON.stringify(state.car));	
		},
		updateGoodsSelected(state,info){
			state.car.some(item=>{
				if(item.id==info.id){
					item.selected=info.selected;
					return true;
				}
			})
			localStorage.setItem('car',JSON.stringify(state.car));
		}
	},
	getters:{ //this.$store.getters.***
		getAllCount(state){
			var c=0;
			state.car.forEach(item=>{
				c+=item.count;
			})
			return c;
		},
		getGoodsCount(state){
			var o={};
			state.car.forEach(item=>{
				o[item.id]=item.count;
			})
			return o;
		},
		getGoodsSelected(state){
			var o={};
			state.car.forEach(item=>{
				o[item.id]=item.selected;
			})
			return o;
		},
		getGoodsCountAndAmount(state){
			var o={count:0, //勾选的数量
				amount:0} //勾选的总价

			state.car.forEach(item=>{
				if(item.selected){
					o.count+=item.count;
					o.amount+=item.price*item.count;
				}
			})
			return o;
		}
	}
})

//导入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//导入mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
//设置请求的根路径
//Vue.http.options.root = 'http://vue.studyit.io'

//导入格式化时间的插件
import moment from 'moment'
//定义全局过滤器
Vue.filter('dataFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
	return moment(dataStr).format(pattern)
})

//全局设置post 时候表单数据组织形式
Vue.http.options.emulateJSON = true;



Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //挂载路由对象到vm实例上
  store, //挂载store实例
  components: { App },
  template: '<App/>'
})
