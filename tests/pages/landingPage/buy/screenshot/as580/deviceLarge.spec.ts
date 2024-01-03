import { test, expect } from "@playwright/test";
import { DiscountCoupanPopup } from "../../../../../../Objects/Shared";
import {Cookies} from "../../../../../../Objects/Shared";
import { setupTest, teardownTest, getPage } from '../../../../../../SetupTest/setupTest';
import { largeScreen } from "../../../../../../context/largeScreen";
import {Amerisano_Buy} from "../../../../../../Objects/Pages";
import { isHorizontalScrollbarPresent } from "../../../../../../utils/widthCheck";

process.env.ALLURE_RESULTS_DIR = "raw-test-data/pages/landingpages/buy/screenshot/as580/devicelarge";

test.beforeEach("teardown Context", async () => {
    await teardownTest();
  });

  for(const device of largeScreen){
    test.describe(`Amerisano/Buy LandingPage test ${device.name}`,async () => {

        test(`AS580 screenshot ${device.name}`, async ({}, testInfo  )=>{

            await setupTest({device});
            const page = getPage();
            const ab_pom = new Amerisano_Buy(page);
            const cookie_pom = new Cookies(page);
            await ab_pom.goto();

            //hero section
            await cookie_pom.Accept_Cookies();
            await ab_pom.as580();

            //check for width
            
            const checkWidth = await isHorizontalScrollbarPresent(page);
           
            await testInfo.attach(`check width on ${device.name}`,{
                body: checkWidth ? `Horizontal Scrollbar present for viewport Width:${device.width}` : `width matches perfectly with viewport size ${device.width}`,
                contentType: 'text/plain'
            })
            await testInfo.attach(`AS580 screenshot ${device.name}`, {
                body: await page.screenshot(),
                contentType: 'image/png'
            })

        })
    })
  }
    