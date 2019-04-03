import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HistoryPage } from './history.page';
var routes = [
    {
        path: '',
        component: HistoryPage
    }
];
var HistoryPageModule = /** @class */ (function () {
    function HistoryPageModule() {
    }
    HistoryPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [HistoryPage]
        })
    ], HistoryPageModule);
    return HistoryPageModule;
}());
export { HistoryPageModule };
//# sourceMappingURL=history.module.js.map