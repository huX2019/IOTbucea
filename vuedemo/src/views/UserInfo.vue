<template>
  <div class="hello" style="text-align: center;line-height: 500px">
    <router-link :to="{path:'/HomePage'}">
      <el-button type="success">退出</el-button>
    </router-link>
  </div>
</template>

<script>


  export default {
    name: "UserInfo",
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
