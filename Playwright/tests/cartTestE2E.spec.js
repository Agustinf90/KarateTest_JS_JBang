const { test,expect } = require('../config/fixtures');


test.describe('Purchase E2E Suite', () => {
    test.beforeEach(async ({ cartPage }) => {
        await cartPage.GotoLoginPage();
    }, { timeout: 60000 });
    
    test('3 - Select Product', async ({ cartPage}) => {
        await cartPage.SelectProduct();
        await cartPage.PurchaseProduct();
        await cartPage.goToLogin();
        await cartPage.takeScreenshotSelectProduct();
    });

    test('4 - Purchase E2E', async ({ cartPage, loginPage }) => {
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
    