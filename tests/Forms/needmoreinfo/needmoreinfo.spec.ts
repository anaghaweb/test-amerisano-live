import { test, expect } from "@playwright/test";
import { OrderPage } from "../../../Objects/Pages";
import { largeScreen } from "../../../Context/largeScreen";
import { NeedMoreinfoForm } from "../../../Objects/forms";
import { setupTest,teardownTest, getPage } from "../../../SetupTest/setupTest";
import { Cookies } from "../../../Objects/Shared";

process.env.ALLURE_RESULTS_DIR = "raw-test-data/forms/niform";

test.beforeEach("teardown Context", async () => {
  await teardownTest();
});
test.describe("Need More Info - Desktop/Laptop", async () => {
 
  test("form submission should be Successful", async ({}, testInfo) => {
    for (const device of largeScreen) {
      await setupTest({ device });
      const page = await getPage();
      const newOrderPage = new OrderPage(page);
      await newOrderPage.LoadOrderPage();
      const newNeedInfo = new NeedMoreinfoForm(page);
      await newNeedInfo.clickNeedMoreInfo();
      await newNeedInfo.fillFirstName("abc");
      await newNeedInfo.fillLastName("testing");
      await newNeedInfo.fillEmail("fake@email.com");
      await newNeedInfo.fillPhone("1234567890");
      await newNeedInfo.fillMessage("This is a test message");
      await page.waitForTimeout(2000);
      await testInfo.attach(`NeedInfoForm_${device.name}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });
      await newNeedInfo.clickContactUsNow();
      await page.waitForTimeout(3000);
      await testInfo.attach(`NeedInfoForm_${device.name}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });
      await newNeedInfo.verifyMessageSent();
    }
  });

  test("Email field empty, should not submit", async ({}, testInfo) => {
    for (const device of largeScreen) {
      await setupTest({ device });
      const page = await getPage();
      const newOrderPage = new OrderPage(page);
      await newOrderPage.LoadOrderPage();
      const newNeedInfo = new NeedMoreinfoForm(page);
      await newNeedInfo.clickNeedMoreInfo();
      await newNeedInfo.fillFirstName("bsk");
      await newNeedInfo.fillLastName("testing");
      // await newNeedInfo.fillEmail("fake@email.com");
      await newNeedInfo.fillPhone("1234567890");
      await newNeedInfo.fillMessage("This is a test message");
      await page.waitForTimeout(2000);
      await testInfo.attach(`NeedInfoForm_${device.name}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });
      await newNeedInfo.clickContactUsNow();
      await page.waitForTimeout(3000);
      await testInfo.attach(`NeedInfoForm_${device.name}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });
      await newNeedInfo.verifyMessageSent();
    }
  });

  test("FirstName field empty, should not submit ", async ({}, testInfo) => {
    for (const device of largeScreen) {
      await setupTest({ device });
      const page = await getPage();
      const newOrderPage = new OrderPage(page);
      await newOrderPage.LoadOrderPage();
      const newNeedInfo = new NeedMoreinfoForm(page);
      await newNeedInfo.clickNeedMoreInfo();
      // await newNeedInfo.fillFirstName("bsk");
      await newNeedInfo.fillLastName("testing");
      await newNeedInfo.fillEmail("fake@email.com");
      await newNeedInfo.fillPhone("1234567890");
      await newNeedInfo.fillMessage("This is a test message");
      await getPage().waitForTimeout(2000);
      await testInfo.attach(`NeedInfoForm_${device.name}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });
      await newNeedInfo.clickContactUsNow();
      await getPage().waitForTimeout(3000);
      await testInfo.attach(`NeedInfoForm_${device.name}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });
      await newNeedInfo.verifyMessageSent();
    }
  });

  test("LastName field empty, should not submit ", async ({}, testInfo) => {
    for (const device of largeScreen) {
      await setupTest({ device });
      const page = await getPage();
      const newOrderPage = new OrderPage(page);
      await newOrderPage.LoadOrderPage();
      const newNeedInfo = new NeedMoreinfoForm(page);
      await newNeedInfo.clickNeedMoreInfo();
      await newNeedInfo.fillFirstName("bsk");
      // await newNeedInfo.fillLastName("testing");
      await newNeedInfo.fillEmail("fake@email.com");
      await newNeedInfo.fillPhone("1234567890");
      await newNeedInfo.fillMessage("This is a test message");

      await page.waitForTimeout(2000);
      await testInfo.attach(`NeedInfoForm_${device.name}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });
      await newNeedInfo.clickContactUsNow();
      await page.waitForTimeout(3000);
      await testInfo.attach(`NeedInfoForm_${device.name}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });
      await newNeedInfo.verifyMessageSent();
    }
  });

  test(" Message field empty, should not submit ", async ({}, testInfo) => {
    for (const device of largeScreen) {
      await setupTest({ device });
      const page = await getPage();
      const newOrderPage = new OrderPage(page);
      await newOrderPage.LoadOrderPage();
      const newNeedInfo = new NeedMoreinfoForm(page);
      await newNeedInfo.clickNeedMoreInfo();
      await newNeedInfo.fillFirstName("bsk");
      await newNeedInfo.fillLastName("testing");
      await newNeedInfo.fillEmail("fake@email.com");
      await newNeedInfo.fillPhone("1234567890");
      // await newNeedInfo.fillMessage("This is a test message");
      await page.waitForTimeout(2000);
      await testInfo.attach(`NeedInfoForm_${device.name}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });
      await newNeedInfo.clickContactUsNow();
      await page.waitForTimeout(3000);
      await testInfo.attach(`NeedInfoForm_${device.name}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });
      await newNeedInfo.verifyMessageSent();
    }
  });
});
