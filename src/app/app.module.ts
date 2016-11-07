import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login.component";
import {RegisterComponent} from "./register.component";
import {DashboardComponent} from "./dashboard.component";
import {BooksService} from "./books.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    RouterModule.forRoot([
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

        component: DashboardComponent

      },

      {

        path: '',

        redirectTo: '/dashboard',

        pathMatch: 'full'

      },
    ])

  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
