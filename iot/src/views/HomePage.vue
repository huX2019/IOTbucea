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
            <router-link :to="{path:'/HomePage'}">
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
            <router-link :to="{path:'/DataStatisticsPage'}" style="text-decoration: none;color: white">
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
        <span style="float: left;padding: 20px;">当前位置：{{pageName}}</span>
      </el-main>
      <el-container>
        <el-main width="80%" style="height:100%;">
          <div class="BMap" style="width: 100%;height: 100%">
            <BMap></BMap>
          </div>
          <baidu-map class="bm-view"></baidu-map>
        </el-main>
        <el-aside width="20%">
          <el-row>
            <el-col :span="24"
                    style="height: 220px;width: 290px;font-size: 25px;background-color: gold;line-height: 220px;margin-left: 15px;text-align: center">
              设备状态预警消息 （1）
            </el-col>
            <el-col :span="24"
                    style="background-color: gold;height: 220px;width: 290px;margin: 15px 0 15px 15px;font-size: 25px;line-height: 220px;text-align: center">
              数据状态预警消息 （2）
            </el-col>
            <el-col :span="24"
                    style="height: 220px;background-color: gold;line-height: 220px;width: 290px;font-size: 25px;margin-left: 15px;text-align: center">
              园林处理建议提醒 （0）
            </el-col>
          </el-row>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  import BMap from "../components/BMap";

  export default {
    name: 'HomePage',
    components: {BMap},//引入百度地图组件
    data() {
      return {
        userName: 'Admin',
        pageName: '首页',
        realTimePointInfo: '实时站点信息',
        monPoint: '站点管理',
        dataStatistics: '数据统计',
        historicalData: '历史数据',
        warnInfoEdit: '预警信息编辑',
        semanticSearch: '语义检索',
      }
    },
    mounted: function () {

    },
    methods: {}
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
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
