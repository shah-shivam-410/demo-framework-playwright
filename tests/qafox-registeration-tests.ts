import { test } from '@fixtures/ExtendedTestFixture';
import { getRandomString } from '@utils/RandomeStringGenerator';

const usedEmail = process.env.EMAIL;
const usedPassword = process.env.PASSWORD;
const newEmail = getRandomString("alphanumeric", 15) + "@" + getRandomString("alpha", 8) + "." + getRandomString("alpha", 3);
const newPasswd = getRandomString("specialWithAlphaNumeric", 15);

test('Register a user with incorrect email', async ({ page, screenShot, homePage, registerPage }) => {
  await homePage.navigateToRegister();
  await registerPage.performRegistration(usedEmail, usedPassword);
  await registerPage.verifyInvalidRegisteration();
  await screenShot.capture(page);
});

test.skip('Register a user with new email', async ({ page, screenShot, homePage, registerPage }) => {
  await homePage.navigateToRegister();
  await registerPage.performRegistration(newEmail, newPasswd);
  await registerPage.verifyValidRegisteration();
  await screenShot.capture(page);
});

test('Validate currencies available for opencart', async ({ page, screenShot, homePage }) => {
  await homePage.validateCurrencies();
  await screenShot.capture(page);
}); 
