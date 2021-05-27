import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManufactureComponent } from './manufacture/manufacture.component';

const routes: Routes = [{ path: '', component: ManufactureComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManufactureRoutingModule {}
