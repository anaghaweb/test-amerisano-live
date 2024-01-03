import { Page } from "@playwright/test";
import { AS580_Order_Section, AS588_Order_Section, AS600_Order_Section, NeedMoreinfoForm } from "../../forms";
import { BetterPricingSection, ClientReviewSection } from "../../Shared";

const orderPageURL = `https://www.amerisano.com/order`;

export default class OrderPage {
  readonly page: Page;
  readonly as580 : AS580_Order_Section;
  readonly as588:AS588_Order_Section;
  readonly as600: AS600_Order_Section;
  readonly needinfo: NeedMoreinfoForm;
  readonly bp_section: BetterPricingSection;
  readonly review: ClientReviewSection;

  constructor(page: Page) {
    this.page = page;
    this.as580 = new AS580_Order_Section(page);
    this.as588 = new AS588_Order_Section(page);
    this.as600 = new AS600_Order_Section(page);
    this.needinfo = new NeedMoreinfoForm(page);
    this.bp_section= new BetterPricingSection(page);
    this.review = new ClientReviewSection(page);


  }

  //Locators


  //METHODS

  public async LoadOrderPage() {
    await this.page.goto(`${orderPageURL}`);
  }
  
  //AS580 SECTION 

  async Assert_AS580_Section_Visible(){
    await this.as580.AS580_Section_View();
  }

  //AS588 SECTION
  async Assert_AS588_Section_Visible(){
    await this.as588.AS588_Section_View();
  }

  //AS600 SECTION
  async Assert_AS600_Section_Visible(){
    await this.as600.AS600_Section_View();
  }

  //BETTER PRICING
  async Assert_BetterPricing_Section_Visible(){
    await this.bp_section.Check_BetterPricing_is_visible();
  }

  //REVIEW SECTION
  async Assert_Review_Section_Visible(){
    await this.review.Assert_OrderPage_Review_Section();
  }

  //NEED MORE INFO FORM SECTION
  async Assert_NeedInfoForm_section(){
    await this.needinfo.AssertNeedMoreInfoForm();
  }
}
