import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.getByRole('button', { name: 'Expand Full Specs feature-icon' }).first().click();
  await expect(page.locator('#products')).toContainText('100% nitrile (non-blend), latex and powder freeMedical grade 510(k)Chemotherapy drug resistantSuperior puncture protectionHighly elastic with excellent dexterityPalm thickness 3.2milColor: Indigo');
  await page.getByRole('button', { name: 'Close Full Specs feature-icon' }).click();
  await page.getByRole('button', { name: 'Expand Full Specs feature-icon' }).nth(1).click();
  await expect(page.locator('#products')).toContainText('100% nitrile (non-blend), latex and powder freeFlexible, smooth fitTextured finger for confident gripSupreme tactile sensitivitySilken soft touch, extra easy donningPalm thickness 2.4milColor: Pink');
  await page.getByRole('button', { name: 'Close Full Specs feature-icon' }).click();
  await page.frameLocator('iframe[title="Kustomer Widget Iframe"]').getByLabel('Close Chat Popup').click();
  await page.getByRole('button', { name: 'Expand Full Specs feature-icon' }).nth(2).click();
  await expect(page.locator('#products')).toContainText('100% nitrile (non-blend), latex and powder freeMedical grade 510(k)Flexible, smooth fitTextured finger for confident gripSupreme tactile sensitivityPalm thickness 2.7milColor: Light Blue');
  await page.getByRole('button', { name: 'Close Full Specs feature-icon' }).click();
});