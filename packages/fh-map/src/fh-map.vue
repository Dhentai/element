/**
* Created by tanyichao on 2018/5/4.
*/

<template>
    <div class="activity-index">
        <div class="gis-map-index"  @wheel="handleWheel($event)">
            <div id="map-content" style="height:100%;width: 100%"></div>
        </div>
    </div>
</template>

<script>
    import loadFHMap from 'examples/customUtils/loadFHMap';
    export default {
      name: 'FHMap',
      componentName: 'FHMap',
      components: {},
      data() {
        return {
          list: []
        };
      },
      props: {
        value: {
          type: Object,
          default: {
            action_str: '退出',
            latitud: '23.12632',
            longitude: '113.32965',
            position: '中国广东省WN高德置地夏8-2',
            time: '2018-03-26 10:53:38'
          }
        },
        isLine: {
          type: Boolean,
          default: true
        },
        lineListData: {
          type: Array,
          default: [{'position': '中国广东省WN高德置地夏8-2', 'time': '2018-03-26 10:53:38', 'desc': {'action': '03', 'action_str': '退出'}, 'latitud': '23.12632', 'action': '03', 'longitude': '113.32965', 'action_str': '退出', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '中国广东省WN高德置地夏8', 'time': '2018-03-26 10:42:32', 'desc': {'action': '03', 'action_str': '退出'}, 'latitud': '23.12632', 'action': '03', 'longitude': '113.32965', 'action_str': '退出', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区云诚路上影东102米', 'time': '2018-03-22 20:01:43', 'desc': {'action': '02', 'action_str': '登录'}, 'latitud': '23.14953', 'action': '02', 'longitude': '113.55074', 'action_str': '登录', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区观达路广州达意隆包装机械股份有限公司西北160米', 'time': '2018-03-22 19:54:17', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.15284', 'action': '30', 'longitude': '113.54907', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区云埔三路21螺岗东南56米', 'time': '2018-03-22 19:53:38', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.15740', 'action': '30', 'longitude': '113.54845', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区岗荔街6号汇童幼儿园西北82米', 'time': '2018-03-22 19:53:25', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.15783', 'action': '30', 'longitude': '113.50656', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区刘村路141面前田西北225米', 'time': '2018-03-22 19:51:53', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.16244', 'action': '30', 'longitude': '113.54212', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区刘村路87新尾田西南75米', 'time': '2018-03-22 19:51:40', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.16231', 'action': '30', 'longitude': '113.53942', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区云信路中海誉品花园西68米', 'time': '2018-03-22 19:51:15', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.16595', 'action': '30', 'longitude': '113.53623', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区刘村路广州市农村商业银行(刘村支行)东225米', 'time': '2018-03-22 19:49:39', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.16261', 'action': '30', 'longitude': '113.53557', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区S117(开创大道)广州市黄埔区云埔工业区西南75米', 'time': '2018-03-22 19:41:24', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.15322', 'action': '30', 'longitude': '113.53411', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区S117(萝岗立交)宏昌电子材料股份公司西南197米', 'time': '2018-03-22 19:41:10', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.15151', 'action': '30', 'longitude': '113.53463', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '', 'time': '2018-03-22 19:41:04', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '', 'action': '30', 'longitude': '', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区S117(萝岗立交)宏昌电子材料股份公司西南204米', 'time': '2018-03-22 19:40:00', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.15141', 'action': '30', 'longitude': '113.53462', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区G4(沈海高速)东头山南94米', 'time': '2018-03-22 19:38:24', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.15031', 'action': '30', 'longitude': '113.51677', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区东明三路东头山东北313米', 'time': '2018-03-22 19:36:56', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.15340', 'action': '30', 'longitude': '113.51799', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区S15(火村立交)连塘山西北573米', 'time': '2018-03-22 19:34:42', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.15633', 'action': '30', 'longitude': '113.49218', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区新桂路田螺山北676米', 'time': '2018-03-22 19:34:20', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.15917', 'action': '30', 'longitude': '113.48558', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市黄埔区S15(沈海高速广州支线)广州科城环保科技有限公司东南156米', 'time': '2018-03-22 19:33:17', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.16120', 'action': '30', 'longitude': '113.47654', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区光谱中路38号兴森快捷电路科技公司南71米', 'time': '2018-03-22 19:33:01', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.16256', 'action': '30', 'longitude': '113.46908', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市黄埔区科丰路大份田东南371米', 'time': '2018-03-22 19:33:00', 'desc': {'action': '30', 'action_str': '更新/切换'}, 'latitud': '23.15975', 'action': '30', 'longitude': '113.47084', 'action_str': '更新/切换', 'type': 'MOBLIE', 'mobile': '13002001853'}, {'position': '广东省广州市萝岗区S15(沈海高速广州支线)欧姆龙汽车电子公司东北161米', 'time': '2018-03-22 19:32:04', 'desc': {'action': '02', 'action_str': '登录'}, 'latitud': '23.16414', 'action': '02', 'longitude': '113.45844', 'action_str': '登录', 'type': 'MOBLIE', 'mobile': '13002001853'}]
        }
      },
      computed: {},
      mounted() {
        loadFHMap.then((data) => {
          // this.initMap(this.value);
          const map = new FHMap.Map('map-content', {zoom: 13, selected: 'baidu.map'});
          var lonLat = new FHMap.LonLat(118.79056, 32.057);
          map.setCenter(lonLat);
        });
        const con = document.querySelector('.activity-index');
        con.addEventListener('wheel', () => {
          console.log('container');
        });
      },
      methods: {
        _OnClickNetRecord(item, key) {
          this.listIndex = key || 0;
          if (this.markers) {
            this.markers.clearMarkers();
          }
          if (this.map) {
            this.map.removePopup(this.popup);
          }
          this.initMap(item);
        },
        initMapLine() {
          const _this = this;
          this.tracksLayer = new FHMap.Layer.Tracks('Tracks', {
            callbacks: {
              click: function(msg) {
                let obj = msg.geometry.info;
                _this._OnClickNetRecord(obj);
              }
            }
          });
          this.map.addLayer(this.tracksLayer);
          let points = [];
          if (this.lineListData && this.lineListData.length === 0) return;
          this.lineListData.forEach((item, index) => {
            let pp = new FHMap.Geometry.Point(item.longitude, item.latitud);
            pp.info = item;
            points.push(pp);
          });
          // 设置曲线样式
          let style = new FHMap.Style({
            curve: new FHMap.Style.Curve(40, {
              text: new FHMap.Style.Text('', {
                fontSize: '20px',
                fontColor: 'black'
              }),
              textLocation: 0.3
            }),
            shape: new FHMap.Style.Shape.Icon('/static/images/goods/icon_loc.png', {
              width: 19,
              height: 26,
              offsetX: 0,
              offsetY: -10
            })
          });
          points.forEach((item) => {
            item.setStyle(style);
          });
          let stroke = new FHMap.Style.Stroke('red', 2);
          this.tracksLayer.addTrack(new FHMap.Feature.Track(points, {fid: 'line2'}, stroke), {autoZoom: true});
        },
        initMap(mapObj) {
          // 1.地图初始化
          let markers;
          let latitude = mapObj.longitude || '113.23673';
          let longitude = mapObj.latitud || '23.16457';
          // 初始化经度值
          // //初始化纬度值
          if (!this.map) {
            this.map = new FHMap.Map('map-content', {zoom: 13});
          }
          // _this.map.clearOverlays()
          let lonLat = new FHMap.LonLat(latitude, longitude);
          this.map.setCenter(lonLat);
          // 2.设置地图标记
          markers = new FHMap.Layer.Markers('Markers', {
            callbacks: {
              hover: function(bean) {
                console.log(bean.popup.contentHTML);
                // const address = bean.popup.contentHTML;
              }
            }
          });
          // 添加标记点图层
          this.map.addLayer(markers);
          let html = '';
          if (mapObj.action_str) {
            let time = mapObj.time || mapObj.activityTime;
            html = '<div class="containMap">' +

                        '<div class="containMapLeft">' +
                        '     <div class="mapTitle xinwei"><i></i>行为：</div>' +
                        '     <div class="mapTitle shijian"><i></i>时间：</div>' +
                        '     <div class="mapTitle didian"><i></i>地点：</div>' +
                        '</div>' +
                        '<div class="containMapRight">' +
                        '     <div class="mapContent">' + mapObj.action_str + '</div>' +
                        '     <div class="mapContent">' + time + '</div>' +
                        '     <div class="mapContent">' + mapObj.position + '</div>' +
                        '</div>' +

                        '</div>';
          }
          // 没有地址信息
          if (mapObj.longitude === '' || mapObj.latitud === '') {
            markers.clearMarkers();
          }
          // 添加标记弹窗
          let marker1 = new FHMap.Marker(new FHMap.LonLat(latitude, longitude),
            new FHMap.Icon('/static/images/goods/icon_loc.png', {x: 0, y: -10}),
            new FHMap.Popup({contentHTML: html, lonlat: new FHMap.LonLat(latitude, longitude)}));

          // 添加标记
          let popup = new FHMap.Popup({contentHTML: html, lonlat: new FHMap.LonLat(latitude, longitude)});
          this.popup = popup;
          this.markers = markers;
          if (mapObj.longitude) {
            this.map.addPopup(popup);
            markers.clearMarkers();
            markers.addMarkers([marker1]);
          }
          if (this.isLine) {
            this.initMapLine();
          }
        },
        handleWheel(e) {
    
          console.log('enter');
          e.stopPropagation();
          e.preventDefault();
        }
      }
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .activity-index{
        position: relative;
        width: 100%;
        height: 400px;
    }
    .gis-map-index {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 400px;
        overflow: hidden;
    }
</style>