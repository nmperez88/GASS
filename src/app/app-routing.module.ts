import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'history', loadChildren: './history/history.module#HistoryPageModule' },
  { path: 'message', loadChildren: './message/message.module#MessagePageModule' },
  { path: 'history', loadChildren: './history/history.module#HistoryPageModule' },
  { path: 'successful', loadChildren: './successful/successful.module#SuccessfulPageModule' },
  { path: 'verification', loadChildren: './verification/verification.module#VerificationPageModule' },
  { path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
