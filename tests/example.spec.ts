import { test, expect } from "@playwright/test";

test.describe("recordlocator", () => {
  const { chromium, webkit, firefox } = require("playwright");

  test("testinglocator", async ({ page }) => {
    //Freebox page
   

   await page.goto('https://www.amerisano.com/');
    await page.goto('about:blank');
   
    await page.goto('https://www.amerisano.com/');
    
  await page.getByRole('button', { name: 'Login' }).click();
  //add a screenshot to enter complete email

  await page.locator('form').filter({ hasText: 'Username or email address' }).locator('input[type="email"]').fill('abc@abc.com');
  //assert for incorrect password entry
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('[id="__next"]')).toContainText('incorrect_password');
  });
});
