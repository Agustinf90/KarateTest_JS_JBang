
const { test,expect } = require('../config/fixtures');


test.describe('Contact Test Suite', () => {
    test.beforeEach(async ({ contactPage }) => {
        await contactPage.GotoLoginPage();
    }, { timeout: 60000 });

    test('1 - Send Contact', async ({ contactPage }) => {
        await contactPage.ContactMessage();
        await contactPage.takeScreenShotContact();

    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });
});