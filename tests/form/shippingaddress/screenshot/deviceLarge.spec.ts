import { test, expect } from "@playwright/test";
import { AS588_Order_Section, AS600_Order_Section} from "../../../../Objects/forms";
import { Cookies, DiscountCoupanPopup, Proceed_To_Checkout_Btn } from "../../../../Objects/Shared";
import { OrderPage } from "../../../../Objects/Pages";
import { setupTest, teardownTest, getPage } from '../../../../testSetup/setupTest';
import { largeScreen } from "../../../../contexts";
import { qty, size as sizes } from "../../../../data";

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
   
    const pom588 = new AS588_Order_Section(page);
     
      await pom588.fill_input_AS588(`${sizes[1].size}`, '1');
      await pom588.fill_input_AS588(`${sizes[2].size}`, '1');
      
    const cookie_pom = new Cookies(page);
     cookie_pom.Accept_Cookies();
    await pom588.Add_AS588_To_Cart().click();
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
