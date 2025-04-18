import { HomePage } from '@pages/HomePage';
import { LoginPage } from '@pages/LoginPage';
import { RegisterPage } from '@pages/RegisterPage';
import { test as basetest, TestInfo } from '@playwright/test';
import { ScreenshotManager } from '@utils/ScreenshotManager';
import * as allure from "allure-js-commons";

type ExtendedTestFixtures = {
    screenShot: ScreenshotManager;
    homePage: HomePage;
    loginPage: LoginPage;
    registerPage: RegisterPage;
}

const myTest = basetest.extend<ExtendedTestFixtures>({
    screenShot: [async ({ }, use, testInfo) => {
        await use(new ScreenshotManager(testInfo));
    }, { box: true }],
    homePage: [async ({ page }, use) => {
        await use(new HomePage(page));
    }, { box: true }],
    loginPage: [async ({ page }, use) => {
        await use(new LoginPage(page));
    }, { box: true }],
    registerPage: [async ({ page }, use) => {
        await use(new RegisterPage(page));
    }, { box: true }],
});

myTest.beforeEach(async ({ }, testInfo) => {
    const tags = testInfo.annotations
        .filter(a => a.type === 'tag')
        .map(a => a.description);
    tags.forEach(tag => allure.label('tag', tag));
});

export const test = myTest;