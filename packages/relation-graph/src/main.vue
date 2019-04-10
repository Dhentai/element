<template>
    <div id="relation-graph-wrapper"></div>
</template>
<script>
    import echarts from 'echarts';
    export default{
      name: 'RelationGraph',
      data() {return {};},
      computed: {},
      created() {},
      mounted() {this.initPage();},
      methods: {
        initPage() {
          const data = [{'relation_dsc': '父亲', 'relation_name': '李三', 'relation_idcard': '440524195809166973', 'photo': '', 'relation_phone': '', 'name': '小明'},
            {'relation_dsc': '兄/弟', 'relation_name': '李四', 'relation_idcard': '440582198511166951', 'photo': '', 'relation_phone': '13612413921', 'name': '小明'},
            {'relation_dsc': '母亲', 'relation_name': '花花', 'relation_idcard': '440524196204126949', 'photo': '', 'relation_phone': '', 'name': '小明'}];
          let list = data;
          let dataNodes = [];
          let dataLinks = [];
          dataNodes.push({name: list[0].name, des: list[0].name, symbolSize: 55, itemStyle: {normal: {color: '#F44407'}}});
          for (let item of list) {
            dataNodes.push({name: item.relation_name, des: item.relation_name, symbolSize: 50, itemStyle: {normal: {color: '#F58447'}}});
            dataLinks.push({source: list[0].name, target: item.relation_name, name: item.relation_dsc,
              des: item.relation_dsc, lineStyle: {normal: {color: '#F58447'}}});
          }
          // console.log('关系节点',dataNodes)
          // console.log('关联关系',dataLinks)
          this.getFamilyRelation(dataNodes, dataLinks);
        },
        getFamilyRelation(dataNodes, dataLinks) {
          const myChart = echarts.init(document.getElementById('relation-graph-wrapper'));
          // 控制echart的缩放
          window.onresize = myChart.resize;
          let option = {
            tooltip: {formatter: function(x) {return x.data.des;}},
            series: [
              {
                type: 'graph',
                layout: 'force',
                symbolSize: 50,
                roam: true,
                edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [4, 10],
                force: {repulsion: 2500, edgeLength: [10, 50]},
                draggable: true,
                itemStyle: {normal: {color: '#4b565b'}},
                lineStyle: {normal: {width: 2, color: '#4b565b'}},
                edgeLabel: {normal: {show: true,
                  formatter: function(x) {return x.data.name;}}
                },
                label: {
                  normal: {show: true, textStyle: {}}
                },
                data: dataNodes,
                links: dataLinks
              }
            ]
          };
          myChart.setOption(option);
        }
      }
    };
</script>
<style>
    #relation-graph-wrapper{
        margin:30px auto;
        width: 350px;
        height:350px;
        border:1px solid red;
        border-radius: 3px;
        background-color: #efefef;
    }
</style>
