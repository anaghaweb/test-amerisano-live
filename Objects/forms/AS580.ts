import { Page } from "@playwright/test";
import checkStockAndFill from "../Shared/checkstockandfill/fillqty";
import { Cart_Close_Btn } from "../Shared";

const locator_1 = `div:nth-child(2) > .product_product__DrVEg > .product_content__yjUC8 > .product_row__cJSpY > .product_product-details__2Zl1a > .product_bottom__g5i_4 > .product_pricing__PC29q > .product_product-order__xPM4i > div > .product_product-variations__pWyyw > .product_form__mHjXD > .product_form-row___weFk > div`;
const locator_2 = `.input_container__8yb9l > .input_data__fSFbO > .input_input__lyuFG`;

class AS580_Order_Section {
  private readonly page: Page;
    fillQty:checkStockAndFill;
    closecart: Cart_Close_Btn;

  constructor(page: Page) {
    this.page = page;
    this.fillQty = new checkStockAndFill(page);
    this.closecart=new Cart_Close_Btn(page);
  }

  //Locators
  as580 =()=> this.page.getByText('Nitrile Exam Gloves | AS-580Medical-Grade, Exceptional tactile sensitivityBox:');

  AS580_section = () =>
    this.page.locator(
      "div:nth-child(2) > .product_product__DrVEg > .product_content__yjUC8 > .product_row__cJSpY > .product_product-details__2Zl1a"
    );
  AS580_heading = () =>
    this.page.getByRole("heading", { name: "Nitrile Exam Gloves | AS-580" });
  sizeXS = () => this.page.locator(`${locator_1}> ${locator_2}`).first();
  sizeS = () => this.page.locator(`${locator_1}:nth-child(2) > ${locator_2}`);
  sizeM = () => this.page.locator(`${locator_1}:nth-child(3) > ${locator_2}`);
  sizeL = () => this.page.locator(`${locator_1}:nth-child(4) > ${locator_2}`);
  sizeXL = () => this.page.locator(`${locator_1}:nth-child(5) > ${locator_2}`);
  pointToCloseIcon = ()=>this.page.waitForSelector('div > .icon_container__SL1SC');
  closeIcon = () => this.page.locator('.icon-close');
  Add_AS580_To_Cart = () =>
    this.page.getByRole("button", { name: "ADD TO CART" }).nth(1);

  //METHODS

   async AS580_Section_View() {
    await this.AS580_section().scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(1000);  
  }

  async fill_input_AS580(size:string, qty:string){
    await this.AS580_section().scrollIntoViewIfNeeded();
    const res = await this.fillQty.checkstockandfill(this[`size${size}`], qty, size ); 
    if (res !== false){
      return true
    }
    else{
      return false
    }
  }

  async click_Cart_Button(){
    await this.Add_AS580_To_Cart().scrollIntoViewIfNeeded();
    await this.Add_AS580_To_Cart().click();
    await this.page.waitForTimeout(3000);
  }

  async closeCartMenuIcon (){
    await this.page.waitForTimeout(200);
    await this.closecart.CloseCartBtn().click();
  }
 
}

export default AS580_Order_Section;
