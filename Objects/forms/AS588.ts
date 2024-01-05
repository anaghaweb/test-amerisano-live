import { Page } from "@playwright/test";
import checkStockAndFill from "../Shared/checkstockandfill/fillqty";
import { Cart_Close_Btn } from "../Shared";

class AS588_Order_Section {
  private readonly page: Page;
  fillQty:checkStockAndFill;
  closecart: Cart_Close_Btn;

constructor(page: Page) {
  this.page = page;
  this.fillQty = new checkStockAndFill(page);
  this.closecart=new Cart_Close_Btn(page);
}

  //Locators

  AS588_heading = () =>
    this.page.getByRole("heading", { name: "Nitrile Exam Gloves | AS-588" });

    gotoAS588Section = ()=>this.page.getByText('Nitrile Exam Gloves | AS-588Medical-Grade, Silken Soft Touch, Extra easy');
  sizeS = () =>
    this.page
      .locator("div")
      .filter({ hasText: /^SM$/ })
      .getByRole("spinbutton")
      .first();
  sizeM = () =>
    this.page
      .locator("div")
      .filter({ hasText: /^SM$/ })
      .getByRole("spinbutton")
      .nth(1);
      pointToCloseIcon = ()=>this.page.waitForSelector('div > .icon_container__SL1SC');
      closeIcon = () => this.page.locator('.icon-close');
  Add_AS588_To_Cart = () =>
    this.page.getByRole("button", { name: "ADD TO CART" }).nth(2);

  //METHODS

    //AS588

    async AS588_Section_View(){
      await this.gotoAS588Section().scrollIntoViewIfNeeded();
    }

  async fill_input_AS588(size:string, qty:string){
    await this.gotoAS588Section().scrollIntoViewIfNeeded();
    const res = await this.fillQty.checkstockandfill(this[`size${size}`], qty, size ); 
    if (res !== false){
      return true
    }
    else{
      return false
    }
  }

  async click_Cart_Button(){
    await this.Add_AS588_To_Cart().scrollIntoViewIfNeeded();
    await this.Add_AS588_To_Cart().click();
    await this.page.waitForTimeout(3000);
  }

  async closeCartMenuIcon (){
    await this.page.waitForTimeout(200);
    await this.closecart.CloseCartBtn().click();
  }
 
  public async checkstockandfill(sizeLocator: any, quantity: string, glovesize?:string) {
    await sizeLocator().click();
    await this.page.waitForTimeout(200);
    if (
      (await this.page
        .getByPlaceholder("Please enter your email")
        .isVisible()) === false
    ) {
      await sizeLocator().fill(quantity);
      console.log(
        ` Size-${glovesize} in stock, added qty of ${quantity} no(s) to cart `
      );
    } else {
      console.log(`Size-${glovesize} is out of stock`);
    }
  }
 
}

export default AS588_Order_Section;
