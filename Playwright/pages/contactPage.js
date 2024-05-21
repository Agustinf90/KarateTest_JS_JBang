const { expect } = require('@playwright/test');
const config = require('../config/config');

exports.ContactPage = class ContactPage {

    constructor(page) {
        this.page = page;
        this.btnContact = page.getByRole('link', { name: ' Contact us' })
        this.formContact = page.getByRole('heading', { name: 'Contact Us' })
        this.inputName = page.getByPlaceholder('Name')
        this.inputEmail = page.getByPlaceholder('Email', { exact: true })
        this.inputSubject = page.getByPlaceholder('Subject')
        this.inputMsg = page.getByPlaceholder('Your Message Here')
        this.inputFile = page.locator('input[name="upload_file"]')
        this.sendMessage = page.locator('[value="Submit"]')

}
    
    async GotoLoginPage() {
        await this.page.goto(config.url);
    }

    async ContactMessage() {
        await this.btnContact.click();
        await expect.soft(this.formContact).toBeVisible();
        await this.inputName.fill(config.name);
        await this.inputEmail.fill(config.email);
        await this.inputSubject.fill(config.subject);
        await this.inputMsg.fill(config.message);
        await this.inputFile.setInputFiles('./utils/selectProduct.png');
        await this.sendMessage.click();
    }

    async takeScreenShotContact() {
        await this.page.waitForLoadState('load');
        await this.page.screenshot({ path: './Playwright/screenshots/Sendmsg.png' });
    }
}