import { test } from "@playwright/test";
import { largeScreen } from "../../Context/largeScreen";
import { setupTest, teardownTest, getPage } from "../../SetupTest/setupTest";
import CreateAccountForm from "../../Objects/Forms/CreateAccount-Form";

process.env.ALLURE_RESULTS_DIR = "/raw-test-data/form/caform";

test.describe("Create Account Form", async () => {
  test.slow();
  test.beforeEach("teardown Context", async () => {
    await teardownTest();
  });
  test("Should Submit Successfully", async ({}, testInfo) => {
    for (const device of largeScreen) {
      await setupTest({ device });
      const page = getPage();
      const createNewAcc = new CreateAccountForm(page);
      await createNewAcc.goto();
      await createNewAcc.expectFormHeadingToBeVisible();
      await createNewAcc.fillFirstName(`tuesdaytesting`);
      await createNewAcc.fillLastName("amd");
      await createNewAcc.fillEmail("123fake@fake.com");
      await createNewAcc.fillConfirmEmail("123fake@fake.com");
      await createNewAcc.fillPassword("fake123");
      await createNewAcc.ConfirmPassword("fake123");
      await createNewAcc.selectNumberOfEmployees();
      await createNewAcc.clickSubmitButton();
      await page.waitForTimeout(3000);
      //assert submission status
      await createNewAcc.CheckSubmissionStatus();
      await testInfo.attach(`create_Acc_Form_${device.name}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });
    }
  });

  test("Unsuccessful Submission-required fields empty/mismatch", async ({}, testInfo) => {
    for (const device of largeScreen) {
      await setupTest({ device });
      const page = await getPage();
      const createNewAcc = new CreateAccountForm(page);
      await createNewAcc.goto();
      await createNewAcc.expectFormHeadingToBeVisible();

      //submit without filling any field
      await createNewAcc.clickSubmitButton();
      await page.waitForTimeout(1000);
      await createNewAcc.CheckSubmissionStatus();
      await testInfo.attach(`create_Acc_Form_${device.name}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });

      await createNewAcc.fillFirstName("testing");
      await createNewAcc.fillLastName("fake");
      await createNewAcc.fillEmail("fake@fake.com");
      await createNewAcc.fillConfirmEmail("nofake@fake.com"); //email mismatch
      await createNewAcc.fillPassword("fake123");
      await createNewAcc.ConfirmPassword("fake123");
      await createNewAcc.selectNumberOfEmployees();
      //submit with email values not matching
      await createNewAcc.clickSubmitButton();
      await page.waitForTimeout(1000);
      await createNewAcc.CheckSubmissionStatus();
      await testInfo.attach(`create_Acc_Form_${device.name}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });
      await createNewAcc.fillConfirmEmail("");
      await createNewAcc.fillConfirmEmail("fake@fake.com");
      await createNewAcc.ConfirmPassword("");
      await createNewAcc.ConfirmPassword("nofake123"); //password mismatch
      //submit with password values not matching
      await createNewAcc.clickSubmitButton();
      await page.waitForTimeout(1000);
      await createNewAcc.CheckSubmissionStatus();
      await testInfo.attach(`create_Acc_Form_${device.name}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });
    }
  });
});
