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
