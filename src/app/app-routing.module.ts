import {NgModule, ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookDetailsComponent} from "./book-details.component";
import {DashboardComponent} from "./dashboard.component";
import {LoginComponent} from "./login.component";
import {RegisterComponent} from "./register.component";

const routes: Routes = [
    {
      path:'login',
      component: LoginComponent
    },

    {
      path:'register',
      component: RegisterComponent
    },
    {

      path: 'dashboard',

      component: DashboardComponent,
      children: [
        { path: '' },
        { path: 'details',  component: BookDetailsComponent },
      ]

    },

    {

      path: '',

      redirectTo: '/dashboard',

      pathMatch: 'full'

    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProjectAngular2RoutingModule { }
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
