import { defineConfig, devices } from '@playwright/test';
import os, { userInfo } from 'os';

export default defineConfig({
  testDir: 'tests',
  globalSetup: require.resolve('./global-setup'),
  testMatch: ['**/*.ts'],
  globalTimeout: 36_00_000,
  timeout: 120_000,
  // expect: { timeout: 5_000 },
  fullyParallel: true,
  workers: 1,
  // reporter: [['html', { open: 'never' }], ['line'], ['allure-playwright']],
  reporter: [['allure-playwright', {
    environmentInfo: {
      os_platform: os.platform(),
      os_release: os.release(),
      os_version: os.version(),
      node_version: process.version,
      userInfo: os.userInfo().username
    },
  },],
  // ['html', { open: 'never' }],
  // ['dot'],
  ['github']
],
  use: {
    // baseURL: process.env.API_BASE_URL, // not working, only reading till domain name.
    video: 'off',
    screenshot: 'only-on-failure'
  },
  projects: [
    {
      name: 'Edge',
      use: {
        browserName: 'chromium',
        channel: 'msedge',
        headless: true,
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
        headless: true,
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
