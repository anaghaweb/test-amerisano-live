import { test, expect } from "@playwright/test";
import AS580_Order_Section from "../page-objects/AS580-order";
import AS588_Order_Section from "../page-objects/AS588-order";
import AS600_Order_Section from "../page-objects/AS600-order";
import Cart_Close_Btn from "../page-objects/Close-Cart-Btn";
import Proceed_To_Checkout_Btn from "../page-objects/Proceed-To-Checkout-Btn";
import OrderPage from "../page-objects/goto-OrderPage";

test.describe("record", () => {
  const { chromium, webkit, firefox } = require("playwright");

  test("should work", async ({}) => {
    /**
     * @Epic Add to Cart
     * @Feature place order
     * @Story OrderPage
     */
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    const newOrderPage = new OrderPage(page);
    await newOrderPage.LoadOrderPage();
    await expect(page).toHaveURL("https://www.amerisano.com/order");

    /**
     * @Step Locate Product
     */
    const closecart = new Cart_Close_Btn(page);
    const orderAS580 = new AS580_Order_Section(page);
    await orderAS580.AS580OrderSection("1", "1", "1", "1", "1");
    await orderAS580.Add_AS580_To_Cart().click();
    await closecart.CloseCartBtn().click();
    const orderAS588 = new AS588_Order_Section(page);
    await orderAS588.AS588OrderSection("1", "1");
    await orderAS588.Add_AS588_To_Cart().click();
    await closecart.CloseCartBtn().click();
    const orderAS600 = new AS600_Order_Section(page);
    await orderAS600.AS600OrderSection("1", "1", "1", "1", "1");
    await orderAS600.Add_AS600_To_Cart().click();
    const checkoutBtn = new Proceed_To_Checkout_Btn(page);
    checkoutBtn.ProceedToCheckOutBtn().click();

    await page
      .getByRole("link", { name: "Please add a shipping address" })
      .click();
    const email = await page
      .locator("div")
      .filter({
        hasText: /^Email \*Would you like to receive our newsletter$/,
      })
      .locator('input[name="email"]')
      .fill("william.henry.harrison@example-pet-store.com");
    await page.getByText("Would you like to receive our").click();
    const resedential = await page
      .locator(
        "div:nth-child(2) > .switch_swtich_container___Ibn7 > .switch_switch__n7BcE"
      )
      .click();
    const commercial = await page.locator(
      "div:nth-child(2) > .switch_swtich_container___Ibn7 > .switch_switch__n7BcE"
    );
    const firstname = await page.locator('input[name="name"]').fill("Test");
    const lastname = await page.locator('input[name="lastName"]').fill("form");
    const company = await page
      .locator('input[name="company"]')
      .fill("test company ");
    const address = await page
      .locator('input[name="address1"]')
      .fill("test address");
    const address2 = await page
      .locator('input[name="apartment"]')
      .fill("test apartment");
    const city = await page.locator('input[name="city"]').fill("test city");
    await page
      .locator(
        ".styles_dropdown__k8MjX > div > .input_container__8yb9l > .input_data__fSFbO > .input_input__lyuFG"
      )
      .first()
      .click();
    await page.getByText("United States").click();

    await page
      .locator(
        "div:nth-child(8) > .styles_dropdown__k8MjX > div > .input_container__8yb9l > .input_data__fSFbO > .input_input__lyuFG"
      )
      .click();
    const state = await page.getByText("Alabama").click();
    const zipcode = await page.locator('input[name="zipcode"]').fill("12345");
    const phone = page.locator('input[type="phone"]').fill("1234567890");
    const addaddressbutton = await page
      .locator("button")
      .filter({ hasText: "Add address" });
    await addaddressbutton.scrollIntoViewIfNeeded();
    await addaddressbutton.click();
    await expect(page)
      .toHaveURL("https://www.amerisano.com/checkout")
      .then((result) => {
        console.log(result);
      });
    await page.waitForTimeout(180000);
    await page.close();
    await context.close();
    await browser.close();
  });
});
