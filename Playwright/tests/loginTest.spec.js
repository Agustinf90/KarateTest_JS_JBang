const { test,expect } = require('../config/fixtures');


test.describe('Login Test Suite', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.GotoLoginPage();
    });

    test('1 - Logint with valid credentials', async ({ loginPage }) => {
        await loginPage.LoginInvalid();
        await loginPage.takeScreenshot();
    });

    test('2 - Logint with invalid credentials', async ({ loginPage }) => {
        await loginPage.Login();
        await loginPage.AssertLoggedIn();  
    });

    test('3 - Signup', async ({ loginPage }) => {
        await loginPage.SignUp();

    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });
});