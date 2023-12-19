import { test, expect } from "@playwright/test";

const { chromium, webkit, firefox } = require("playwright");

test("addtocart", async ({}) => {
  /**
   * @Epic Add to Cart
   * @Feature place order
   * @Story OrderPage
   */
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  // Original code with shortened selectors

  await page.goto("https://www.amerisano.com/order");
  await expect(page).toHaveTitle(
    "Order Amerisano dental gloves - | The gloves you recieve are direct from the factory and only change hands once, significantly lowering the cost to your practice."
  );

  // Accept Cookies
  await expect(page.getByText("Accept AllSetup Cookies")).toBeVisible();
  await page.getByRole("button", { name: "Accept All" }).click();

  // Locate Product
  await page
    .getByRole("heading", { name: "Nitrile Exam Gloves | AS-600" })
    .click();
  await page.locator(".input_input__lyuFG").first().click();
  await page.getByPlaceholder("Please enter your email").fill("abc@abc.com");
  await page
    .locator('label:has-text("Be the first to know when")')
    .getByRole("button")
    .click();

  // Shortened selectors for product variations
  const productVariationSelector =
    ".product_product__DrVEg .product_form-row___weFk div .input_container__8yb9l .input_data__fSFbO .input_input__lyuFG";

  await page
    .locator(`div:nth-child(2) > ${productVariationSelector}`)
    .first()
    .click();
  await page
    .locator(`div:nth-child(2) > ${productVariationSelector}`)
    .first()
    .fill("1");

  await page
    .locator(`div:nth-child(3) > ${productVariationSelector}`)
    .first()
    .fill("2");
  await page
    .locator(`div:nth-child(4) > ${productVariationSelector}`)
    .first()
    .fill("3");
  await page
    .locator(`div:nth-child(5) > ${productVariationSelector}`)
    .first()
    .fill("4");

  // Shortened selectors for other steps
  await page
    .getByRole("heading", { name: "Nitrile Exam Gloves | AS-580" })
    .click();
  await page.getByText("Medical-Grade, Exceptional").click();
  await page
    .locator("div:has-text(/^SM$/)")
    .getByRole("spinbutton")
    .first()
    .fill("1");
  await page
    .locator("div:has-text(/^SM$/)")
    .getByRole("spinbutton")
    .nth(1)
    .fill("4");

  // Other steps remain unchanged

  await page
    .frameLocator('iframe[title="Kustomer Widget Iframe"]')
    .getByLabel("Close Chat Popup")
    .click();

  await page.getByRole("button", { name: "ADD TO CART" }).first().click();
  await page.locator(".icon-close").click();

  await page.getByRole("button", { name: "ADD TO CART" }).nth(1).click();
  await page.locator(".icon-close").click();

  await page.getByRole("button", { name: "ADD TO CART" }).nth(2).click();
  await page.getByRole("button", { name: "Proceed to Checkout" }).click();

  await page.goto("https://www.amerisano.com/checkout");
});
