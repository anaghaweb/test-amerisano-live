import { Page, expect } from "@playwright/test";

class Amerisano_Buy {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  //hero Section

  async goto() {
    await this.page.goto("https://www.amerisano.com/buy");
  }

  //Hero Section
  async heroSection() {
    await expect(this.page.locator('div').filter({ hasText: 'Stop Overpaying for Gloves.Amerisano offers the highest quality nitrile gloves' }).nth(2)).toBeVisible();
  
    await expect(this.page.getByRole("link", { name: "Start Order" })).toBeVisible();
  }

  //Shipping Guarantee Section
  async shippingGuarantee() {
    await this.page
      .locator('.swiper-slide').first()
      .scrollIntoViewIfNeeded();
    await expect(
      this.page.getByText("100% Guarantee If you’re not")
    ).toBeVisible();
    await expect(this.page.getByRole("main")).toContainText("Fast shipping");
    await expect(this.page.getByRole("main")).toContainText(
      "We guarantee your order will be delivered within 14 days or we will refund your money 100%."
    );
    await expect(this.page.getByRole("main")).toContainText("100% Guarantee");
    await expect(this.page.getByRole("main")).toContainText(
      "If you’re not satisfied you can return the product for a full refund. We´ll even pay for the return shipping."
    );
  }

  //Buy Products Section

  //AS600
  async as600() {
    await this.page.getByText('Nitrile Exam Gloves | AS-600Chemo-Rated, Maximum strength and durabilityBox:').scrollIntoViewIfNeeded();
    
  }

  //AS580
  
  async as580() {
    await this.page.getByText('Nitrile Exam Gloves | AS-580Medical-Grade, Exceptional tactile sensitivityBox:').scrollIntoViewIfNeeded();
    
  }

  //AS560

  async as588() {

    await this.page.getByText('Nitrile Exam Gloves | AS-588Medical-Grade, Silken Soft Touch, Extra easy').scrollIntoViewIfNeeded();
    
  }

  //Review Carousal
  async reviewCarousal() {
    await this.page.locator(".carousel-inner").scrollIntoViewIfNeeded();

    await this.page.locator("ol").getByRole("listitem").first().click();
    await expect(
      this.page.getByText(
        "These are the gloves every dental practice needs.During the pandemic we saw the"
      )
    ).toBeVisible();
    await this.page.locator("ol").getByRole("listitem").nth(1).click();
    await expect(
      this.page.getByText(
        "First time in my 10 years as a dentist.I’ve use gloves designed for dentistry."
      )
    ).toBeVisible();
    await this.page.locator("ol").getByRole("listitem").nth(2).click();
    await expect(
      this.page.getByText(
        "Finding gloves today can be challenging.And if you want to get them at a good"
      )
    ).toBeVisible();
    await this.page.locator("ol").getByRole("listitem").nth(3).click();
    await expect(
      this.page.getByText(
        "Great pricing and great product.The gloves work out very well your prices are"
      )
    ).toBeVisible();
  }


  //Better Pricing
  async betterPricing() {
   
    await this.page
      .getByText("How can we offer better pricing?")
      .scrollIntoViewIfNeeded();
    
        await expect(this.page.locator('.dentist_contact__Y5Ff_ > div > div')).toBeVisible();
        await expect(this.page.getByText('How can we offer better')).toBeVisible();
        await expect(this.page.getByRole('main')).toContainText('How can we offer better pricing?');
        await expect(this.page.getByRole('main')).toContainText('By cutting out the trading companies, large distributors, and other stages of the supply chain, we are able to ship to you directly from our factory. The gloves only change hands once - significantly lowering the cost for you, our final customer!We work directly with the manufacturer to create the prefect glove at the best factory-direct prices.');
        await expect(this.page.getByRole('main')).toContainText('Interested in bulk pricing? We´ve got you covered. Contact us and we will discuss the best plan for you');
        
}

//Footer Section
async footerSection() {
await this.page.locator('div').filter({ hasText: /^Our StoryGroup Purchasing$/ }).scrollIntoViewIfNeeded();
await expect(this.page.locator('div').filter({ hasText: /^Our StoryGroup Purchasing$/ })).toBeVisible();
await expect(this.page.getByText('Our ProductsShopRecommended')).toBeVisible();
await expect(this.page.getByText('General InformationPrivacy')).toBeVisible();
await expect(this.page.getByText('Help1 888 354 4544support@')).toBeVisible();

// await expect(this.page.locator('footer').getByRole('link', { name: 'Our Story' })).toBeVisible();

// await expect(this.page.getByRole('link', { name: 'Group Purchasing' })).toBeVisible();

// await expect(this.page.getByRole('contentinfo').getByRole('link', { name: 'Shop' })).toBeVisible();

// await expect(this.page.getByRole('link', { name: 'Recommended Products' })).toBeVisible();

// await expect(this.page.getByRole('link', { name: 'Referral Reward', exact: true })).toBeVisible();

// await expect(this.page.getByRole('link', { name: 'Privacy Policy' })).toBeVisible();

// await expect(this.page.getByRole('link', { name: 'Terms of Use' })).toBeVisible();

// await expect(this.page.getByRole('link', { name: 'Shipping Policy' })).toBeVisible();

// await expect(this.page.getByRole('link', { name: 'Billing Terms and Conditions' })).toBeVisible();

// await expect(this.page.getByRole('link', { name: 'Refund Policy' })).toBeVisible();

// await expect(this.page.getByRole('contentinfo').getByRole('link', { name: '888 354 4544' })).toBeVisible();

// await expect(this.page.getByRole('contentinfo').getByRole('link', { name: 'support@amerisano.com' })).toBeVisible();
}

}

export default Amerisano_Buy;
