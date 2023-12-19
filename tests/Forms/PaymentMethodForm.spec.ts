import { test, expect } from "@playwright/test";

test("PaymentMethodForm", async ({ page }) => {
  await expect(
    page
      .locator("div")
      .filter({ hasText: /^Add a payment method$/ })
      .first()
  ).toBeVisible();
  await expect(page.getByText("Payment methodsCredit")).toBeVisible();
  await expect(
    page.locator("div").filter({ hasText: /^Credit Card$/ })
  ).toBeVisible();
  await expect(
    page.locator("div").filter({ hasText: /^PayPal$/ })
  ).toBeVisible();
  await page
    .locator("div")
    .filter({ hasText: /^Credit Card$/ })
    .locator("span")
    .nth(1)
    .click();
  await expect(page.getByText("Add a new credit card")).toBeVisible();
  await page.getByLabel("Card number").click();
  await page.getByLabel("Card number").fill("123456789101112");
  await page.getByLabel("Expiry date in format MM YY").click();
  await page.getByLabel("Expiry date in format MM YY").fill("12 / 33");
  await page.getByLabel("CVC").click();
  await page.getByLabel("CVC").fill("645");
  await page
    .locator("div:nth-child(4) > span > .radio_radio__gkXW4")
    .first()
    .click();
  await page.locator("span:nth-child(3) > .radio_radio__gkXW4").click();
  await page
    .locator("div:nth-child(4) > span > .radio_radio__gkXW4")
    .first()
    .click();
  await page.getByLabel("Card number").click();
  await page.getByLabel("Card number").fill("1234567891011121");
  await page.getByLabel("Card number").click();
  await page.getByLabel("Card number").fill("1234567891011121112");
  await page
    .locator("div")
    .filter({ hasText: /^PayPal$/ })
    .locator("span")
    .nth(1)
    .click();
  await expect(page.getByText('PayPalAfter clicking "')).toBeVisible();
  await expect(page.getByText("PayPal").first()).toBeVisible();
  await expect(page.getByText('After clicking "Complete')).toBeVisible();
  await expect(
    page.locator("button").filter({ hasText: "Add payment method" })
  ).toBeVisible();
  await page
    .locator("button")
    .filter({ hasText: "Add payment method" })
    .click();
});
