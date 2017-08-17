"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//import { ElementFinder } from 'protractor/built/element';
var protractor_1 = require("protractor");
var page_abstract_1 = require("./page-abstract");
var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tabs = protractor_1.$$('#tab_ul li');
        return _this;
    }
    HomePage.prototype.clickOnTab = function (index) {
        var i = index - 1;
        var tab = this.tabs.get(i);
        tab.click();
    };
    return HomePage;
}(page_abstract_1.default));
exports.default = HomePage;
;
//# sourceMappingURL=demoqa-homepage.js.map