import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VerificationPage } from '../verification/verification.page';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../../model/user';
var RegistrationPage = /** @class */ (function () {
    function RegistrationPage(modalController, afAuth) {
        this.modalController = modalController;
        this.afAuth = afAuth;
        this.user = new User('', '', '', '', '', '');
    }
    RegistrationPage.prototype.ngOnInit = function () {
    };
    RegistrationPage.prototype.register = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var user, res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = this.user;
                        console.dir(user);
                        console.log(user);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword('ry', 'TeamGASSTest').catch(function (error) {
                                if (error.code === 'auth/email-already-in-use') {
                                    alert('Existe una cuenta con el mismo correo');
                                    return false;
                                }
                                if (error.code === 'auth/invalid-email') {
                                    alert('Correo no válido');
                                    return false;
                                }
                                if (error.code === 'auth/operation-not-allowed') {
                                    alert('Cuenta deshabilitada');
                                    return false;
                                }
                                if (error.code === 'auth/weak-password') {
                                    alert('Clave muy débil');
                                    return false;
                                }
                                return true;
                            })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistrationPage.prototype.verificationPage = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: VerificationPage,
                            cssClass: 'modalVerification',
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistrationPage = tslib_1.__decorate([
        Component({
            selector: 'app-registration',
            templateUrl: './registration.page.html',
            styleUrls: ['./registration.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            AngularFireAuth])
    ], RegistrationPage);
    return RegistrationPage;
}());
export { RegistrationPage };
//# sourceMappingURL=registration.page.js.map