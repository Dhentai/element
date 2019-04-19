<script>
    export default {
      data() {
        return {
          mapPoint: null
        }
      },
      created() {
        console.log('FHMap Doc')
      },
      mounted() {
      }
    }
</script>
## gis 地图


### 基本用法

在index.html中引入 其中<http://192.168.3.8:9150> 是当前FGis地图文件地址
```html
<script src="http://192.168.3.8:9150/FHGis/api/js" type="text/javascript"></script>
```
若需要按需加载地图文件资源，可以在组件内引用loadFHMap.js
```html
<script>
    import loadFHMap from 'examples/customUtils/loadFHMap'
    export default {
        mounted() {
            loadFHMap.then((data) => {// init})
        }
    }
</script>
```
在使用组件文件内引用


<FHMap v-model="mapPoint"></FHMap>

```html
<template>
  <gisMap v-model="mapPoint" :isLine="isLine" :lineListData="lineListData"></gisMap>
</template>

<script>
    import { scrollControl } from 'examples/customUtils/index'
    export default {
      data() {
        return {
          mapPoint: {
            action_str: "退出",
            latitud: "23.12632",
            longitude: "113.32965",
            position: "中国广东省WN高德置地夏8-2",
            time: "2018-03-26 10:53:38"
          },
          isLine:true,
          lineListData:[{"position":"中国广东省WN高德置地夏8-2","time":"2018-03-26 10:53:38","desc":{"action":"03","action_str":"退出"},"latitud":"23.12632","action":"03","longitude":"113.32965","action_str":"退出","type":"MOBLIE","mobile":"13002001853"},{"position":"中国广东省WN高德置地夏8","time":"2018-03-26 10:42:32","desc":{"action":"03","action_str":"退出"},"latitud":"23.12632","action":"03","longitude":"113.32965","action_str":"退出","type":"MOBLIE","mobile":"13002001853"},{"position":"广东省广州市萝岗区云诚路上影东102米","time":"2018-03-22 20:01:43","desc":{"action":"02","action_str":"登录"},"latitud":"23.14953","action":"02","longitude":"113.55074","action_str":"登录","type":"MOBLIE","mobile":"13002001853"},{"position":"广东省广州市萝岗区观达路广州达意隆包装机械股份有限公司西北160米","time":"2018-03-22 19:54:17","desc":{"action":"30","action_str":"更新/切换"},"latitud":"23.15284","action":"30","longitude":"113.54907","action_str":"更新/切换","type":"MOBLIE","mobile":"13002001853"},{"position":"广东省广州市萝岗区云埔三路21螺岗东南56米","time":"2018-03-22 19:53:38","desc":{"action":"30","action_str":"更新/切换"},"latitud":"23.15740","action":"30","longitude":"113.54845","action_str":"更新/切换","type":"MOBLIE","mobile":"13002001853"},{"position":"广东省广州市萝岗区岗荔街6号汇童幼儿园西北82米","time":"2018-03-22 19:53:25","desc":{"action":"30","action_str":"更新/切换"},"latitud":"23.15783","action":"30","longitude":"113.50656","action_str":"更新/切换","type":"MOBLIE","mobile":"13002001853"},{"position":"广东省广州市萝岗区刘村路141面前田西北225米","time":"2018-03-22 19:51:53","desc":{"action":"30","action_str":"更新/切换"},"latitud":"23.16244","action":"30","longitude":"113.54212","action_str":"更新/切换","type":"MOBLIE","mobile":"13002001853"},{"position":"广东省广州市萝岗区刘村路87新尾田西南75米","time":"2018-03-22 19:51:40","desc":{"action":"30","action_str":"更新/切换"},"latitud":"23.16231","action":"30","longitude":"113.53942","action_str":"更新/切换","type":"MOBLIE","mobile":"13002001853"},{"position":"广东省广州市萝岗区云信路中海誉品花园西68米","time":"2018-03-22 19:51:15","desc":{"action":"30","action_str":"更新/切换"},"latitud":"23.16595","action":"30","longitude":"113.53623","action_str":"更新/切换","type":"MOBLIE","mobile":"13002001853"},{"position":"广东省广州市萝岗区刘村路广州市农村商业银行(刘村支行)东225米","time":"2018-03-22 19:49:39","desc":{"action":"30","action_str":"更新/切换"},"latitud":"23.16261","action":"30","longitude":"113.53557","action_str":"更新/切换","type":"MOBLIE","mobile":"13002001853"},{"position":"广东省广州市萝岗区S117(开创大道)广州市黄埔区云埔工业区西南75米","time":"2018-03-22 19:41:24","desc":{"action":"30","action_str":"更新/切换"},"latitud":"23.15322","action":"30","longitude":"113.53411","action_str":"更新/切换","type":"MOBLIE","mobile":"13002001853"},{"position":"广东省广州市萝岗区S117(萝岗立交)宏昌电子材料股份公司西南197米","time":"2018-03-22 19:41:10","desc":{"action":"30","action_str":"更新/切换"},"latitud":"23.15151","action":"30","longitude":"113.53463","action_str":"更新/切换","type":"MOBLIE","mobile":"13002001853"},{"position":"","time":"2018-03-22 19:41:04","desc":{"action":"30","action_str":"更新/切换"},"latitud":"","action":"30","longitude":"","action_str":"更新/切换","type":"MOBLIE","mobile":"13002001853"},{"position":"广东省广州市萝岗区S117(萝岗立交)宏昌电子材料股份公司西南204米","time":"2018-03-22 19:40:00","desc":{"action":"30","action_str":"更新/切换"},"latitud":"23.15141","action":"30","longitude":"113.53462","action_str":"更新/切换","type":"MOBLIE","mobile":"13002001853"},{"position":"广东省广州市萝岗区G4(沈海高速)东头山南94米","time":"2018-03-22 19:38:24","desc":{"action":"30","action_str":"更新/切换"},"latitud":"23.15031","action":"30","longitude":"113.51677","action_str":"更新/切换","type":"MOBLIE","mobile":"13002001853"},{"position":"广东省广州市萝岗区东明三路东头山东北313米","time":"2018-03-22 19:36:56","desc":{"action":"30","action_str":"更新/切换"},"latitud":"23.15340","action":"30","longitude":"113.51799","action_str":"更新/切换","type":"MOBLIE","mobile":"13002001853"},{"position":"广东省广州市萝岗区S15(火村立交)连塘山西北573米","time":"2018-03-22 19:34:42","desc":{"action":"30","action_str":"更新/切换"},"latitud":"23.15633","action":"30","longitude":"113.49218","action_str":"更新/切换","type":"MOBLIE","mobile":"13002001853"},{"position":"广东省广州市萝岗区新桂路田螺山北676米","time":"2018-03-22 19:34:20","desc":{"action":"30","action_str":"更新/切换"},"latitud":"23.15917","action":"30","longitude":"113.48558","action_str":"更新/切换","type":"MOBLIE","mobile":"13002001853"},{"position":"广东省广州市黄埔区S15(沈海高速广州支线)广州科城环保科技有限公司东南156米","time":"2018-03-22 19:33:17","desc":{"action":"30","action_str":"更新/切换"},"latitud":"23.16120","action":"30","longitude":"113.47654","action_str":"更新/切换","type":"MOBLIE","mobile":"13002001853"},{"position":"广东省广州市萝岗区光谱中路38号兴森快捷电路科技公司南71米","time":"2018-03-22 19:33:01","desc":{"action":"30","action_str":"更新/切换"},"latitud":"23.16256","action":"30","longitude":"113.46908","action_str":"更新/切换","type":"MOBLIE","mobile":"13002001853"},{"position":"广东省广州市黄埔区科丰路大份田东南371米","time":"2018-03-22 19:33:00","desc":{"action":"30","action_str":"更新/切换"},"latitud":"23.15975","action":"30","longitude":"113.47084","action_str":"更新/切换","type":"MOBLIE","mobile":"13002001853"},{"position":"广东省广州市萝岗区S15(沈海高速广州支线)欧姆龙汽车电子公司东北161米","time":"2018-03-22 19:32:04","desc":{"action":"02","action_str":"登录"},"latitud":"23.16414","action":"02","longitude":"113.45844","action_str":"登录","type":"MOBLIE","mobile":"13002001853"}]
        }
      },
      mounted() {
        const map = document.querySelector('#map-content')
        const containers = Array.prototype.slice.call(document.querySelectorAll('.el-scrollbar__wrap'))
        const container = containers.filter((item) => item.contains(map))
        map.addEventListener('mouseenter', () => scrollControl(container[0], true))
        map.addEventListener('mouseleave', () => scrollControl(container[0], false))
      }
    }
</script>
```


### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| mapPoint   | 是否显示，支持  修饰符 | object | — | mapPoint: {action_str: "退出",latitud: "23.12632",longitude: "113.32965",position: "中国广东省WN高德置地夏8-2",time: "2018-03-26 10:53:38"} |
| isLine     | 是否坐标点连线 | boolean    | — | true |
| lineListData | 坐标点连线数据 | array    | — | [] |

