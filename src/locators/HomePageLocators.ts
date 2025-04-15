import { Locator, Page } from "@playwright/test";


export class HomePageLocators {

    constructor(private page: Page) {}

    myAccountLink: Locator = this.page.locator("//div[@id='main-navigation']//*[contains(text(),'My account')]");
    loginLink: Locator = this.page.locator("//div[@id='main-navigation']//*[contains(text(),'Login')]");
    registerLink: Locator = this.page.locator("//div[@id='main-navigation']//*[contains(text(),'Register')]");
    shoppingCartLink: Locator = this.page.locator('#top-links').getByRole('link', { name: 'Shopping Cart' });
    checkoutLink: Locator = this.page.locator('#top-links').getByRole('link', { name: 'Checkout' });
    wishListLink: Locator = this.page.locator('#top-links').getByRole('link', { name: 'Wish List' });
    currencyDropdown: Locator = this.page.getByRole('button', { name: 'Currency' });
    currencyDropdownOptions: Locator = this.page.locator('#form-currency li'); 
    content: Locator = this.page.locator('#content').nth(0);

}