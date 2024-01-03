import { test} from "@playwright/test";
import {Cookies} from "../../../../../Objects/Shared";
import {OrderPage} from '../../../../../Objects/Pages/index';
import { setupTest, teardownTest, getPage } from "../../../../../testSetup/setupTest";
import { largeScreen } from "../../../../../context";
import { isHorizontalScrollbarPresent } from "../../../../../utils/widthCheck";

process.env.ALLURE_RESULTS_DIR = "raw-test-data/pages/orderpage/screenshot/review/devicelarge";

test.beforeEach("teardown Context", async () => {
    await teardownTest();
  });

  for(const device of largeScreen){
    test.describe(`Amerisano Order Page test ${device.name}`,async () => {

        test(`Review OrderPage screenshot ${device.name} viewport: ${device.width}x${device.height}`, async ({}, testInfo  )=>{

            await setupTest({device});
            const page = getPage();
            const pom = new OrderPage(page);
            const cookie_pom = new Cookies(page);
          //  const popup_pom = new DiscountCoupanPopup(page)
            await pom.LoadOrderPage();

           //Accept Cookie and close Discount Coupon
            await cookie_pom.Accept_Cookies();
           // await popup_pom.closeModal();

            //Better Pricing Section
           await pom.Assert_Review_Section_Visible();
            
            //check for width
            await page.waitForTimeout(2000);
           const checkWidth = await isHorizontalScrollbarPresent(page);
           
            await testInfo.attach(`check width on ${device.name}`,{
                body: checkWidth ? `Horizontal Scrollbar present for viewportWidth:${device.width}` : `width matches perfectly with viewport size ${device.width}`,
                contentType: 'text/plain'
            })
            await testInfo.attach(`ReviewOrderPage ${device.name} viewport: ${device.width}X${device.height}`, {
                body: await page.screenshot(),
                contentType: 'image/png'
            })

        })
    })
  }
    