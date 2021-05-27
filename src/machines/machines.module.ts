import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MacinesComponent } from './macines/macines.component';
import { MachinesRoutingModule } from './machines-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { HistoryComponent } from './history/history.component';
import { DigitaltwinComponent } from './digitaltwin/digitaltwin.component';
import { InformationComponent } from './information/information.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { NgApexchartsModule } from 'ng-apexcharts';
@NgModule({
  declarations: [
    MacinesComponent,
    HistoryComponent,
    DigitaltwinComponent,
    InformationComponent,
    StatisticsComponent,
  ],
  imports: [
    CommonModule,
    MachinesRoutingModule,
    MatTabsModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonToggleModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 10,
      innerStrokeWidth: 0,
      outerStrokeColor: '#d63384',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatInputModule,
    NgApexchartsModule,
  ],
})
export class MachinesModule {}
