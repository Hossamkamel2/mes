import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexFill,
  ApexGrid,
  ApexAnnotations,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
  ApexStates,
  ApexTheme,
  ApexLegend
} from 'ng-apexcharts';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GridComponent, BarChart, CanvasRenderer]);
export type ChartOptions = {
  chart: ApexChart;
  annotations: ApexAnnotations;
  colors: string[];
  dataLabels: ApexDataLabels;
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  stroke: ApexStroke;
  labels: string[];
  legend: ApexLegend;
  fill: ApexFill;
  tooltip: ApexTooltip;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  states: ApexStates;
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  theme: ApexTheme;
};
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public barChart: Partial<ChartOptions>;
  public stackedBarChart: Partial<ChartOptions>;
  matListRender = true;
  matProfileRender = false;
  functionLineDate = null;

  option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      show: false
    },
    yAxis: {
      type: 'value',
      show: false
    },
    grid: {
      height: 200,
      width:280,
    },
    series: [
      {
        data: [
          {
            value: 120,
            itemStyle: { color: '#2E4A79' }
          },
          {
            value: 200,
            itemStyle: { color: '#00D3BE' }
          },
          {
            value: 150,
            itemStyle: { color: '#994F90' }
          },
          {
            value: 120,
            itemStyle: { color: '#CA4E82' }
          },
          {
            value: 200,
            itemStyle: { color: '#EC5967' }
          },
          {
            value: 200,
            itemStyle: { color: '#FB7644' }
          },
          {
            value: 150,
            itemStyle: { color: '#FFA600' }
          },
          {
            value: 170,
            itemStyle: { color: '#26D395' }
          },
          {
            value: 200,
            itemStyle: { color: '#00D1DE' }
          },
          {
            value: 150,
            itemStyle: { color: '#A0C73A' }
          },
          {
            value: 120,
            itemStyle: { color: '#003F5C' }
          },
          {
            value: 200,
            itemStyle: { color: '#D0BA05' }
          },
          {
            value: 150,
            itemStyle: { color: '#FF2366' }
          },
          {
            value: 120,
            itemStyle: { color: '#FF2366' }
          }
        ],
        type: 'bar',
        barMaxWidth: 20,

        itemStyle: {
          emphasis: {
            barBorderRadius: [50, 50]
          },
          normal: {
            barBorderRadius: [50, 50, 0, 0]
          }
        },
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  };

  constructor() {
    this.barChart = {
      series: [
        {
          name: 'distibuted',
          data: [21, 22, 10, 28, 16, 21, 13, 30]
        }
      ],
      chart: {
        toolbar: {
          show: false
        },
        height: 150,
        type: 'bar',
        events: {
          click: function(chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
      colors: [
        '#008FFB',
        '#00E396',
        '#FEB019',
        '#FF4560',
        '#775DD0',
        '#546E7A',
        '#26a69a',
        '#D10CE8'
      ],
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      yaxis: {
        labels: {
          show: false
        }
      },
      xaxis: {
        categories: [
          ['John', 'Doe'],
          ['Joe', 'Smith'],
          ['Jake', 'Williams'],
          'Amber',
          ['Peter', 'Brown'],
          ['Mary', 'Evans'],
          ['David', 'Wilson'],
          ['Lily', 'Roberts']
        ],
        labels: {
          show: false,
          style: {
            colors: [
              '#008FFB',
              '#00E396',
              '#FEB019',
              '#FF4560',
              '#775DD0',
              '#546E7A',
              '#26a69a',
              '#D10CE8'
            ],
            fontSize: '12px'
          }
        }
      }
    };
    this.stackedBarChart = {
      series: [
        {
          name: 'PRODUCT A',
          data: [44]
        },
        {
          name: 'PRODUCT B',
          data: [13]
        },
        {
          name: 'PRODUCT C',
          data: [11]
        },
        {
          name: 'PRODUCT D',
          data: [21]
        },
        {
          name: 'PRODUCT A',
          data: [44]
        },
        {
          name: 'PRODUCT B',
          data: [13]
        },
        {
          name: 'PRODUCT C',
          data: [11]
        },
        {
          name: 'PRODUCT D',
          data: [21]
        },
        {
          name: 'PRODUCT C',
          data: [11]
        },
        {
          name: 'PRODUCT D',
          data: [21]
        }
      ],
      chart: {
        toolbar: {
          show: false
        },
        height: 450,
        type: 'bar',
        stacked: true,
        events: {
          click: function(chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
      colors: [
        '#00D1DE',
        '#00A5B7',
        '#00879C',
        '#00637D',
        '#003F5C',
        '#003F5C',
        '#754B61',
        '#8E4F63',
        '#BD5364',
        '#EC5967'
      ],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      yaxis: {
        max: 200,
        labels: {
          show: true
        }
      },
      xaxis: {
        categories: [['John', 'Doe']],
        labels: {
          show: false,
          style: {
            colors: [
              '#008FFB',
              '#00E396',
              '#FEB019',
              '#FF4560',
              '#775DD0',
              '#546E7A',
              '#26a69a',
              '#D10CE8'
            ],
            fontSize: '12px'
          }
        }
      }
    };
  }

  ngOnInit(): void {}
  changeTab(tab: { index: number }) {
    if (tab.index == 0) {
      this.matListRender = true;
      this.matProfileRender = false;
    } else if (tab.index == 1) {
      this.matListRender = false;
      this.matProfileRender = true;
    }
  }
}
