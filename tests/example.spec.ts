import { test, expect } from "@playwright/test";
import AS600_Order_Section from "./Objects/Forms/AS600-order";

test.describe("recordlocator", () => {
  const { chromium, webkit, firefox } = require("playwright");

  test("testinglocator", async ({ page }) => {
    /**
     * @Epic Add to Cart
     * @Feature place order
     * @Story OrderPage
     */
    await page.goto("https://www.amerisano.com/");

    await page.getByRole('button', { name: 'Accept All' }).click();
    await page.locator('#header-desktop').getByRole('link', { name: 'Shop' }).click();
    await page.locator('div:nth-child(2) > .input_container__8yb9l > .input_data__fSFbO > .input_input__lyuFG').first().fill('1');
    await page.locator('div:nth-child(2) > .input_container__8yb9l > .input_data__fSFbO > .input_input__lyuFG').first().click();
    await page.getByRole('button', { name: 'ADD TO CART' }).first().click();
    await page.locator('.icon-close').click();
    await page.getByRole('link', { name: 'Link to cart page Cart' }).click();
    await expect(page.getByText('Amerisano AS-600 - 4 mil Chemo-Rated Nitrile Examination Gloves - 510(k) - Case Small 1 x $43.95RemoveUpdate $')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Continue Shopping' })).toBeVisible();
    await page.frameLocator('iframe[title="Kustomer Widget Iframe"]').getByLabel('Close Chat Popup').click();
  });
});
