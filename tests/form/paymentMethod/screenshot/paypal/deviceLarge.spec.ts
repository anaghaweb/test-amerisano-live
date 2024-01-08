import { test, expect } from "@playwright/test";
import { AS588_Order_Section, AS600_Order_Section, PaymentMethodForm,ShippingAddressForm} from "../../../../../Objects/forms";
import { Cookies, DiscountCoupanPopup, Proceed_To_Checkout_Btn } from "../../../../../Objects/Shared";
import { OrderPage } from "../../../../../Objects/Pages";
import { setupTest, teardownTest, getPage } from '../../../../../testSetup/setupTest';
import { largeScreen } from "../../../../../contexts";
import { size } from "../../../../../data";

process.env.ALLURE_RESULTS_DIR = "raw-test-data/forms/paymentmethod/screenshot/paypal/deviceLarge";

  const billingAddressData = { firstname:'bruce', lastname:'lee', company:'new oral care', 
 address1:'21, oceanview', address2:'abc complex, 2nd floor', city:'alabama', zipcode:'20003', phone:'2234567890'}
 const shippingAddressData = {email:'johndoe@testing.com', firstname:'john', lastname:'doe', company:'new oral care', 
 address1:'21, oceanview', address2:'abc complex, 2nd floor', city:'alabama', zipcode:'20003', phone:'2234567890'};

test.beforeEach("teardown Context", async () => {
  await teardownTest();
});

for (const device of largeScreen) {
  

  test(`PayPal Payment Method screenshot ${device.name} `, async ({}, testInfo) => {
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
     
    await pom588.fill_input_AS588(`${size[1].size}`, '1');
    await pom588.fill_input_AS588(`${size[2].size}`, '1');
    
  const cookie_pom = new Cookies(page);
   cookie_pom.Accept_Cookies();
  await pom588.Add_AS588_To_Cart().click();
  const checkoutBtn = new Proceed_To_Checkout_Btn(page);;
 await checkoutBtn.ProceedToCheckOutBtn().click();

   //wait for checkout page to load
   await page.waitForTimeout(5000);
    await expect(page
      .getByRole("link", { name: "Please add a shipping address" })).toBeVisible();
      const discountCoupanPopup = new DiscountCoupanPopup(page);
   await discountCoupanPopup.closeModal();

         /**
     * @Step close discount coupan dialog 
     */
       /**
     * @Step  
     */
        
      
      /**
     * @Step Add new shipping Address
     */
     
     await page.getByRole("link",{name:"Please add a shipping address"}).click();
      const sa_pom = new ShippingAddressForm(page);
      await sa_pom.fillShippingAddressForm(shippingAddressData);
      await sa_pom.checkAddAddressBtn();
      await sa_pom.clickAddAddressBtn();

       /**
     * @Step Open Payment Method Form
     */
     
      const pm_pom = new PaymentMethodForm(page);
      await pm_pom.OpenPaymentMethodForm();
      //select CreditCard payment method

      await pm_pom.PaybyPayPal();
      
      await testInfo.attach(`PayPal_screenshot_${device.name}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });      
  });
}
