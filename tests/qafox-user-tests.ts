import { test, expect } from '@playwright/test';
import { RegisterPage } from '@pages/RegisterPage';
import { HomePage } from '@pages/HomePage';
import { getRandomString } from '@utils/RandomeStringGenerator';

const usedEmail = "eqweweqeqsdsada234232@eqweqwdqws.qeq";
const newEmail = getRandomString("alphanumeric", 15) + "@" + getRandomString("alpha", 8) + "." + getRandomString("alpha", 3);
const passwd = getRandomString("specialWithAlphaNumeric", 15);

test('Register a user with incorrect email', async ({ page }) => {
  const homePage = new HomePage(page);
  const registerPage = new RegisterPage(page);
  
  await homePage.navigateToRegister();
  await registerPage.performRegistration(usedEmail, passwd);
  await registerPage.verifyInvalidRegisteration();
});

test('Register a user with new email', async ({ page }) => {
  const homePage = new HomePage(page);
  const registerPage = new RegisterPage(page);

  await homePage.navigateToRegister();
  await registerPage.performRegistration(newEmail, passwd);
  await registerPage.verifyValidRegisteration();
});

test('Validate currencies available for opencart', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.validateCurrencies();
});