import { test, expect } from "@playwright/test";

test.describe("recordlocator", () => {
  const { chromium, webkit, firefox } = require("playwright");

  test("testinglocator", async ({ page }, testInfo) => {
    //Freebox page
    await page.goto('https://www.amerisano.com/request-wholesale-account');
    await page.getByRole('button', { name: 'Accept All' }).click();
   
    // await page.locator('[id="\\-"]').click();
    // await page.locator('[id="\\-"]').click();
    // await page.getByRole('combobox');
    await page.locator('input[name="name"]').first().click();
    await page.locator('input[name="name"]').first().fill('abc');
    await page.locator('input[name="name"]').nth(1).click();
    await page.locator('input[name="name"]').nth(1).fill('bcd');
    await page.locator('input[name="position"]').click();
    await page.locator('input[name="position"]').fill('abc');
    await page.locator('input[name="company"]').click();
    await page.locator('input[name="company"]').fill('anc');
    await page.locator('form').filter({ hasText: 'First Name Last Name Position' }).locator('input[name="email"]').click();
    await page.locator('form').filter({ hasText: 'First Name Last Name Position' }).locator('input[name="email"]').fill('abc');
    await page.locator('form').filter({ hasText: 'First Name Last Name Position' }).locator('input[name="phone"]').click();
    await page.locator('form').filter({ hasText: 'First Name Last Name Position' }).locator('input[name="phone"]').fill('123456789');
    await page.getByRole('spinbutton').click();
    await page.getByRole('spinbutton').fill('123456789');
   const handle =  await page.locator('//html/body/div[1]/div[1]/div[3]/div/div[2]/div/div[2]/form/div/div[9]/select');
    await handle.click();
     await handle.selectOption({value:"101 - 200 employees"});
     await page.getByRole('radio').first().click();
     await page.getByRole('radio').nth(1).click();
     await page.getByRole('radio').nth(2).click();
     await page.getByRole('radio').nth(3).click();
    await page. getByRole("spinbutton").fill("150483782");
    //html/body/div[1]/div[1]/div[3]/div/div[2]/div/div[2]/form/div/div[9]/select
    await testInfo.attach(`gg.png`, {
      body: await page.screenshot(),
      contentType: "image/png",
    });
    await page.goto('https://www.amerisano.com/request-wholesale-account');
    await page.locator('.request-wholesale-account_wrapper__i5Uhy').click();
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.locator('[id="__next"]')).toContainText('Please complete all mandatory fields.');
  });
});
