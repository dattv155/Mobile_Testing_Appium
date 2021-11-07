exports.config = {
    runner: 'local',
    port: 4723,
    path: '/wd/hub',
    host: 'localhost',
    logLevel: 'info',
    framework: 'mocha',
    maxInstances: 10,
    mochaOpts: {
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 60000
    },
    sync: true,
    specs: [
        './test-register.js'
    ],
    capabilities: [{
        "platformName": "android",
        "uuid": "192.168.0.103:5555",
        "automationName": "UiAutomator2",
        "appPackage": "com.tickieapp",
        "appActivity": "com.tickieapp.MainActivity"
    }]
}
