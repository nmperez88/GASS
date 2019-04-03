import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
var SuccessfulPage = /** @class */ (function () {
    function SuccessfulPage(modalController, navController) {
        this.modalController = modalController;
        this.navController = navController;
    }
    SuccessfulPage.prototype.ngOnInit = function () { };
    SuccessfulPage.prototype.modalDismiss = function () {
        this.modalController.dismiss();
    };
    SuccessfulPage.prototype.successfulOpenMessagePage = function () {
        this.navController.navigateForward('/message');
        this.modalDismiss();
    };
    SuccessfulPage = tslib_1.__decorate([
        Component({
            selector: 'app-successful',
            templateUrl: './successful.page.html',
            styleUrls: ['./successful.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            NavController])
    ], SuccessfulPage);
    return SuccessfulPage;
}());
export { SuccessfulPage };
//# sourceMappingURL=successful.page.js.map