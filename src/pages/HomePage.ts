import { HomePageLocators } from "@locators/HomePageLocators";
import { expect, Page } from "@playwright/test";


export class HomePage {

    private page: Page;
    private homePageLocators: HomePageLocators;

    constructor(page: Page) {
        this.page = page;
        this.homePageLocators = new HomePageLocators(page);
    }

    async navigateToRegister() { 
        await this.page.goto("https://ecommerce-playground.lambdatest.io/", {waitUntil: 'networkidle'});
        // await expect(this.homePageLocators.content).toHaveText("Featured")
        await this.homePageLocators.myAccountLink.hover();
        await this.homePageLocators.registerLink.click();
    }

    async navigateToLogin() {
        await this.page.goto("https://ecommerce-playground.lambdatest.io/", { waitUntil: 'networkidle' });
        await this.homePageLocators.myAccountLink.hover();
        await this.homePageLocators.loginLink.click();
    }

    async validateCurrencies() {
        await this.page.goto("https://ecommerce-playground.lambdatest.io/", { waitUntil: 'networkidle' });
        await this.homePageLocators.currencyDropdown.click();
        const currList = await this.homePageLocators.currencyDropdownOptions.elementHandles();
        expect(currList).toHaveLength(3);
        const expectedCurrencies = ["€Euro", "£Pound Sterling", "$US Dollar"];
        for (let i = 0; i < currList.length; i++) {
            const textContent = await currList[i].textContent();
            expect(textContent.trim()).toBe(expectedCurrencies[i]);
        }
    }

}