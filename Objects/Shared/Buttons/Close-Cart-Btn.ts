import { Page } from "@playwright/test";

//check if stock is available

class Cart_Close_Btn {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  CloseCartBtn = () => this.page.locator(".icon-close");
}

export default Cart_Close_Btn;
