import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineComponent } from './timeline/timeline.component';
import { SupplyComponent } from './supply/supply.component';
import { ConsumptionComponent } from './consumption/consumption.component';
import { WeightComponent } from './weight/weight.component';
import { ProductScrapComponent } from './product-scrap/product-scrap.component';
import { ResourcesComponent } from './resources.component';
const routes: Routes = [
  { path: 'resources', component: ResourcesComponent,
},
{ path: 'timeline', component: TimelineComponent,
},
{ path: 'supply', component: SupplyComponent,
},
{ path: 'weight', component: WeightComponent,
},
{ path: 'consumption', component: ConsumptionComponent,
},
{ path: 'product-scrap', component: ProductScrapComponent,
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourceRoutingModule { }
