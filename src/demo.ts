import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import HomePage from './page-models/demoqa-homepage';
import RegisterPage from './page-models/demoqa-register'

browser.ignoreSynchronization = true;

describe('DemoQA Home Page', () => {

  beforeEach( () => {
    new HomePage().visit("http://demoqa.com/");
  });

  it('should update any changed tabs', () => {
    let page = new HomePage();
    page.clickOnTab(3);

    //write getter for tab at index (1-indexed)
    expect(page.tabs.get(2).getAttribute('aria-selected')).toEqual('true');
    expect(page.tabs.get(0).getAttribute('aria-selected')).toEqual('false');

  });
  
});

describe('DemoQA Registration Page', () => {

  beforeEach( () => {
    new RegisterPage().visit("http://demoqa.com/registration/");
  });

  it('should let me enter my name', () => {
    let page = new RegisterPage();
    page.enterFirstName('Aaron');
    page.enterLastName('Riggs');
    page.selectMaritalStatus('single');
    expect(page.singleButton.isSelected()).toBe(true);
    expect(page.marriedButton.isSelected()).toBe(false);

    /*html elements
    let firstNameField = element(by.id('name_3_firstname'));
    let lastNameField = element(by.id('name_3_lastname'));
    let singleButton = element(by.css('input[value="single"]'));
    let marriedButton = element(by.css('input[value="married"]'));
    let danceCheckbox = element(by.css('input[value="dance"]'));
    let readingCheckbox = element(by.css('input[value="reading"]'));
    let cricketCheckbox = element(by.css('input[value="cricket "]'));
    let country = element(by.css('option[value="United States"]'));
    let birthMonth = element(by.id('mm_date_8')).element(by.css('option[value="12"]'));
    let birthDay = element(by.css('option[value="31"]'));
    let birthYear = element(by.css('option[value="1991"]'));
    let phoneField = element(by.id('phone_9'));
    let usernameField = element(by.id('username'));
    let emailField = element(by.id('email_1'));
    //code for file upload field goes here
    let aboutMeArea = element(by.id('description'));
    let passwordField = element(by.id('password_2'));
    let confirmPasswordField = element(by.id('confirm_password_password_2'));
    let passwordStrengthDiv = element(by.id('piereg_passwordStrength'));
 
    //scenario procedures
    firstNameField.sendKeys('john');
    lastNameField.sendKeys('doe');
    singleButton.click();
    danceCheckbox.click();
    readingCheckbox.click();
    cricketCheckbox.click();
    country.click();
    birthMonth.click();
    birthDay.click();
    birthYear.click();
    phoneField.sendKeys('123-989-4141');
    usernameField.sendKeys('jonnydobro');
    emailField.sendKeys('jdbro@guerrilla.com');
    aboutMeArea.sendKeys('lorem ipsum placeholder');
    passwordField.sendKeys('blah');
    expect(passwordStrengthDiv.getText()).toEqual('Very weak');

*/
   

  });
});