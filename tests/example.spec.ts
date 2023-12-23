import { test, expect } from "@playwright/test";

test.describe("recordlocator", () => {
  const { chromium, webkit, firefox } = require("playwright");

  test("testinglocator", async ({ page }) => {
    //Freebox page
   
    await page.goto('https://www.amerisano.com/order');
    await page.getByRole('button', { name: 'Link to account page Log in' }).click();
   
    await page.getByRole('button', { name: 'Accept All' }).click();
    await page.getByRole('link', { name: 'Forgot your password?' }).click();
    await page.getByPlaceholder('email@example.com').click();
    await page.getByPlaceholder('email@example.com').fill('abc@fake');
    await page.locator('button').filter({ hasText: 'Reset password' }).click();
    await expect(page.locator('button').filter({ hasText: 'Got it' })).toBeVisible();
    await expect(page.locator('body')).toContainText('Done!An email with a link has been sent to your inbox. Please, follow the instructions to reset your password.(be sure to check your SPAM folder)If you didn\'t recieve any email pleaseContact us or send us a message at support@amerisano.comGot it');
    await page.locator('button').filter({ hasText: 'Got it' }).click();
   
  });
});
