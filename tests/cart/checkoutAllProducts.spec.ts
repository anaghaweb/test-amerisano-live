import { test, expect } from "@playwright/test";
import { AS580_Order_Section, AS588_Order_Section, AS600_Order_Section} from "../../Objects/forms";
import {DiscountCoupanPopup} from "../../Objects/Shared";
import { Cart_Close_Btn, Proceed_To_Checkout_Btn } from "../../Objects/Shared";
import { OrderPage } from "../../Objects/Pages";
import { setupTest, teardownTest, getPage } from '../../SetupTest/setupTest';
import { largeScreen } from "../../Context/largeScreen";

process.env.ALLURE_RESULTS_DIR = "raw-test-data/checkout/allskutocart";

test.beforeEach("teardown Context", async () => {
  await teardownTest();
});

for (const device of largeScreen) {
 
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
    const checkoutBtn = new Proceed_To_Checkout_Btn(page);;
   await checkoutBtn.ProceedToCheckOutBtn().click();

   //wait for checkout page to load
   await page.waitForTimeout(5000);
    await expect(page
      .getByRole("link", { name: "Please add a shipping address" })).toBeVisible();

      //close discount coupan dialog   
       const discountCoupanPopup = new DiscountCoupanPopup(page);
     await discountCoupanPopup.closeModal();
     //take checkout page screenshot
    await testInfo.attach(`create_Acc_Form_${device.name}.png`, {
      body: await page.screenshot({fullPage: true}),
      contentType: "image/png",
    });
    await expect(page).toHaveURL("https://www.amerisano.com/checkout");
  });
}
