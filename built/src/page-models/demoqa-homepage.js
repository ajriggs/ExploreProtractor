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
var protractor_1 = require("protractor");
var page_abstract_1 = require("./page-abstract");
var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tabs = protractor_1.$$('#tab_ul li');
        //note: check if it's possible to use TypeScript to destructure these declarations
        _this.tab1 = _this.tabs.get(0);
        _this.tab2 = _this.tabs.get(1);
        _this.tab3 = _this.tabs.get(2);
        _this.tab4 = _this.tabs.get(3);
        _this.tab5 = _this.tabs.get(4);
        return _this;
    }
    HomePage.prototype.isTabSelected = function (tab) {
        tab.getAttribute('aria-selected').then(function (result) {
            return result == 'true' ? true : false;
        });
    };
    return HomePage;
}(page_abstract_1.default));
exports.default = HomePage;
;
//# sourceMappingURL=demoqa-homepage.js.map