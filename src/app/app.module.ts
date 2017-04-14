import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing, appRoutingProviders} from "./app.routes";
import { AlertModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AccountComponent } from './account/account.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AppNameComponent } from './app-name/app-name.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AccountComponent,
    AddNewUserComponent,
    UserDetailComponent,
    AppNameComponent
  ],
  imports: [
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
