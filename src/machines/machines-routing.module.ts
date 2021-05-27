import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MacinesComponent } from './macines/macines.component';

const routes: Routes = [{ path: '', component: MacinesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachinesRoutingModule {}
