import { test, expect } from "@playwright/test";
import { AS600_Order_Section} from "../../Objects/forms";
import { Cart_Close_Btn } from "../../Objects/Shared";
import { OrderPage } from "../../Objects/Pages";
import { setupTest, teardownTest, getPage } from '../../SetupTest/setupTest';
import { largeScreen } from "../../Context/largeScreen";
import {Cookies} from "../../Objects/Shared";

process.env.ALLURE_RESULTS_DIR = "raw-test-data/cart/addtocart/screenshot/AS600";

test.beforeEach("teardown Context", async () => {
  await teardownTest();
});

for (const device of largeScreen) {
  

  test(`Add AS600 to cart on ${device.name} `, async ({}, testInfo) => {
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
    
    const orderAS600 = new AS600_Order_Section(page);
    const cookie_pom = new Cookies(page);
    cookie_pom.Accept_Cookies();
    await orderAS600.AS600OrderSection("1", "1", "1", "1", "1");
    await orderAS600.Add_AS600_To_Cart().click();
    await page.waitForSelector('div > .icon_container__SL1SC');
    await page.locator('.icon-close').click();
    await page.getByRole("link", { name: "Link to cart page Cart" }).click();
    
    await testInfo.attach(`AS600_addtocart_${device.name}.png`, {
      body: await page.screenshot(),
      contentType: "image/png",
    });
    await page.pause();
  });
}
