import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'verification', loadChildren: './pages/public/verification/verification.module#VerificationPageModule' },
  { path: 'registration', loadChildren: './pages/public/registration/registration.module#RegistrationPageModule' },
  // { path: 'home', loadChildren: './pages/secure/home/home.module#HomePageModule' },
  // { path: 'list', loadChildren: './pages/secure/list/list.module#ListPageModule' },
  // { path: 'profile', loadChildren: './pages/secure/profile/profile.module#ProfilePageModule' },
  // { path: 'history', loadChildren: './pages/secure/history/history.module#HistoryPageModule' },
  // { path: 'message', loadChildren: './pages/secure/message/message.module#MessagePageModule' },
  // { path: 'history', loadChildren: './pages/secure/history/history.module#HistoryPageModule' },
  // { path: 'successful', loadChildren: './pages/secure/successful/successful.module#SuccessfulPageModule' },
  // { path: 'billing', loadChildren: './pages/secure/billing/billing.module#BillingPageModule' },
  // { path: 'tabs', loadChildren: './pages/secure/tabs/tabs.module#TabsPageModule' },
  // { path: 'truck', loadChildren: './pages/secure/truck/truck.module#TruckPageModule' },
  {
    path: 'secure',
    canActivate: [AuthenticationGuard],
    loadChildren: './routing/secure-routing.module#SecureRoutingModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
