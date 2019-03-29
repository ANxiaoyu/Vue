<template>
  <div id="app">
    
    <!--顶部Header区域-->
    <mt-header fixed title="宋民国"></mt-header>


    <!--中间 路由router-view区域-->
    <transition>
    <router-view></router-view>
    </transition>

     <!--底部 Tabber 区域-->
     <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item " to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">{{$store.getters.getAllCount}}</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align:left;
  color: #2c3e50;
  margin-top:40px;
  overflow-x: hidden;
  padding-bottom:50px;
}

.v-enter{
  opacity:0;
  transform:translateX(100%);
}
.v-leave-to{
  opacity:0;
  transform:translateX(-100%);
  position:absolute;
}

.v-enter-active,
.v-leave-active{
  transition:all 0.5s ease;
}
</style>
