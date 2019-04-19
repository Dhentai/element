/**
* Created by tanyichao on 2018/5/4.
*/

<template>
    <div class="activity-index">
        <div class="gis-map-index" v-if="serverAvailable">
            <div id="map-content" style="height:100%;width: 100%"></div>
        </div>
        <div v-else style="display: flex;flex-direction: column; justify-content: center; align-items: center; height: 100%"><span>地图组件暂不可用</span></div>
    </div>
</template>

<script>
    import loadFHMap from 'examples/customUtils/loadFHMap';
    import { scrollControl } from 'examples/customUtils/index';
    let map, tracksLayer, pointLayer, track;
    let isShowLine = true;
    export default {
      name: 'FHMap',
      componentName: 'FHMap',
      components: {},
      data() {
        return {
          list: [],
          serverAvailable: undefined
        };
      },
      props: {
        value: {
          type: Object,
          default: () => {
            return { action_str: '退出',
              latitud: '23.12632',
              longitude: '113.32965',
              position: '中国广东省WN高德置地夏8-2',
              time: '2018-03-26 10:53:38'};
          }
        },
        isLine: {
          type: Boolean,
          default: true
        },
        lineListData: {
          type: Array,
          default: () => [{'position': '中国广东省WN高德置地夏8-2', 'time': '2018-03-26 10:53:38', 'desc': {'action': '03', 'action_str': '退出'}, 'latitud': '23.12632', 'action': '03', 'longitude': '113.32965', 'action_str': '退出', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '中国广东省WN高德置地夏8', 'time': '2018-03-26 10:42:32', 'desc': {'action': '03', 'action_str': '退出'}, 'latitud': '23.12632', 'action': '03', 'longitude': '113.32965', 'action_str': '退出', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区云诚路上影东102米', 'time': '2018-03-22 20:01:43', 'desc': {'action': '02', 'action_str': '登录'}, 'latitud': '23.14953', 'action': '02', 'longitude': '113.55074', 'action_str': '登录', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区观达路广州达意隆包装机械股份有限公司西北160米', 'time': '2018-03-22 19:54:17', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.15284', 'action': '30', 'longitude': '113.54907', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区云埔三路21螺岗东南56米', 'time': '2018-03-22 19:53:38', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.15740', 'action': '30', 'longitude': '113.54845', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区岗荔街6号汇童幼儿园西北82米', 'time': '2018-03-22 19:53:25', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.15783', 'action': '30', 'longitude': '113.50656', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区刘村路141面前田西北225米', 'time': '2018-03-22 19:51:53', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.16244', 'action': '30', 'longitude': '113.54212', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区刘村路87新尾田西南75米', 'time': '2018-03-22 19:51:40', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.16231', 'action': '30', 'longitude': '113.53942', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区云信路中海誉品花园西68米', 'time': '2018-03-22 19:51:15', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.16595', 'action': '30', 'longitude': '113.53623', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区刘村路广州市农村商业银行(刘村支行)东225米', 'time': '2018-03-22 19:49:39', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.16261', 'action': '30', 'longitude': '113.53557', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区S117(开创大道)广州市黄埔区云埔工业区西南75米', 'time': '2018-03-22 19:41:24', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.15322', 'action': '30', 'longitude': '113.53411', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区S117(萝岗立交)宏昌电子材料股份公司西南197米', 'time': '2018-03-22 19:41:10', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.15151', 'action': '30', 'longitude': '113.53463', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '', 'time': '2018-03-22 19:41:04', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '', 'action': '30', 'longitude': '', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区S117(萝岗立交)宏昌电子材料股份公司西南204米', 'time': '2018-03-22 19:40:00', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.15141', 'action': '30', 'longitude': '113.53462', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区G4(沈海高速)东头山南94米', 'time': '2018-03-22 19:38:24', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.15031', 'action': '30', 'longitude': '113.51677', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区东明三路东头山东北313米', 'time': '2018-03-22 19:36:56', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.15340', 'action': '30', 'longitude': '113.51799', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区S15(火村立交)连塘山西北573米', 'time': '2018-03-22 19:34:42', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.15633', 'action': '30', 'longitude': '113.49218', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区新桂路田螺山北676米', 'time': '2018-03-22 19:34:20', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.15917', 'action': '30', 'longitude': '113.48558', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市黄埔区S15(沈海高速广州支线)广州科城环保科技有限公司东南156米', 'time': '2018-03-22 19:33:17', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.16120', 'action': '30', 'longitude': '113.47654', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区光谱中路38号兴森快捷电路科技公司南71米', 'time': '2018-03-22 19:33:01', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.16256', 'action': '30', 'longitude': '113.46908', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市黄埔区科丰路大份田东南371米', 'time': '2018-03-22 19:33:00', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.15975', 'action': '30', 'longitude': '113.47084', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区S15(沈海高速广州支线)欧姆龙汽车电子公司东北161米', 'time': '2018-03-22 19:32:04', 'desc': {'action': '02', 'action_str': '登录'}, 'latitud': '23.16414', 'action': '02', 'longitude': '113.45844', 'action_str': '登录', 'type': 'MOBLIE', 'mobile': '13002001853'}]
        }
      },
      computed: {},
      mounted() {
        loadFHMap.then((data) => {
          this.serverAvailable = true;
          this.$nextTick().then(() => {
            this.initMap(this.value);
            const map = document.querySelector('#map-content');
            const containers = Array.prototype.slice.call(document.querySelectorAll('.el-scrollbar__wrap'));
            const container = containers.filter((item) => item.contains(map));
            map.addEventListener('mouseenter', () => scrollControl(container[0], true));
            map.addEventListener('mouseleave', () => scrollControl(container[0], false));
          });
        }).catch(() => {
          this.serverAvailable = false;
        });
      },
      methods: {
        initMap() {
          map = new FHMap.Map('map-content', {zoom: 15});
          const lonLat = new FHMap.LonLat(113.32965, 23.12632);
          map.setCenter(lonLat);

          tracksLayer = new FHMap.Layer.Tracks('Tracks', {callbacks: {
            click: function(msg) {
              alert(msg.type);
            }
          }});
          map.addLayer(tracksLayer);
          tracksLayer.events.on({
            trackPlaying: function(track) {
              var label = '我已经跑了' + (track.percent * 100).toFixed(0) + '%';
              if (track.reach && track.reach.marker) {
                track.reach.marker.setUrl('img/mapload_blue.png');
              }
              track.point.style.label = label;
              track.point.style.labelYOffset = 40;
            },
            trackFinished: function(track) {
              track.point.style.label = '我跑完了';
              if (track.pointLayer) {
                track.pointLayer.drawFeature(track.point);
              } else {
                track.layer.drawFeature(track.point);
              }
            }
          });

          pointLayer = new FHMap.Layer.Vector('test');
          map.addLayer(pointLayer);

          this.operation('addTrack');

          var layer = new FHMap.Layer.Vector('test');
          map.addLayer(layer);
        },
        operation(name) {
          switch (name) {
            // 添加轨迹
            case 'playTracks':
              var tracks = {
                'datas': [
                  {
                    'id': '1',
                    'strokeColor': 'blue',
                    'points': [{'lonlat': [118.7488532, 32.0574768], 'time': '2017-11-18', 'icon': 'img/mapload_red.png', 'iconOffset': {x: -14, y: -36}, 'popup': '我是起点'}, {'lonlat': [118.76474, 32.05818], 'time': '2017-11-20'}, {'lonlat': [118.75537, 32.05791], 'time': '2017-11-22', 'icon': 'img/mapload_red.png', 'popup': '我是起点', 'iconOffset': {x: -14, y: -36}}, {'lonlat': [118.76247, 32.05507], 'time': '2017-11-27'}, {'lonlat': [118.7498532, 32.0564768], 'time': '2017-11-28'}, {'lonlat': [118.7488532, 32.0534768], 'time': '2017-11-28'}]
                  },
                  {
                    'id': '2',
                    'strokeColor': 'orange',
                    'points': [{'lonlat': [118.76698, 32.05314], 'time': '2017-11-23', 'icon': 'img/mapload_red.png', 'popup': '我是起点', 'iconOffset': {x: -14, y: -36}}, {'lonlat': [118.75537, 32.05791], 'time': '2017-11-24'}, {'lonlat': [118.7488532, 32.0534768], 'time': '2017-11-28', 'icon': 'img/load_red.png', 'iconOffset': {x: -6, y: -14}}]
                  },
                  {
                    'id': '3',
                    'strokeColor': 'red',
                    'points': [{'lonlat': [118.7488532, 32.0574768], 'time': '2017-11-25'}, {'lonlat': [118.7488532, 32.0534768], 'time': '2017-11-28'}]
                  },
                  {
                    'id': '4',
                    'strokeColor': 'green',
                    'points': [{'lonlat': [118.7488532, 32.0574768], 'time': '2017-11-22'}, {'lonlat': [118.7498532, 32.0564768], 'time': '2017-11-27'}, {'lonlat': [118.7488532, 32.0534768], 'time': '2017-11-28'}]
                  }
                ]
              };

              tracksLayer.playTracks(tracks.datas, 0, {dynamic: true, multiLines: true, rate: 100, maxCount: 50});

              /* //5天
                       var points = [
                       new FHMap.Marker(new FHMap.LonLat(118.76260,32.05386),new FHMap.Icon("img/mapload_red.png",{x:-14,y:-36}),null),
                       new FHMap.Marker(new FHMap.LonLat(118.75649, 32.05624),null),
                       new FHMap.Marker(new FHMap.LonLat(118.7488532,32.0534768),new FHMap.Icon("img/load_red.png"))

                       ];
                       track = new FHMap.Feature.Track(points,{fid:'line1'+Math.random()},{strokeColor:'blue'});
                       var distance = getDistance(track);
                       track.totalDistance = distance;
                       track.total = Math.ceil(distance/50);
                       tracksLayer.playTrack(track, 0, {dynamic: true, multi:true});

                       var points = [
                       new FHMap.Marker(new FHMap.LonLat(118.7488532,32.0574768),new FHMap.Icon("img/mapload_red.png",{x:-14,y:-36}),new FHMap.Popup({contentHTML:"我是起点"})),
                       new FHMap.Marker(new FHMap.LonLat(118.74636, 32.05675),null),
                       new FHMap.Marker(new FHMap.LonLat(118.7498532,32.0564768),new FHMap.Icon("")),
                       new FHMap.Marker(new FHMap.LonLat(118.7488532,32.0534768),new FHMap.Icon("img/load_red.png",{x:-6,y:-14}))
                       ];

                       setTimeout(function(){
                       //2天
                       track1 = new FHMap.Feature.Track(points,{fid:'line2'+Math.random()},{strokeColor:'green'});
                       var distance1 = getDistance(track1);
                       track1.totalDistance = distance1;
                       track1.total = Math.ceil(distance/50) - 15;
                       tracksLayer.playTrack(track1, 0, {dynamic: true , multi:true});
                       },3000)*/
              break;
              // 添加轨迹
            case 'addTrack':
              points = [
                new FHMap.Geometry.Point(113.32965, 23.12632),
                new FHMap.Geometry.Point(113.32333, 23.12888),
                new FHMap.Geometry.Point(113.33000, 23.12956),
                new FHMap.Geometry.Point(113.33220, 23.13000)
              ];

              var fill = new FHMap.Style.Fill('white');
              // 设置曲线样式
              var style = new FHMap.Style({
                curve: new FHMap.Style.Curve(40, {
                  text: new FHMap.Style.Text('顺时针曲线', {
                    fontSize: '20px',
                    fontColor: 'black'
                  }),
                  textLocation: 0.3
                }),
                shape: new FHMap.Style.Shape.Icon('img/mapload_red.png', {
                  width: 40,
                  height: 38,
                  offsetX: -13,
                  offsetY: -37
                })
              });
              points[0].setStyle(style);
              // 设置点样式为圆形
              style = new FHMap.Style({
                fill: new FHMap.Style.Fill('yellow'),
                stroke: new FHMap.Style.Stroke('blue', 2),
                text: new FHMap.Style.Text('11'),
                curve: new FHMap.Style.Curve(30, {
                  anticlockwise: true,
                  text: new FHMap.Style.Text('逆时针曲线'),
                  textLocation: 0.3,
                  textRotation: 0
                }),
                shape: new FHMap.Style.Shape.Circle(14)
              });
              points[1].setStyle(style);

              // 设置实心圆样式
              style = new FHMap.Style({
                curve: new FHMap.Style.Curve(0, {
                  text: new FHMap.Style.Text('直线内容', {
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }),
                  textLocation: 0.7
                }),
                shape: new FHMap.Style.Shape.Circle(6)
              });
              points[2].setStyle(style);

              // 设置白底圆样式
              style = new FHMap.Style.Shape.Circle(20, {
                fill: fill,
                text: new FHMap.Style.Text('内容')
              });
              points[3].setStyle(style);

              var stroke = new FHMap.Style.Stroke('red', 2);
              var track1 = new FHMap.Feature.Track(points, {fid: 'line2'}, stroke);
              track1.setArrowHeadStyle(true);
              tracksLayer.addTrack(track1, {autoZoom: true});
              break;
              // 添加轨迹
            case 'playTrack':
              pointLayer.setZIndex(4000);
              var points = [
                new FHMap.Marker(new FHMap.LonLat(118.76260, 32.05386), new FHMap.Icon(''), new FHMap.Popup({contentHTML: '我是起点'}), {'startTime': '2015-10-12 00:01:00'}),
                new FHMap.Marker(new FHMap.LonLat(118.75944, 32.05686), new FHMap.Icon(''), null, {'startTime': '2015-10-13 00:01:00'}),
                new FHMap.Marker(new FHMap.LonLat(118.7488532, 32.0574768), new FHMap.Icon(''), null, {'startTime': '2015-10-18 00:01:00'}),
                new FHMap.Marker(new FHMap.LonLat(118.7498532, 32.0564768), new FHMap.Icon(''), null, {'startTime': '2015-10-25 00:01:00'}),
                new FHMap.Marker(new FHMap.LonLat(118.75260, 32.05386), new FHMap.Icon(''), null, {'startTime': '2015-10-30 00:01:00'})
              ];
              track = new FHMap.Feature.Track(points, {fid: 'line1' + Math.random()}, {strokeColor: 'blue', play: {externalGraphic: 'img/sign.png', graphicWidth: 32, graphicHeight: 32, graphicXOffset: -16, graphicYOffset: -18}});
              // 播放点和轨迹线需要各自设置层级的时候,需添加一个播放点图层传进去，调用下面方法
              tracksLayer.playTrack(track, 0, {dynamic: true, pointLayer: pointLayer, customPlayTime: 20, playImageRotation: true});

              // 默认播放点和轨迹线在同一层级上
              // tracksLayer.playTrack(track, 0, {dynamic: true});
              break;
              // 暂停
            case 'continueTrack':
              tracksLayer.playTrack(track);
              break;
              // 暂停
            case 'stopTrack':
              tracksLayer.stopTrack(track);
              break;
              // 快进
            case 'fastTrack':
              tracksLayer.changeSpeed(track, 2);
              break;
              // 慢进
            case 'slowTrack':
              tracksLayer.changeSpeed(track, 0.5);
              break;
              // 显示/隐藏轨迹
            case 'displayTrack':
              isShowLine = !isShowLine;
              // tracksLayer.displayTrack("line1",isShowLine);
              tracksLayer.displayTracksByAttribute('fid', 'line2', isShowLine);
              break;
              // 清除指定轨迹
            case 'clearTrack':
              tracksLayer.clearTracksByAttribute('fid', 'line2');
              break;
              // 清除所有的线
            case 'clearTracks':
              tracksLayer.clearTracks();

              // 单独定义了轨迹播放点图层的时候才需要调用此方法
              map.removeLayer(pointLayer);
              break;
              // 拖动播放
            case 'stopTrackByTime':
              if (track && track.markers && track.markers.length > 0 && track.markers[0].startTime) {
                tracksLayer.stopTrackByTime(track, {stopTime: '2015-10-22'});
              }
              break;
          }
        }
      }
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .activity-index{
        position: relative;
        width: 100%;
        height: 500px;
    }
    .gis-map-index {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
    }
</style>