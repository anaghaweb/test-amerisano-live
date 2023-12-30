import { Page } from "@playwright/test";

const locator_1 = `div:nth-child(2) > .product_product__DrVEg > .product_content__yjUC8 > .product_row__cJSpY > .product_product-details__2Zl1a > .product_bottom__g5i_4 > .product_pricing__PC29q > .product_product-order__xPM4i > div > .product_product-variations__pWyyw > .product_form__mHjXD > .product_form-row___weFk > div`;

const locator_2 = `.input_container__8yb9l > .input_data__fSFbO > .input_input__lyuFG`;

class AS580_Order_Section {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
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
  Add_AS580_To_Cart = () =>
    this.page.getByRole("button", { name: "ADD TO CART" }).nth(1);



  //Actions

    //AS580 Section View
  
  async AS580_Section_View() {
    await this.AS580_section().scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(2000);
    
  }


  public async AS580OrderSection(
    xs: string,
    s: string,
    m: string,
    l: string,
    xl: string
  ) {
    await this.AS580_section().scrollIntoViewIfNeeded();
    await this.AS580_heading().scrollIntoViewIfNeeded();
    await this.checkstockandfill(this.sizeXS, xs);
    await this.checkstockandfill(this.sizeS, s);
    await this.checkstockandfill(this.sizeM, m);
    await this.checkstockandfill(this.sizeL, l);
    await this.checkstockandfill(this.sizeXL, xl);
  }

  //Actions

  public async checkstockandfill(glovesize: any, quantity: string) {
    await glovesize().click();
    await this.page.waitForTimeout(200);
    if (
      (await this.page
        .getByPlaceholder("Please enter your email")
        .isVisible()) === false
    ) {
      await glovesize().fill(quantity);
      console.log(
        `item in stock, order qty of ${quantity} nos filled for size ${glovesize.name}   `
      );
    } else {
      console.log(`${glovesize.name} item out of stock`);
    }
  }
}

export default AS580_Order_Section;
