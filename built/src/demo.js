"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var demoqa_homepage_1 = require("./page-models/demoqa-homepage");
var demoqa_register_1 = require("./page-models/demoqa-register");
protractor_1.browser.ignoreSynchronization = true;
describe('DemoQA Home Page', function () {
    beforeEach(function () {
        new demoqa_homepage_1.default().visit("http://demoqa.com/");
    });
    it('should update any changed tabs', function () {
        var page = new demoqa_homepage_1.default();
        var tab1 = page.tab1;
        var tab3 = page.tab3;
        expect(page.isTabSelected(tab1)).toBe(true);
        expect(page.isTabSelected(tab3)).toBe(false);
        tab3.click();
        expect(page.isTabSelected(tab1)).toBe(false);
        expect(page.isTabSelected(page.tab3)).toBe(true);
    });
});
describe('DemoQA Registration Page', function () {
    beforeEach(function () {
        new demoqa_register_1.default().visit("http://demoqa.com/registration/");
    });
    it('should highlight the selected radio button', function () {
        var page = new demoqa_register_1.default();
        page.selectMaritalStatus('single');
        expect(page.singleButton.isSelected()).toBe(true);
        expect(page.marriedButton.isSelected()).toBe(false);
    });
    it('should allow me to check all checkboxes', function () {
        var page = new demoqa_register_1.default();
        page.danceCheckbox.click();
        page.readingCheckbox.click();
        page.cricketCheckbox.click();
        expect(page.danceCheckbox.isSelected()).toBe(true);
        expect(page.readingCheckbox.isSelected()).toBe(true);
        expect(page.cricketCheckbox.isSelected()).toBe(true);
    });
});
//# sourceMappingURL=demo.js.map