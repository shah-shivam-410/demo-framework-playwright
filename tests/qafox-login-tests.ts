import { test } from '@fixtures/ExtendedTestFixture';
import { getRandomString } from '@utils/RandomeStringGenerator';

const usedEmail = process.env.EMAIL;
const usedPassword = process.env.PASSWORD;
const newEmail = getRandomString("alphanumeric", 15) + "@" + getRandomString("alpha", 8) + "." + getRandomString("alpha", 3);
const newPassword = getRandomString("specialWithAlphaNumeric", 15);


test('Login a user with incorrect credential', async ({ page, screenShot, homePage, loginPage }) => {
    await homePage.navigateToLogin();
    await loginPage.performLogin(newEmail, newPassword);
    await screenShot.capture(page);
    await loginPage.verifyInvalidLogin();
});

test('Login a user with correct credential', async ({ page, screenShot, homePage, loginPage }) => {
    await homePage.navigateToLogin();
    await loginPage.performLogin(usedEmail, usedPassword);
    await loginPage.verifyValidLogin();
    await screenShot.capture(page);
    await loginPage.performLogout();
    await screenShot.capture(page);
});