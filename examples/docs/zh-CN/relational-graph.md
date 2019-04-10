## 关系图组件


### 基本用法

```html
直接模板内引入组件关系图组件，传入数据渲染视图。
```

:::demo
```html
<template>
  <relation-graph></relation-graph>
</template>

<script>
  export default{
    data() {
      return {
        isData : true
      }
    },
    computed: {},
    created() {
    },
    mounted() {
      this.initPage()
    },
    methods:{
      initPage() {},
      getFamilyRelation(dataNodes,dataLinks){
        //console.log("dataNodes",dataNodes)
        //console.log("dataLinks",dataLinks)
        const myChart = echart.init(document.getElementById('familyId'));
        //控制echart的缩放
        window.onresize = myChart.resize;
        const option = {
          tooltip: {
            formatter: function (x) {
              return x.data.des;
            }
          },
          series: [
            {
              type: 'graph',
              layout: 'force',
              symbolSize: 50,
              roam: true,
              edgeSymbol: ['circle', 'arrow'],
              edgeSymbolSize: [4, 10],
              edgeLabel: {
                normal: {textStyle: {fontSize: 20}}
              },
              force: {repulsion: 2500,edgeLength: [10, 50]},
              draggable: true,
              itemStyle: {normal: {color: '#4b565b'}},
              lineStyle: {normal: {width: 2,color: '#4b565b'}},
              edgeLabel: {normal: {show: true,
                  formatter: function (x) {return x.data.name;}}
              },
              label: {
                normal: {show: true,textStyle: {}}
              },
              data: dataNodes,
              links: dataLinks
            }
          ]
        };
        myChart.setOption(option);
      }
   }
  }
</script>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| params    | 请求后台的数据  修饰符 | object | — | 关系json数据|
| dataNodes | 关系人的数据   | boolean    | — | [] |
| dataNodes | 关系人的关联关系 | array    | — | [] |

