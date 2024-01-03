import { test, expect } from "@playwright/test";
import { AS600_Order_Section} from "../../../../Objects/forms";
import { DiscountCoupanPopup, Proceed_To_Checkout_Btn } from "../../../../Objects/Shared";
import { OrderPage } from "../../../../Objects/Pages";
import { setupTest, teardownTest, getPage } from '../../../../testSetup/setupTest';
import { largeScreen } from "../../../../contexts";


process.env.ALLURE_RESULTS_DIR = "raw-test-data/forms/shipadd/screenshot";

  test.beforeEach("teardown Context", async () => {
  await teardownTest();
});

for (const device of largeScreen) {
  

  test(`Shipping Address form screenshot on ${device.name} `, async ({}, testInfo) => {
    /**
     * @Epic Shipping Address Form
     * @Feature Screenshots
     * @Story OrderPage
     */
    await setupTest({ device });
    const page = getPage();
    const newOrderPage = new OrderPage(page);
    await newOrderPage.LoadOrderPage();
    await expect(page).toHaveURL("https://www.amerisano.com/order");

    /**
     * @Step Add product to Cart
     */
   
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

        // Open Shipping Address Form
      await page.getByRole("link",{name:"Please add a shipping address"}).click();
        
      // Take a screenshot
      await testInfo.attach(`shipAddress_form_empty_${device.name}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });      
  });
}
