import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RegistrationPage } from './registration.page';
import { VerificationPage } from '../verification/verification.page';
var routes = [
    {
        path: '',
        component: RegistrationPage
    }
];
var RegistrationPageModule = /** @class */ (function () {
    function RegistrationPageModule() {
    }
    RegistrationPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [RegistrationPage, VerificationPage],
            entryComponents: [VerificationPage]
        })
    ], RegistrationPageModule);
    return RegistrationPageModule;
}());
export { RegistrationPageModule };
//# sourceMappingURL=registration.module.js.map