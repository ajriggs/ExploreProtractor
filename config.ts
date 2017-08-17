import { Config } from 'protractor';

//config.ts
export let config: Config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['src/demo.js'],
  noGlobals: true,
  capabilities: {
    browserName: 'firefox'
  }
};
