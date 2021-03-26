<template>
  <div id="map">
    <div class="baiduMap" id="allmap" ref="allmap"></div>
  </div>
</template>

<script>
  import BMap from 'BMap'

  export default {
    name: "BMap",
    data() {
      return {
        cityName: [],
        stationPoint: [
          [116.399277,39.95607,''],
          [116.396461,39.955561,''],
          [116.394278,39.955942,''],
          [116.391376,39.955444,''],
          [116.39029,39.955817,''],
          [116.377111,39.954701,''],
          [116.371542,39.95254,''],
          [116.367508,39.951403,''],
          [116.369516,39.876152,''],
          [116.367756,39.875134,''],
          [116.365357,39.87557,''],
          [116.363201,39.874941,''],
          [116.361135,39.875224,''],
          [116.359455,39.874671,''],
          [116.379273,39.897462,''],
          [116.380176,39.896728,''],
          [116.379161,39.895874,''],
          [116.378407,39.947784,''],
          [116.378021,39.947303,''],
          [116.378268,39.947013,'']
        ],
        mapStyleJson: [
          {
          "featureType": "land",
          "elementType": "geometry",
          "stylers": {
            "visibility": "on",
            "color": "#fffff9ff"
          }
        }, {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": {
            "visibility": "on",
            "color": "#69b0acff"
          }
        }, {
          "featureType": "highway",
          "elementType": "geometry.fill",
          "stylers": {
            "color": "#b5caa0ff"
          }
        }, {
          "featureType": "highway",
          "elementType": "geometry.stroke",
          "stylers": {
            "color": "#94ad79ff"
          }
        }, {
          "featureType": "nationalway",
          "elementType": "geometry.fill",
          "stylers": {
            "color": "#b5caa0ff"
          }
        }, {
          "featureType": "arterial",
          "elementType": "geometry.fill",
          "stylers": {
            "color": "#d4e2c6ff"
          }
        }, {
          "featureType": "cityhighway",
          "elementType": "geometry.fill",
          "stylers": {
            "color": "#d4e2c6ff"
          }
        }, {
          "featureType": "provincialway",
          "elementType": "geometry.fill",
          "stylers": {
            "color": "#d4e2c6ff"
          }
        }, {
          "featureType": "provincialway",
          "elementType": "geometry.stroke",
          "stylers": {
            "color": "#b5caa0ff"
          }
        }, {
          "featureType": "tertiaryway",
          "elementType": "geometry.fill",
          "stylers": {
            "color": "#ffffffff"
          }
        }, {
          "featureType": "tertiaryway",
          "elementType": "geometry.stroke",
          "stylers": {
            "color": "#b5caa0ff"
          }
        }, {
          "featureType": "fourlevelway",
          "elementType": "geometry.fill",
          "stylers": {
            "color": "#ffffffff"
          }
        }, {
          "featureType": "fourlevelway",
          "elementType": "geometry.stroke",
          "stylers": {
            "color": "#b5caa0ff"
          }
        }, {
          "featureType": "subway",
          "elementType": "geometry",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "railway",
          "elementType": "geometry",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "highwaysign",
          "elementType": "labels",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "highwaysign",
          "elementType": "labels.icon",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "nationalwaysign",
          "elementType": "labels",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "nationalwaysign",
          "elementType": "labels.icon",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "provincialwaysign",
          "elementType": "labels",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "provincialwaysign",
          "elementType": "labels.icon",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "tertiarywaysign",
          "elementType": "labels",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "tertiarywaysign",
          "elementType": "labels.icon",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "subwaylabel",
          "elementType": "labels",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "subwaylabel",
          "elementType": "labels.icon",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "nationalway",
          "elementType": "geometry.stroke",
          "stylers": {
            "color": "#94ad79ff"
          }
        }, {
          "featureType": "cityhighway",
          "elementType": "geometry.stroke",
          "stylers": {
            "color": "#b5caa0ff"
          }
        }, {
          "featureType": "arterial",
          "elementType": "geometry.stroke",
          "stylers": {
            "color": "#b5caa0ff"
          }
        }, {
          "featureType": "highway",
          "stylers": {
            "level": "6",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "highway",
          "stylers": {
            "level": "7",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "highway",
          "stylers": {
            "level": "8",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "highway",
          "stylers": {
            "level": "9",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "highway",
          "elementType": "geometry",
          "stylers": {
            "visibility": "off",
            "level": "6",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "highway",
          "elementType": "geometry",
          "stylers": {
            "visibility": "off",
            "level": "7",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "highway",
          "elementType": "geometry",
          "stylers": {
            "visibility": "off",
            "level": "8",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "highway",
          "elementType": "geometry",
          "stylers": {
            "visibility": "off",
            "level": "9",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "highway",
          "elementType": "labels",
          "stylers": {
            "visibility": "off",
            "level": "6",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "highway",
          "elementType": "labels",
          "stylers": {
            "visibility": "off",
            "level": "7",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "highway",
          "elementType": "labels",
          "stylers": {
            "visibility": "off",
            "level": "8",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "highway",
          "elementType": "labels",
          "stylers": {
            "visibility": "off",
            "level": "9",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "nationalway",
          "stylers": {
            "level": "6",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "nationalway",
          "stylers": {
            "level": "7",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "nationalway",
          "stylers": {
            "level": "8",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "nationalway",
          "stylers": {
            "level": "9",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "nationalway",
          "elementType": "geometry",
          "stylers": {
            "visibility": "off",
            "level": "6",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "nationalway",
          "elementType": "geometry",
          "stylers": {
            "visibility": "off",
            "level": "7",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "nationalway",
          "elementType": "geometry",
          "stylers": {
            "visibility": "off",
            "level": "8",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "nationalway",
          "elementType": "geometry",
          "stylers": {
            "visibility": "off",
            "level": "9",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "nationalway",
          "elementType": "labels",
          "stylers": {
            "visibility": "off",
            "level": "6",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "nationalway",
          "elementType": "labels",
          "stylers": {
            "visibility": "off",
            "level": "7",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "nationalway",
          "elementType": "labels",
          "stylers": {
            "visibility": "off",
            "level": "8",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "nationalway",
          "elementType": "labels",
          "stylers": {
            "visibility": "off",
            "level": "9",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "provincialway",
          "stylers": {
            "level": "8",
            "curZoomRegionId": "0",
            "curZoomRegion": "8-9"
          }
        }, {
          "featureType": "provincialway",
          "stylers": {
            "level": "9",
            "curZoomRegionId": "0",
            "curZoomRegion": "8-9"
          }
        }, {
          "featureType": "provincialway",
          "elementType": "geometry",
          "stylers": {
            "visibility": "off",
            "level": "8",
            "curZoomRegionId": "0",
            "curZoomRegion": "8-9"
          }
        }, {
          "featureType": "provincialway",
          "elementType": "geometry",
          "stylers": {
            "visibility": "off",
            "level": "9",
            "curZoomRegionId": "0",
            "curZoomRegion": "8-9"
          }
        }, {
          "featureType": "provincialway",
          "elementType": "labels",
          "stylers": {
            "visibility": "off",
            "level": "8",
            "curZoomRegionId": "0",
            "curZoomRegion": "8-9"
          }
        }, {
          "featureType": "provincialway",
          "elementType": "labels",
          "stylers": {
            "visibility": "off",
            "level": "9",
            "curZoomRegionId": "0",
            "curZoomRegion": "8-9"
          }
        }, {
          "featureType": "cityhighway",
          "stylers": {
            "level": "6",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "cityhighway",
          "stylers": {
            "level": "7",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "cityhighway",
          "stylers": {
            "level": "8",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "cityhighway",
          "stylers": {
            "level": "9",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "cityhighway",
          "elementType": "geometry",
          "stylers": {
            "visibility": "off",
            "level": "6",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "cityhighway",
          "elementType": "geometry",
          "stylers": {
            "visibility": "off",
            "level": "7",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "cityhighway",
          "elementType": "geometry",
          "stylers": {
            "visibility": "off",
            "level": "8",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "cityhighway",
          "elementType": "geometry",
          "stylers": {
            "visibility": "off",
            "level": "9",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "cityhighway",
          "elementType": "labels",
          "stylers": {
            "visibility": "off",
            "level": "6",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "cityhighway",
          "elementType": "labels",
          "stylers": {
            "visibility": "off",
            "level": "7",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "cityhighway",
          "elementType": "labels",
          "stylers": {
            "visibility": "off",
            "level": "8",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "cityhighway",
          "elementType": "labels",
          "stylers": {
            "visibility": "off",
            "level": "9",
            "curZoomRegionId": "0",
            "curZoomRegion": "6-9"
          }
        }, {
          "featureType": "entertainment",
          "elementType": "geometry",
          "stylers": {
            "color": "#e4f0d7ff"
          }
        }, {
          "featureType": "manmade",
          "elementType": "geometry",
          "stylers": {
            "color": "#effcf0ff"
          }
        }, {
          "featureType": "education",
          "elementType": "geometry",
          "stylers": {
            "color": "#e3f7e4ff"
          }
        }, {
          "featureType": "building",
          "elementType": "geometry.stroke",
          "stylers": {
            "color": "#a1cfa4ff"
          }
        }, {
          "featureType": "poilabel",
          "elementType": "labels",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "poilabel",
          "elementType": "labels.icon",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "education",
          "elementType": "labels.text.fill",
          "stylers": {
            "color": "#7a7a7aff"
          }
        }, {
          "featureType": "education",
          "elementType": "labels.text.stroke",
          "stylers": {
            "color": "#ffffffff"
          }
        }, {
          "featureType": "education",
          "elementType": "labels.text",
          "stylers": {
            "fontsize": "26"
          }
        }, {
          "featureType": "manmade",
          "elementType": "labels.text.fill",
          "stylers": {
            "color": "#afafafff"
          }
        }, {
          "featureType": "manmade",
          "elementType": "labels.text",
          "stylers": {
            "fontsize": "26"
          }
        }, {
          "featureType": "scenicspotslabel",
          "elementType": "labels.text.fill",
          "stylers": {
            "color": "#376b6dff"
          }
        }, {
          "featureType": "scenicspots",
          "elementType": "labels",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "scenicspotslabel",
          "elementType": "labels",
          "stylers": {
            "visibility": "on"
          }
        }, {
          "featureType": "scenicspotslabel",
          "elementType": "labels.text.stroke",
          "stylers": {
            "color": "#ffffffff",
            "weight": "4"
          }
        }, {
          "featureType": "country",
          "elementType": "labels.text.fill",
          "stylers": {
            "color": "#376b6dff"
          }
        }, {
          "featureType": "country",
          "elementType": "labels.text.stroke",
          "stylers": {
            "color": "#ffffffff",
            "weight": "3"
          }
        }, {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": {
            "color": "#ffffffff"
          }
        }, {
          "featureType": "water",
          "elementType": "labels.text.stroke",
          "stylers": {
            "color": "#ffffff00"
          }
        }, {
          "featureType": "water",
          "elementType": "labels.text",
          "stylers": {
            "fontsize": "24"
          }
        }, {
          "featureType": "water",
          "elementType": "labels",
          "stylers": {
            "visibility": "on"
          }
        }, {
          "featureType": "green",
          "elementType": "geometry",
          "stylers": {
            "visibility": "off"
          }
        }
        ],
      }
    },
    mounted() {
      this.baiduMap();
    },
    methods: {
      baiduMap() {
        let map = new BMap.Map(this.$refs.allmap); // 创建Map实例
        this.cityName[0] = '北京市西城区';
        map.setMapStyle({//自定义地图样式
          styleJson:this.mapStyleJson
        });
        map.centerAndZoom(this.cityName[0], 14);// 初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl({//添加地图类型控件
          mapTypes: [
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
          ]
        }));
        map.addControl(new BMap.OverviewMapControl());//添加缩略地图控件
        map.enableScrollWheelZoom();
        map.addControl(new BMap.NavigationControl({
          type: BMAP_NAVIGATION_CONTROL_LARGE,
          anchor: BMAP_ANCHOR_TOP_LEFT,
          offset: new BMap.Size(40, 250)
        }));
        let bdary = new BMap.Boundary();
        //1.绘制行政区域
        let sP = this.stationPoint;//将点赋给对象
        bdary.get(this.cityName[0], function (rs) {         //获取行政区域
          // map.clearOverlays();                    //清除地图覆盖物
          // // 东西经南北纬的范围
          // let EN_JW = "180, 90;";         //东北角
          // let NW_JW = "-180,  90;";       //西北角
          // let WS_JW = "-180, -90;";       //西南角
          // let SE_JW = "180, -90;";        //东南角
          // // 添加环形遮罩层
          // let ply1 = new BMap.Polygon(rs.boundaries[0] + SE_JW + SE_JW + WS_JW + NW_JW + EN_JW + SE_JW, {
          //   strokeColor: "none",
          //   fillColor: "rgb(246,246,246)",
          //   fillOpacity: 1,//填充的透明度，取值范围0 - 1
          //   strokeOpacity: 0.5
          // });
          // // 建立多边形覆盖物
          // map.addOverlay(ply1);
          //给目标行政区划添加边框，其实就是给目标行政区划添加一个没有填充物的遮罩层
          let ply = new BMap.Polygon(rs.boundaries[0], {
            strokeWeight: 2,//边线的宽度，以像素为单位
            strokeColor: "blue",//边线颜色
            fillColor: "",//填充颜色。当参数为空时，圆形将没有填充效果
            strokeOpacity: 1,//边线透明度，取值范围0 - 1
            strokeStyle: "dashed",//边线的样式，solid或dashed
          });
          map.addOverlay(ply);//添加地图覆盖物，行政边界
          //2.添加站点信息
          for (let i = 0; i < sP.length; i++) {
            // 创建点标记
            let point = new BMap.Point(sP[i][0], sP[i][1]);//获得所有点
            let marker = new BMap.Marker(point);
            // 在地图上添加点标记
            map.addOverlay(marker);
            //创建信息窗口
            let opts = {
              width: 250,
              height: 100,
              title: '广阳谷城市森林公园1号监测点',
            };
            let infoWindow = new BMap.InfoWindow("地址：北京市西城区广安门内大街49号 <br/> 埋设时间：2020-01-16", opts);
            marker.addEventListener('click', function () {// 点标记添加点击事件
              map.openInfoWindow(infoWindow, point); // 开启信息窗口
            });
          }
        });

      },
    }
  }
</script>

<style scoped>
  .baiduMap {
    width: 100%;
    height: 900px;
    overflow: hidden;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

</style>
