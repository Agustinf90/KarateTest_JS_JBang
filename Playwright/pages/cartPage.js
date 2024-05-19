const { expect } = require('@playwright/test');
const config = require('../utils/config');

exports.CartPage = class CartPage {

    constructor(page) {
        this.page = page;
        this.btnCart = page.getByRole('link', { name: ' Cart' });
        this.addedProduct = page.locator('h4.modal-title.w-100').first();
        this.fancyGreenTopDiv = page.locator('div.product-image-wrapper:has-text("Fancy Green Top")');
        this.winterTopDiv = page.locator('div.product-image-wrapper:has-text("Winter Top")');
        this.addToCartFancyGreenTopButton = this.fancyGreenTopDiv.locator('a.btn.btn-default.add-to-cart').nth(0);
        this.addToCartWinterTopButton = this.winterTopDiv.locator('a.btn.btn-default.add-to-cart').nth(0);
        this.continueShoppingButton = page.locator('button.btn.btn-success.close-modal.btn-block');
        this.fancyGreenTopLink = page.locator(('a[href="/product_details/8"]'), {hasText: 'Fancy Green Top'});
        this.winterTopLink = page.locator(('a[href="/product_details/5"]'), {hasText: 'Winter Top'});
        this.checkoutBtn = page.getByText('Proceed To Checkout')
        this.btnToLogin = page.getByRole('link', { name: 'Register / Login' })
}
    
    async GotoLoginPage() {
        await this.page.goto(config.url);
    }

    async SelectProduct() {
        await expect.soft(this.addToCartWinterTopButton).toBeVisible();
        await this.addToCartFancyGreenTopButton.click();
        await expect.soft(this.addedProduct).toBeVisible();
        await this.continueShoppingButton.click();
        await expect.soft(this.addToCartFancyGreenTopButton).toBeVisible();
        await this.addToCartWinterTopButton.click();
        await expect.soft(this.addedProduct).toBeVisible();
        await this.continueShoppingButton.click();
    }

    async PurchaseProduct() {
        await this.btnCart.click();
        await expect.soft(this.fancyGreenTopLink).toBeVisible();
        await expect.soft(this.winterTopLink).toBeVisible();
    }
    async goToLogin() {
        await this.checkoutBtn.click();
        await this.btnToLogin.click();
    }

    async takeScreenshotSelectProduct() {
        await this.page.waitForLoadState('load');
        await this.page.screenshot({ path: 'Playwright/screenshots/selectProduct.png' });
    }
    async takeScreenshotEndPurchase() {
        await this.page.waitForLoadState('load');
        await this.page.screenshot({ path: 'Playwright/screenshots/endPurchase.png' });
    }
}