import { test, expect } from "@playwright/test";

test.describe("recordlocator", () => {
  const { chromium, webkit, firefox } = require("playwright");

  test("testinglocator", async ({ page }, testInfo) => {
    //Freebox page
    test.slow();
    await page.goto("https://www.amerisano.com/order");
    await page.getByRole("button", { name: "Accept All" }).click();
    await page
      .locator(
        "div:nth-child(2) > .input_container__8yb9l > .input_data__fSFbO > .input_input__lyuFG"
      )
      .first()
      .fill("1");
    await page
      .locator(
        "div:nth-child(2) > .input_container__8yb9l > .input_data__fSFbO > .input_input__lyuFG"
      )
      .first()
      .click();
    await page.getByRole("button", { name: "ADD TO CART" }).first().click();
    await page.getByRole("button", { name: "Proceed to Checkout" }).click();
    await expect(page
      .getByRole("link", { name: "Please add a shipping address" })).toBeVisible();
      
    page.on('dialog', async (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);

      // Close the dialog
      await dialog.dismiss();
    });

  
    await testInfo.attach(`screenshot`, {
      body: await page.screenshot(),
      contentType: "image/png",
    });

    await page.goto('https://www.amerisano.com/');
await page.goto('https://www.amerisano.com/');

  });


});



