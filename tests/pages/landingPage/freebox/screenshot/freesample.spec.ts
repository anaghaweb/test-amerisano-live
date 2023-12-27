import { test, expect } from "@playwright/test";
import { setupTest, teardownTest, getPage } from '../../../../../SetupTest/setupTest'
import { largeScreen } from "../../../../../Context/largeScreen";
import { BetterPricingSection,SpecialTraits,ClientReviewSection, Footer_Section } from "../../../../../Objects/Shared";
import { Cookies } from "../../../../../Objects/Shared";

process.env.ALLURE_RESULTS_DIR = "raw-test-data/pages/landingpages/freesample";

test.beforeEach("teardown Context", async () => {
  await teardownTest();
});
for (const device of largeScreen) {
  //Freebox page
  test.describe(`Amerisano Freebox on ${device.name} visual regression testing amfball`, async () => {
    test(` HeroSection on ${device.name} amhr_1`, async ({}, testInfo) => {
      await setupTest({ device });
      const page = getPage();
      await page.goto("https://www.amerisano.com/free-gloves-box-giftcard");
      //section one hero
      await expect(
        page.locator(".amerisano-homepage__banner-container")
      ).toBeVisible();
      const cookie_pom = new Cookies(page);
      await cookie_pom.Accept_Cookies();
      await expect(page.locator(".banner-section__container")).toBeVisible();
      //text assertion
      await page
        .getByText(
          "Nitrile Gloves designed for dentistryTRY OUR GLOVES AND GET A$10Starbucks gift"
        )
        .click();
      await expect(
        page.getByText(
          "Nitrile Gloves designed for dentistryTRY OUR GLOVES AND GET A$10Starbucks gift"
        )
      ).toBeVisible();
      await expect(page.locator(".giftcard_giftcard__k3GOa")).toBeVisible();
      await expect(page.locator("#landing")).toContainText(
        "+10% OFF on your first purchase."
      );
      await expect(page.locator("#landing")).toContainText(
        "USE CODE: COFFEE10 at checkout"
      );
      //ss
      await testInfo.attach(`herobanner_${device.name}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });
    });

    //process.env.ALLURE_RESULTS_DIR = "raw-test-data/pages/landingpages/freesample/sampleform";
    test(` FreeSampleForm on ${device.name} visual regression testing`, async ({}, testInfo) => {
      await setupTest({ device });
      const page = getPage();
      await page.goto("https://www.amerisano.com/free-gloves-box-giftcard");
      //freebox form
      await expect(
        page
          .locator("#free-box-section div")
          .filter({ hasText: "Amerisano AS-580Exceptional" })
          .nth(1)
      ).toBeVisible();
      await expect(
        page.getByText(
          "GET YOUR FREE BOX!100% Nitrile Examination GlovesAmerisano AS-580Exceptional"
        )
      ).toBeVisible();
      //assert formcards
      //as580
      await page
        .locator("#free-box-section div")
        .filter({ hasText: "Amerisano AS-580Exceptional" })
        .nth(1)
        .click();
      await expect(
        page.getByRole("img", { name: "product", exact: true }).first()
      ).toBeVisible();
      await expect(page.locator("#free-box-section")).toContainText(
        "Amerisano AS-580Exceptional Tactile SensitivityCHOOSE SIZEXS - Extra Small S - Small M - Medium L - Large XL - Extra Large"
      );
      //as588

      await expect(
        page
          .locator("#free-box-section div")
          .filter({ hasText: "Amerisano AS-588Silken Soft" })
          .nth(1)
      ).toBeVisible();
      await expect(
        page.getByRole("img", { name: "product", exact: true }).nth(2)
      ).toBeVisible();
      await expect(page.locator("#free-box-section")).toContainText(
        "Amerisano AS-588Silken Soft Touch, Extra Easy DonningCHOOSE SIZES - Small M - Medium"
      );
      //as600

      await expect(
        page
          .locator("#free-box-section div")
          .filter({ hasText: "Amerisano AS-600Chemo-Rated," })
          .nth(1)
      ).toBeVisible();
      await expect(
        page.getByRole("img", { name: "product", exact: true }).nth(1)
      ).toBeVisible();
      await expect(page.locator("#free-box-section")).toContainText(
        "Amerisano AS-600Chemo-Rated, Strength and DurabilityCHOOSE SIZES - Small M - Medium L - Large XL - Extra Large"
      );
      await page
        .getByText(
          "GET YOUR FREE BOX!100% Nitrile Examination GlovesAmerisano AS-580Exceptional"
        )
        .click();
      await testInfo.attach(`freesampleform_${device.name}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });
    });


    //section 2 products
    test(` product_section on ${device.name} visual regression testing`, async ({}, testInfo) => {
      await setupTest({ device });
      const page = getPage();
      await page.goto("https://www.amerisano.com/free-gloves-box-giftcard");
      
      
      //assert  heading
      await expect(page.locator("h3")).toContainText(
        "Try our gloves and find the perfect fit for you."
      );
      await expect(page.locator("#products")).toContainText(
        "More protection and significantly better feel"
      );
      await expect(page.locator("#products")).toBeVisible();

      //as600 card visible
      await expect(
        page
          .locator("div")
          .filter({
            hasText:
              /^Nitrile Exam GlovesAS-600Chemo-Rated Strength and Durability$/,
          })
          .getByRole("img")
      ).toBeVisible();
      await expect(
        page.getByText(
          "Nitrile Exam GlovesAS-600Chemo-Rated Strength and Durability"
        )
      ).toBeVisible();
      await page
        .getByRole("button", { name: "Expand Full Specs feature-icon" })
        .first()
        .click();
      await expect(page.locator("#products")).toContainText(
        "100% nitrile (non-blend), latex and powder freeMedical grade 510(k)Chemotherapy drug resistantSuperior puncture protectionHighly elastic with excellent dexterityPalm thickness 3.2milColor: Indigo"
      );
      await page
        .getByRole("button", { name: "Close Full Specs feature-icon" })
        .click();

      //as588 card visible

      await expect(
        page
          .locator("div")
          .filter({
            hasText:
              /^Nitrile Exam GlovesAS-588Medical Grade Silken Soft Touch, Extra easy donning$/,
          })
          .getByRole("img")
      ).toBeVisible();
      await expect(
        page.getByText(
          "Nitrile Exam GlovesAS-588Medical Grade Silken Soft Touch, Extra easy donning"
        )
      ).toBeVisible();
      await page
        .getByRole("button", { name: "Expand Full Specs feature-icon" })
        .nth(1)
        .click();
      await expect(page.locator("#products")).toContainText(
        "100% nitrile (non-blend), latex and powder freeFlexible, smooth fitTextured finger for confident gripSupreme tactile sensitivitySilken soft touch, extra easy donningPalm thickness 2.4milColor: Pink"
      );
      await page
        .getByRole("button", { name: "Close Full Specs feature-icon" })
        .click();

      //as580 card visible

      await expect(
        page
          .locator("div")
          .filter({
            hasText:
              /^Nitrile Exam GlovesAS-580Medical Grade Exceptional Tactile Sensitivity$/,
          })
          .getByRole("img")
      ).toBeVisible();
      await expect(page.locator("#products")).toContainText("AS-580");
      await expect(
        page.getByText(
          "Nitrile Exam GlovesAS-580Medical Grade Exceptional Tactile Sensitivity"
        )
      ).toBeVisible();
      //assert vissibility of full sepc details
      await page
        .getByRole("button", { name: "Expand Full Specs feature-icon" })
        .nth(2)
        .click();
      await expect(page.locator("#products")).toContainText(
        "100% nitrile (non-blend), latex and powder freeMedical grade 510(k)Flexible, smooth fitTextured finger for confident gripSupreme tactile sensitivityPalm thickness 2.7milColor: Light Blue"
      );
      await page
        .getByRole("button", { name: "Close Full Specs feature-icon" })
        .click();
      await testInfo.attach(`freesampleform_${device.name}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });
    });

    //BETTER PRICING
    test(` better_pricing on ${device.name} visual regression testing`, async ({}, testInfo) => {
      await setupTest({ device });
      const page = getPage();
      await page.goto("https://www.amerisano.com/free-gloves-box-giftcard");
      //section
      //better pricing section
      const bp_pom = new BetterPricingSection(page);
      await bp_pom.goto_BetterPricingSection();
      await bp_pom.Check_BetterPricing_is_visible();
      //ss
      await testInfo.attach(`freebox_section_bp_${device.name}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });
    });

    test(` specialtraits on ${device.name} visual regression testing`, async ({}, testInfo) => {
      await setupTest({ device });
      const page = getPage();
      await page.goto("https://www.amerisano.com/free-gloves-box-giftcard");
      //section
      //why our glove are different section
      const st_pom = new SpecialTraits(page);
      await st_pom.goto_SpecialTraits();
      await st_pom.Assert_SpecialTraits_Visibility();
      await st_pom.center_section_specialTraits();

      await testInfo.attach(`specialtraits_${device.name}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });
    });

    test(` clientreview on ${device.name} visual regression testing`, async ({}, testInfo) => {
      await setupTest({ device });
      const page = getPage();
      await page.goto("https://www.amerisano.com/free-gloves-box-giftcard");
      //section

      const cr_pom = new ClientReviewSection(page);
      await cr_pom.goto_clientReviewSection();
      await cr_pom.Check_clientReview_is_visible();
      //ss
      
      await testInfo.attach(`clientreview_${device.name}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });
    });

    test(` footer on ${device.name} visual regression testing`, async ({}, testInfo) => {
      await setupTest({ device });
      const page = getPage();
      await page.goto("https://www.amerisano.com/free-gloves-box-giftcard");
      //section
      const ftr_pom = new Footer_Section(page);
      await ftr_pom.Check_Footer_isvisible();
      //ss
      await testInfo.attach(`footer_${device.name}.png`, {
        body: await page.screenshot(),
        contentType: "image/png",
      });
    });
  });
}
