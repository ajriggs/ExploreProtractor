import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

export default abstract class DemoQaPage {
    visit(url: string) {
        browser.get(url)
    }
}