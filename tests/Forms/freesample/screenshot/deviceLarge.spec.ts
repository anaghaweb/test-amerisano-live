import { test, expect } from "@playwright/test";
import { largeScreen } from "../../../../Context/largeScreen";
import {
  setupTest,
  teardownTest,
  getPage,
} from "../../../../SetupTest/setupTest";
import { Cookies } from "../../../../Objects/Shared";
import {  GotoLandingPage } from "../../../../Objects/Pages";
import FreeSampleForm from "../../../../Objects/forms/freesample";

const testdata = {
  firstname: "john",
  lastname: "doe",
  email: "john@example.com",
  address1: "1, lakeview",
  address2: "abc town",
  city: "future city",
  zipcode: "12345",
  phone: "1234567890",
  company: "future company",
};
test.beforeEach(async () => {
  await teardownTest();
});
//test results storage path
process.env.ALLURE_RESULTS_DIR =
  "raw-test-data/forms/freesample/screenshot/deviceLarge";

for (const device of largeScreen) {
  test.describe(`${device.name} freeSampleForm Screenshots`, () => {
    test(`screenshot taken on ${device.name}`, async ({}, testInfo) => {
      await setupTest({ device });
      const page = await getPage();
      const nw_pom = new GotoLandingPage(page);
      const cookie_pom = new Cookies(page);
      //go to landing page
      await nw_pom.gotoLandingPage();
      //create new instance of form
      const fs_pom = new FreeSampleForm(page);
      await expect(fs_pom.as580ChooseSize()).toBeVisible();
      await fs_pom.chooseSizeAS580();
      await fs_pom.fillGeneralInfo(testdata);
      await fs_pom.fillState();
      //  await cookie_pom.Accept_Cookies();
      await testInfo.attach(`freeSampleForn_step1_${device.name}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });
      await fs_pom.submitInfo();
      await fs_pom.feedbackOption_1();
      await fs_pom.willGiveFeedback();
      await testInfo.attach(`freeSampleForm_step2_${device.name}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });
    });
  });
}
