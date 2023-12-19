import { test, expect } from "@playwright/test";

test("FreeBoxForm", async ({ page }) => {
  await page.goto("https://www.amerisano.com/free-gloves-box-giftcard");
  await expect(
    page.getByRole("heading", { name: "GET YOUR FREE BOX!" })
  ).toBeVisible();
  await page.getByRole("button", { name: "CHOOSE SIZE" }).first().click();
  await page.getByText("Small").nth(1).click();
  await page.getByRole("button", { name: "CHOOSE SIZE" }).first().click();
  await page.getByText("Large").nth(2).click();
  await page.getByRole("button", { name: "CHOOSE SIZE" }).click();
  await page.getByText("Medium").nth(2).click();
  await page.getByPlaceholder("First name*").click();
  await page.getByPlaceholder("First name*").fill("bsk");
  await page.getByPlaceholder("First name*").press("Tab");
  await page.getByPlaceholder("Last name*").fill("testing");
  await page.getByPlaceholder("Last name*").press("Tab");
  await page.getByPlaceholder("Email*").fill("fake@fake.io");
  await page.getByPlaceholder("Email*").press("Tab");
  await page.getByPlaceholder("Address 1*").fill("abc street");
  await page.getByPlaceholder("Address 1*").press("Tab");
  await page.getByPlaceholder("Address 2").fill("no.001");
  await page.getByPlaceholder("Address 2").press("Tab");
  await page.getByRole("button", { name: "State* Dropdown icon" }).click();
  await page.getByRole("option", { name: "Alabama" }).click();
  await page.getByPlaceholder("City*").click();
  await page.getByPlaceholder("City*").fill("fake city");
  await page.getByPlaceholder("City*").press("Tab");
  await page
    .frameLocator('iframe[title="Kustomer Widget Iframe"]')
    .getByLabel("Close Chat Popup")
    .click();
  await page.getByPlaceholder("Company*").click();
  await page.getByPlaceholder("Zip Code*").click();
  await page.getByPlaceholder("Zip Code*").fill("123456");
  await page.getByPlaceholder("Phone*").click();
  await page.getByPlaceholder("Phone*").fill("1234567890");
  await page.getByPlaceholder("Company*").click();
  await page.getByPlaceholder("Company*").fill("fake dental care");
  await page.getByRole("button", { name: "NEXT" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Yes, someone else does the purchasing for me$/ })
    .locator("span")
    .nth(1)
    .click();
  await page
    .locator("div")
    .filter({
      hasText: /^No, I will provide feedback and place the order myself$/,
    })
    .locator("span")
    .nth(1)
    .click();
  await page
    .locator("div")
    .filter({ hasText: /^I will give feedback once I try the gloves$/ })
    .locator("div")
    .click();
  await page.getByRole("button", { name: "SEND ME A FREE BOX NOW" }).click();
  await expect(
    page.getByText(
      "A sales advisor will contact you shortly to validate your information. Once"
    )
  ).toBeVisible();
  await expect(page.getByRole("img")).toBeVisible();
  await expect(page.getByRole("button", { name: "CLOSE" })).toBeVisible();
  await page.getByRole("button", { name: "CLOSE" }).click();
});
