import { Locator, Page } from "@playwright/test";


export class LoginPageLocators {

    constructor(private readonly page: Page) {
        this.page.setDefaultTimeout(10_000);
    }

    returningCustomerHeader: Locator = this.page.getByRole('heading', { name: 'Returning Customer' });
    eamilInput: Locator = this.page.getByRole('textbox', { name: 'E-Mail Address' });
    passwordInput: Locator = this.page.getByRole('textbox', { name: 'Password' });
    loginButton: Locator = this.page.getByRole('button', { name: 'Login' });
    editAccountInfoLink: Locator = this.page.getByRole('link', { name: 'Edit your account information' });
    logoutLink: Locator = this.page.getByRole('link', { name: 'Logout' });
    logoutDoneMessage: Locator = this.page.getByText('You have been logged off your account. It is now safe to leave the computer.');
    noMatchMessage: Locator = this.page.getByText('Warning: No match for E-Mail Address and/or Password.');
    forgotPasswordLink: Locator = this.page.getByRole('link', { name: 'Forgotten Password' });  

}