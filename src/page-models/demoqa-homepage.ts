//import { ElementFinder } from 'protractor/built/element';
import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import DemoQaPage from './page-abstract'


export default class HomePage extends DemoQaPage {
    tabs = $$('#tab_ul li');

    clickOnTab(index: number) {
        let i: number = index - 1
        let tab = this.tabs.get(i);
        tab.click();
    }
    
};