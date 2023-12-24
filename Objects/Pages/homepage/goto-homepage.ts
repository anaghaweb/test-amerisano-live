import { Page } from "@playwright/test";

 class AmerisanoHomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async gotoHomePage() {
    await this.page.goto("https://www.amerisano.com");
  }
}

export default AmerisanoHomePage;