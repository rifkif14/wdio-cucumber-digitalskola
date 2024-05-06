const { Given, When, Then } = require('@wdio/cucumber-framework');
const { browser } = require('@wdio/globals')

const SauceLoginPage = require('../pageobjects/sauce-login.page');
const DashboardPage = require('../pageobjects/sauce-dashboard.page');

Given("user is on sauce-demo page", async () => {
    await SauceLoginPage.open()
})

When(/^user input username with "(.*)"$/, async (username) => {
    await SauceLoginPage.inputUsername(username)
})

When(/^user input password with "(.*)"$/, async (password) => {
    await SauceLoginPage.inputPassword(password)
  });
  
When(/^user click button$/, async () => {
    await SauceLoginPage.clickLoginButton()
});

Then(/^user should redirect to homepage$/, async () => {
    await DashboardPage.validateOnPage()    
});

Then(/^user login using username "(.*)" and password "(.*)"$/, async (username, password) => {
    await SauceLoginPage.login(username, password)
});

Then(/^user click cart button"$/, async (username, password) => {
    await SauceLoginPage.login(username, password)
});

Then(/^user click cart button"$/, async (username, password) => {
    await SauceLoginPage.login(username, password)
});

Then('user should see empty cart', async () => {
  const cartItems = await $$('.shopping-chart-badge');
  expect(cartItems.length).toBe(0);
  // Write code here that turns the phrase above into concrete actions
})

When('user click cart button', async() => {
  await DashboardPage.clickCartButton();
  // Write code here that turns the phrase above into concrete actions
})

Then('user add {string} to cart', async (productName) => {
  // Implementasi langkah untuk menambahkan produk ke keranjang
  await DashboardPage.addToCartButton.click();
  //await browser.$('//*[@id="add-to-cart-sauce-labs-backpack"]').click();
});

Then('user should see {string} on cart page', async(s) => {
  await DashboardPage.clickCartButton();
  const cartPageText = await $('body').getText();
  expect(cartPageText).toContain("Sauce Labs Backpack");
  // Write code here that turns the phrase above into concrete actions
})
