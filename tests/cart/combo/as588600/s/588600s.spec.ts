import { test, expect } from "@playwright/test";
import {  AS588_Order_Section, AS600_Order_Section} from "../../../../../Objects/forms";
import { OrderPage } from "../../../../../Objects/Pages";
import { setupTest, teardownTest, getPage } from '../../../../../testSetup/setupTest';
import { qty, size } from "../../../../../data";
import {Cookies, DiscountCoupanPopup} from "../../../../../Objects/Shared";
import { desktop as device } from "../../../../../contexts";
import {CartNavbarButton} from "../../../../../Objects/Shared";


process.env.ALLURE_RESULTS_DIR = "raw-test-data/cart/combo/588600/s"

  test.beforeEach("teardown Context", async () => {
    await teardownTest();
  });
  const gsize=size[1].size;
  
  for(let i=0; i<4 ; i++){
  test(`AS588 & AS600 Add to cart ${gsize} Qty - ${i}`, async ({}, testInfo) => {
    await setupTest({device});
    const page = getPage();
    const newOrderPage = new OrderPage(page);
    await newOrderPage.LoadOrderPage();
    await expect(page).toHaveURL("https://www.amerisano.com/order");
    const cookie_pom = new Cookies(page);
    const popup_pom = new DiscountCoupanPopup(page)
    await cookie_pom.Accept_Cookies();
    const pom588 = new AS588_Order_Section(page);
    const response = await pom588.fill_input_AS588(`${gsize}`, qty[i].toString());
    if(response !==false){
      await pom588.click_Cart_Button();
    await pom588.closeCartMenuIcon();
    }
    
    const pom600 = new AS600_Order_Section(page);
    const result = await pom600.fill_input_AS600(`${gsize}`, qty[i].toString());
    if(result !==false){
        await pom600.click_Cart_Button();
        await pom600.closeCartMenuIcon();
    }
    const pomcart = new CartNavbarButton(page);
    await pomcart.Open_Main_Cart();
    await popup_pom.closeModal();
    await testInfo.attach(`AS588&600_addtocart_${gsize} size_Qty_${qty[i]}.png`, {
      body: await page.screenshot({fullPage:true}),
      contentType: "image/png",
    });

  });
}
