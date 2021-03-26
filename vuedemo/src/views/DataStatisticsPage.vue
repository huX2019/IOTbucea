<template>
  <div class="homeBox">
    <el-container>
      <el-header height="80px">
        <el-row style="height: 80px;line-height: 80px;background-color: gray;color: white;">
          <el-col :xs="11" :sm="13" :md="16" :lg="16" :xl="17">
            <span style="float: left;padding-left: 80px;font-size: 20px">园林物联网监测系统</span>
          </el-col>
          <el-col :xs="3" :sm="3" :md="2" :lg="2" :xl="2">
            <span style="float: right;padding-right: 20px"><i class="el-icon-question"></i>帮助</span>
          </el-col>
          <el-col :xs="7" :sm="5" :md="4" :lg="4" :xl="3">
            <span style="float: left">
              当前用户：
              <router-link :to="{path:'/UserInfo'}"
                           style="text-decoration: none;color: deepskyblue">{{userName}}</router-link>
            </span>
          </el-col>
          <el-col :xs="3" :sm="3" :md="2" :lg="2" :xl="2">
            <span>
              <i class="el-icon-switch-button"></i>
              <router-link :to="{path:'/'}" style="color: white;text-decoration: none">注销</router-link>
            </span>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row class="main-nav" style="height: 100px;line-height: 100px;background-color: slategray;color: white;">
          <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
            <router-link :to="{path:'/HomePage'}" style="text-decoration: none;color: white">
              {{pageName}}
            </router-link>
          </el-col>
          <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
            <router-link :to="{path:'/RealTimePointInfoPage'}" style="text-decoration: none;color: white">
              {{realTimePointInfo}}
            </router-link>
          </el-col>
          <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
            <router-link :to="{path:'/MonPointPage'}" style="text-decoration: none;color: white">
              {{monPoint}}
            </router-link>
          </el-col>
          <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
            <router-link :to="{path:'/DataStatisticsPage'}">
              {{dataStatistics}}
            </router-link>
          </el-col>
          <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
            <router-link :to="{path:'/HistoricalDataPage'}" style="text-decoration: none;color: white">
              {{historicalData}}
            </router-link>
          </el-col>
          <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
            <router-link :to="{path:'/WarnInfoEditPage'}" style="text-decoration: none;color: white">
              {{warnInfoEdit}}
            </router-link>
          </el-col>
          <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
            <router-link :to="{path:'/semanticSearchPage'}" style="text-decoration: none;color: white">
              {{semanticSearch}}
            </router-link>
          </el-col>
        </el-row>
      </el-main>
      <el-main>
        <span style="float: left;padding: 20px;">当前位置：{{dataStatistics}}</span>
      </el-main>
      <el-container>
        <el-main width="80%" style="height:100%;"></el-main>
        <el-aside width="20%"></el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "DataStatisticsPage",
    data() {
      return {
        userName: 'Admin',
        pageName: '首页',
        realTimePointInfo:'实时站点信息',
        monPoint: '站点管理',
        dataStatistics: '数据统计',
        historicalData:'历史数据',
        warnInfoEdit:'预警信息编辑',
        semanticSearch: '语义检索',
      }
    },
    mounted: function () {

    },
    methods: {}
  }
</script>

<style scoped>
  .homeBox, el-container {
    height: 100%;
    padding: 0;
    margin: 0;
    /*background-color: forestgreen;*/
  }

  .el-header, .el-main {
    padding: 0;
    text-align: center;
  }

  .main-nav > el-col > router-link {
    color: red;

  }

</style>
