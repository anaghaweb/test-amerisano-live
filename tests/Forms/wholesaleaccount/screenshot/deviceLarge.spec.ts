
import { test, expect } from "@playwright/test";
import { WholesaleForm } from "../../../../Objects/forms";
import { largeScreen } from "../../../../Context/largeScreen";
import { setupTest,teardownTest, getPage  } from "../../../../SetupTest/setupTest";
import { Cookies } from "../../../../Objects/Shared";
//duns number : 150483782

const wholesaleformdata = { 
  firstname:"John",
  lastname:"Doe",
  position:"developer",
  company:"fake testing inc",
  email:"fake@testing.io",
  phone:"1234567890",
  DUNSNumber:"150483782",
  employees:"101 - 200 employees"}
process.env.ALLURE_RESULTS_DIR = "raw-test-data/forms/wholesaleaccount/screenshot";

test.beforeEach("teardown context", async () => {
  await teardownTest();
});

for (const device of largeScreen){
test.describe(`WholesaleAccount request page tests on ${device.name}`, () => {
  test(`wholesale acc form screenshots on ${device.name}`, async ({ }, testInfo) => {

    await setupTest({device});
    const page = getPage();
    const ws_pom = new WholesaleForm(page);
    await ws_pom.LoadWholesaleAccPage();
    const cookie_pom = new Cookies(page);
    await cookie_pom.Accept_Cookies();
    await ws_pom.FillWholesaleForm(wholesaleformdata);
    await page.locator('.col-sm-9').scrollIntoViewIfNeeded();
    await testInfo.attach(`wholesaleacc_req_${device.name}.png`, {
      body: await page.screenshot(),
      contentType: "image/png",
    });
  
});
});
}
