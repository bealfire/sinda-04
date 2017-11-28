// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/**
 * 项目起始点 
 */

// 把vue模块引入
import Vue from 'vue'
// 加载.vue文件，生成一个js对象
import App from './App'
// vue路由实例化对象 ，配置了所有路由规则
import router from './router'

Vue.config.productionTip = false;
// 关掉vue自动提示
Vue.config.devtools = false;
/* eslint-disable no-new */

/**
 * 创建vue实例
 */
new Vue({
  /**
   * 用<App/>代替#app
   */
  el: '#app',
  router,
  template: '<App/>',
  // 组件集合
  components: {
    // js变量，从app组件中来
    App
  }
})


// console.log(a);

// let a = 1;
// console.log('hello es6');


/**
 * 代码执行到new Promise，里面代码同步执行
 * 
 * 1 2 4 3
 */


/**
 * macro 队列 micro队列，
 * 线程第一次去执行macro队列（例如主线程）
 * setTimeout放入macro队列。主线程执行完后，将function放入setTimeout中，
 * promise.then放入micro队列
 * 执行一次macro，然后执行所有的micro队列，然后执行其余macro队列
 */

//  // 1 2 4 3 5   promise优先级比setTimeout高
// setTimeout(() => {
//   console.log(5);
// }, 0);

// var promise = new Promise(function (resolve, project) {
//   console.log(1);
//   /**
//    * 异步的地方
//    * resolve不会立即执行，只会放入任务队列中
//    * 代码会继续向下执行
//    */
//   resolve();
//   console.log(2);
// });
// promise.then(function () {
//   console.log(3)
// });
// console.log(4);


/**
 * 2 1
 * 
 * 先执行主任务console.log(2)，后执行任务队列里的console.log(1)
 * 和Promise类似
 */
// setTimeout(() => {
//   console.log(1);
// }, 0);

// console.log(2)

// 只有运行到此处时才能检测到mode，如果错误的话上面的正常运行，到达此处才会报错
// require('./mode');



/**
 * es6引用方法,
 * 用解构赋值方法，相当于获取了{b:2}
 */
// import {b,d} from './mode';
/**
 * 不用结构赋值只能如下方法获取
 */
// import * as b from './mode';
// console.log(b);//2

/**
 * 暴露变量，就可以如此获取变量
 * 
 * 用b接收a
 */
// import b from './mode';

// console.log(b);//2






