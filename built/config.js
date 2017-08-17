"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//config.ts
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['src/demo.js'],
    noGlobals: true,
    capabilities: {
        browserName: 'firefox'
    }
};
//# sourceMappingURL=config.js.map