import { test, expect } from "@playwright/test";

test.describe("recordlocator", () => {
  const { chromium, webkit, firefox } = require("playwright");

  test("testinglocator", async ({ page }) => {
    /**
     * @Epic Add to Cart
     * @Feature place order
     * @Story OrderPageawait page.goto('https://www.amerisano.com/');
     await page.goto('https://www.amerisano.com/order');
     */

    //AS580 section
    await page
      .locator(
        "div:nth-child(2) > .product_product__DrVEg > .product_content__yjUC8 > .product_row__cJSpY > .product_product-details__2Zl1a > .product_bottom__g5i_4 > .product_pricing__PC29q"
      )
      .click();

    //AS600 section

    await page.locator(".product_pricing__PC29q").first().click();
    //as588 section

    await page
      .locator(
        "div:nth-child(3) > .product_product__DrVEg > .product_content__yjUC8 > .product_row__cJSpY > .product_product-details__2Zl1a > .product_bottom__g5i_4 > .product_pricing__PC29q > .styles_table__uAicj"
      )
      .click();
    await page.goto("about:blank");
    await page.goto("https://www.amerisano.com/order");
    await page
      .locator(
        "div:nth-child(3) > .product_product__DrVEg > .product_content__yjUC8 > .product_row__cJSpY > .product_product-details__2Zl1a > .product_bottom__g5i_4 > .product_pricing__PC29q"
      )
      .click();

    //as600
    await page.locator(".product_product-details__2Zl1a").first().click();
    //as580
    await page
      .locator(
        "div:nth-child(2) > .product_product__DrVEg > .product_content__yjUC8 > .product_row__cJSpY > .product_product-details__2Zl1a"
      )
      .click();
    //as588
    await page
      .locator(
        "div:nth-child(3) > .product_product__DrVEg > .product_content__yjUC8 > .product_row__cJSpY > .product_product-details__2Zl1a"
      )
      .click();

    //better pricing
  });
});
