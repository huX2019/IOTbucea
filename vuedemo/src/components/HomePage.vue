<template>
  <el-container>
    <el-header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
               background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-row>
          <el-col :xs="8" :sm="6" :md="4" :lg="16" :xl="1">
            <div style="float: left;padding-left: 10px;line-height: 56px;color: white">异构数据信息集成</div>
          </el-col>
          <el-col :xs="4" :sm="6" :md="8" :lg="3" :xl="11">
            <el-submenu index="1">
              <template slot="title">监测站点</template>
              <el-submenu index="1-1">
                <template slot="title">广阳谷城市森林公园</template>
                <el-menu-item index="1-1-1">1号点位</el-menu-item>
                <el-menu-item index="1-1-2">2号点位</el-menu-item>
                <el-menu-item index="1-1-3">3号点位</el-menu-item>
              </el-submenu>
              <el-submenu index="1-2">
                <template slot="title">新街口城市森林公园</template>
                <el-menu-item index="1-2-1">1号点位</el-menu-item>
                <el-menu-item index="1-2-2">2号点位</el-menu-item>
                <el-menu-item index="1-2-3">3号点位</el-menu-item>
              </el-submenu>
              <el-submenu index="1-3">
                <template slot="title">北护城河沿岸绿地</template>
                <el-menu-item index="1-3-1">1号点位</el-menu-item>
                <el-menu-item index="1-3-2">2号点位</el-menu-item>
                <el-menu-item index="1-3-3">3号点位</el-menu-item>
                <el-menu-item index="1-3-3">4号点位</el-menu-item>
                <el-menu-item index="1-3-3">5号点位</el-menu-item>
                <el-menu-item index="1-3-3">6号点位</el-menu-item>
                <el-menu-item index="1-3-3">7号点位</el-menu-item>
                <el-menu-item index="1-3-3">8号点位</el-menu-item>
              </el-submenu>
              <el-submenu index="1-4">
                <template slot="title">南护城河沿岸绿地</template>
                <el-menu-item index="1-4-1">1号点位</el-menu-item>
                <el-menu-item index="1-4-1">2号点位</el-menu-item>
                <el-menu-item index="1-4-1">3号点位</el-menu-item>
                <el-menu-item index="1-4-1">4号点位</el-menu-item>
                <el-menu-item index="1-4-1">5号点位</el-menu-item>
                <el-menu-item index="1-4-1">6号点位</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-col>
          <el-col :xs="4" :sm="6" :md="8" :lg="3" :xl="11">
            <el-menu-item index="3">消息中心</el-menu-item>
          </el-col>
          <el-col :xs="8" :sm="6" :md="4" :lg="2" :xl="1">
            <el-menu-item index="4">
              <router-link  :to="{path:'/'}" style="color: white;text-decoration: none">
                登出
              </router-link>
            </el-menu-item>
          </el-col>
        </el-row>
      </el-menu>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-main>Main</el-main>
        <!--<el-footer>Footer</el-footer>-->
      </el-container>
    </el-container>
  </el-container>

</template>
<script>
  export default {
    name: 'HomePage',
    data() {

      return {
        activeIndex: '1',
      }
    },
    mounted: function () {

    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .el-header, .el-footer {
  / / background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: red;
    text-align: center;
    line-height: 400px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-col {
    border-radius: 4px;
  }
</style>
