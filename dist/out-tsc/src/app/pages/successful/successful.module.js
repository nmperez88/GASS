import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SuccessfulPage } from './successful.page';
var routes = [
    {
        path: '',
        component: SuccessfulPage
    }
];
var SuccessfulPageModule = /** @class */ (function () {
    function SuccessfulPageModule() {
    }
    SuccessfulPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SuccessfulPage]
        })
    ], SuccessfulPageModule);
    return SuccessfulPageModule;
}());
export { SuccessfulPageModule };
//# sourceMappingURL=successful.module.js.map