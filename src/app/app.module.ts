import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';

import { FooterComponent } from './component/footer/footer.component';
import { StandingsComponent } from './component/standings/standings.component';
import { WdcComponent } from './component/wdc/wdc.component';
import { WccComponent } from './component/wcc/wcc.component';
import { TeamsComponent } from './component/teams/teams.component';
import { DriversComponent } from './component/drivers/drivers.component';
import { ResultsComponent } from './component/results/results.component';
import { Season1Component } from './component/season1/season1.component';
import { AdminComponent } from './component/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    StandingsComponent,
    WdcComponent,
    WccComponent,
    TeamsComponent,
    DriversComponent,
    ResultsComponent,
    Season1Component,
    AdminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
