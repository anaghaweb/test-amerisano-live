import { Page } from "@playwright/test";

//check if stock is available

class Proceed_To_Checkout_Btn {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  ProceedToCheckOutBtn = () =>
    this.page.getByRole("button", { name: "Proceed to Checkout" });
    //getByRole('button', { name: 'Proceed to Checkout' })
}

export default Proceed_To_Checkout_Btn;
