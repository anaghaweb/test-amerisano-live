import { test, expect } from "@playwright/test";

test("Cart-Section", async ({ page }) => {
  await page.goto("https://www.amerisano.com/order");
  await page
    .locator(
      "div:nth-child(2) > .input_container__8yb9l > .input_data__fSFbO > .input_input__lyuFG"
    )
    .first()
    .click();
  await page
    .locator(
      "div:nth-child(2) > .input_container__8yb9l > .input_data__fSFbO > .input_input__lyuFG"
    )
    .first()
    .fill("1");
  await page.getByRole("button", { name: "ADD TO CART" }).first().click();
  await page.locator(".icon-close").click();
  await page.getByRole("link", { name: "Link to cart page Cart" }).click();
  await expect(page.getByRole("heading", { name: "Your Cart" })).toBeVisible();
  await expect(
    page.getByText(
      "Amerisano AS-600 - 4 mil Chemo-Rated Nitrile Examination Gloves - 510(k) - Case Small 2 x $43.95RemoveUpdate $"
    )
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Continue Shopping" })
  ).toBeVisible();
  await page.getByRole("link", { name: "Continue Shopping" }).click();
  await page
    .locator(
      "div:nth-child(2) > .product_product__DrVEg > .product_content__yjUC8 > .product_row__cJSpY > .product_product-details__2Zl1a > .product_bottom__g5i_4 > .product_pricing__PC29q > .product_product-order__xPM4i > div > .product_product-variations__pWyyw > .product_form__mHjXD > .product_form-row___weFk > div > .input_container__8yb9l > .input_data__fSFbO > .input_input__lyuFG"
    )
    .first()
    .click();
  await page
    .locator(
      "div:nth-child(2) > .product_product__DrVEg > .product_content__yjUC8 > .product_row__cJSpY > .product_product-details__2Zl1a > .product_bottom__g5i_4 > .product_pricing__PC29q > .product_product-order__xPM4i > div > .product_product-variations__pWyyw > .product_form__mHjXD > .product_form-row___weFk > div > .input_container__8yb9l > .input_data__fSFbO > .input_input__lyuFG"
    )
    .first()
    .fill("2");
  await page.getByRole("button", { name: "ADD TO CART" }).nth(1).click();
  await page
    .locator(
      ".col-md-9 > .input_container__8yb9l > .input_data__fSFbO > .input_input__lyuFG"
    )
    .click();
  await page
    .locator(
      ".col-md-9 > .input_container__8yb9l > .input_data__fSFbO > .input_input__lyuFG"
    )
    .fill("123456");
  await page.getByRole("button", { name: "Apply" }).click();
  await page.locator(".icon-close").click();
  await page.getByRole("link", { name: "Link to cart page Cart" }).click();
  await expect(
    page.getByText(
      "Amerisano AS-580 - 4 mil Nitrile Examination Gloves - 510(k) - Case Extra Small 2 x $74.95RemoveUpdate $"
    )
  ).toBeVisible();
  await page
    .frameLocator('iframe[title="Kustomer Widget Iframe"]')
    .getByLabel("Close Chat Popup")
    .click();
  await page.getByText("Complete your order Discount").click();
  await expect(
    page
      .locator("div")
      .filter({ hasText: /^Subtotal\$233\.80Total\$233\.80$/ })
      .first()
  ).toBeVisible();
  await expect(page.getByRole("button", { name: "Checkout" })).toBeVisible();
  await page.getByRole("button", { name: "Checkout" }).click();
  await expect(page.getByText("Check your orderPlease select")).toBeVisible();
});
