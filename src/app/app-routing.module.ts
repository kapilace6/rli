import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { StandingsComponent } from './component/standings/standings.component';
import { WdcComponent } from './component/wdc/wdc.component';
import { WccComponent } from './component/wcc/wcc.component';
import { TeamsComponent } from './component/teams/teams.component';
import { DriversComponent } from './component/drivers/drivers.component';
import { ResultsComponent } from './component/results/results.component';
import { Season1Component } from './component/season1/season1.component';
import { AdminComponent } from './component/admin/admin.component';

const routes: Routes = [
    {path:'', redirectTo:'/home', pathMatch: 'full' },

    { path: 'home', component: HomeComponent },
    { path: 'standings', component: StandingsComponent },
    { path: 'wdc', component: WdcComponent },
    { path: 'wcc', component: WccComponent },
    { path: 'teams', component: TeamsComponent },
    { path: 'drivers', component: DriversComponent },
    { path: 'results', component: ResultsComponent },
    { path: 'season1', component: Season1Component },
    { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
