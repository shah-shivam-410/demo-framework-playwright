import { HomePage } from '@pages/HomePage';
import { LoginPage } from '@pages/LoginPage';
import { RegisterPage } from '@pages/RegisterPage';
import {test as basetest, TestInfo} from '@playwright/test';
import { ScreenshotManager } from '@utils/ScreenshotManager';


type ExtendedTestFixtures = {
    screenShot: ScreenshotManager;
    homePage: HomePage;
    loginPage: LoginPage;
    registerPage: RegisterPage;
}

export const test = basetest.extend<ExtendedTestFixtures>({
    screenShot: async ({}, use, testInfo) => {
        await use(new ScreenshotManager(testInfo));
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page));
    }
});
