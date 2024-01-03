import { test} from "@playwright/test";
import { DiscountCoupanPopup } from "../../../../../Objects/Shared";
import {Cookies} from "../../../../../Objects/Shared";
import { setupTest, teardownTest, getPage } from '../../../../../SetupTest/setupTest';
import { largeScreen } from "../../../../../context/largeScreen";
import AmerisanoHomePage from "../../../../../Objects/Pages/homepage/goto-homepage";
import { isHorizontalScrollbarPresent } from "../../../../../utils/widthCheck";

process.env.ALLURE_RESULTS_DIR = "raw-test-data/pages/homepage/screenshot/footer/devicelarge";

test.beforeEach("teardown Context", async () => {
    await teardownTest();
  });

  for(const device of largeScreen){
    test.describe(`Amerisano HomePage test ${device.name}`,async () => {

        test(`footer screenshot ${device.name} viewport: ${device.width}x${device.height}`, async ({}, testInfo  )=>{

            await setupTest({device});
            const page = getPage();
            const pom = new AmerisanoHomePage(page);
            const cookie_pom = new Cookies(page);
            const popup_pom = new DiscountCoupanPopup(page)
            await pom.gotoHomePage();

           //Accept Cookie and close Discount Coupon
            await cookie_pom.Accept_Cookies();
            await popup_pom.closeModal();

            //Review Section
            await pom.Assert_Footer_Visibile();
            
            //check for width
            await page.waitForTimeout(2000);
            const checkWidth = await isHorizontalScrollbarPresent(page);
           
            await testInfo.attach(`check width on ${device.name}`,{
                body: checkWidth ? `Horizontal Scrollbar present for viewportWidth:${device.width}` : `width matches perfectly with viewport size ${device.width}`,
                contentType: 'text/plain'
            })
            await testInfo.attach(`footer ${device.name} viewport: ${device.width}X${device.height}`, {
                body: await page.screenshot(),
                contentType: 'image/png'
            })

        })
    })
  }
    