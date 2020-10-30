<template>
  <!--不用props的方式-->
  <!--<div>UserInfo ID: {{$route.params.id}}</div>-->
  <!--用props的方式-->
  <div>UserInfo ID: {{id}}</div>
</template>

<script>
  export default {
    // 用props的方式
    props: ['id'],
    name: "UserInfo",
    beforeRouteEnter: (to, from, next) => {
      alert("准备进入个人信息");
      next(vm => {
        vm.getData()
      })
    },
    beforeRouteLeave: (to, from, next) => {
      alert("准备离开个人信息");
      next()
    },
    methods: {
      getData() {
        this.axios({
          method: 'GET',
          url: 'http://localhost:8080/axios.html'
        }).then(res => {
          this.$message.success("axios访问成功")
        }).catch(res => {
          this.$message.error("axios访问失败,存在跨域问题")
        });
      }
    }
  }
</script>

<style scoped>

</style>
