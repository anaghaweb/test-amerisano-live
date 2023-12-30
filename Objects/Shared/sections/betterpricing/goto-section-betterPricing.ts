import { Page, expect } from "@playwright/test";

class BetterPricingSection {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
 
  //Locators
  betterPricing = () => this.page.locator(".order-gloves_wrapper__DZ1jF");
  bp_section=()=>this.page.locator('section').filter({ hasText: 'How can we offer better' });
 
  bp_heading=()=>this.page.getByText('How can we offer better pricing?');
  bp_subtitle=()=>this.page.getByText('We’ve partnered directly with the manufacturer facility to create a glove that is ideal for dentistry and distribute directly to our clients. That means we do not work through trading companies, large distributors, or any other additional supply chains. The gloves you receive are direct from the factory and only change hands once -- significantly lowering the cost to your practice.');
  bp_tagline=()=> this.page.getByText('We’re proud to offer you the perfect gloves for dental examinations and procedures at the bestfactory-direct prices.');

  //ACTIONS
  async goto_BetterPricingSection() {
    await this.bp_heading().scrollIntoViewIfNeeded();
  }

  async Check_BetterPricing_is_visible() {
  
    await this.bp_section().scrollIntoViewIfNeeded();
    await expect(this.bp_section()).toBeVisible();
  }
}

export default BetterPricingSection;



