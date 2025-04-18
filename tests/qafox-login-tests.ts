import { test } from '@fixtures/ExtendedTestFixture';
import { getRandomString } from '@utils/RandomeStringGenerator';
import { Tag } from '@utils/Tags';
import * as dbutils from '@utils/dbutils';


test('Login a user with incorrect credential', {tag: Tag.sanity} , async ({ page, screenShot, homePage, loginPage }) => {
    await homePage.navigateToLogin();
    const newEmail = getRandomString("alphanumeric", 15) + "@" + getRandomString("alpha", 8) + "." + getRandomString("alpha", 3);
    const newPassword = getRandomString("specialWithAlphaNumeric", 15);
    await loginPage.performLogin(newEmail, newPassword);
    await screenShot.capture(page);
    await loginPage.verifyInvalidLogin();
});

test('Login a user with correct credential', { tag: Tag.smoke }, async ({ page, screenShot, homePage, loginPage }) => {
    await homePage.navigateToLogin();
    const [usedEmail, usedPassword] = await dbutils.getValidAppEmailPassword(); 
    await loginPage.performLogin(usedEmail, usedPassword);
    await loginPage.verifyValidLogin();
    await screenShot.capture(page);
    await loginPage.performLogout();
    await screenShot.capture(page);
});
