import { HomePageLocators } from "@locators/HomePageLocators";
import { expect, Page } from "@playwright/test";


export class HomePage {

    private readonly page: Page;
    private readonly homePageLocators: HomePageLocators;

    constructor(page: Page) {
        this.page = page;
        this.homePageLocators = new HomePageLocators(page);
    }

    async navigateToRegister() { 
        await this.page.goto(process.env.BASE_URL_OPENCART, {waitUntil: 'load', timeout: 60_000});
        // await expect(this.homePageLocators.content).toHaveText("Featured")
        await this.homePageLocators.myAccountLink.click();
        await this.homePageLocators.registerLink.click();
    }

    async navigateToLogin() {
        await this.page.goto(process.env.BASE_URL_OPENCART, { waitUntil: 'load', timeout: 60_000 });
        await this.homePageLocators.myAccountLink.click();
        await this.homePageLocators.loginLink.click();
    }

    async validateCurrencies() {
        await this.page.goto(process.env.BASE_URL_OPENCART, { waitUntil: 'load', timeout: 60_000 });
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