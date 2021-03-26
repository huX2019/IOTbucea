<template>
  <div id="app">
    <!--路由站位符-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*去掉百度地图logo*/
.BMap_cpyCtrl,.anchorBL {
  display: none;
}
</style>
