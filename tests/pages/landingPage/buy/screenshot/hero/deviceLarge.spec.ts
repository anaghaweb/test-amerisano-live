import { test, expect } from "@playwright/test";
import { DiscountCoupanPopup } from "../../../../../../Objects/Shared";
import {Cookies} from "../../../../../../Objects/Shared";
import { setupTest, teardownTest, getPage } from '../../../../../../testSetup/setupTest';
import { largeScreen } from "../../../../../../contexts";
import {Amerisano_Buy} from "../../../../../../Objects/Pages";
import { isHorizontalScrollbarPresent } from "../../../../../../utils/widthCheck";

process.env.ALLURE_RESULTS_DIR = "raw-test-data/pages/landingpages/buy/screenshot/hero/devicelarge";

test.beforeEach("teardown Context", async () => {
    await teardownTest();
  });

  for(const device of largeScreen){
    test.describe(`Amerisano/Buy LandingPage test ${device.name}`,async () => {

        test(`Hero section screenshot ${device.name}`, async ({}, testInfo  )=>{

            await setupTest({device});
            const page = getPage();
            const ab_pom = new Amerisano_Buy(page);
            const cookie_pom = new Cookies(page);
            await ab_pom.goto();

            //hero section
            await cookie_pom.Accept_Cookies();
            await ab_pom.heroSection();

            //check for width
            await page.waitForTimeout(2000);
            const checkWidth = await isHorizontalScrollbarPresent(page);
           
            await testInfo.attach(`check width on ${device.name}`,{
                body: checkWidth ? `Horizontal Scrollbar present for viewportWidth:${device.width}` : `width matches perfectly with viewport size ${device.width}`,
                contentType: 'text/plain'
            })
            await testInfo.attach(`hero section ${device.name}`, {
                body: await page.screenshot(),
                contentType: 'image/png'
            })

        })
    })
  }
    