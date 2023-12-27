import { Page } from "@playwright/test";

 class GotoLandingPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async gotoLandingPage() {
    await this.page.goto("https://www.amerisano.com/free-gloves-box-giftcard");
  }
}

export default GotoLandingPage;