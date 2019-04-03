import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var HistoryPage = /** @class */ (function () {
    function HistoryPage() {
        this.icons = [
            'flask',
            'wifi',
            'beer',
            'football',
            'basketball',
            'paper-plane',
            'american-football',
            'boat',
            'bluetooth',
            'build'
        ];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    HistoryPage.prototype.ngOnInit = function () {
    };
    HistoryPage = tslib_1.__decorate([
        Component({
            selector: 'app-history',
            templateUrl: './history.page.html',
            styleUrls: ['./history.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], HistoryPage);
    return HistoryPage;
}());
export { HistoryPage };
//# sourceMappingURL=history.page.js.map