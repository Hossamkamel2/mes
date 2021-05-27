import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourcesComponent } from './resources.component';

import { ResourceRoutingModule } from './resources-routing.module';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgApexchartsModule } from 'ng-apexcharts';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HttpClientModule } from '@angular/common/http';
import { NavigatorComponent } from './navigator/navigator.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SupplyComponent } from './supply/supply.component';
import { WeightComponent } from './weight/weight.component';
import { ConsumptionComponent } from './consumption/consumption.component';
import { ProductScrapComponent } from './product-scrap/product-scrap.component';

import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';

import { GoogleChartsModule } from 'angular-google-charts';
import { MatExpansionModule } from '@angular/material/expansion';
@NgModule({
  declarations: [
    ResourcesComponent,
    NavigatorComponent,
    TimelineComponent,
    SupplyComponent,
    WeightComponent,
    ConsumptionComponent,
    ProductScrapComponent,
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonToggleModule,
    ResourceRoutingModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    GoogleChartsModule,
    MatProgressBarModule,
    MatExpansionModule,
    // FusionChartsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 10,
      innerStrokeWidth: 0,
      outerStrokeColor: '#d63384',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
    NgApexchartsModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
  ],
  providers: [],
  bootstrap: [ResourcesComponent],
})
export class ResourcesModule {}
