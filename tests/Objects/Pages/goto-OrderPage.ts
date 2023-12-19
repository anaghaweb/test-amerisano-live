import { Page, expect } from "@playwright/test";

const orderPageURL = `https://www.amerisano.com/order`;

export default class OrderPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  public async LoadOrderPage() {
    await this.page.goto(`${orderPageURL}`);
    await expect(this.page.getByText("Accept AllSetup Cookies")).toBeVisible();
    await this.page.getByRole("button", { name: "Accept All" }).click();
  }
}
