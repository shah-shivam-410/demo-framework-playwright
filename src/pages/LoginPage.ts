import { LoginPageLocators } from "@locators/LoginPageLocators";
import { expect, Page } from "@playwright/test";


export class LoginPage {

    private page: Page;
    private loginPageLocators: LoginPageLocators;

    constructor(page: Page) {
        this.page = page;
        this.loginPageLocators = new LoginPageLocators(page);
    }

    async performLogin(email: string, password: string) { 
        await expect(this.loginPageLocators.returningCustomerHeader).toBeVisible();
        await this.loginPageLocators.eamilInput.fill(email);
        await this.loginPageLocators.passwordInput.fill(password);
        await this.loginPageLocators.loginButton.click();
    }

    async verifyValidLogin() {
        await expect(this.loginPageLocators.editAccountInfoLink).toBeVisible();
        await expect(this.loginPageLocators.logoutLink).toBeVisible();
    }

    async verifyInvalidLogin() {
        await expect(this.loginPageLocators.noMatchMessage).toBeVisible();
        await expect(this.loginPageLocators.eamilInput).toBeVisible();
    }

    async performLogout() {
        await this.loginPageLocators.logoutLink.click();
        await expect(this.loginPageLocators.logoutDoneMessage).toBeVisible();
    }


}