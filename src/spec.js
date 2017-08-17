//spec.js
describe('Protractor Demo App', () => {
  const testUrl = 'http://juliemr.github.io/protractor-demo'
  let firstNumber = element(by.model('first'));
  let secondNumber = element(by.model('second'));
  let goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));
  var history = element.all(by.repeater('result in memory'));

  function add(a, b) {
    firstNumber.sendKeys(a);
    secondNumber.sendKeys(b);
    goButton.click();
  }

  beforeEach( () => {
    browser.get(testUrl);
  });

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('Super Calculator');
  });

  it('should add one and two', () => {
    add(1, 2);

    expect(latestResult.getText()).toEqual('3');
  });

  it('should add four and six', () => {
    add(4, 6);

    expect(latestResult.getText()).toEqual('10');
  });

  it('should keep a history', () => {
    add(1, 2);
    add(4, 6);

    expect(history.last().getText()).toContain('1 + 2');
    expect(history.first().getText()).toContain('4 + 6');
  });
});
