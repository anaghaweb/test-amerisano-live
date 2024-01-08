import { test, expect } from "@playwright/test";
import { AS580_Order_Section, AS600_Order_Section} from "../../../../Objects/forms";
import { Cookies, DiscountCoupanPopup, Proceed_To_Checkout_Btn } from "../../../../Objects/Shared";
import { OrderPage } from "../../../../Objects/Pages";
import { setupTest, teardownTest, getPage } from '../../../../testSetup/setupTest';
import { largeScreen } from "../../../../contexts";
import {ShippingAddressForm} from "../../../../Objects/forms";
import { qty, size as sizes } from "../../../../data";

process.env.ALLURE_RESULTS_DIR = "raw-test-data/forms/shipadd/formfilled";

  const shippingAddressData = {email:'johndoe@testing.com', firstname:'john', lastname:'doe', company:'new oral care', 
 address1:'21, oceanview', address2:'abc complex, 2nd floor', city:'alabama', zipcode:'20003', phone:'2234567890'}


test.beforeEach("teardown Context", async () => {
  await teardownTest();
});

for (const device of largeScreen) {
  test(`Shipping Address form filled on ${device.name} `, async ({}, testInfo) => {
    /**
     * @Epic Shipping Address Form
     * @Feature Screenshots
scro     */
    await setupTest({ device });
    const page = getPage();
    const newOrderPage = new OrderPage(page);
    await newOrderPage.LoadOrderPage();
    await expect(page).toHaveURL("https://www.amerisano.com/order");

    /**
     * @Step Add product to Cart
     */
    const pom580 = new AS580_Order_Section(page);
      await pom580.fill_input_AS580(`${sizes[0].size}`, '1');
      await pom580.fill_input_AS580(`${sizes[1].size}`, '1');
      await pom580.fill_input_AS580(`${sizes[2].size}`, '1');
      await pom580.fill_input_AS580(`${sizes[3].size}`, '1');
      await pom580.fill_input_AS580(`${sizes[4].size}`, '1');
    const cookie_pom = new Cookies(page);
     cookie_pom.Accept_Cookies();
    await pom580.Add_AS580_To_Cart().click();
    const checkoutBtn = new Proceed_To_Checkout_Btn(page);;
   await checkoutBtn.ProceedToCheckOutBtn().click();

   //wait for checkout page to load
   await page.waitForTimeout(2000);
   await page.getByRole("link", { name: "Please add a shipping address" }).scrollIntoViewIfNeeded();
    await expect(page
      .getByRole("link", { name: "Please add a shipping address" })).toBeVisible();
      //close discount coupan dialog   
   
      // Open Shipping Address Form
      await page.getByRole("link",{name:"Please add a shipping address"}).click();
      const sa_pom = new ShippingAddressForm(page);
      await sa_pom.fillShippingAddressForm(shippingAddressData);
      await sa_pom.checkAddAddressBtn();
      await testInfo.attach(`shipAddress_form_filled_${device.name}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });    
  });
}
