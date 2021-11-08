import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListstockComponent } from './components/liststock/liststock.component';
import { DeletestockComponent } from './components/deletestock/deletestock.component';
import { AddsectorComponent } from './components/addsector/addsector.component';
import { AddipoComponent } from './components/addipo/addipo.component';
import { DeletecmpComponent } from './components/deletecmp/deletecmp.component';
import { AddcompanyComponent } from './components/addcompany/addcompany.component';
import { AddstockComponent } from './components/addstock/addstock.component';
import { SetuserComponent } from './components/setuser/setuser.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CompanypageComponent } from './components/companypage/companypage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { StockpageComponent } from './components/stockpage/stockpage.component';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    AddcompanyComponent,
    AddstockComponent,
    ListstockComponent,
    DeletestockComponent,
    AddsectorComponent,
    AddipoComponent,
    DeletecmpComponent,
    SetuserComponent,
    HomepageComponent,
    CompanypageComponent,
    LoginpageComponent,
    StockpageComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
