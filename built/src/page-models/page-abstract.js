"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var DemoQaPage = (function () {
    function DemoQaPage() {
    }
    DemoQaPage.prototype.visit = function (url) {
        protractor_1.browser.get(url);
    };
    return DemoQaPage;
}());
exports.default = DemoQaPage;
//# sourceMappingURL=page-abstract.js.map