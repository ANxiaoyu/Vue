import Vue from 'vue'
import Router from 'vue-router'
import Counter from '@/components/counter.vue'
import Amount from '@/components/amount.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:Counter},
    {path:'/',component:Amount}
  ]
})
