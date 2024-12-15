// wdio.conf.mjs

export const config = {
    framework: 'mocha',  // Set the framework to Mocha
    specs: ['./test/specs/test.mjs'],  // Path to your test files

    maxInstances: 3,  // Run tests in parallel on 2 devices

    capabilities: [
        {
            'appium:platformName': 'Android',
            'appium:platformVersion': '13', // e.g., "11"
            'appium:deviceName': 'device1',
            'appium:udid':'emulator-5554',// e.g., "emulator-5554"
            'appium:app': '/Users/unity/Downloads/customerapp.apk',           // Path to your APK file
            'appium:automationName': 'UiAutomator2',
            'appium:autoGrantPermissions': 'true'
          },
        {
            'appium:platformName': 'Android',
            'appium:platformVersion': '13', // e.g., "11"
            'appium:deviceName': 'device2',         // e.g., "emulator-5554"
            'appium:app': '/Users/unity/Downloads/customerapp.apk',           // Path to your APK file
            'appium:automationName': 'UiAutomator2',
            'appium:udid':'emulator-5556',
            'appium:autoGrantPermissions': 'true'
          },
    ],

    // Other WebDriverIO config settings like timeouts, etc.
    services: ['appium'],
    appium: {
        command: 'appium', // Appium server command
    },

    // Mocha options
    mochaOpts: {
        timeout: 60000,  // Test timeout
    },
};
