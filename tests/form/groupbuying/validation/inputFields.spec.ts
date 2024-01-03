import { test } from "@playwright/test";
import { largeScreen } from "../../../../contexts";
import {
  setupTest,
  teardownTest,
  getPage,
} from "../../../../testSetup/setupTest";
import { Cookies } from "../../../../Objects/Shared";
import {  GotoAmerisanoHomePage } from "../../../../Objects/Pages";
import {GroupBuyingForm} from "../../../../Objects/forms";

const groupOrderFormData = {
  firstname: "john",
  lastname: "doe",
  email: "",
  groupname: "",
  phone: "2345678901",
};
test.beforeEach(async () => {
  await teardownTest();
});
//test results storage path
process.env.ALLURE_RESULTS_DIR =
  "raw-test-data/forms/groupbuying/validation/inputfields";

for (const device of largeScreen) {
  test.describe(`${device.name} GroupBuyingForm Screenshots`, () => {
    test(`screenshot taken on ${device.name}`, async ({}, testInfo) => {
      await setupTest({ device });
      const page = await getPage();
      const ahp_pom=new GotoAmerisanoHomePage(page);
      const cookie_pom= new Cookies(page);
      const gb_pom = new GroupBuyingForm(page);
      //load homepage
      await ahp_pom.gotoHomePage();  
      //accept cookies popup
        await cookie_pom.Accept_Cookies();
      //Enter group info
        await gb_pom.fillGroupBuyingForm(groupOrderFormData);
        //should fail submitting
        await gb_pom.SubmitFormData();
        //assert warning test
        await gb_pom.checkWarningText();
      await testInfo.attach(`warningText_${device.name}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });
    });
  });
}
