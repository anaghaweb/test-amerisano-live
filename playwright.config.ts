import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 7 : 2,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    // ["line"],
    ["html", { open: "never", outputFolder: "playwright-report" }],
    // ["json", { outputDir: "json-reports" }],
    ['blob', { outputDir: 'blob-report' }],
    ['json', { outputFile: 'results.json' }],
    ["allure-playwright", { detail: true }],
  ],
  timeout: 90000,

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
    
  },

  /* Configure projects for major browsers */

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    // {
    //   name: 'webkit',
    //   use: { ...devices[ 'Desktop Safari' ] },
    // },
    // {
    //   name: 'firefox',
    //   use: { ...devices[ 'Desktop Firefox' ] },
    // },
    // {
    //   name: 'iPhone 12',
    //   use: { ...devices[ 'iPhone 12' ] },
    // },
    // {
    //   name: 'Galaxy Tab S4',
    //   use: { ...devices[ 'Galaxy Tab S4' ] },
    // },
  ],

  // projects: [
  //   // {
  //   //   name: 'chromium',
  //   //   use: { ...devices[ 'Desktop Chrome' ] },
  //   // },

  //   // {
  //   //   name: 'firefox',
  //   //   use: { ...devices[ 'Desktop Firefox' ] },
  //   // },

  //   // {
  //   //   name: 'webkit',
  //   //   use: { ...devices[ 'Desktop Safari' ] },
  //   // },

  //   /* Test against mobile viewports. */
  //   {
  //     name: 'Pixel 5',
  //     use: { ...devices[ 'Pixel 5' ] },
  //   },
  //   {
  //     name: 'iPhone 12',
  //     use: { ...devices[ 'iPhone 12' ] },
  //   },
  //   {
  //     name: 'iPhone SE',
  //     use: { ...devices[ 'iPhone SE' ] },
  //   },
  //   {
  //     name: 'Galaxy S8',
  //     use: { ...devices[ 'Galaxy S8' ] },
  //   },

  //   {
  //     name: 'Galaxy Tab S4',
  //     use: { ...devices[ 'Galaxy Tab S4' ] },
  //   },
  //   {
  //     name: 'iPad (gen 5)',
  //     use: { ...devices[ 'iPad (gen 5)' ] },
  //   },
  //   {
  //     name: 'iPad Pro 11',
  //     use: { ...devices[ 'iPad Pro 11' ] },
  //   },
  //   {
  //     name: 'iPad Pro 11 landscape',
  //     use: { ...devices[ 'iPad Pro 11 landscape' ] },
  //   },
  //   {
  //     name: 'Blackberry PlayBook',
  //     use: { ...devices[ 'Blackberry PlayBook' ] },
  //   },
  //   {
  //     name: 'Blackberry PlayBook landscape',
  //     use: { ...devices[ 'iPad Pro 11 landscape' ] },
  //   },
  //   {
  //     name: 'Nexus 7',
  //     use: { ...devices[ 'Nexus 7' ] },
  //   },
  //   {
  //     name: 'ultrawide FHD',
  //     use: {
  //       viewport: {
  //         width: 2560,
  //         height: 1080,
  //       }
  //     },
  //   },
  //   {
  //     name: 'ultrawide QHD',
  //     use: {
  //       viewport: {
  //         width: 3440,
  //         height: 1440,
  //       }
  //     },
  //   },

  //   {
  //     name: 'ultrawide 4K',
  //     use: {
  //       viewport: {
  //         width: 3840,
  //         height: 1600,
  //       }
  //     },
  //   },

  //   //   /* Test against branded browsers. */
  //   //   // {
  //   //   //   name: 'Microsoft Edge',
  //   //   //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
  //   //   // },
  //   //   // {
  //   //   //   name: 'Google Chrome',
  //   //   //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
  //   //   // },
  // ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
