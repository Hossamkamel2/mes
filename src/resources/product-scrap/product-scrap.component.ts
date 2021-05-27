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
  ApexLegend,
} from 'ng-apexcharts';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
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
  selector: 'app-product-scrap',
  templateUrl: './product-scrap.component.html',
  styleUrls: ['./product-scrap.component.css'],
})
export class ProductScrapComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public barChart: Partial<ChartOptions>;
  public stackedBarChart: Partial<ChartOptions>;
  public bubbleChart: Partial<ChartOptions>;
  matListRender = true;
  matProfileRender = false;
  functionLineDate = null;
  chart2;

  constructor() {
    this.chart2 = {
      title: 'snakey',
      type: 'Sankey',
      data: [
        ['Brazil', 'Portugal', 5],
        ['Brazil', 'France', 1],
        ['Brazil', 'Spain', 1],
        ['Brazil', 'England', 1],
        ['Canada', 'Portugal', 1],
        ['Canada', 'France', 5],
        ['Canada', 'England', 1],
        ['Mexico', 'Portugal', 1],
        ['Mexico', 'France', 1],
        ['Mexico', 'Spain', 5],
        ['Mexico', 'England', 1],
        ['USA', 'Portugal', 1],
        ['USA', 'France', 1],
        ['USA', 'Spain', 1],
        ['USA', 'England', 5],
        ['Portugal', 'Angola', 2],
        ['Portugal', 'Senagal', 1],
        ['Portugal', 'Morocco', 1],
        ['Portugal', 'South Africa', 3],
      ],
      columnNames: ['From', 'To', 'Weight'],
      options: {},
      width: 550,
      height: 400,
    };

    this.barChart = {
      series: [
        {
          name: 'distibuted',
          data: [21, 22, 10, 28, 16, 21, 13, 30],
        },
      ],
      chart: {
        toolbar: {
          show: false,
        },
        height: 150,
        type: 'bar',
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          },
        },
      },
      colors: [
        '#008FFB',
        '#00E396',
        '#FEB019',
        '#FF4560',
        '#775DD0',
        '#546E7A',
        '#26a69a',
        '#D10CE8',
      ],
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      grid: {
        show: false,
      },
      yaxis: {
        labels: {
          show: false,
        },
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
          ['Lily', 'Roberts'],
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
              '#D10CE8',
            ],
            fontSize: '12px',
          },
        },
      },
    };
    this.stackedBarChart = {
      series: [
        {
          name: 'PRODUCT A',
          data: [44],
        },
        {
          name: 'PRODUCT B',
          data: [13],
        },
        {
          name: 'PRODUCT C',
          data: [11],
        },
        {
          name: 'PRODUCT D',
          data: [21],
        },
        {
          name: 'PRODUCT A',
          data: [44],
        },
        {
          name: 'PRODUCT B',
          data: [13],
        },
        {
          name: 'PRODUCT C',
          data: [11],
        },
        {
          name: 'PRODUCT D',
          data: [21],
        },
        {
          name: 'PRODUCT C',
          data: [11],
        },
        {
          name: 'PRODUCT D',
          data: [21],
        },
      ],
      chart: {
        toolbar: {
          show: false,
        },
        height: 450,
        type: 'bar',
        stacked: true,
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          },
        },
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
        '#EC5967',
      ],
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      grid: {
        show: false,
      },
      yaxis: {
        max: 200,
        labels: {
          show: true,
        },
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
              '#D10CE8',
            ],
            fontSize: '12px',
          },
        },
      },
    };
    // this.bubbleChart = {
    //   series: [
    //     {
    //       name: 'Bubble1',
    //       data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
    //         min: 10,
    //         max: 60,
    //       }),
    //     },
    //     {
    //       name: 'Bubble2',
    //       data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
    //         min: 10,
    //         max: 60,
    //       }),
    //     },
    //     {
    //       name: 'Bubble3',
    //       data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
    //         min: 10,
    //         max: 60,
    //       }),
    //     },
    //     {
    //       name: 'Bubble4',
    //       data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
    //         min: 10,
    //         max: 60,
    //       }),
    //     },
    //   ],
    //   chart: {
    //     height: 350,
    //     type: 'bubble',
    //   },
    //   legend: {
    //     show: false,
    //   },
    //   grid: {
    //     show: false,
    //   },
    //   dataLabels: {
    //     enabled: false,
    //   },
    //   fill: {
    //     opacity: 0.8,
    //   },
    //   title: {
    //     text: 'Simple Bubble Chart',
    //   },
    //   xaxis: {
    //     labels: {
    //       show: false,
    //     },
    //     tickAmount: 12,
    //     type: 'category',
    //   },
    //   yaxis: {
    //     max: 70,
    //   },
    // };
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
  generateData(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
}
