import { test, expect } from "@playwright/test";
import { AS580_Order_Section, AS588_Order_Section, AS600_Order_Section} from "../../../Objects/forms";
import { Cart_Close_Btn, Proceed_To_Checkout_Btn } from "../../../Objects/Shared";
import { OrderPage } from "../../../Objects/Pages";
import { setupTest, teardownTest, getPage } from '../../../testSetup/setupTest';
import { qty, size } from "../../../data";
import {Cookies} from "../../../Objects/Shared";
import { desktop as device } from "../../../contexts";




  test.use({viewport:{width:1980, height: 1080}})
  test.beforeEach("teardown Context", async () => {
    await teardownTest();
  });

  qty.forEach(qty =>{
  test(`AS580 Add to cart ${size[0].xs} Qty - ${qty} `, async ({}, testInfo) => {

    process.env.ALLURE_RESULTS_DIR = `raw-test-data/cart/addtocart/screenshot/AS580/${qty}`;
  
    await setupTest({device});
    const page = getPage();
    const newOrderPage = new OrderPage(page);
    await newOrderPage.LoadOrderPage();
    await expect(page).toHaveURL("https://www.amerisano.com/order");
    const closecart = new Cart_Close_Btn(page);
    const cookie_pom = new Cookies(page);
    cookie_pom.Accept_Cookies();
    const orderAS580 = new AS580_Order_Section(page);
    await orderAS580.AS580OrderSection(`${qty}`, "0", "0", "0", "0");
    await orderAS580.Add_AS580_To_Cart().click();
    await page.waitForSelector('div > .icon_container__SL1SC');
    await page.locator('.icon-close').click();
    await page.getByRole("link", { name: "Link to cart page Cart" }).click();
    await testInfo.attach(`AS580_addtocart_${size[0].xs}_Qty_${qty}.jpeg`, {
      body: await page.screenshot(),
      contentType: "image/jpeg",
    });
  });
})

