import { ElementFinder } from 'protractor/built/element';
import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import DemoQaPage from './page-abstract'


export default class HomePage extends DemoQaPage {
    tabs = $$('#tab_ul li');

    //note: check if it's possible to use TypeScript to destructure these declarations
    tab1 = this.tabs.get(0);
    tab2 = this.tabs.get(1);
    tab3 = this.tabs.get(2);
    tab4 = this.tabs.get(3);
    tab5 = this.tabs.get(4);
    

    isTabSelected(tab: ElementFinder) {
        tab.getAttribute('aria-selected').then(result => {
            return result == 'true' ? true : false;
        });
        
    }
};