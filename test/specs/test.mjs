import { expect } from 'chai';

describe('Android App Test', () => {
  it('should open the app and find the App button and compare texts - failure case', async () => {
    // Locate the login button using its accessibility ID and click it
    const AppButton = await $('~App');
    const MenuTexts = await AppButton.getText();
    await browser.pause(2000);

    expect(MenuTexts).to.equal('App1');



    // Locate the welcome message using its accessibility ID and verify its text
    //const welcomeMessage = await $('~Welcome'); // Replace with your actual locator
    //expect(await welcomeMessage.getText()).to.equal('Welcome'); // Update expected text accordingly
  });
});
