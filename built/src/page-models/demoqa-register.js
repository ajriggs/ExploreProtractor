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
var RegisterPage = (function (_super) {
    __extends(RegisterPage, _super);
    function RegisterPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.firstNameField = protractor_1.element(protractor_1.by.id('name_3_firstname'));
        _this.lastNameField = protractor_1.element(protractor_1.by.id('name_3_lastname'));
        _this.singleButton = protractor_1.element(protractor_1.by.css('input[value="single"]'));
        _this.marriedButton = protractor_1.element(protractor_1.by.css('input[value="married"]'));
        _this.divorcedButton = protractor_1.element(protractor_1.by.css('input[value="divorced"]'));
        _this.danceCheckbox = protractor_1.element(protractor_1.by.css('input[value="dance"]'));
        _this.readingCheckbox = protractor_1.element(protractor_1.by.css('input[value="reading"]'));
        _this.cricketCheckbox = protractor_1.element(protractor_1.by.css('input[value="cricket "]'));
        _this.country = protractor_1.element(protractor_1.by.css('option[value="United States"]'));
        _this.birthMonth = protractor_1.element(protractor_1.by.id('mm_date_8')).element(protractor_1.by.css('option[value="12"]'));
        _this.birthDay = protractor_1.element(protractor_1.by.css('option[value="31"]'));
        _this.birthYear = protractor_1.element(protractor_1.by.css('option[value="1991"]'));
        _this.phoneField = protractor_1.element(protractor_1.by.id('phone_9'));
        _this.usernameField = protractor_1.element(protractor_1.by.id('username'));
        _this.emailField = protractor_1.element(protractor_1.by.id('email_1'));
        //prop defning file upload field should go below
        _this.passwordField = protractor_1.element(protractor_1.by.id('password_2'));
        _this.confirmPasswordField = protractor_1.element(protractor_1.by.id('confirm_password_password_2'));
        _this.passwordStrengthDiv = protractor_1.element(protractor_1.by.id('piereg_passwordStrength'));
        _this.aboutMeArea = protractor_1.element(protractor_1.by.id('description'));
        return _this;
    }
    RegisterPage.prototype.enterFirstName = function (name) {
        this.firstNameField.sendKeys(name);
    };
    RegisterPage.prototype.enterLastName = function (name) {
        this.lastNameField.sendKeys(name);
    };
    // 'single', 'married', or 'divorced'
    RegisterPage.prototype.selectMaritalStatus = function (status) {
        switch (status) {
            case 'single':
                this.singleButton.click();
                break;
            case 'married':
                this.marriedButton.click();
                break;
            case 'divorced':
                this.divorcedButton.click();
                break;
        }
    };
    return RegisterPage;
}(page_abstract_1.default));
exports.default = RegisterPage;
//# sourceMappingURL=demoqa-register.js.map