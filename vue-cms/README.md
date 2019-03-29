# vue-cms

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 制作首页APP组件
1.完成Header 区域，使用的是Mint-UI中的Header组件
2.制作底部的Tabber区域，使用的是MUI的Tabbar.html
	+在制作购物车小图标时，操作会相当对一些：
	+先把扩展图标的css样式，拷贝到项目中
	+拷贝扩展字体库 ttf 文件，到项目中
	+为购物车下图标，添加如下样式`mui-icon mui-icon-extra mui-icon-extra-cart`
3.要在 中间区域放置一个 router-view 来展示路由匹配到的组件


## 改造 tabber 为 router-link

## 设置路由高亮

## 点击 tabber 中的路由链接，展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1.获取数据，如何获取呢，使用vue-resource
2.使用vue-resource 的this.$http.get获取数据
3.获取到的数据，要保存到 data 身上
4.使用 v-for 循环渲染每个 item 项

## 改造九宫格区域的样式

## 改造新闻资讯路由链接

## 新闻资讯页面制作
1.绘制界面，使用  MUI 中的 media-list.html
2.使用 vue-resource 获取数据
3.渲染真实数据

## 实现 新闻资讯列表 点击跳转到新闻详情
1.把列表中的每一项改造为 router-link,同时，在跳转的时候应该提供唯一的ID标识符
2.创建新闻详情的组件页面 NewsInfo.vue
3.在路由模块中，将新闻详情的 路由地址 和 组件页面对应起来

## 实现 新闻详情 的页面布局 和数据渲染

## 单独封装一个 comment.vue 评论子组件
1.先创建一个单独的 comment.vue 组件模板
2.在需要使用 comment 组件的页面中，先手动导入 comment 组件
	+`import comment from './comment.vue'`
3.在父组件中，使用`components`属性，将刚才导入 comment组件，注册为自己的子组件
4.将注册子组件时候的，注册名称，以标签形式，在页面中引入即可

## 获取所有的评论数据显示到页面中

## 实现点击加载更多评论的功能
1.为加载更多按钮，绑定点击事件，在事件中，请求下一页数据
2.点击加载更多，让 pageindex++，然后重新调用 this.getComments()方法重新获取最新一页的数据
3.为了防止新数据 覆盖老数据的情况，我们在点击加载更多的时候，每当获取到新数据，应该让 老数据 调用 数组的 concat 方法，拼接上新数组

## 发表评论
1.把文本框做双向数据绑定
2.为发表按钮绑定一个事件
3.校验评论内容是否为空，如果为空，则Toast提示用户 评论内容不能为空
4.通过 vue-resource 发送一个请求，把评论内容提交给 服务器
5.当发表评论OK后，重新刷新列表，以查看最新的评论
 +如果调用 getComments 方法重新刷新评论列表的话，可能只能得到最后一页的评论，前几页的评论获取不到
 +换一种思路：当评论成功后，在客户端，手动拼接出一个最新的评论对象，然后调用数组的 unshift 方法，把最新的评论，追加到data中comments的开头；这样，就能完美实现刷新评论列表的需求


 ## 尝试在手机上 去进行项目的预览和测试
 1.要保证自己的手机可以正常运行
 2.要保证 手机 和 开发项目的电脑 处于同一个 WIFI环境中，也就是说 手机可以访问电脑 的IP
 3.打开自己的 项目中 package.json 文件，在dev脚本中，添加一个 --host 指令，把当前电脑的 WIFI IP地址，设置为 --host的指令值
 	+如何查看自己电脑所处 WIFI 的IP呢，在cmd 终端中运行 `ipconfig`,查看无线网的 ip地址