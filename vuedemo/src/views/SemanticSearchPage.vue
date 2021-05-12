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
            <router-link :to="{path:'/semanticSearchPage'}">
              {{semanticSearch}}
            </router-link>
          </el-col>
        </el-row>
      </el-main>
      <el-main>
        <span style="float: left;padding: 20px;">当前位置：{{semanticSearch}}</span>
      </el-main>
      <el-container>
        <el-header>
          <span style="font-size: 18px">请输入检索内容：</span>
          <el-input v-model="inputSearch" class="input-with-select" @focus="blurSearchFor()" @blur="blurSear"
                    :placeholder="placeholder"></el-input>
          <el-button type="primary" icon="el-icon-search" @click="submitSearch">检索</el-button>
          <el-button type="info" icon="el-icon-refresh" @click="resetSearch">重置</el-button>
        </el-header>
        <el-main>
          <el-row>
            <el-col :span="7" :offset="5" v-if="placeFromShow">
              <el-card class="placeCard box-card">
                <div slot="header" class="clearfix">
                  <span>园林绿地</span>
                  <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                </div>
                <div style="width: 500px;margin: 0 auto;">
                  <el-form :label-position="labelPosition" label-width="80px" :model="searchFrom">
                    <el-form-item label="文件路径">
                      <el-input v-model="searchFrom.fileSrc"></el-input>
                    </el-form-item>
                    <el-form-item label="埋设时间">
                      <el-input v-model="searchFrom.burryTime"></el-input>
                    </el-form-item>
                    <el-form-item label="埋设地点">
                      <el-input v-model="searchFrom.burryPlace"></el-input>
                    </el-form-item>
                  </el-form>
                </div>
              </el-card>
            </el-col>
            <el-col :span="7" :offset="5" v-if="sensorFromShow">
              <el-card class="sensorCard box-card">
                <div slot="header" class="clearfix">
                  <span>传感器</span>
                  <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                </div>
                <div style="width: 500px;margin: 0 auto">
                  <el-form :label-position="labelPosition" label-width="80px" :model="searchFrom">
                    <el-form-item label="URL">
                      <!--<el-input v-model="searchFrom.fileSrc"></el-input>-->
                      {{searchFrom.fileURL}}
                    </el-form-item>
                    <el-form-item label="名称">
                      <!--<el-input v-model="searchFrom.sensorName"></el-input>-->
                      {{searchFrom.sensorName}}
                    </el-form-item>
                    <el-form-item label="编号">
                      <!--<el-input v-model="searchFrom.sensorNum"></el-input>-->
                      {{searchFrom.sensorNum}}
                    </el-form-item>
                    <el-form-item label="监测原理">
                      <!--<el-input v-model="searchFrom.sensorAxiom"></el-input>-->
                      {{searchFrom.sensorAxiom}}
                    </el-form-item>
                    <el-form-item label="监测范围">
                      <!--<el-input v-model="searchFrom.sensorRange"></el-input>-->
                      {{searchFrom.sensorRange}}
                    </el-form-item>
                    <el-form-item label="监测精度">
                      <!--<el-input v-model="searchFrom.sensorAcc"></el-input>-->
                      {{searchFrom.sensorAcc}}
                    </el-form-item>
                    <el-form-item label="分辨率">
                      <!--<el-input v-model="searchFrom.sensorRatio"></el-input>-->
                      {{searchFrom.sensorRatio}}
                    </el-form-item>
                    <el-form-item label="埋设时间">
                      <!--<el-input v-model="searchFrom.burryTime"></el-input>-->
                      {{searchFrom.burryTime}}
                    </el-form-item>
                    <el-form-item label="埋设地点">
                      <!--<el-input v-model="searchFrom.burryPlace"></el-input>-->
                      {{searchFrom.burryPlace}}
                    </el-form-item>
                    <el-form-item label="监测数据">
                      <router-link :to="{path:'/DataStatisticsPage'}" style="color: #606266"
                                   v-if="dataStatisticsShow">
                        {{dataStatistics}}
                      </router-link>
                      <!--<el-input v-model="searchFrom.burryPlace"></el-input>-->
                    </el-form-item>
                  </el-form>
                </div>
              </el-card>
            </el-col>
            <el-col :span="7" v-if="infoFromShow">
              <el-card class="sensorCard box-card">
                <div slot="header" class="clearfix">
                  <span>关联信息</span>
                </div>
                <div style="width: 500px;margin: 0 auto">
                  <el-form :label-position="labelPosition" label-width="120px" :model="searchFrom">
                    <el-form-item label="概念类">
                      <span>SoilHumi</span>
                      <el-popover placement="right" width="500" trigger="click">
                        <h3 style="">SoilHumi</h3>
                        <el-form :label-position="labelPosition" label-width="80px" :model="popoverForm">
                          <el-form-item label="URL">
                            {{popoverForm.SoilHumiURL}}
                          </el-form-item>
                          <el-form-item label="描述">
                            {{popoverForm.SoilHumiComment}}
                          </el-form-item>
                          <el-form-item label="父概念类">
                            {{popoverForm.SoilHumiSubClassOf}}
                          </el-form-item>
                          <el-form-item label="检索关系">
                            {{popoverForm.SoilHumiProperties}}
                          </el-form-item>
                        </el-form>
                        <el-button type="text" slot="reference">详情</el-button>
                      </el-popover>
                    </el-form-item>
                    <el-form-item label="园林绿地实例">
                      <span>GYG_2</span>
                      <el-popover placement="right" width="500" trigger="click">
                        <h3 style="">GYG_2</h3>
                        <el-form :label-position="labelPosition" label-width="80px" :model="popoverForm">
                          <el-form-item label="URL">
                            {{popoverForm.GYG2URL}}
                          </el-form-item>
                          <el-form-item label="名称">
                            {{popoverForm.GYG2Name}}
                          </el-form-item>
                          <el-form-item label="别称">
                            {{popoverForm.GYG2NickName}}
                          </el-form-item>
                          <el-form-item label="GPS">
                            {{popoverForm.GYG2GPS}}
                          </el-form-item>
                          <el-form-item label="周围信息">
                            {{popoverForm.GYG2AroundInfo}}
                          </el-form-item>
                          <el-form-item label="所含设备">
                            {{popoverForm.GYG2SensorID}}
                          </el-form-item>
                          <el-form-item label="检索关系">
                            {{popoverForm.GYG2Properties}}
                          </el-form-item>
                        </el-form>
                        <el-button type="text" slot="reference">详情</el-button>
                      </el-popover>
                    </el-form-item>
                    <el-form-item label="传感器实例">
                      <span>STS_16</span>
                      <el-popover placement="right" width="500" trigger="click">
                        <h3 style="">STS_16</h3>
                        <el-form :label-position="labelPosition" label-width="80px" :model="popoverForm">
                          <el-form-item label="URL">
                            {{popoverForm.STS16URL}}
                          </el-form-item>
                          <el-form-item label="名称">
                            {{popoverForm.STS16sensorName}}
                          </el-form-item>
                          <el-form-item label="编号">
                            {{popoverForm.STS16sensorNum}}
                          </el-form-item>
                          <el-form-item label="监测原理">
                            {{popoverForm.STS16sensorAxiom}}
                          </el-form-item>
                          <el-form-item label="监测范围">
                            {{popoverForm.STS16sensorRange}}
                          </el-form-item>
                          <el-form-item label="监测精度">
                            {{popoverForm.STS16sensorAcc}}
                          </el-form-item>
                          <el-form-item label="分辨率">
                            {{popoverForm.STS16sensorRatio}}
                          </el-form-item>
                          <el-form-item label="埋设时间">
                            {{popoverForm.STS16burryTime}}
                          </el-form-item>
                          <el-form-item label="埋设地点">
                            {{popoverForm.STS16burryPlace}}
                          </el-form-item>
                          <el-form-item label="监测数据">
                            <a href="" style="float: left;color: #606266">数据统计</a>
                          </el-form-item>
                          <el-form-item label="检索关系">
                            {{popoverForm.STS16Properties}}
                          </el-form-item>
                        </el-form>
                        <el-button type="text" slot="reference">详情</el-button>
                      </el-popover>
                      <br>
                      <span>SPHS_16</span>
                      <el-popover placement="right" width="500" trigger="click">
                        <h3 style="">SPHS_16</h3>
                        <el-form :label-position="labelPosition" label-width="80px" :model="popoverForm">
                          <el-form-item label="URL">
                            {{popoverForm.SPHS16URL}}
                          </el-form-item>
                          <el-form-item label="名称">
                            {{popoverForm.SPHS16sensorName}}
                          </el-form-item>
                          <el-form-item label="编号">
                            {{popoverForm.SPHS16sensorNum}}
                          </el-form-item>
                          <el-form-item label="监测原理">
                            {{popoverForm.SPHS16sensorAxiom}}
                          </el-form-item>
                          <el-form-item label="监测范围">
                            {{popoverForm.SPHS16sensorRange}}
                          </el-form-item>
                          <el-form-item label="监测精度">
                            {{popoverForm.SPHS16sensorAcc}}
                          </el-form-item>
                          <el-form-item label="分辨率">
                            {{popoverForm.SPHS16sensorRatio}}
                          </el-form-item>
                          <el-form-item label="埋设时间">
                            {{popoverForm.SPHS16burryTime}}
                          </el-form-item>
                          <el-form-item label="埋设地点">
                            {{popoverForm.SPHS16burryPlace}}
                          </el-form-item>
                          <el-form-item label="监测数据">
                            <a href="" style="float: left;color: #606266">数据统计</a>
                          </el-form-item>
                          <el-form-item label="检索关系">
                            {{popoverForm.SPHS16Properties}}
                          </el-form-item>
                        </el-form>
                        <el-button type="text" slot="reference">详情</el-button>
                      </el-popover>
                    </el-form-item>
                  </el-form>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "SemanticSearchPage",
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
        inputSearch: '',
        placeholder: '请输入检索内容',
        labelPosition: 'left',
        placeFromShow: false,
        sensorFromShow: false,
        infoFromShow: false,
        dataStatisticsShow: false,
        dialogFormVisible: false,
        searchKeyWord: [
          'SHS_16', 'shs16',
        ],
        //搜索表单
        searchFrom: {
          //园林
          //传感器
          sensorName: '',
          fileURL: '',
          sensorNum: '',
          sensorAxiom: '',
          sensorRange: '',
          sensorAcc: '',
          sensorRatio: '',
          burryTime: '',
          burryPlace: '',
          //关联信息
        },
        //搜索表单中详情表单
        popoverForm: {
          //SoilHumi
          SoilHumiURL: 'http://www.semanticweb.org/ontologies/2020/7/all#SoilHumi',
          SoilHumiSubClassOf: 'SoilSensor',
          SoilHumiComment: '土壤水分传感器类',
          SoilHumiProperties: 'has Individual',
          //GYG_2
          GYG2URL: 'http://www.semanticweb.org/ontologies/2020/7/all#GYG_2',
          GYG2Name: '广阳谷城市森林公园2号监测点',
          GYG2NickName: '园区中部偏西',
          GYG2GPS: '116.380176,39.896728',
          GYG2AroundInfo: '公交578路',
          GYG2SensorID: 'EHS_16、ETS_16、SHS_16、STS_16、SPHS_16',
          GYG2Properties: 'isLocat',
          //STS_16
          STS16URL: 'http://www.semanticweb.org/ontologies/2020/7/all#STS_16',
          STS16sensorName: 'STS_16（土壤温度）',
          STS16sensorNum: '08711016',
          STS16sensorAxiom: '能隙式测温元件',
          STS16sensorRange: '-40～80℃',
          STS16sensorAcc: '±0.3℃',
          STS16sensorRatio: '0.1℃',
          STS16burryTime: '2020-01-17',
          STS16burryPlace: 'GYG_2（园区中部偏西）',
          STS16Properties: 'isAdjacent',
          //SPHS_16
          SPHS16URL: 'http://www.semanticweb.org/ontologies/2020/7/all#SPHS_16',
          SPHS16sensorName: 'SPHS_16（土壤PH值）',
          SPHS16sensorNum: '08731016',
          SPHS16sensorAxiom: '电化学',
          SPHS16sensorRange: '1～14',
          SPHS16sensorAcc: '±0.5',
          SPHS16sensorRatio: '0.1',
          SPHS16burryTime: '2020-01-17',
          SPHS16burryPlace: 'GYG_2（园区中部偏西）',
          SPHS16Properties: 'isAdjacent',
        },
      }
    },
    mounted: function () {

    },
    methods: {
      //获取焦点时触发
      blurSearchFor() {
        if (this.placeholder == '请输入检索内容') {
          this.placeholder = '';
        }
      },
      //失去焦点时触发
      blurSear() {
        this.placeholder = '请输入检索内容';
      },
      //检索按钮
      submitSearch() {
        console.log(this.inputSearch);
        console.log(this.searchKeyWord[0], this.searchKeyWord[1]);
        if (this.inputSearch === '') {
          this.$alert('请输入检索内容', '提示', {
            confirmButtonText: '确定',
            type: 'warning',
            center: true
          });
        } else if (this.inputSearch === this.searchKeyWord[0] || this.searchKeyWord[1]) {
          this.sensorFromShow = true;
          this.infoFromShow = true;
          this.searchFrom = {
            fileURL: 'http://www.semanticweb.org/ontologies/2020/7/all#SHS_16',
            sensorName: 'SHS_16（土壤水分）',
            sensorNum: '08721016',
            sensorAxiom: '电磁脉冲',
            sensorRange: '0～100%RH',
            sensorAcc: '±2%RH',
            sensorRatio: '0.1%RH',
            burryTime: '2020-01-17',
            burryPlace: 'GYG_2（园区中部偏西）',
          };
          this.dataStatisticsShow = true;
        }else {

        }
      },
      //重置按钮
      resetSearch() {
        this.inputSearch = '';
        this.searchFrom = {};
        this.dataStatisticsShow = false;
        this.placeFromShow = false;
        this.sensorFromShow = false;
        this.infoFromShow = false;
      },
      //园林绿地详情
    }
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

  .input-with-select {
    background-color: #fff;
    width: 300px;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 550px;
    margin: 0 auto;
  }

  .popover-card {
    width: 550px;
    margin: 0 auto;
  }


</style>
