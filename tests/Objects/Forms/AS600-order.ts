import { Page } from "@playwright/test";

const locator_1 = `.input_container__8yb9l > .input_data__fSFbO > .input_input__lyuFG`;

class AS600_Order_Section {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //Locators

  AS600_section = () =>
    this.page.getByText("Nitrile Exam Gloves | AS-600").first();
  AS600_heading = () =>
    this.page.getByRole("heading", { name: "Nitrile Exam Gloves | AS-600" });
  sizeXS = () => this.page.locator(".input_input__lyuFG").first();
  sizeS = () => this.page.locator(`div:nth-child(2) > ${locator_1} `).first();
  sizeM = () => this.page.locator(`div:nth-child(3) > ${locator_1}`).first();
  sizeL = () => this.page.locator(`div:nth-child(4) > ${locator_1}`).first();
  sizeXL = () => this.page.locator(`div:nth-child(5) > ${locator_1}`).first();
  Add_AS600_To_Cart = () =>
    this.page.getByRole("button", { name: "ADD TO CART" }).first();

  //Actions

  public async AddToCart() {
    await this.Add_AS600_To_Cart().click();
  }

  public async AS600OrderSection(
    xs: string,
    s: string,
    m: string,
    l: string,
    xl: string
  ) {
    await this.AS600_section().scrollIntoViewIfNeeded();
    await this.AS600_heading().scrollIntoViewIfNeeded();
    await this.checkstockandfill(this.sizeXS, xs);
    await this.checkstockandfill(this.sizeS, s);
    await this.checkstockandfill(this.sizeM, m);
    await this.checkstockandfill(this.sizeL, l);
    await this.checkstockandfill(this.sizeXL, xl);
  }

  //check if stock is available
  async checkstockandfill(glovesize: any, quantity: string) {
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

export default AS600_Order_Section;
