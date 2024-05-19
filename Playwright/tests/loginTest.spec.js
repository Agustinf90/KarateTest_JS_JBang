const { test,expect } = require('../utils/setup');


test.describe('Login Test Suite', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.GotoLoginPage();
    });

    test('Logint with invalid credentials', async ({ loginPage }) => {
        await loginPage.Login();
        await loginPage.AssertLoggedIn();  
    });

    test('Logint with valid credentials', async ({ loginPage }) => {
        await loginPage.LoginInvalid();
        await loginPage.takeScreenshot();
    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });
});