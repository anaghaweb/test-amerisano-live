import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  page.locator('div').filter({ hasText: /^Yes, someone else does the purchasing for me$/ }).locator('span').nth(1)

  page.locator('div').filter({ hasText: /^No, I will provide feedback and place the order myself$/ }).locator('span').nth(1)
  page.locator('div').filter({ hasText: /^I will give feedback once I try the gloves$/ }).locator('div')
await page.goto('https://www.amerisano.com/free-gloves-box-giftcard');

});
