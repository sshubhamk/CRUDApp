import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SesssionManagerComponent } from './sesssion-manager/sesssion-manager.component';

const routes: Routes = [
  {
    path: '*',
    redirectTo: 'users',
    pathMatch: 'full' },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'session-manager',
    component: SesssionManagerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
