import { test, expect } from "@playwright/test";

test("LoginForm", async ({ page }) => {
  await page.goto("https://www.amerisano.com/");
  await page
    .getByRole("button", { name: "Link to account page Log in" })
    .click();
  await page
    .locator("form")
    .filter({ hasText: "Username or email address" })
    .locator('input[type="email"]')
    .click();
  await page
    .locator("form")
    .filter({ hasText: "Username or email address" })
    .locator('input[type="email"]')
    .fill("bsk@faketesting.com");
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill("faketestingrun");
  await page.getByLabel("Remember me").check();
  await page.getByRole("button", { name: "Login" }).click();
});
