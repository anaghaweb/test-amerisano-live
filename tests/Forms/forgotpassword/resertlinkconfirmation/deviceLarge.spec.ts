import { test, expect } from "@playwright/test";
import { largeScreen } from "../../../../Context/largeScreen";
import { setupTest,teardownTest, getPage  } from "../../../../SetupTest/setupTest";
import { Cookies } from "../../../../Objects/Shared";
import ForgotPwdForm from "../../../../Objects/Forms/forgotpwd";


test.beforeEach(async () => {
  await teardownTest();
});
//test results storage path
process.env.ALLURE_RESULTS_DIR = "raw-test-data/forms/forgotpwd/resetink/deviceLarge";
for(const device of largeScreen){
  test.describe(`${device.name} resetLinkConfirmation`, () => {

    test(`reset link confirmation is visible on ${device.name}`,async ({},testInfo)=>{

      await setupTest({device});
      const page = await getPage();
      const fp_pom = new ForgotPwdForm(page);
      await fp_pom.OpenLoginForm();
      const cookie_pom = new Cookies(page);
      await cookie_pom.Accept_Cookies();
      await fp_pom.open_forgot_password_form();   
      await fp_pom.assert_form_is_visible();
      await fp_pom.fillEmailField('test@test.com');
      await fp_pom.submitEmailid();
      await fp_pom.resetLinkConfirmation();
       //screenshot test
       await testInfo.attach(`resetlink_${device.name}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });
      await fp_pom.assert_form_closed();
         
    })
   })}



