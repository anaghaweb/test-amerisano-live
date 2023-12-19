import { test, expect } from "@playwright/test";

test("ForgottonPasswordForm", async ({ page }) => {
  await page.goto("https://www.amerisano.com/");
  await page
    .getByRole("button", { name: "Link to account page Log in" })
    .click();
  await expect(
    page.getByRole("link", { name: "Forgot your password?" })
  ).toBeVisible();
  await page.getByRole("link", { name: "Forgot your password?" }).click();
  await expect(
    page.locator("h3").filter({ hasText: "Forgot your password?" })
  ).toBeVisible();
  await expect(page.getByText("Please, enter your email to")).toBeVisible();
  await expect(page.getByText("Email address *")).toBeVisible();
  await page.getByPlaceholder("email@example.com").click();
  await page.getByPlaceholder("email@example.com").fill("fake@fake.com");
  await page.locator("button").filter({ hasText: "Reset password" }).click();
  await expect(page.getByText("Done!An email with a link has")).toBeVisible();
  await expect(page.getByText("An email with a link has been")).toBeVisible();
  await page.locator("button").filter({ hasText: "Got it" }).click();
});
