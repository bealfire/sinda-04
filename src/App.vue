<template>
  <div id="app">
    <top></top>
    <router-view/>
    <bottom></bottom>
  </div>
</template>

<script>
import top from './components/top';
import bottom from './components/bottom';
export default {
  name: 'app',
  /**@augments
   * 需要在当前组件里注册（添加进来），
   * 然后就可以使用自定义标签里。
   */
  components:{top,bottom}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
