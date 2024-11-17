import { join } from 'path';
export const config = {
  runner: 'local',
  path: '/wd/hub',
  port: 4723,
  specs: ['./test/specs/test.mjs'], // Adjust according to your test file extension
  maxInstances: 1,
  capabilities: [{
    'appium:platformName': 'Android',
    'appium:platformVersion': '13', // e.g., "11"
    'appium:deviceName': 'device1',         // e.g., "emulator-5554"
    'appium:app': '/Users/unity/Downloads/customerapp.apk',           // Path to your APK file
    'appium:automationName': 'UiAutomator2',
    'appium:autoGrantPermissions': 'true'
  }],
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000, // Adjust the timeout according to your app's needs
    reporter: 'mochawesome',  // Set the reporter here
        reporterOptions: {
          reportDir: '/Users/unity/Desktop/automation_mobile/appium-automation/reports',     // Specify the output directory
          overwrite: false,
          html: true,
          json: true,
          reportTitle: 'My Test Report',
        }
  },
  services: ['appium'],

   reporters: [
      ['allure', {
        outputDir: 'allure-results',  // Directory for storing raw results
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,  // Set to true if you don’t want screenshots in the report
      }]
    ]

};

