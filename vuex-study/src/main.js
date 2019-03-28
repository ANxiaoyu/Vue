// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//配置vuex
//运行npm install vuex --save
//导入包
import Vuex from 'vuex'
//注册vuex到vue中
Vue.use(Vuex)
//new Vuex.Store()实例，得到一个数据仓库对象
var store=new Vuex.Store({
	state:{ //存储数据，相当于data
		//在组件中，想要访问 store 中的数据，只能通过 this.$store.state.***来访问
		count:0
	},
	mutations:{ //相当于methods
		//注意：如果要操作store中的 state值，只能通过 调用mutations提供的方法，才能操作对应的数据，不推荐直接操作state中的数据，因为 万一导致了数据的紊乱，不能快速定位到错误的原因。因为，每个组件都有可能有操作数据的方法；
		increated(state){
			state.count++;
		},
		//注意：如果组件想要调用mutations中的方法，只能使用this.$sotre.commit('方法名')
		//这种调用mutations方法的格式，和this.$emit('父组件中方法名')
		subtract(state,c){
			//注意：mutations的函数参数列表中，最多支持两个参数，其中，参数1：是state状态；参数2：通过commit提交过来的参数
			state.count-=c;
		}
	},
	getters:{
		//注意：这里的getters，只负责对外提供数据，不负责修改数据，如果想要修改state中的数据，请去找mutations

		optCount:function(state){
			return '当前数量count为:'+state.count;
		}
		//经过回顾对比，发现getters中的方法，和组件中的过滤器比较类似，因为 过滤器和getters都没有修改原数据，都是把原数据做了一层包装，提供给了调用者；
		//其次，getters也和computed比较像，只要state中的数据发生变化了，那么，如果getters正好也引用了这个数据，那么 就会立即触发getters的重新求值；
	} 


	//总结：
	//1.state中的数据，不能直接修改，如果想要修改，必须通过mutations
	//2.如果组件想要直接从state上获取数据；需要 this.$store.state.***
	//3.如果组件，想要修改数据，必须使用mutations提供的方法，需要通过 this.$store.commit('方法的名称'，唯一的一个参数)
	//4.如果store中state上的数据，在对外提供的时候，需要做一层包装，那么，推荐使用getters，如果需要使用getters，则用 this.$store.getters.***
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //将vuex创建的仓库挂载到vue实例上
  components: { App },
  template: '<App/>'
})
