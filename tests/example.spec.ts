import { test, expect } from "@playwright/test";
import AS600_Order_Section from "./page-objects/AS600-order";

test.describe("recordlocator", () => {
  const { chromium, webkit, firefox } = require("playwright");

  test("testinglocator", async ({}) => {
    /**
     * @Epic Add to Cart
     * @Feature place order
     * @Story OrderPage
     */
    await page.goto("https://www.amerisano.com/");
    await page
      .getByRole("button", { name: "Link to account page Log in" })
      .click();
    await page.getByRole("link", { name: "Create Account" }).click();
    await page
      .locator(
        ".styles_dropdown__k8MjX > div > .input_container__8yb9l > .input_data__fSFbO > .input_input__lyuFG"
      )
      .click();
    await page.getByPlaceholder("Search").click();
    await page.getByPlaceholder("Search").fill("10");
    await page.getByText("-50 Employes").click();
    await page
      .locator(
        ".styles_dropdown__k8MjX > div > .input_container__8yb9l > .input_data__fSFbO > .input_input__lyuFG"
      )
      .click();
    await page.getByText("-10 Employes").click();
    await page.locator(".icon-close").click();
    await expect(
      page.locator(
        ".styles_dropdown__k8MjX > div > .input_container__8yb9l > .input_data__fSFbO > .input_input__lyuFG"
      )
    ).toHaveValue("0-10 Employes");
    await page
      .locator(
        ".styles_dropdown__k8MjX > div > .input_container__8yb9l > .input_data__fSFbO > .input_input__lyuFG"
      )
      .click();
    await page.getByText("-50 Employes").click();
    await page.goto("https://www.amerisano.com/");
    await expect(page.getByText("🎄 10% OFF - USE CODE:")).toBeVisible();
    await page
      .getByRole("button", { name: "Link to account page Log in" })
      .click();
    await page.getByRole("link", { name: "Create Account" }).click();
    await page.getByRole("button", { name: "Accept All" }).click();
    await page.getByRole("button", { name: "Submit" }).click();

    await page.locator('input[type="text"]').first().click();
    await page.locator('input[type="text"]').first().fill("abc");
    await page.locator('input[type="text"]').nth(1).click();
    await page.getByRole("button", { name: "Submit" }).click();
    await page.locator('input[type="text"]').nth(1).click();
    await page.locator('input[type="email"]').first().click();
    await page.locator('input[type="email"]').first().fill("fake@fake.com");
    await page
      .frameLocator('iframe[title="Kustomer Widget Iframe"]')
      .getByLabel("Close Chat Popup")
      .click();
    await page.locator('input[type="password"]').first().click();
    await page.locator('input[type="password"]').first().click();
    await page.locator('input[type="password"]').first().fill("abc");
    await page.locator('input[type="password"]').first().press("Tab");
    await page.locator('input[type="password"]').nth(1).fill("abc");
    await page
      .locator("div > .icon_container__SL1SC > .icon-right-arrow")
      .click();
    await page.getByText("-10 Employes").click();
    await page.getByRole("button", { name: "Submit" }).click();
    await page.locator('input[type="text"]').nth(1).click();
    await page.locator('input[type="text"]').nth(1).fill("bcd fake");
    await page.locator('input[type="email"]').nth(1).click();
    await page.locator('input[type="email"]').nth(1).fill("");
    await page.getByRole("button", { name: "Submit" }).click();

    //unsuccess submit

    await page.locator(".icon-close").click();
    await expect(page.getByText("Please fill all the fields.")).toBeVisible();
    await expect(page.getByText("Email does not match, please")).toBeVisible();
    await expect(page.getByText("Password does not match,")).toBeVisible();
    await page
      .frameLocator('iframe[title="Kustomer Widget Iframe"]')
      .getByLabel("Close Chat Popup")
      .click();
    await page.getByRole("button", { name: "Accept All" }).click();
    await page.locator('input[type="email"]').nth(1).click();
    //successful submit

    await expect(
      page.getByText("Your account has been created.")
    ).toBeVisible();
    await expect(page.locator(".icon-check-rounded")).toBeVisible();
    await expect(page.locator('[id="__next"]')).toContainText(
      "Before accessing your account for the first time, please check your email fake@fake.com and verify your account."
    );
  });
});
