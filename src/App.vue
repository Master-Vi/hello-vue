<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

  export default {
    name: 'App',
    mounted() {
      // vuex页面刷新数据丢失的解决办法,下面这个()=>是大坑，不加不得行
      // 通过 store.state.myModule 访问模块的状态，会自动指向state常量里的对象。
      window.addEventListener("unload", () => {sessionStorage.setItem('state', JSON.stringify(this.$store.state.user))})
    }
  }
</script>
