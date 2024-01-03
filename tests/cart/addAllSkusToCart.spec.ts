import { test, expect } from "@playwright/test";
import { AS580_Order_Section, AS588_Order_Section, AS600_Order_Section} from "../../Objects/forms";
import {DiscountCoupanPopup} from "../../Objects/Shared";
import { Cart_Close_Btn} from "../../Objects/Shared";
import { OrderPage } from "../../Objects/Pages";
import { setupTest, teardownTest, getPage } from '../../testSetup/setupTest';
import { largeScreen } from "../../contexts";
import {Cookies} from "../../Objects/Shared";

process.env.ALLURE_RESULTS_DIR = "raw-test-data/cart/addtocart/screenshot/allskutocart";

test.beforeEach("teardown Context", async () => {
  await teardownTest();
});

for (const device of largeScreen) {
 
  test(`Add All Skus to cart ${device.name} `, async ({}, testInfo) => {
    /**
     * @Epic Add to Cart
     * @Feature place order
     * @Story OrderPage
     */
    await setupTest({ device });
    const page = getPage();
    const newOrderPage = new OrderPage(page);
    await newOrderPage.LoadOrderPage();
  
    /**
     * @Step Locate Product
     */
    const cookie_pom = new Cookies(page);
    cookie_pom.Accept_Cookies();
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
    await closecart.CloseCartBtn().click();
    await page.getByRole("link", { name: "Link to cart page Cart" }).click();
    await page.waitForTimeout(3000);
    const pom_popup = new DiscountCoupanPopup(page);
    await pom_popup.closeModal();
     //take checkout page screenshot
    await testInfo.attach(`addAllSkusToCart_${device.name}.png`, {
      body: await page.screenshot({fullPage: true}),
      contentType: "image/png",
    });
    
  });
}
