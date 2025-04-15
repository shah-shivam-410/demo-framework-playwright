import { Locator, Page } from "@playwright/test";


export class RegisterPageLocators {

    constructor(private page: Page) {
        this.page.setDefaultTimeout(10_000);
    }

    headerText: Locator = this.page.locator('#content');
    firstName: Locator = this.page.getByRole('textbox', { name: '* First Name' });
    lastName: Locator = this.page.getByRole('textbox', { name: '* Last Name' });
    email: Locator = this.page.getByRole('textbox', { name: '* E-Mail' });
    telephone: Locator = this.page.getByRole('textbox', { name: '* Telephone' });
    password: Locator = this.page.getByRole('textbox', { name: '* Password', exact: true });
    confirmPassword: Locator = this.page.getByRole('textbox', { name: '* Password Confirm' });
    mailersNo: Locator = this.page.getByRole('radio', { name: 'No' });
    tncLabel: Locator = this.page.locator('#content');
    tncCheckbox: Locator = this.page.getByRole('checkbox');
    continue: Locator = this.page.getByRole('button', { name: 'Continue' });
    container: Locator = this.page.locator('#account-register');
    
}