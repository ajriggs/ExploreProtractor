import { ElementFinder } from 'protractor/built/element';
import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import HomePage from './page-models/demoqa-homepage';
import RegisterPage from './page-models/demoqa-register'

browser.ignoreSynchronization = true;

describe('DemoQA Home Page', () => {

  beforeEach( () => {
    new HomePage().visit("http://demoqa.com/");
  });

  it('should update any changed tabs', () => {
    let page: HomePage = new HomePage();
    let tab1: ElementFinder = page.tab1;
    let tab3: ElementFinder = page.tab3;
    
    expect(page.isTabSelected(tab1)).toBe(true);
    expect(page.isTabSelected(tab3)).toBe(false);
    tab3.click();
    expect(page.isTabSelected(tab1)).toBe(false);
    expect(page.isTabSelected(page.tab3)).toBe(true);
  });
  
});

describe('DemoQA Registration Page', () => {

  beforeEach( () => {
    new RegisterPage().visit("http://demoqa.com/registration/");
  });

  it('should highlight the selected radio button', () => {
    let page: RegisterPage = new RegisterPage();
    page.selectMaritalStatus('single');
    expect(page.singleButton.isSelected()).toBe(true);
    expect(page.marriedButton.isSelected()).toBe(false);
  });

  it('should allow me to check all checkboxes', () => {
    let page: RegisterPage = new RegisterPage();
    page.danceCheckbox.click();
    page.readingCheckbox.click();
    page.cricketCheckbox.click();

    expect(page.danceCheckbox.isSelected()).toBe(true);
    expect(page.readingCheckbox.isSelected()).toBe(true);
    expect(page.cricketCheckbox.isSelected()).toBe(true);
  });
   
});