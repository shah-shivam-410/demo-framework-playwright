import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  testMatch: ['**/*.ts'], 
  globalTimeout: 36_00_000,
  // timeout: 120_000,
  // expect: { timeout: 5_000 },
  fullyParallel: true,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { open: 'never' }]],
  use: {
    video: 'on',
  },
  projects: [ 
    {
      name: 'Edge',
      use: {
        browserName: 'chromium',
        channel: 'msedge',
        headless: false,
        viewport: null,
        launchOptions: {
          args: ['--start-maximized'],
        },
      },
    },
    {
      name: 'Chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
        headless: false,
        viewport: null,
        launchOptions: {
          args: ['--start-maximized'],
        },
      },
    },
    {
      name: 'Firefox',
      use: {
        browserName: 'firefox',
        channel: 'firefox',
        headless: false,
        viewport: null,
        launchOptions: {
          args: ['--start-maximized'],
        },
      },
    },
  ]
});
