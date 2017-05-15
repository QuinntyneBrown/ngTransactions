exports.config = {

    allScriptsTimeout: 11000,

    specs: [
        'dist/e2e-tests.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://transaction-service.azurewebsites.net',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};