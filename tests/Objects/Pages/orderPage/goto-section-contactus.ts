import { Page, expect } from "@playwright/test";

class ContactUs_Form {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //Locators
  contactus_form = () => this.page.locator("#contactus");

  //ACTIONS
  async goto_ContactUs_Form() {
    await this.contactus_form().scrollIntoViewIfNeeded();
  }

  async Check_contactus_form_is_visible() {
    await expect(this.contactus_form()).toBeVisible();
  }
}

export default ContactUs_Form;
