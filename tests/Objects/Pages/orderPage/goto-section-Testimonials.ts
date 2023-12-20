import { Page, expect } from "@playwright/test";

class ClientReviewSection {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //Locators
  clientReview = () => this.page.getByText("What our clients sayDr. Mark");

  //ACTIONS
  async goto_clientReviewSection() {
    await this.clientReview().scrollIntoViewIfNeeded();
  }

  async Check_clientReview_is_visible() {
    await expect(this.clientReview()).toBeVisible();
  }
}

export default ClientReviewSection;

/**
 * const element = await page.getByText( 'What our clients sayDr. Mark' );
    await element.scrollIntoViewIfNeeded();
    await expect( element ).toBeInViewport();
    await expect( element ).toBeVisible();
    /**
 */
