import { test, expect } from "@playwright/test";
import AS580_Order_Section from "../../Objects/Forms/AS580-order";
import AS588_Order_Section from "../../Objects/Forms/AS588-order";
import AS600_Order_Section from "../../Objects/Forms/AS600-order";
import OrderPage from "../../Objects/Pages/orderPage/goto-OrderPage";
import BetterPricingSection from "../../Objects/Pages/common/goto-section-betterPricing";
import { setupTest, teardownTest, getPage } from "../../SetupTest/setupTest";
import { largeScreen } from "../../Context/largeScreen";
import ClientReviewSection from "../../Objects/Pages/common/goto-section-Testimonials";
import ContactUs_Form from "../../Objects/Pages/orderPage/goto-section-contactus";

process.env.ALLURE_RESULTS_DIR = "raw-test-data/pages/orderpage";

test.beforeEach("teardown Context", async () => {
  await teardownTest();
  console.log("context reset");
});

test.describe(`OrderPage Visual Regression Testing`, async () => {
  for (const device of largeScreen) {
    test(`Section AS580 in Order Page ${device.name} `, async ({}, testInfo) => {
      /**
       * @Epic sections
       * @Feature screenshots
       * @Story OrderPage
       */
      /**
       * @Step Section AS580 screenshot
       */
      await setupTest({ device });
      const page = getPage();
      const newOrderPage = new OrderPage(page);
      await newOrderPage.LoadOrderPage();
      await expect(page).toHaveURL("https://www.amerisano.com/order");
      const orderAS580 = new AS580_Order_Section(page);
      await orderAS580.AS580_heading().scrollIntoViewIfNeeded();
      await orderAS580.sizeXL().scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);
      await testInfo.attach(`orderpage_section_AS580_${device.name}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });
    });
    /**
     * @Step Section AS588 screenshot
     */
    test(`Section AS588 in Order Page ${device.name} `, async ({}, testInfo) => {
      /**
       * @Epic screenshot of AS588
       * @Feature AS588 order form
       * @Story OrderPage
       */

      /**
       * @Step Section AS588 screenshot
       */
      await setupTest({ device });
      const page = getPage();
      const newOrderPage = new OrderPage(page);
      await newOrderPage.LoadOrderPage();
      await expect(page).toHaveURL("https://www.amerisano.com/order");
      const orderAS588 = new AS588_Order_Section(page);
      await orderAS588.AS588_heading().scrollIntoViewIfNeeded();
      await orderAS588.sizeM().scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);
      await testInfo.attach(`orderpage_section_AS588_${device.name}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });
    });

    test(`Section AS600 in Order Page ${device.name} `, async ({}, testInfo) => {
      /**
       * @Epic screenshot of AS600
       * @Feature AS600 order form
       * @Story OrderPage
       */

      /**
       * @Step Section AS600 screenshot
       */
      await setupTest({ device });
      const page = getPage();
      const newOrderPage = new OrderPage(page);
      await newOrderPage.LoadOrderPage();
      await expect(page).toHaveURL("https://www.amerisano.com/order");
      const orderAS600 = new AS600_Order_Section(page);
      await orderAS600.AS600_heading().scrollIntoViewIfNeeded();
      await orderAS600.sizeXL().scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);
      await testInfo.attach(`orderpage_section_AS600_${device.name}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });
    });

    test(`Section Better Pricing in Order Page ${device.name} `, async ({}, testInfo) => {
      /**
       * @Epic screenshot of Better Pricing
       * @Feature Better Pricing order form
       * @Story OrderPage
       */
      0;
      /**
       * @Step Section Better Pricing screenshot
       */
      await setupTest({ device });
      const page = getPage();
      const newOrderPage = new OrderPage(page);
      await newOrderPage.LoadOrderPage();
      await expect(page).toHaveURL("https://www.amerisano.com/order");
      const pom = new BetterPricingSection(page);
      await pom.goto_BetterPricingSection();
      await pom.Check_BetterPricing_is_visible();
      await page.waitForTimeout(1000);
      await testInfo.attach(
        `orderpage_section_betterPricing_${device.name}.png`,
        {
          body: await page.screenshot(),
          contentType: "image/png",
        }
      );
    });

    test(`Section Client Review in Order Page ${device.name} `, async ({}, testInfo) => {
      /**
       * @Epic screenshot of Clinet Review
       * @Feature Clinet Review order form
       * @Story OrderPage
       */

      /**
       * @Step Section Clinet Review screenshot
       */
      await setupTest({ device });
      const page = getPage();
      const newOrderPage = new OrderPage(page);
      await newOrderPage.LoadOrderPage();
      await expect(page).toHaveURL("https://www.amerisano.com/order");
      const pom = new ClientReviewSection(page);
      await pom.goto_clientReviewSection();
      await pom.Check_clientReview_is_visible();
      await page.waitForTimeout(1000);
      await testInfo.attach(
        `orderpage_section_ClientReview_${device.name}.png`,
        {
          body: await page.screenshot(),
          contentType: "image/png",
        }
      );
    });

    test(`Section Contact Us Form in Order Page ${device.name} `, async ({}, testInfo) => {
      /**
       * @Epic screenshot of Contact Us Form
       * @Feature Contact Us Form order form
       * @Story OrderPage
       */

      /**
       * @Step Section Contact Us Form screenshot
       */
      await setupTest({ device });
      const page = getPage();
      const newOrderPage = new OrderPage(page);
      await newOrderPage.LoadOrderPage();
      await expect(page).toHaveURL("https://www.amerisano.com/order");
      const pom = new ContactUs_Form(page);
      await pom.goto_ContactUs_Form();
      await pom.Check_contactus_form_is_visible();
      await page.waitForTimeout(1000);
      await testInfo.attach(
        `orderpage_section_contactusform_${device.name}.png`,
        {
          body: await page.screenshot(),
          contentType: "image/png",
        }
      );
    });
  }
});
