import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
import  'echarts/lib/chart/pie';
import  'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class EquipmentHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg:'我是一个人员组件'
         };
    }
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            title: { text: '设备故障数量统计' },
            tooltip: {},
            color: ['#7ed96f', '#e5323e'],
            legend: {
              data: ['正常', '故障', ],
              right: 50,
              top: 20
            },
            xAxis: {
                data: ["信号", "卡口", "视频", "诱导屏", "检测器", "一体机"]
            },
            yAxis: {},
            series: [{
                name: '正常',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            },{
                name: '故障',
                type: 'bar',
                data: [20, 5, 6, 10, 15, 20]
            },]
        });

        var myChart1 = echarts.init(document.getElementById('main1'));
        myChart1.setOption({
          title : {
              text: '报障单统计',
              // subtext: '纯属虚构',
              // x:'center'
          },
          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
              orient: 'vertical',
              left: 'left',
              data: ['待确认','待派单','待反馈','待结单','已结单']
          },
          series : [
              {
                  name: '访问来源',
                  type: 'pie',
                  radius : '66%',
                  center: ['50%', '50%'],
                  data:[
                      {value:335, name:'待确认'},
                      {value:310, name:'待派单'},
                      {value:234, name:'待反馈'},
                      {value:135, name:'待结单'},
                      {value:1548, name:'已结单'}
                  ],
                  itemStyle: {
                      emphasis: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              }
          ]
        });

        var myChart2 = echarts.init(document.getElementById('main2'));
        myChart2.setOption({
          title: {
              text: '雾区能见度分析'
          },
          tooltip: {
              trigger: 'axis'
          },
          legend: {
              data:['晋新高速K77+550控制站','晋新高速K82+550控制站','晋新高速K92+550控制站','晋新高速K102+550控制站','晋新高速K112+550控制站']
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['周一','周二','周三','周四','周五','周六','周日']
          },
          yAxis: {
              type: 'value'
          },
          series: [
              {
                  name:'晋新高速K77+550控制站',
                  type:'line',
                  stack: '总量',
                  data:[120, 132, 101, 134, 90, 230, 210]
              },
              {
                  name:'晋新高速K82+550控制站',
                  type:'line',
                  stack: '总量',
                  data:[220, 182, 191, 234, 290, 330, 310]
              },
              {
                  name:'晋新高速K92+550控制站',
                  type:'line',
                  stack: '总量',
                  data:[150, 232, 201, 154, 190, 330, 410]
              },
              {
                  name:'晋新高速K102+550控制站',
                  type:'line',
                  stack: '总量',
                  data:[320, 332, 301, 334, 390, 330, 320]
              },
              {
                  name:'晋新高速K112+550控制站',
                  type:'line',
                  stack: '总量',
                  data:[820, 932, 901, 934, 1290, 1330, 1320]
              }
          ]
        });

        var myChart3 = echarts.init(document.getElementById('main3'));
        myChart3.setOption({
          title: { text: '雾灯状态分析' },
          legend: {},
          color: ['#7ed96f','#e5323e','#ff9900','#fbfb37'],//绿、红、橘黄、黄
          tooltip: {},
          dataset: {
              source: [
                  ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
                  ['正常', 85, 72, 48, 44, 66, 57],
                  ['失联', 12, 3, 52, 50, 8, 18],
                  ['温度过高', 1, 10, 0, 6, 18, 12],
                  ['电压过低', 2, 5, 0, 4, 8, 13]
              ]
          },
          series: [{
              type: 'pie',
              radius: 60,
              center: ['25%', '30%']
              // No encode specified, by default, it is '2012'.
          }, {
              type: 'pie',
              radius: 60,
              center: ['75%', '30%'],
              encode: {
                  itemName: 'product',
                  value: '2013'
              }
          }, {
              type: 'pie',
              radius: 60,
              center: ['25%', '75%'],
              encode: {
                  itemName: 'product',
                  value: '2014'
              }
          }, {
              type: 'pie',
              radius: 60,
              center: ['75%', '75%'],
              encode: {
                  itemName: 'product',
                  value: '2015'
              }
          },
          // {
          //     type: 'pie',
          //     radius: 60,
          //     center: ['50%', '75%'],
          //     encode: {
          //         itemName: 'product',
          //         value: '2016'
          //     }
          // }, {
          //     type: 'pie',
          //     radius: 60,
          //     center: ['84%', '75%'],
          //     encode: {
          //         itemName: 'product',
          //         value: '2017'
          //     }
          // }
        ]
        });
    }
    render() {
        return (
            <div className="EquipmentHome" style={{background: '#ebeef3'}}>
                <div id="main" style={{ width: '49%', height: 230,float: 'left',background: "#fff",marginRight: "1%" }}></div>
                <div id="main1" style={{ width: '50%', height: 230,float: 'left',background: "#fff" }}></div>
                <div id="main2" style={{ width: '49%', height: 300,float: 'left',background: "#fff",marginRight: "1%",marginTop: "20px" }}></div>
                <div id="main3" style={{ width: '50%', height: 300,float: 'left',background: "#fff",marginTop: "20px" }}></div>
                <div className="clearfix"></div>
            </div>
        );
    }
}

export default EquipmentHome;
