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
} from "ng-apexcharts";
import {MatMenuModule} from '@angular/material/menu';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
//import { FormGroup, FormControl } from '@angular/forms';
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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public inChart: Partial<ChartOptions>;
  public outChart: Partial<ChartOptions>;
  public oilChart: Partial<ChartOptions>;

  inChartRender= true;
  outChartRender = false;
  oilChartRender = false;
  functionLineDate = null;
  constructor() {

    this.inChart = {
      series: [
        {
          name: "Pressure",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "Temprature",
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      chart: {
        height: 550,
        type: "line"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
    this.outChart = {
      series: [
        {
          name: "Pressure",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "Temprature",
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      chart: {
        height: 550,
        type: "line"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
    this.oilChart = {
      series: [
        {
          name: "Pressure",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "Temprature",
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      chart: {
        height: 550,
        type: "line"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
  }


  ngOnInit(): void {
  }
  changeTab(tab: { index: number; })
  {
    if(tab.index == 0)
    {
      this.inChartRender = true;
      this.oilChartRender = false;
      this.outChartRender = false;
    }
    else if(tab.index == 1){
      this.inChartRender = false;
      this.oilChartRender = false;
      this.outChartRender = true;
    }
    else if(tab.index == 2){
      this.inChartRender = false;
      this.oilChartRender = true;
      this.outChartRender = false;
    }
  }


}
