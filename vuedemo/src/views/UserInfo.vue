<template>
  <div class="hello">
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
