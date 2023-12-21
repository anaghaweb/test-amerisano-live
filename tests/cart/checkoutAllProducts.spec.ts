import { test, expect } from "@playwright/test";
import AS580_Order_Section from "../Objects/Forms/AS580-order";
import AS588_Order_Section from "../Objects/Forms/AS588-order";
import AS600_Order_Section from "../Objects/Forms/AS600-order";
import Cart_Close_Btn from "../Objects/Shared/Buttons/Close-Cart-Btn";
import Proceed_To_Checkout_Btn from "../Objects/Shared/Buttons/Proceed-To-Checkout-Btn";
import OrderPage from "../Objects/Pages/orderPage/goto-OrderPage";
import { setupTest, teardownTest, getPage } from "../SetupTest/setupTest";
import { largeScreen } from "../Context/largeScreen";
import DiscountCoupanPopup from "../Objects/Shared/Popups/modal";

process.env.ALLURE_RESULTS_DIR = "raw-test-data/checkout/checkoutAllProducts";

for (const device of largeScreen) {
  test.beforeEach("teardown Context", async () => {
    await teardownTest();
  });

  test(`proceed to checkout from Order Page on device ${device.name} `, async ({}, testInfo) => {
    /**
     * @Epic Add to Cart
     * @Feature place order
     * @Story OrderPage
     */
    await setupTest({ device });
    const page = getPage();
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
    const pom = new DiscountCoupanPopup(page);
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
     await page
      .locator('input[name="address1"]')
      .fill("test address");
    await page
      .locator('input[name="apartment"]')
      .fill("test apartment");
    await page.locator('input[name="city"]').fill("test city");
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
    await page.getByText("Alabama").click();
    await page.locator('input[name="zipcode"]').fill("12345");
    page.locator('input[type="phone"]').fill("1234567890");
    const addaddressbutton = await page
      .locator("button")
      .filter({ hasText: "Add address" });
    await addaddressbutton.scrollIntoViewIfNeeded();
    await addaddressbutton.click();
    await pom.waitForDiscountCoupan();
     
    await testInfo.attach(`create_Acc_Form_${device.name}.png`, {
      body: await page.screenshot({ fullPage: true }),
      contentType: "image/png",
    });
    await expect(page).toHaveURL("https://www.amerisano.com/checkout");
  });
}
