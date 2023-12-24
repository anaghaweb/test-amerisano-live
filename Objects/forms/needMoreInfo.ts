import { Page, expect } from "@playwright/test";

class NeedMoreinfoForm {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickNeedMoreInfo() {
    this.page.getByText("Need more information?Fill").scrollIntoViewIfNeeded();
  }

  async fillFirstName(firstName: string) {
    await this.page
      .getByPlaceholder("First Name*", { exact: true })
      .fill(firstName);
  }

  async fillLastName(lastName: string) {
    await this.page
      .getByPlaceholder("Last Name*", { exact: true })
      .fill(lastName);
  }

  async fillEmail(email: string) {
    await this.page.locator("#email").fill(email);
  }

  async fillPhone(phone: string) {
    await this.page.getByPlaceholder("Phone: (XXX)-XXX-XXXX").fill(phone);
  }

  async fillMessage(message: string) {
    await this.page.getByPlaceholder("Your Message*").fill(message);
  }

  async clickContactUsNow() {
    await this.logFormData();
    await this.page.getByRole("button", { name: "Contact us now" }).click();
  }

  async verifyMessageSent() {
    if (await this.page.getByText("Your message has been sent").isVisible()) {
      console.log("form data submitted successfully");
    } else if (
      await this.page.getByText("Failed to send message.").isVisible()
    ) {
      await this.logFormData();
      await this.checkPartialDataSubmission();
    } else {
      console.log(
        "Data for Need-More-Info-Form submission failed due to unknown reasons. please try again after sometime"
      );
    }
  }

  async logFormData() {
    const firstName = await this.page
      .getByPlaceholder("First Name*", { exact: true })
      .inputValue();
    const lastName = await this.page
      .getByPlaceholder("Last Name*", { exact: true })
      .inputValue();
    const email = await this.page.locator("#email").inputValue();
    const phone = await this.page
      .getByPlaceholder("Phone: (XXX)-XXX-XXXX")
      .inputValue();
    const message = await this.page
      .getByPlaceholder("Your Message*")
      .inputValue();

    console.log("First Name:", firstName ? firstName : "Missing");
    console.log("Last Name:", lastName ? lastName : "Missing");
    console.log("Email:", email ? email : "Missing");
    console.log("Phone:", phone ? phone : "Missing");
    console.log("Message:", message ? message : "Missing");
  }

  async checkPartialDataSubmission() {
    if (
      await this.page
        .getByText("Please, complete all mandatory fields")
        .isVisible()
    ) {
      console.log("Required Input Fields has not been filled by the user");
    } else if (
      await this.page
        .getByText("Please, enter a valid phone number")
        .isVisible()
    ) {
      console.log("Phone number field is empty");
    } else {
      console.log("Form Data not submitted. Please try again");
    }
    //
  }
}

export default NeedMoreinfoForm;