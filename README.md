# ExploreProtractor
An example project for checking out the AngularJS testing framework, Protractor.

To run tests:

1. Upon any change to TypeScript files, run ```tsc``` to compile tpyescript files from TypeScript to ES5
2. use the shell command ```webdriver-manager start``` to initiate a local instance of the selenium server.
3. Execute the test suite with the command ```protractor <path/to/built/config.js>```
