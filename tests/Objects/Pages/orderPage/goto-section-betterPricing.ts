import { Page, expect } from "@playwright/test";

class BetterPricingSection {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //Locators
  betterPricing = () => this.page.locator(".order-gloves_wrapper__DZ1jF");

  //ACTIONS
  async goto_BetterPricingSection() {
    await this.betterPricing().scrollIntoViewIfNeeded();
  }

  async Check_BetterPricing_is_visible() {
    await expect(this.betterPricing()).toBeVisible();
  }
}

export default BetterPricingSection;

/**
 * const element = await page.locator( '.order-gloves_wrapper__DZ1jF' );
    await element.scrollIntoViewIfNeeded();
    await expect( element ).toBeInViewport();
    await expect( element ).toBeVisible();
 */
