import { test} from "@playwright/test";
import {Cookies} from "../../../../../../Objects/Shared";
import {GotoLandingPage} from '../../../../../../Objects/Pages/index';
import { setupTest, teardownTest, getPage } from "../../../../../../SetupTest/setupTest";
import { largeScreen } from "../../../../../../Context/largeScreen";
import { isHorizontalScrollbarPresent } from "../../../../../../utils/widthCheck";

const freeboxData = [{name:'banner', method:'Assert_FreeBoxBanner_Visible'},
{name:'form', method:'Assert_FreeSampleForm_Visible'},
{name:'product', method:'Assert_Products_Visible'},
{name:'pricing', method:'Assert_BetterPricingSection_Visible'},
{name:'review', method:'Assert_ClientReviewSection_Visible'},
{name:'traits', method:'Assert_SpecialTraits_Visible'},
{name:'footer', method:'Assert_FreeSample_Footer_isVisible'},
]

test.beforeEach(`teardown Context`, async () => {
  await teardownTest();
});


  
process.env.ALLURE_RESULTS_DIR = `raw-test-data/pages/landingpages/freesample/screenshot/product/devicelarge`;

  for(const device of largeScreen){
    test.describe(`Amerisano LandingPage Page test ${device.name}`,async () => {

        test(` Freesample LP Product screenshot ${device.name} viewport: ${device.width}x${device.height}`, async ({}, testInfo  )=>{

            await setupTest({device});
            const page = getPage();
            const pom = new GotoLandingPage(page);
            const cookie_pom = new Cookies(page);
          //  const popup_pom = new DiscountCoupanPopup(page)
            await pom.LoadLandingPage();

           //Accept Cookie and close Discount Coupon
           // await cookie_pom.Accept_Cookies();
           // await popup_pom.closeModal();

            //Form Section
           await pom.Assert_Products_Visible();
            
            //check for width
            await page.waitForTimeout(2000);
           const checkWidth = await isHorizontalScrollbarPresent(page);
           
            await testInfo.attach(`check width on ${device.name}`,{
                body: checkWidth ? `Horizontal Scrollbar present for viewportWidth:${device.width}` : `width matches perfectly with viewport size ${device.width}`,
                contentType: 'text/plain'
            })
            await testInfo.attach(`freeSample Product ${device.name} viewport: ${device.width}X${device.height}`, {
                body: await page.screenshot(),
                contentType: 'image/png'
            })
        })
    })
  }

