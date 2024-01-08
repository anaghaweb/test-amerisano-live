import { test, expect } from "@playwright/test";
import { AS588_Order_Section, AS600_Order_Section} from "../../../../Objects/forms";
import { OrderPage } from "../../../../Objects/Pages";
import { setupTest, teardownTest, getPage } from '../../../../testSetup/setupTest';
import { qty, size } from "../../../../data";
import {Cookies} from "../../../../Objects/Shared";
import { desktop as device } from "../../../../contexts";


process.env.ALLURE_RESULTS_DIR = `raw-test-data/cart/addtocart/screenshot/AS588/m`;

  test.beforeEach("teardown Context", async () => {
    await teardownTest();
  });
  const gsize=size[2].size;
 
  for(let i=0; i<4 ; i++){
  test(`AS588 Add to cart Size ${gsize} Qty - ${i}`, async ({}, testInfo) => {
    await setupTest({device});
    const page = getPage();
    const newOrderPage = new OrderPage(page);
    await newOrderPage.LoadOrderPage();
    await expect(page).toHaveURL("https://www.amerisano.com/order");
    const cookie_pom = new Cookies(page);
    await cookie_pom.Accept_Cookies();
    const orderAS588 = new AS588_Order_Section(page);
    await orderAS588.fill_input_AS588(`${gsize}`, qty[i].toString());
    await orderAS588.click_Cart_Button();
        
    await testInfo.attach(`AS588_addtocart_${gsize}_size_Qty_${qty[i]}.png`, {
      body: await page.screenshot(),
      contentType: "image/png",
    });

   await orderAS588.closeCartMenuIcon();

  });
}
