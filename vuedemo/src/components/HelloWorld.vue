<template>
  <div class="hello">

    <button @click="toGray">灰色</button>
    <button @click="toBlue">淡蓝</button>
    <button @click="toOrange">橘色</button>

    <div id="box">
      <div class="current">灰色</div>
      <div>淡蓝</div>
      <div>橘色</div>
    </div>
<div>
  el
  <el-button type="success">1112</el-button>
</div>
    <div>请选择结束日期 <input type="date"></div>
    <div>距离我们<input type="text" v-model="test" class="testcolor">还有{{day}}d{{hr}}:{{min}}:{{sec}}</div>
    <div class="timeruning">距离我们<p class="testcolor">{{test}}</p>还有：{{day}}d{{hr}}:{{min}}:{{sec}}</div>
  </div>
</template>
<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        test: '',
        day: 0,
        hr: 0,
        min: 0,
        sec: 0
      }
    },
    mounted: function () {
      this.countdown()
    },
    methods: {
      //清除类
      removeColor: function () {
        $("#box div").removeClass("current");
      },
      toGray: function () {
        this.removeColor();
        $("#box div:nth-child(1)").addClass("current");
      },
      toBlue: function () {
        this.removeColor();
        $("#box div:nth-child(2)").addClass("current");
      },
      toOrange: function () {
        this.removeColor();
        $("#box div:nth-child(3)").addClass("current");
      },
      countdown: function () {
        //定义结束时间戳
        let endTime = Date.parse(new Date('2021-7-1 0:00:00'));
        //定义开始时间
        let startTime = Date.parse(new Date());
        //判断倒计时结束时都为0
        if (startTime > endTime) {
          this.day = 0;
          this.hr = 0;
          this.min = 0;
          this.sec = 0;
          return
        }
        //获取倒计时时间戳
        let sumSec = endTime - startTime;
        let day = parseInt(sumSec / 1000 / 60 / 60 / 24);//天数
        let hr = parseInt(sumSec / 1000 / 60 / 60 % 24);//小时
        let min = parseInt(sumSec / 1000 / 60 % 60);//分钟
        let sec = parseInt(sumSec / 1000 % 60);//秒
        //数据赋值
        this.day = day;
        this.hr = hr > 9 ? hr : '0' + hr;
        this.min = min > 9 ? min : '0' + min;
        this.sec = sec > 9 ? sec : '0' + sec;
        //定义this指向
        let that = this;
        //使用定时器递归
        setTimeout(function () {
          that.countdown();
        }, 1000)
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  #box {
    width: 300px;
    height: 300px;
    border: 2px solid red;
    /*background-color: red;*/
    position: relative;
    top: 50px;
  }

  #box > div {
    width: 300px;
    height: 300px;
    position: absolute;
    top: 0;
    display: none;
  }

  #box > div:nth-child(1) {
    background-color: gray;
  }

  #box > div:nth-child(2) {
    background-color: cadetblue;
  }

  #box > div:nth-child(3) {
    background-color: orange;
  }

  #box .current {
    display: block;
  }

  .hello > button {
    width: 60px;
    height: 30px;
    background-color: salmon;
    border: 2px solid salmon;
    border-radius: 10px;
    margin-right: 20px;
    display: block;
    float: left;
  }

  .testcolor {
    color: red;
    display: inline-block;
  }
</style>
