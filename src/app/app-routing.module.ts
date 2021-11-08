import { StockpageComponent } from './components/stockpage/stockpage.component';
import { CompanypageComponent } from './components/companypage/companypage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SetuserComponent } from './components/setuser/setuser.component';
import { ListstockComponent } from './components/liststock/liststock.component';
import { DeletestockComponent } from './components/deletestock/deletestock.component';
import { DeletecmpComponent } from './components/deletecmp/deletecmp.component';
import { AddipoComponent } from './components/addipo/addipo.component';
import { AddsectorComponent } from './components/addsector/addsector.component';
import { AddcompanyComponent } from './components/addcompany/addcompany.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstockComponent } from './components/addstock/addstock.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login',component:LoginpageComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'addStock',component:AddstockComponent},
  {path:'addcmp',component:AddcompanyComponent},
  {path:'addsector',component:AddsectorComponent},
  {path:'addipo',component:AddipoComponent},
  {path:'deletecmp',component:DeletecmpComponent},
  {path:'deletestock',component:DeletestockComponent},
  {path:'liststock',component:ListstockComponent},
  {path:'setuser',component:SetuserComponent},
  {path:'companypage',component:CompanypageComponent},
  {path:'stockpage',component:StockpageComponent},
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
