
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {AccountComponent} from "./account/account.component";
import {AddNewUserComponent} from "./add-new-user/add-new-user.component";

export const routes: Routes = [




  {path: '',component:MainComponent, children:[
    {path: '', component: AccountComponent},
    {path: 'addnewuser', component: AddNewUserComponent},


  ]},


];
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

