const { expect } = require('@playwright/test');
const config = require('../config/config');

exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.btnToLogin = page.getByRole('link', { name: ' Signup / Login' })
        this.txtEmail = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address')
        this.txtPassword = page.locator('form').getByPlaceholder('Password');
        this.btnSignIn = page.locator('button.btn.btn-default', { hasText: 'Login' });
        this.txtName = page.locator('form').getByPlaceholder('Name');
        this.txtEmailAdd = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')
        this.btnSignUp = page.locator('button.btn.btn-default', { hasText: 'Signup' });
        this.txtInvalidCred = page.getByText('Your email or password is')
        this.bntLoggedIn = page.getByRole('link', { name: ' Logout' })
        this.loginForm = page.getByText('Enter Account Information')
    }

    async GotoLoginPage() {
        await this.page.goto(config.url);
    }

    async Login() {
        await this.btnToLogin.click();
        await this.txtEmail.fill(config.email);
        await this.txtPassword.fill(config.password);
        await this.btnSignIn.click();
        await expect.soft(this.btnSignIn).toBeHidden();
    }

    async AssertLoggedIn() {
        await expect(this.bntLoggedIn).toBeVisible();
    }

    async LoginInvalid() {
        await this.btnToLogin.click();
        await this.txtEmail.fill(config.emailInvalid);
        await this.txtPassword.fill(config.passwordInvalid);
        await this.btnSignIn.click();
        // await expect.soft(this.txtInvalidCred).toBeVisible();    
    }

    
    async SignUp() {
        await this.btnToLogin.click();
        await this.txtName.fill(config.name);
        await this.txtEmailAdd.fill(config.emailNew);
        await this.btnSignUp.click();
        await expect.soft(this.loginForm).toBeVisible();    
    }

    async takeScreenshot() {
        await this.page.screenshot({ path: './Playwright/screenshots/after-click3.png' });
    }
}
