const base = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { CartPage } = require('../pages/cartPage');

exports.test = base.test.extend({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
});
exports.expect = base.expect;