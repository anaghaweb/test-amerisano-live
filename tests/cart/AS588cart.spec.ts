import { test, expect } from "@playwright/test";
import AS580_Order_Section from "../Objects/Forms/AS580-order";
import AS588_Order_Section from "../Objects/Forms/AS588-order";
import AS600_Order_Section from "../Objects/Forms/AS600-order";
import Cart_Close_Btn from "../Objects/Shared/Buttons/Close-Cart-Btn";
import Proceed_To_Checkout_Btn from "../Objects/Shared/Buttons/Proceed-To-Checkout-Btn";
import OrderPage from "../Objects/Pages/orderPage/goto-OrderPage";
import { setupTest, teardownTest, getPage } from "../SetupTest/setupTest";
import { largeScreen } from "../Context/largeScreen";

process.env.ALLURE_RESULTS_DIR = "raw-test-data/cart/addtocart/AS588";

test.beforeEach("teardown Context", async () => {
  await teardownTest();
});

for (const device of largeScreen) {
 
  test(`AS588 ViewCart Order Page on device ${device.name} `, async ({}, testInfo) => {
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
    const orderAS588 = new AS588_Order_Section(page);
    await orderAS588.AS588OrderSection("1", "1");
    await orderAS588.Add_AS588_To_Cart().click();
    await page.locator(".icon-close").click();
    await page.getByRole("link", { name: "Link to cart page Cart" }).click();
    await page.waitForTimeout(2000);
    await testInfo.attach(`AS588_addtocart_${device.name}.jpeg`, {
      body: await page.screenshot(),
      contentType: "image/jpeg",
    });
  });
}
