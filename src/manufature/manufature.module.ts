import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManufactureComponent } from './manufacture/manufacture.component';
import { FlowchartComponent } from './flowchart/flowchart.component';
import { JobOrdersComponent } from './job-orders/job-orders.component';
import { RoutesComponent } from './routes/routes.component';
import { ProcessComponent } from './process/process.component';
import { OutputComponent } from './output/output.component';
import { ManufactureRoutingModule } from './manufacture-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
@NgModule({
  declarations: [
    ManufactureComponent,
    FlowchartComponent,
    JobOrdersComponent,
    RoutesComponent,
    ProcessComponent,
    OutputComponent,
  ],
  imports: [
    CommonModule,
    ManufactureRoutingModule,
    MatTabsModule,
    MatCardModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
    HttpClientModule,
    MatListModule,
    NgApexchartsModule,
    MatMenuModule,
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressBarModule,
    NgCircleProgressModule.forRoot({
      // set defaults here

      outerStrokeWidth: 16,
      innerStrokeWidth: 0,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
    RoundProgressModule,
    MatListModule,
  ],
})
export class ManufatureModule {}
