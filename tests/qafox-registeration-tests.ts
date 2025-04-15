import { test, expect } from '@playwright/test';
import { RegisterPage } from '@pages/RegisterPage';
import { HomePage } from '@pages/HomePage';
import { getRandomString } from '@utils/RandomeStringGenerator';

const usedEmail = process.env.EMAIL;
const usedPassword = process.env.PASSWORD;
const newEmail = getRandomString("alphanumeric", 15) + "@" + getRandomString("alpha", 8) + "." + getRandomString("alpha", 3);
const newPasswd = getRandomString("specialWithAlphaNumeric", 15);

test('Register a user with incorrect email', async ({ page }) => {
  const homePage = new HomePage(page);
  const registerPage = new RegisterPage(page);
  
  await homePage.navigateToRegister();
  await registerPage.performRegistration(usedEmail, usedPassword);
  await registerPage.verifyInvalidRegisteration();
});

test.skip('Register a user with new email', async ({ page }) => {
  const homePage = new HomePage(page);
  const registerPage = new RegisterPage(page);

  await homePage.navigateToRegister();
  await registerPage.performRegistration(newEmail, newPasswd);
  await registerPage.verifyValidRegisteration();
});

test('Validate currencies available for opencart', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.validateCurrencies();
}); 
