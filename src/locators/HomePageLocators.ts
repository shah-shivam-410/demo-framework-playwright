import { Locator, Page } from "@playwright/test";


export class HomePageLocators {

    constructor(private page: Page) {
        this.page.setDefaultTimeout(10_000);
    }

    myAccountLink: Locator = this.page.locator('#top-links').getByRole('link', { name: 'My Account' });
    loginLink: Locator = this.page.locator('#top-links').getByRole('link', { name: 'Login' });
    registerLink: Locator = this.page.locator('#top-links').getByRole('link', { name: 'Register' });
    shoppingCartLink: Locator = this.page.locator('#top-links').getByRole('link', { name: 'Shopping Cart' });
    checkoutLink: Locator = this.page.locator('#top-links').getByRole('link', { name: 'Checkout' });
    wishListLink: Locator = this.page.locator('#top-links').getByRole('link', { name: 'Wish List' });
    currencyDropdown: Locator = this.page.getByRole('button', { name: 'Currency' });
    currencyDropdownOptions: Locator = this.page.locator('#form-currency li'); 
    content: Locator = this.page.locator('#content').nth(0);

}