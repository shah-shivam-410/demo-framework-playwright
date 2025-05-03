import { Page, TestInfo } from '@playwright/test';
import fs from 'fs';
import path from 'path';

export class ScreenshotManager {
    private screenshotCount = 1;
    private readonly folderPath: string;

    constructor(private readonly testInfo: TestInfo) {
        const now = new Date();
        const date = now.toISOString().split('T')[0]; // yyyy-mm-dd
        const time = now.toTimeString().split(' ')[0].replace(/:/g, '-'); // hh-mm-ss

        this.folderPath = path.join(
            'screenshots',
            date,
            testInfo.title.replace(/\s+/g, '_') + "_" + time
        );

        fs.mkdirSync(this.folderPath, { recursive: true });
        console.log(`📸 Screenshot folder created: ${this.folderPath}`);
    }

    async capture(page: Page, name?: string, isFullPage = true) {
        const filename = name
            ? `${this.screenshotCount++}_${name}.png`
            : `${this.screenshotCount++}.png`;

        const fullPath = path.join(this.folderPath, filename);

        const screenshot = await page.screenshot({ path: fullPath, fullPage: isFullPage });

        // Attach to report
        await this.testInfo.attach(filename, {
            body: screenshot,
            contentType: 'image/png',
        });

    }
}
