import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'resource',
    loadChildren: () =>
      import('../resources/resources.module').then((m) => m.ResourcesModule),
  },

  {
    path: 'manufacture',
    loadChildren: () =>
      import('../manufature/manufature.module').then((m) => m.ManufatureModule),
  },
  {
    path: 'machines',
    loadChildren: () =>
      import('../machines/machines.module').then((m) => m.MachinesModule),
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
