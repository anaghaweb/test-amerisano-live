import { test, expect } from "@playwright/test";
import {  AS600_Order_Section} from "../../../../Objects/forms";
import { OrderPage } from "../../../../Objects/Pages";
import { setupTest, teardownTest, getPage } from '../../../../testSetup/setupTest';
import { qty, size } from "../../../../data";
import {Cookies} from "../../../../Objects/Shared";
import { desktop as device } from "../../../../contexts";


process.env.ALLURE_RESULTS_DIR = "raw-test-data/cart/addtocart/screenshot/AS600/m"

  test.beforeEach("teardown Context", async () => {
    await teardownTest();
  });
  const gsize=size[2].size;
  

  for(let i=0; i<4 ; i++){
  test(`AS600 Add to cart ${gsize} Qty - ${i}`, async ({}, testInfo) => {
    await setupTest({device});
    const page = getPage();
    const newOrderPage = new OrderPage(page);
    await newOrderPage.LoadOrderPage();
    await expect(page).toHaveURL("https://www.amerisano.com/order");
    const cookie_pom = new Cookies(page);
    await cookie_pom.Accept_Cookies();
    const orderAS600 = new AS600_Order_Section(page);
    await orderAS600.fill_input_AS600(`${gsize}`, qty[i].toString());
    await orderAS600.click_Cart_Button();
        
    await testInfo.attach(`AS600_addtocart_${gsize} size_Qty_${qty[i]}.png`, {
      body: await page.screenshot(),
      contentType: "image/png",
    });

   await orderAS600.closeCartMenuIcon();

  });
}
