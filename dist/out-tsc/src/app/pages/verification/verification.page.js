import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
var VerificationPage = /** @class */ (function () {
    function VerificationPage(modalController) {
        this.modalController = modalController;
    }
    VerificationPage.prototype.ngOnInit = function () { };
    VerificationPage.prototype.modalDismiss = function () {
        this.modalController.dismiss();
    };
    VerificationPage = tslib_1.__decorate([
        Component({
            selector: 'app-verification',
            templateUrl: './verification.page.html',
            styleUrls: ['./verification.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController])
    ], VerificationPage);
    return VerificationPage;
}());
export { VerificationPage };
//# sourceMappingURL=verification.page.js.map