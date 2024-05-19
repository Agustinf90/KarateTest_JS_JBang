const { test,expect } = require('../utils/setup');


test.describe('Purchase E2E Suite', () => {
    test.beforeEach(async ({ cartPage }) => {
        await cartPage.GotoLoginPage();
    });

    test('Select Product', async ({ cartPage}) => {
        await cartPage.SelectProduct();
        await cartPage.PurchaseProduct();
        await cartPage.goToLogin();
        await cartPage.takeScreenshotSelectProduct();
    });

    test('Purchase E2E Suite', async ({ cartPage, loginPage }) => {
        await cartPage.SelectProduct();
        await cartPage.PurchaseProduct();
        await cartPage.goToLogin();
        await cartPage.takeScreenshotEndPurchase();
        await loginPage.Login();
        await loginPage.AssertLoggedIn();  
    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });
});
    