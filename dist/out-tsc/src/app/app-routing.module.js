import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './pages/home/home.module#HomePageModule'
    },
    {
        path: 'list',
        loadChildren: './pages/list/list.module#ListPageModule'
    },
    { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
    { path: 'history', loadChildren: './pages/history/history.module#HistoryPageModule' },
    { path: 'message', loadChildren: './pages/message/message.module#MessagePageModule' },
    { path: 'successful', loadChildren: './pages/successful/successful.module#SuccessfulPageModule' },
    { path: 'verification', loadChildren: './pages/verification/verification.module#VerificationPageModule' },
    { path: 'registration', loadChildren: './pages/registration/registration.module#RegistrationPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map