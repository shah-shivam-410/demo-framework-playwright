import { RegisterPageLocators } from "@locators/RegisterPageLocators";
import { expect, Page } from "@playwright/test";


export class RegisterPage {

    private page: Page;
    private registerPageLocators: RegisterPageLocators;

    constructor(page: Page) {
        this.page = page;
        this.registerPageLocators = new RegisterPageLocators(page);
    }

    async performRegistration(email: string, passwd: string) {
        await this.page.goto("https://tutorialsninja.com/demo/index.php?route=account/register", {waitUntil: 'load'});
        await expect(this.registerPageLocators.headerText).toContainText("Register Account");
        await this.registerPageLocators.firstName.fill("Hello");
        await this.registerPageLocators.lastName.fill("World");
        await this.registerPageLocators.email.fill(email);
        await this.registerPageLocators.telephone.fill("1231231238");
        await this.registerPageLocators.password.fill(passwd);
        await this.registerPageLocators.confirmPassword.fill(passwd);
        await this.registerPageLocators.mailersNo.check();
        await expect(this.registerPageLocators.tncLabel).toContainText("I have read and agree to the Privacy Policy Continue");
        await this.registerPageLocators.tncCheckbox.check();
        await this.registerPageLocators.continue.click();
    }

    async verifyValidRegisteration() {
        await expect(this.registerPageLocators.headerText).toContainText("Your Account Has Been Created!");
    }

    async verifyInvalidRegisteration() {
        await expect(this.registerPageLocators.container).toContainText("Warning: E-Mail Address is already registered!");
    }



}