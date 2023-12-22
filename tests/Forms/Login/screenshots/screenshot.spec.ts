import { test, expect } from "@playwright/test";
import { setupTest, teardownTest, getPage } from "../../../SetupTest/setupTest";
import { largeScreen } from "../../../Context/largeScreen";
import LoginForm from "../../../Objects/Forms/LoginForm";
import Cookies from "../../../Objects/Shared/cookies/cookie";

process.env.ALLURE_RESULTS_DIR = "raw-test-data/forms/loginform/screenshot";

test.beforeEach("teardown context", async () => {
  await teardownTest();
});
for (const device of largeScreen) {
  
test.describe(`Login Form on ${device.name} `, async () => {

    test(`should be visible on ${device.name}`, async ({}, testInfo) => {
      await setupTest({ device });
      const page = getPage();
      const lf_pom = new LoginForm(page);
      await lf_pom.gotoAmerisanoHomePage();
      
      await lf_pom.Open_LoginForm();
      await lf_pom.Fill_UserName_Email("bsk@gmail.com");
      await lf_pom.Fill_Password("password");
      await lf_pom.Click_RememberMe();
      
      //assert screenshot for login form visibility
      await lf_pom.CheckLoginForm_is_visible();
      const cookie_pom = new Cookies(page);
      await cookie_pom.Accept_Cookies();
      await testInfo.attach(`loginform_${device.name}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });
    });

    
  
});
}
