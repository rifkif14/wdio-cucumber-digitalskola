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
