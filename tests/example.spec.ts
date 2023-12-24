import { test, expect } from "@playwright/test";

test.describe("recordlocator", () => {
  const { chromium, webkit, firefox } = require("playwright");

  test("testinglocator", async ({ page }) => {
    //Freebox page
   
    await page.getByPlaceholder('First name*').click();
    await page.getByPlaceholder('First name*').fill('abc');
    await page.getByPlaceholder('Last name*').click();
    await page.getByPlaceholder('Last name*').fill('abc');
    await page.getByPlaceholder('Email*').click();
    await page.getByPlaceholder('Email*').press('ArrowLeft');
    await page.getByPlaceholder('Email*').press('ArrowRight');
    await page.getByPlaceholder('Email*').press('ArrowRight');
    await page.getByPlaceholder('Email*').press('ArrowRight');
    await page.getByPlaceholder('Email*').press('ArrowRight');
    await page.getByPlaceholder('Email*').fill('aft@gmail.com');
    await page.getByPlaceholder('Address 1*').click();
    await page.getByPlaceholder('Address 1*').fill('z street');
    await page.getByPlaceholder('Address 2').click();
    await page.getByPlaceholder('Address 2').fill('b view');
    await page.getByRole('button', { name: 'State* Dropdown icon' }).click();
    await page.getByRole('option', { name: 'Alabama' }).click();
    await page.getByPlaceholder('City*').click();
    await page.getByPlaceholder('City*').fill('alabama');
    await page.getByPlaceholder('Zip Code*').click();
    await page.getByPlaceholder('Zip Code*').fill('10003');
    await page.getByPlaceholder('Phone*').click();
    await page.getByPlaceholder('Phone*').fill('1234567890');
    await page.getByPlaceholder('Company*').click();
    await page.getByPlaceholder('Company*').fill('z dental care');
    await page.getByRole('button', { name: 'CHOOSE SIZE' }).first().click();
    await page.getByText('Extra Small').click();
    await page.frameLocator('iframe[title="Kustomer Widget Iframe"]').getByLabel('Close Chat Popup').click();
    await page.getByRole('button', { name: 'CHOOSE SIZE' }).first().click();
    await page.getByRole('button', { name: 'SIZE S' }).click();
    await page.getByText('Large').nth(2).click();
    await page.getByRole('button', { name: 'CHOOSE SIZE' }).click();
    await page.getByText('Medium').nth(2).click();
    await page.getByRole('button', { name: 'NEXT' }).click();

    //step 2

    await page.locator('div').filter({ hasText: /^Yes, someone else does the purchasing for me$/ }).locator('span').nth(1).click();
    await page.locator('div').filter({ hasText: /^No, I will provide feedback and place the order myself$/ }).locator('span').nth(1).click();
    await page.locator('div').filter({ hasText: /^I will give feedback once I try the gloves$/ }).locator('div').click();
    await page.locator('div').filter({ hasText: /^I will give feedback once I try the gloves$/ }).getByRole('img').click();
    await expect(page.locator('#free-box-section')).toContainText('You must accept give feedback');
    await page.locator('div').filter({ hasText: /^I will give feedback once I try the gloves$/ }).locator('div').click();
    await page.getByRole('button', { name: 'SEND ME A FREE BOX NOW' }).click();
    await expect(page.locator('div').filter({ hasText: 'Thank You!A sales advisor' }).nth(3)).toBeVisible();
    await expect(page.getByRole('dialog')).toContainText('Thank You!');
    await expect(page.getByRole('dialog')).toContainText('A sales advisor will contact you shortly to validate your information. Once validated, your sample will be shipped in the next 24 hours.');
    await expect(page.getByRole('img')).toBeVisible();
    await expect(page.getByRole('button', { name: 'CLOSE' })).toBeVisible();
    await page.getByRole('button', { name: 'CLOSE' }).click();
    await page.getByRole('button', { name: 'CLOSE' }).click();
    await page.getByRole('button', { name: 'CLOSE' }).click();



    await expect(page.locator('div').filter({ hasText: 'Thank You!A sales advisor' }).nth(3)).toBeVisible();
    await expect(page.getByRole('img')).toBeVisible();
    await expect(page.getByRole('dialog')).toContainText('Thank You!');
    await page.getByText('A sales advisor will contact you shortly to validate your information. Once').click();
    await expect(page.getByRole('dialog')).toContainText('A sales advisor will contact you shortly to validate your information. Once validated, your sample will be shipped in the next 24 hours.');
    await expect(page.getByRole('button', { name: 'CLOSE' })).toBeVisible();
   


  });
});
