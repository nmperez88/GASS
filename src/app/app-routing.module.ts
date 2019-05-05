import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'verification', loadChildren: './pages/public/verification/verification.module#VerificationPageModule' },
  { path: 'registration', loadChildren: './pages/public/registration/registration.module#RegistrationPageModule' },
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
