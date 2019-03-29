import Vue from 'vue'
import Router from 'vue-router'


//导入路由组件
import HomeContainer from '@/components/tabber/HomeContainer'
import MemberContainer from '@/components/tabber/MemberContainer'
import ShopcarContainer from '@/components/tabber/ShopcarContainer'
import SearchContainer from '@/components/tabber/SearchContainer'
import NewsList from '@/components/news/NewsList'
import NewsInfo from '@/components/news/NewsInfo'
import PhotoList from '@/components/photolist/PhotoList'
//import PhotoInfo from '@/components/photolist/PhotoInfo'
import GoodsList from '@/components/goods/GoodsList'
import GoodsInfo from '@/components/goods/GoodsInfo'
import GoodsDesc from '@/components/goods/GoodsDesc'
import GoodsComment from '@/components/goods/GoodsComment'

Vue.use(Router)

export default new Router({
  routes: [ //配置路由规则
  {path:'/',redirect:'/home'},
  {path:'/home',component:HomeContainer},
  {path:'/member',component:MemberContainer},
  {path:'/shopcar',component:ShopcarContainer},
  {path:'/search',component:SearchContainer},
  {path:'/home/newslist',component:NewsList},
  {path:'/home/newsinfo/:id',component:NewsInfo},
  {path:'/home/photolist',component:PhotoList},
  //{path:'/home/photoinfo/:id',component:PhotoInfo},
  {path:'/home/goodslist',component:GoodsList},
  {path:'/home/goodsinfo/:id',component:GoodsInfo},
  {path:'/home/goodsdesc/:id',component:GoodsDesc,name:'goodsdesc'},
  {path:'/home/goodscomment/:id',component:GoodsComment,name:'goodscomment'}
  ],
 linkActiveClass:'mui-active'  //覆盖默认的路由高亮的类，默认的类叫做router-link-active
})
