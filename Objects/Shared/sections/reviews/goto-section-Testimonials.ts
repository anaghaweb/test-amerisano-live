import { Page, expect } from "@playwright/test";

class ClientReviewSection {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //Order Page Locators
  goto_client_reviews = () => this.page.getByText("What our clients sayDr. Mark");
  cr_heading=()=>this.page.getByText('What our clients say');
  cr_review1=()=>this.page.getByText('Dr. Mark Jumper DDS/Owner of Aloha DentalThese are the gloves every dental practice needs. During the pandemic we saw the prices go up and the quality go down. Thankfully we found high quality at a low price. THANK YOU!!');
  cr_review2=()=>this.page.getByText('Dr. Stacy DavidsonFinding gloves today can be challenging and if you want to get them at a good price, good luck. We are lucky to have found wholesale prices for our dental office, as well as fast shipping and excellent customer service.');
  cr_review3=()=>this.page.getByText('Dr. Laurence WillisFirst time in my 10 years as a dentist that I’ve used gloves designed for dentistry. It’s great to see new innovations to a simple product! The feel is exactly what our team was looking for! We will continue to order. Thank you!');
  cr_freebox_link=()=>this.page.getByRole('link', { name: 'SEND ME A FREE BOX NOW!!!!' });

  //HomePage Locators
  home_review_container=()=>this.page.locator('.styles_container__CaO9P');
  //review Cards
  card1=()=>this.page.getByText('Dr. Mark Jumper DDS | Aloha Dental“These are the gloves every dental practice').nth(1);
  card2=()=>this.page.getByText('Dr. Stacy Davidson“Finding').nth(1);
  card3=()=>this.page.getByText('Dr. Laurence Willis“First').nth(1);
  card4=()=>this.page.getByText('Keevin Moore | DDS“Amerisano').nth(1);

  //Methods
  async goto_clientReviewSection() {
    await this.goto_client_reviews().scrollIntoViewIfNeeded();
  }

  //Order Page Review Section
  async Assert_OrderPage_Review_Section() {
    await this.goto_client_reviews().scrollIntoViewIfNeeded();
    await expect(this.goto_client_reviews()).toBeVisible();
    await expect(this.cr_heading()).toBeVisible();
    await expect(this.cr_review1()).toBeVisible();
    await expect(this.cr_review2()).toBeVisible();
    await expect(this.cr_review3()).toBeVisible();
    // await expect(this.cr_freebox_link()).toBeVisible();
  }

  //Free Sample Landing Page Section
  async Assert_FreeBoxPage_Review_Section() {
    await this.goto_client_reviews().scrollIntoViewIfNeeded();
    await expect(this.goto_client_reviews()).toBeVisible();
    await expect(this.cr_heading()).toBeVisible();
    await expect(this.cr_review1()).toBeVisible();
    await expect(this.cr_review2()).toBeVisible();
    await expect(this.cr_review3()).toBeVisible();
     await expect(this.cr_freebox_link()).toBeVisible();
  }

  //Assert Home Page Review Slider Visible
  async Assert_HomePage_Review_Section(){
    await this.home_review_container().scrollIntoViewIfNeeded();
    await this.card1().scrollIntoViewIfNeeded();
    await expect(this.home_review_container()).toBeVisible();
  }

  //Card Visibility Assert
  async Assert_ReviewCards_Visible(){
    await this.card1().scrollIntoViewIfNeeded();
    await expect(this.card1()).toBeVisible();

    await this.card2().scrollIntoViewIfNeeded();
    await expect(this.card2()).toBeVisible();

    await this.card3().scrollIntoViewIfNeeded();
    await expect(this.card3()).toBeVisible();

    await this.card4().scrollIntoViewIfNeeded();
    await expect(this.card4()).toBeVisible();
  }

}

export default ClientReviewSection;


