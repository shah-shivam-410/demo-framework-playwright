import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  globalSetup: require.resolve('./global-setup'),
  testMatch: ['**/*.ts'], 
  globalTimeout: 36_00_000,
  timeout: 120_000,
  // expect: { timeout: 5_000 },
  fullyParallel: true,
  workers: 1,
  reporter: [['html', { open: 'never' }], ['line']],
  use: {
    video: 'off',
    screenshot: 'only-on-failure'
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
