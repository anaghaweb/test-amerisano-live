import { Page } from "@playwright/test";

class AS588_Order_Section {
  private readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  //Locators

  AS588_section = () =>
    this.page.locator(
      "div:nth-child(3) > .product_product__DrVEg > .product_content__yjUC8 > .product_row__cJSpY > .product_product-details__2Zl1a > .product_bottom__g5i_4 > .product_pricing__PC29q > .styles_table__uAicj"
    );
  AS588_heading = () =>
    this.page.getByRole("heading", { name: "Nitrile Exam Gloves | AS-588" });

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
  Add_AS588_To_Cart = () =>
    this.page.getByRole("button", { name: "ADD TO CART" }).nth(2);

  //Actions

  public async AS588OrderSection(s: string, m: string) {
    await this.AS588_section().scrollIntoViewIfNeeded();
    await this.AS588_heading().scrollIntoViewIfNeeded();

    await this.checkstockandfill(this.sizeS, s);
    await this.checkstockandfill(this.sizeM, m);
  }

  public async checkstockandfill(glovesize: any, quantity: string) {
    await glovesize().click();
    await this.page.waitForTimeout(100);
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

export default AS588_Order_Section;
