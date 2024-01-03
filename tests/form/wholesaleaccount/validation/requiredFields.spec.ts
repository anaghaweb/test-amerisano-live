
import { test, expect } from "@playwright/test";
import { WholesaleForm } from "../../../../Objects/forms";
import { largeScreen } from "../../../../contexts";
import { setupTest,teardownTest, getPage  } from "../../../../testSetup/setupTest";
import { Cookies } from "../../../../Objects/Shared";
//duns number : 150483782

const wholesaleformdata = { 
  firstname:"John",
  lastname:"Doe",
  position:"developer",
  company:"fake testing inc",
  email:"fake@testing.io",
  phone:"1234567890",
  DUNSNumber:"",
  employees:"101 - 200 employees"}

process.env.ALLURE_RESULTS_DIR = "raw-test-data/forms/wholesaleaccount/validation/requiredfields";

test.beforeEach("teardown context", async () => {
  await teardownTest();
});

for (const device of largeScreen){
test.describe(`WholesaleAccount validation tests on ${device.name}`, () => {
  test(`should validate required fields on ${device.name}`, async ({ }, testInfo) => {

    await setupTest({device});
    const page = getPage();
    const ws_pom = new WholesaleForm(page);
    await ws_pom.LoadWholesaleAccPage();
    const cookie_pom = new Cookies(page);
    await cookie_pom.Accept_Cookies();
    await ws_pom.FillWholesaleForm(wholesaleformdata);
    await ws_pom.SubmitWholesaleForm();
    await expect(page.locator('[id="__next"]')).toContainText('Please complete all mandatory fields.');
    
    await page.locator('.col-sm-9').scrollIntoViewIfNeeded();
    await testInfo.attach(`validate_req_${device.name}.png`, {
      body: await page.screenshot(),
      contentType: "image/png",
    });
  
});
});
}
