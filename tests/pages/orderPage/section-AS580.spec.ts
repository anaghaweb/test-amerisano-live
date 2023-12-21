import { test, expect } from "@playwright/test";
import AS580_Order_Section from "../../Objects/Forms/AS580-order";
import AS588_Order_Section from "../../Objects/Forms/AS588-order";
import AS600_Order_Section from "../../Objects/Forms/AS600-order";
import OrderPage from "../../Objects/Pages/orderPage/goto-OrderPage";
import BetterPricingSection from "../../Objects/Pages/orderPage/goto-section-betterPricing";
import { setupTest, teardownTest, getPage } from "../../SetupTest/setupTest";
import { largeScreen } from "../../Context/largeScreen";
import ClientReviewSection from "../../Objects/Pages/orderPage/goto-section-Testimonials";
import ContactUs_Form from "../../Objects/Pages/orderPage/goto-section-contactus";

process.env.ALLURE_RESULTS_DIR = "raw-test-data/pages/orderpage";

  test.beforeEach("teardown Context", async () => {
    await teardownTest();
    console.log("context reset");
  });

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
}
