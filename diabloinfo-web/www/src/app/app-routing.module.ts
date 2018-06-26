import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard/leaderboard.component';

const appRoutes: Routes = [
  {path: 'leaderboard', component: LeaderboardComponent},
  {
    path: '',
    redirectTo: 'leaderboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

 }
