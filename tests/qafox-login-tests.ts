import { test, expect } from '@playwright/test';
import { HomePage } from '@pages/HomePage';
import { getRandomString } from '@utils/RandomeStringGenerator';
import { LoginPage } from '@pages/LoginPage';

const usedEmail = process.env.EMAIL;
const usedPassword = process.env.PASSWORD;
const newEmail = getRandomString("alphanumeric", 15) + "@" + getRandomString("alpha", 8) + "." + getRandomString("alpha", 3);
const newPassword = getRandomString("specialWithAlphaNumeric", 15);


test('Login a user with incorrect credential', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await homePage.navigateToLogin();
    await loginPage.performLogin(newEmail, newPassword);
    await loginPage.verifyInvalidLogin();
});

test('Login a user with correct credential', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await homePage.navigateToLogin();
    await loginPage.performLogin(usedEmail, usedPassword);
    await loginPage.verifyValidLogin();
    await loginPage.performLogout();
});