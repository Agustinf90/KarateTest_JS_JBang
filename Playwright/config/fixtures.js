const base = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { CartPage } = require('../pages/cartPage');
const { ContactPage } = require('../pages/contactPage');

exports.test = base.test.extend({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
    contactPage: async ({ page }, use) => {
        await use(new ContactPage(page));
    }
});
exports.expect = base.expect;