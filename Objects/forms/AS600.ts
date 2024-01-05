import { Page } from "@playwright/test";
import checkStockAndFill from "../Shared/checkstockandfill/fillqty";
import { Cart_Close_Btn } from "../Shared";

const locator_1 = `.input_container__8yb9l > .input_data__fSFbO > .input_input__lyuFG`;

class AS600_Order_Section {
  private readonly page: Page;
  fillQty:checkStockAndFill;
  closecart: Cart_Close_Btn;

constructor(page: Page) {
  this.page = page;
  this.fillQty = new checkStockAndFill(page);
  this.closecart=new Cart_Close_Btn(page);
}

  //Locators

  AS600_section = () => this.page.locator(".product_pricing__PC29q").first();
  AS600_heading = () =>
    this.page.getByRole("heading", { name: "Nitrile Exam Gloves | AS-600" });
    gotoAS600Section = ()=>this.page.getByText('Nitrile Exam Gloves | AS-600Chemo-Rated, Maximum strength and durabilityBox:');
  sizeXS = () => this.page.locator(".input_input__lyuFG").first();
  sizeS = () => this.page.locator(`div:nth-child(2) > ${locator_1} `).first();
  sizeM = () => this.page.locator(`div:nth-child(3) > ${locator_1}`).first();
  sizeL = () => this.page.locator(`div:nth-child(4) > ${locator_1}`).first();
  sizeXL = () => this.page.locator(`div:nth-child(5) > ${locator_1}`).first();
  Add_AS600_To_Cart = () =>
    this.page.getByRole("button", { name: "ADD TO CART" }).first();
    pointToCloseIcon = ()=>this.page.waitForSelector('div > .icon_container__SL1SC');
    closeIcon = () => this.page.locator('.icon-close');

  //Actions

  async AS600_Section_View() {
    await this.page.getByText('Nitrile Exam Gloves | AS-600Chemo-Rated, Maximum strength and durabilityBox:');
    
  }

  public async AddToCart() {
    await this.Add_AS600_To_Cart().click();
  }

  
  async fill_input_AS600(size:string, qty:string){
    await this.gotoAS600Section().scrollIntoViewIfNeeded();
    const res = await this.fillQty.checkstockandfill(this[`size${size}`], qty, size ); 
    if (res !== false){
      return true
    }
    else{
      return false
    }
  }

  async click_Cart_Button(){
    await this.Add_AS600_To_Cart().scrollIntoViewIfNeeded();
    await this.Add_AS600_To_Cart().click();
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

export default AS600_Order_Section;
