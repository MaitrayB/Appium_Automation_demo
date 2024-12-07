import { expect } from 'chai';

describe('Android App onboarding screen verification', () => {
  it('should click on Next button on first screen', async () => {
    // Locate the next button using its accessibility ID and click it
    const NextButton = await $('~Next');
    NextButton.click();
    await browser.pause(2000);
  });

    it('should get texts on screen 2 and compare', async () => {
      const Screen2Texts = await driver.$('.android.widget.ImageView');
      await browser.pause(2000);
      await Screen2Texts.getAttribute('content-desc');
      expect(await Screen2Texts.getAttribute('content-desc')).to.equal("Gear up!\nJump on Miwayz and let's ride!\nBegin Your Journey with Miwayz Your Key to Convenient and Hassle-Free Travel!"); // Update expected text accordingly
      await browser.pause(2000);
    });

 it('should click next button on screen 2', async () => {
      const NextButton = await $('~Next');
      NextButton.click();
      await browser.pause(2000)

     // expect(MenuTexts).to.equal('App1');
      // Locate the welcome message using its accessibility ID and verify its text
      //const welcomeMessage = await $('~Welcome'); // Replace with your actual locator
    });

});


//Verify login screen

describe('This test verifies UI on login screen', () => {
  it('should verify title on login screen', async () => {
    const LoginTitle = await driver.$('~Get started with Miwayz!');
    await browser.pause(2000);
    expect(await LoginTitle.getAttribute('content-desc')).to.equal("Get started with Miwayz!"); // Update expected text accordingly
         await browser.pause(2000);
  });

    it('should verify login button label', async () => {
      const LoginLabel = await driver.$('~Log In');
      expect(await LoginLabel.getAttribute('content-desc')).to.equal("Log In"); // Update expected text accordingly
    });

 it('should verify Sign up button label', async () => {
       const SignupLabel = await driver.$('//android.widget.Button[@content-desc="New to Miwayz? Sign Up!"]');
       expect(await SignupLabel.getAttribute('content-desc')).to.equal("New to Miwayz? Sign Up!"); // Update expected text accordingly
     });
    });

//login to customer app
describe('This test will allow customer user to login', () => {
  it('should verify title on login screen', async () => {
    const Loginbutton = await driver.$('~Log In');
    const CountryCode = await driver.$('//android.view.View[contains(@content-desc,"+1")]');
    const IndiaCode = await driver.$('//android.view.View[contains(@content-desc,"+91")]');
    const InputMobile = await driver.$('//android.widget.EditText');
    const ContinueButton = await driver.$('//android.widget.Button[@content-desc="Continue"]');

    await browser.pause(2000);
    Loginbutton.click();
    CountryCode.click();
    IndiaCode.click();
    await InputMobile.click();
    await InputMobile.setValue('9033610692');
    await ContinueButton.click();
    await browser.pause(5000);
  });

    });