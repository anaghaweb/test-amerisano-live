import { test, expect } from "@playwright/test";
import { AS580_Order_Section,  AS588_Order_Section, AS600_Order_Section} from "../../../../../Objects/forms";
import { OrderPage } from "../../../../../Objects/Pages";
import { setupTest, teardownTest, getPage } from '../../../../../testSetup/setupTest';
import { qty, size } from "../../../../../data";
import {Cookies, DiscountCoupanPopup} from "../../../../../Objects/Shared";
import { desktop as device } from "../../../../../contexts";
import {CartNavbarButton} from "../../../../../Objects/Shared";


process.env.ALLURE_RESULTS_DIR = "raw-test-data/cart/combo/580588600/xs"

  test.beforeEach("teardown Context", async () => {
    await teardownTest();
  });
  const gsize=size[0].size;
  
  for(let i=0; i<4 ; i++){
  test(`AS580, AS588 & AS600 Add to cart ${gsize} Qty - ${i}`, async ({}, testInfo) => {
    await setupTest({device});
    const page = getPage();
    const newOrderPage = new OrderPage(page);
    await newOrderPage.LoadOrderPage();
    await expect(page).toHaveURL("https://www.amerisano.com/order");
    const cookie_pom = new Cookies(page);
    const popup_pom = new DiscountCoupanPopup(page)
    cookie_pom.Accept_Cookies();
    const pom580 = new AS580_Order_Section(page);
    
    const res1 =  await pom580.fill_input_AS580(`${gsize}`, qty[i].toString());
    if(res1 !==false){
      await pom580.click_Cart_Button();
      await pom580.closeCartMenuIcon();
      }
    const pom588 = new AS588_Order_Section(page);

    const res2 = await pom588.fill_input_AS588(`${gsize}`, qty[i].toString());
    if(res2 !==false){
    await pom588.click_Cart_Button();
    await pom588.closeCartMenuIcon();
    }
    
    const pom600 = new AS600_Order_Section(page);

    const res3 = await pom600.fill_input_AS600(`${gsize}`, qty[i].toString());
    if(res3 !==false){
        await pom600.click_Cart_Button();
        await pom600.closeCartMenuIcon();
    }
    const pomcart = new CartNavbarButton(page);
    await pomcart.Open_Main_Cart();
    await popup_pom.closeModal();
    await testInfo.attach(`AS580_588_600_addtocart_${gsize} size_Qty_${qty[i]}.png`, {
      body: await page.screenshot({fullPage:true}),
      contentType: "image/png",
    });

  });
}
