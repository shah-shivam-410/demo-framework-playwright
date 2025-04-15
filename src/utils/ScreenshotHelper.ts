import { test as base } from '@playwright/test';

export async function captureScreenShot(page, name = 'screenshot') {
    await base.step(`📸 Capture screenshot: ${name}`, async (testInfo) => {
        const shot = await page.screenshot();
        testInfo.attach(name, {
            body: shot,
            contentType: 'image/png',
        });
    });
}