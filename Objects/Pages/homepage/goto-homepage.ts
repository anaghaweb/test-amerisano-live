import { Page, expect } from "@playwright/test";
import { HeroBanner, ProductSpecification, ClientReviewSection, OurStory, GroupBuying, GoogleMapAddress,Footer_Section } from "../../Shared";



 class AmerisanoHomePage {
  readonly page: Page;
  readonly hero:HeroBanner;
  readonly productSpecs:ProductSpecification;
  readonly review:ClientReviewSection;
  readonly story:OurStory;
  readonly group:GroupBuying;
  readonly address:GoogleMapAddress;
  readonly footer:Footer_Section;

  constructor(page: Page) {
    this.page = page;
    this.hero= new HeroBanner(page);
    this.productSpecs= new ProductSpecification(page);
    this.review= new ClientReviewSection(page);
    this.story=new OurStory(page);
    this.group=new GroupBuying(page);
    this.address= new GoogleMapAddress(page);
    this.footer=new Footer_Section(page);
  }
  


//Locators
//Hero section - methods imported from HeroBanner

//Banner Slider Section
 slider=()=>this.page.locator('.swiper').first();



 //METHODS

 //Go to Amerisano Home Page
 async gotoHomePage() {
  await this.page.goto("https://www.amerisano.com");
}

//Hero
async AssertHeroBanner(){
  await this.hero.HeroBannerSection_Assert();
}

//Silder
 async BannerSlider(){
  await this.slider().scrollIntoViewIfNeeded();
  await expect (this.slider()).toBeVisible();
 }

 //Recommended Products
async AssertProductSection(){
 await this.productSpecs.RecommendedProductSection();
}

//Full Product specifications expanded screenshots
async AssertFullSpecsVisible(){
 await  this.productSpecs.ViewFullSpecs();
}

 //Home Page Doctor Review Section

 async Assert_HomePageReview_Section(){
await this.review.Assert_HomePage_Review_Section();
await this.review.Assert_ReviewCards_Visible();
 }

 //Assert Our Story Section
 async Assert_OurStorySection(){
  await this.story.OurStoryVisible();
 }

 //Assert Group Buying Section
 async Assert_GroupBuyingSection(){
  await this.group.GroupBuying();
 }

 //Assert Map and Address Visibility
 async Assert_Address_Map(){
  await this.address.AddressMap();
 }

 //Assert Footer Visibility
async Assert_Footer_Visibile(){
  
  await this.footer.Check_Footer_isvisible();
}
 
}

export default AmerisanoHomePage;