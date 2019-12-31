import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import{ LogrosComponent } from "./logros/logros.component";
import { HomeComponent } from './home/home.component';

const app_routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'logros', component: LogrosComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes);