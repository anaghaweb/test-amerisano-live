import { Page } from "@playwright/test";
import FreeBoxSampleForm from "./freeboxform";
import FreeBox_HeroBanner_Section from "./herobanner";
import { ProductSpecification } from "../../../Shared";
import {BetterPricingSection} from "../../../Shared";
import {ClientReviewSection} from "../../../Shared";
import {SpecialTraits} from "../../../Shared";
import {Footer_Section} from "../../../Shared";


 class GotoLandingPage {

  readonly page: Page;
  readonly form: FreeBoxSampleForm;
  readonly banner: FreeBox_HeroBanner_Section;
  readonly product: ProductSpecification;
  readonly pricing: BetterPricingSection;
  readonly review: ClientReviewSection;
  readonly traits: SpecialTraits;
  readonly footer: Footer_Section;

  constructor(page: Page) {
    this.page = page;
    this.form=new FreeBoxSampleForm(page);
    this.banner= new FreeBox_HeroBanner_Section(page);
    this.product=new ProductSpecification(page);
    this.pricing=new BetterPricingSection(page);
    this.review=new ClientReviewSection(page);
    this.traits=new SpecialTraits(page);
    this.footer= new Footer_Section(page);
  }
  //METHODS

  async LoadLandingPage() {
    await this.page.goto("https://www.amerisano.com/free-gloves-box-giftcard");
  }

  async Assert_FreeBoxBanner_Visible(){
    await this.banner.FreeboxPage_Banner_Visible();
  }

  async Assert_FreeSampleForm_Visible(){
    await this.form.FreeBoxForm_Visible();
  }

  async Assert_Products_Visible(){
    await this.product.FreeBox_ProductsCards_Visible();
  }

  async Assert_BetterPricingSection_Visible(){
    await this.pricing.Check_BetterPricing_is_visible();
  }

  async Assert_ClientReviewSection_Visible(){
    await this.review.Assert_FreeBoxPage_Review_Section();
  }

  async Assert_SpecialTraits_Visible(){
    await this.traits.Assert_SpecialTraits_Visibility();
  }

  async Assert_FreeSample_Footer_isVisible(){
    await this.footer.Assert_FreeBox_Footer_Visible();
  }

}

export default GotoLandingPage;