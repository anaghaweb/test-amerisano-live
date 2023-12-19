import { test, expect } from "@playwright/test";

test("WholesaleAccountForm", async ({ page }) => {
  await page.goto("https://www.amerisano.com/request-wholesale-account");
  await expect(
    page.locator(".request-wholesale-account_wrapper__i5Uhy")
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Request a Wholesale Account" })
  ).toBeVisible();
  await expect(page.getByText("For orders over 250,000,")).toBeVisible();
  await page.locator('input[name="name"]').first().click();
  await page.locator('input[name="name"]').first().fill("bsk");
  await page.locator('input[name="name"]').first().press("Tab");
  await page.locator('input[name="name"]').nth(1).fill("fake testing");
  await page.locator('input[name="name"]').nth(1).press("Tab");
  await page.locator('input[name="position"]').fill("developer");
  await page.locator('input[name="position"]').press("Tab");
  await page.locator('input[name="company"]').fill("fake testing inc");
  await page.locator('input[name="company"]').press("Tab");
  await page.locator('input[name="company"]').click();
  await page.locator('input[name="company"]').press("ArrowLeft");
  await page.locator('input[name="company"]').press("ArrowLeft");
  await page.locator('input[name="company"]').press("ArrowLeft");
  await page.locator('input[name="company"]').press("ArrowLeft");
  await page.locator('input[name="company"]').press("ArrowLeft");
  await page.locator('input[name="company"]').fill("testing inc");
  await page.locator('input[name="company"]').press("Tab");
  await page
    .locator("form")
    .filter({ hasText: "First Name Last Name Position" })
    .locator('input[name="email"]')
    .click();
  await page
    .locator("form")
    .filter({ hasText: "First Name Last Name Position" })
    .locator('input[name="email"]')
    .fill("fake@testing.io");
  await page
    .locator("form")
    .filter({ hasText: "First Name Last Name Position" })
    .locator('input[name="email"]')
    .press("Tab");
  await page
    .locator("form")
    .filter({ hasText: "First Name Last Name Position" })
    .locator('input[name="phone"]')
    .fill("1234567890");
  await page.getByRole("spinbutton").click();
  await page.getByRole("spinbutton").fill("123456");
  await page.getByRole("radio").first().check();
  await page.locator("#yes").nth(1).check();
  await page.locator("#yes").nth(1).check();
  await page.getByRole("button", { name: "Submit" }).click();
  await page
    .frameLocator('iframe[title="Kustomer Widget Iframe"]')
    .getByLabel("Close Chat Popup")
    .click();
  await expect(
    page.getByText(
      "Request a Wholesale AccountThank you for your interest.Your message has been"
    )
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Request a Wholesale Account" })
  ).toBeVisible();
  await expect(
    page.getByText(
      "Thank you for your interest.Your message has been sent successfully. A"
    )
  ).toBeVisible();
  await expect(page.getByText("Your message has been sent")).toBeVisible();
});
