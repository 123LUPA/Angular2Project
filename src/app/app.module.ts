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
import {UserService} from "./user.service";
import {NavComponent} from "./nav.component";
import {BookDetailsComponent} from "./book-details.component";
import {routing} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NavComponent,
      BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing


  ],
  providers: [BooksService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
