import { test, expect } from "@playwright/test";

test("GroupBuyingForm", async ({ page }) => {
  await page.goto("https://www.amerisano.com/#group");
  await page.locator(".icon-close").click();
  await page.getByRole("button", { name: "Accept All" }).click();
  await page
    .getByRole("heading", { name: "Schedule a call with our team" })
    .click();
  await page.getByPlaceholder("First name*", { exact: true }).click();
  await page.getByPlaceholder("First name*", { exact: true }).fill("test");
  await page.getByPlaceholder("First name*", { exact: true }).press("Tab");
  await page.getByPlaceholder("Last name*", { exact: true }).fill("form");
  await page.getByPlaceholder("Last name*", { exact: true }).press("Tab");
  await page
    .locator("#am-home-group-buying")
    .getByPlaceholder("Email*")
    .fill("test@abc.com");
  await page
    .locator("#am-home-group-buying")
    .getByPlaceholder("Email*")
    .press("Tab");
  await page.getByPlaceholder("Phone*").fill("1234567890");
  await page.getByRole("button", { name: "Group Size* dropdown-icon" }).click();
  await page.getByRole("option", { name: "0-50", exact: true }).click();
  await page.getByPlaceholder("Name of your group*").click();
  await page.getByPlaceholder("Name of your group*").fill("test r&d");
  await page.getByRole("button", { name: "Book Call Now!" }).click();
  await page.getByText("Your message has been sent").click();
  await expect(page.getByText("Your message has been sent")).toBeVisible();
  await page
    .frameLocator('iframe[title="Kustomer Widget Iframe"]')
    .getByLabel("Close Chat Popup")
    .click();
  await page.goto("https://www.amerisano.com/#group");
});

test("assert_Values", async ({ page }) => {
  await page.goto("https://www.amerisano.com/#group");
  await expect(
    page.getByRole("heading", { name: "Schedule a call with our team" })
  ).toBeVisible();
  await page.getByPlaceholder("First name*", { exact: true }).click();
  await page.getByPlaceholder("First name*", { exact: true }).fill("bsk");
  await expect(
    page.getByPlaceholder("First name*", { exact: true })
  ).toHaveValue("bsk");
  await page.getByPlaceholder("Last name*", { exact: true }).click();
  await page.getByPlaceholder("Last name*", { exact: true }).fill("testing");
  await expect(
    page.getByPlaceholder("Last name*", { exact: true })
  ).toHaveValue("testing");
  await page
    .locator("#am-home-group-buying")
    .getByPlaceholder("Email*")
    .click();
  await page
    .locator("#am-home-group-buying")
    .getByPlaceholder("Email*")
    .fill("bsk@testing.io");
  await expect(
    page.locator("#am-home-group-buying").getByPlaceholder("Email*")
  ).toHaveValue("bsk@testing.io");
  await page.getByPlaceholder("Phone*").click();
  await page.getByPlaceholder("Phone*").fill("1234567890");
  await expect(page.getByPlaceholder("Phone*")).toHaveValue("1234567890");
  await page.getByRole("button", { name: "Group Size* dropdown-icon" }).click();
  await page.getByRole("option", { name: "0-50", exact: true }).click();
  await page.locator(".icon-close").click();
  await page.getByRole("button", { name: "Accept All" }).click();
  await page
    .frameLocator('iframe[title="Kustomer Widget Iframe"]')
    .getByLabel("Close Chat Popup")
    .click();
  await page.getByPlaceholder("Name of your group*").click();
  await page.getByPlaceholder("Name of your group*").fill("fake dental care");
  await expect(page.getByPlaceholder("Name of your group*")).toHaveValue(
    "fake dental care"
  );
  await expect(
    page.getByRole("button", { name: "Book Call Now!" })
  ).toBeVisible();
  await page.getByRole("button", { name: "Book Call Now!" }).click();
  await expect(page.getByText("Your message has been sent")).toBeVisible();
});
