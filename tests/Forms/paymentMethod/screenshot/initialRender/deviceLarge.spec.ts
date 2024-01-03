import { test, expect } from "@playwright/test";
import { AS600_Order_Section, PaymentMethodForm,ShippingAddressForm} from "../../../../../Objects/forms";
import { DiscountCoupanPopup, Proceed_To_Checkout_Btn } from "../../../../../Objects/Shared";
import { OrderPage } from "../../../../../Objects/Pages";
import { setupTest, teardownTest, getPage } from '../../../../../SetupTest/setupTest';
import { largeScreen } from "../../../../../Context/largeScreen";

process.env.ALLURE_RESULTS_DIR = "raw-test-data/forms/paymentmethod/screenshot/initialrender/deviceLarge";

  const billingAddressData = { firstname:'bruce', lastname:'lee', company:'new oral care', 
 address1:'21, oceanview', address2:'abc complex, 2nd floor', city:'alabama', zipcode:'20003', phone:'2234567890'}
 const shippingAddressData = {email:'johndoe@testing.com', firstname:'john', lastname:'doe', company:'new oral care', 
 address1:'21, oceanview', address2:'abc complex, 2nd floor', city:'alabama', zipcode:'20003', phone:'2234567890'};

test.beforeEach("teardown Context", async () => {
  await teardownTest();
});

for (const device of largeScreen) {
  

  test(`Payment Method Form screenshot initialrender ${device.name} `, async ({}, testInfo) => {
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

     // await pm_pom.PaybyCreditCard();
      
      await testInfo.attach(`PaymentMethodForm_screenshot_${device.name}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });      
  });
}
