import { test} from "@playwright/test";
import {Cookies} from "../../../../../../Objects/Shared";
import {GotoLandingPage} from '../../../../../../Objects/Pages/index';
import { setupTest, teardownTest, getPage } from "../../../../../../testSetup/setupTest";
import { largeScreen } from "../../../../../../contexts";
import { isHorizontalScrollbarPresent } from "../../../../../../utils/widthCheck";


test.beforeEach(`teardown Context`, async () => {
  await teardownTest();
});
  
process.env.ALLURE_RESULTS_DIR = `raw-test-data/pages/landingpages/freesample/screenshot/footer/devicelarge`;

  for(const device of largeScreen){
    test.describe(`Amerisano LandingPage Page test ${device.name}`,async () => {

        test(` Freesample LP footer screenshot ${device.name} viewport: ${device.width}x${device.height}`, async ({}, testInfo  )=>{

            await setupTest({device});
            const page = getPage();
            const pom = new GotoLandingPage(page);
            const cookie_pom = new Cookies(page);
          //  const popup_pom = new DiscountCoupanPopup(page)
            await pom.LoadLandingPage();

           //Accept Cookie and close Discount Coupon
           // await cookie_pom.Accept_Cookies();
           // await popup_pom.closeModal();

            //footer Section
           await pom.Assert_FreeSample_Footer_isVisible();
            
            //check for width
            await page.waitForTimeout(2000);
           const checkWidth = await isHorizontalScrollbarPresent(page);
           
            await testInfo.attach(`check width on ${device.name}`,{
                body: checkWidth ? `Horizontal Scrollbar present for viewportWidth:${device.width}` : `width matches perfectly with viewport size ${device.width}`,
                contentType: 'text/plain'
            })
            await testInfo.attach(`freeSample footer ${device.name} viewport: ${device.width}X${device.height}`, {
                body: await page.screenshot(),
                contentType: 'image/png'
            })
        })
    })
  }

