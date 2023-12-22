import { Page, expect } from "@playwright/test";

class ClientReviewSection {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * 
   * @returns await expect(page.getByText('What our clients sayDr. Mark')).toBeVisible();
    await expect(page.locator('[id="__next"]')).toContainText('What our clients say');
    await expect(page.locator('[id="__next"]')).toContainText('Dr. Mark Jumper DDS/Owner of Aloha Dental');
    await expect(page.locator('.dentist_review__mAl3A > div').first()).toBeVisible();
    await expect(page.locator('[id="__next"]')).toContainText('Dr. Mark Jumper DDS/Owner of Aloha DentalThese are the gloves every dental practice needs. During the pandemic we saw the prices go up and the quality go down. Thankfully we found high quality at a low price. THANK YOU!!');
    await expect(page.locator('[id="__next"]')).toContainText('Dr. Stacy DavidsonFinding gloves today can be challenging and if you want to get them at a good price, good luck. We are lucky to have found wholesale prices for our dental office, as well as fast shipping and excellent customer service.');
    await expect(page.locator('div:nth-child(2) > .dentist_review__mAl3A > div').first()).toBeVisible();
    await expect(page.locator('[id="__next"]')).toContainText('Dr. Laurence WillisFirst time in my 10 years as a dentist that I’ve used gloves designed for dentistry. It’s great to see new innovations to a simple product! The feel is exactly what our team was looking for! We will continue to order. Thank you!');
    await expect(page.locator('div:nth-child(3) > .dentist_review__mAl3A > div').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'SEND ME A FREE BOX NOW!!!!' })).toBeVisible();
    await expect(page.locator('[id="__next"]')).toContainText('SEND ME A FREE BOX NOW!!!!');
    //ss
   */
  //Locators
  goto_client_reviews = () => this.page.getByText("What our clients sayDr. Mark");
  cr_heading=()=>this.page.getByText('What our clients say');
  cr_review1=()=>this.page.getByText('Dr. Mark Jumper DDS/Owner of Aloha DentalThese are the gloves every dental practice needs. During the pandemic we saw the prices go up and the quality go down. Thankfully we found high quality at a low price. THANK YOU!!');
  cr_review2=()=>this.page.getByText('Dr. Stacy DavidsonFinding gloves today can be challenging and if you want to get them at a good price, good luck. We are lucky to have found wholesale prices for our dental office, as well as fast shipping and excellent customer service.');
  cr_review3=()=>this.page.getByText('Dr. Laurence WillisFirst time in my 10 years as a dentist that I’ve used gloves designed for dentistry. It’s great to see new innovations to a simple product! The feel is exactly what our team was looking for! We will continue to order. Thank you!');
  cr_freebox_link=()=>this.page.getByRole('link', { name: 'SEND ME A FREE BOX NOW!!!!' });

  //ACTIONS
  async goto_clientReviewSection() {
    await this.goto_client_reviews().scrollIntoViewIfNeeded();
  }

  async Check_clientReview_is_visible() {
    await expect(this.goto_client_reviews()).toBeVisible();
    await expect(this.cr_heading()).toBeVisible();
    await expect(this.cr_review1()).toBeVisible();
    await expect(this.cr_review2()).toBeVisible();
    await expect(this.cr_review3()).toBeVisible();
    await expect(this.cr_freebox_link()).toBeVisible();
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
