import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/Geolocation/ngx';
import { LoadingController, ModalController } from '@ionic/angular';
import { SuccessfulPage } from '../successful/successful.page';
var HomePage = /** @class */ (function () {
    function HomePage(geolocation, loadingController, modalController) {
        this.geolocation = geolocation;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.currentNumber = 0;
        this.mapRef = null;
    }
    HomePage.prototype.ngOnInit = function () {
        this.loadMap();
    };
    HomePage.prototype.successfulPage = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: SuccessfulPage,
                            cssClass: 'modalSuccessful',
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
    HomePage.prototype.loadMap = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loading, myLatLng, mapEle, map;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create()];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        return [4 /*yield*/, this.getLocation()];
                    case 2:
                        myLatLng = _a.sent();
                        console.log(myLatLng);
                        mapEle = document.querySelector('#homeMap');
                        map = new google.maps.Map(mapEle, {
                            center: myLatLng,
                            zoom: 12,
                            disableDefaultUI: true
                        });
                        google.maps.event.addListenerOnce(map, 'idle', function () {
                            loading.dismiss();
                            _this.addMaker(myLatLng.lat, myLatLng.lng);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.addMaker = function (lat, lng) {
        var marker = new google.maps.Marker({
            position: { lat: lat, lng: lng },
            map: this.mapRef,
            title: 'Hello World!'
        });
    };
    HomePage.prototype.getLocation = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var rta;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.geolocation.getCurrentPosition()];
                    case 1:
                        rta = _a.sent();
                        return [2 /*return*/, {
                                lat: rta.coords.latitude,
                                lng: rta.coords.longitude
                            }];
                }
            });
        });
    };
    HomePage.prototype.increment = function () {
        this.currentNumber++;
    };
    HomePage.prototype.decrement = function () {
        this.currentNumber--;
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Geolocation,
            LoadingController,
            ModalController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map