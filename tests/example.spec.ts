import { test, expect } from "@playwright/test";

test.describe("recordlocator", () => {
  const { chromium, webkit, firefox } = require("playwright");

  test("testinglocator", async ({ page }) => {
    //Freebox page
   
   await page.goto('https://www.amerisano.com/');
   await page.getByRole('button', { name: 'Accept All' }).click();
   await page.getByText('Schedule a call with our team to get the best pricing for your groupGroup Size*')
   await page.locator('.icon-close').click();
   await page.locator('div').filter({ hasText: 'Group BuyingOur distribution' }).nth(2).click();
   await page.locator('div').filter({ hasText: 'Group BuyingOur distribution' }).nth(2).click();
  await page.locator('div').filter({ hasText: 'Group BuyingOur distribution' }).nth(2)
  await page.locator('#group').click();

  });
});
