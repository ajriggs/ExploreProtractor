import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import DemoQaPage from './page-abstract';

export default class RegisterPage extends DemoQaPage {
    firstNameField = element(by.id('name_3_firstname'));
    lastNameField = element(by.id('name_3_lastname'));
    singleButton = element(by.css('input[value="single"]'));
    marriedButton = element(by.css('input[value="married"]'));
    divorcedButton = element(by.css('input[value="divorced"]'));
    danceCheckbox = element(by.css('input[value="dance"]'));
    readingCheckbox = element(by.css('input[value="reading"]'));
    cricketCheckbox = element(by.css('input[value="cricket "]'));
    country = element(by.css('option[value="United States"]'));
    birthMonth = element(by.id('mm_date_8')).element(by.css('option[value="12"]'));
    birthDay = element(by.css('option[value="31"]'));
    birthYear = element(by.css('option[value="1991"]'));
    phoneField = element(by.id('phone_9'));
    usernameField = element(by.id('username'));
    emailField = element(by.id('email_1'));
    //prop defning file upload field should go below

    passwordField = element(by.id('password_2'));
    confirmPasswordField = element(by.id('confirm_password_password_2'));
    passwordStrengthDiv = element(by.id('piereg_passwordStrength'));
    aboutMeArea = element(by.id('description'));

    enterFirstName(name: string): void {
        this.firstNameField.sendKeys(name);
    }

    enterLastName(name: string): void {
        this.lastNameField.sendKeys(name);
    }

    // 'single', 'married', or 'divorced'
    selectMaritalStatus(status: string): void {
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
    }
    
    
}