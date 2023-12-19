import { Page, expect } from "@playwright/test";

class CreateAccountForm {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //LOCATORS
  formHeading = () =>
    this.page.getByRole("heading", { name: "Create Account" });
  firstName = () => this.page.locator('input[type="text"]').first();
  lastName = () => this.page.locator('input[type="text"]').nth(1);
  email = () => this.page.locator('input[type="email"]').first();
  confirmEmail = () => this.page.locator('input[type="email"]').nth(1);
  password = () => this.page.locator('input[type="password"]').first();
  confirmPassword = () => this.page.locator('input[type="password"]').nth(1);
  numberOfEmployeesSelect = () =>
    this.page.locator(
      ".styles_dropdown__k8MjX > div > .input_container__8yb9l > .input_data__fSFbO > .input_input__lyuFG"
    );
  submitButton = () => this.page.getByRole("button", { name: "Submit" });

  //SUCCESSFUL Form Submission locators
  successIcon = () => this.page.locator(".icon-check-rounded");
  successText = () => this.page.locator('[id="__next"]');

  /**
     * toContainText(
      "Before accessing your account for the first time, please check your email fake@fake.com and verify your account.")
     * 
     */
  //UNSUCCESSFUL Form Submission locators

  emptyFields = () => this.page.getByText("Please fill all the fields.");
  emailValueNotMatching = () =>
    this.page.getByText("Email does not match, please");
  pwdValueNotMatching = () => this.page.getByText("Password does not match,");

  //ACTIONS

  async goto() {
    await this.page.goto("https://www.amerisano.com/create-account");
  }

  async expectFormHeadingToBeVisible() {
    await expect(this.formHeading()).toBeVisible();
  }

  async fillFirstName(firstName: string) {
    await this.firstName().fill(firstName);
  }

  async fillLastName(lastName: string) {
    await this.lastName().fill(lastName);
  }

  async fillEmail(email: string) {
    await this.email().fill(email);
  }
  async fillConfirmEmail(confirmEmail: string) {
    await this.confirmEmail().fill(confirmEmail);
  }

  async fillPassword(password: string) {
    await this.password().fill(password);
  }

  async ConfirmPassword(confirmPassword: string) {
    await this.confirmPassword().fill(confirmPassword);
  }

  async selectNumberOfEmployees() {
    await this.numberOfEmployeesSelect().click();
    await this.page.getByText("-10 Employes").click();
  }

  async clickSubmitButton() {
    await this.submitButton().click();
  }

  //ASSERTIONS

  async assertEmployeeSelectedValues() {
    if (await this.page.getByText("-10 Employes").isVisible()) {
      await expect(
        this.page.locator(
          ".styles_dropdown__k8MjX > div > .input_container__8yb9l > .input_data__fSFbO > .input_input__lyuFG"
        )
      ).toHaveValue("0-10 Employes");
    }
  }

  //SUBMISSION STATUS

  async CheckSubmissionStatus() {
    if (await this.successIcon().isVisible()) {
      console.log("New Account Created Successfully");
    } else if (
      (await this.successText().innerText()).includes(
        "Before accessing your account for the first time, please check your email fake@fake.com and verify your account."
      )
    ) {
      console.log("Account Creation Successful");
    } else if (await this.emptyFields().isVisible()) {
      console.log("Some of the required fields have not been filled");
    } else if (await this.emailValueNotMatching().isVisible()) {
      console.log("Entered Email values do not MATCH");
    } else if (await this.pwdValueNotMatching().isVisible()) {
      console.log("Entered Password values do not MATCH");
    }
  }
}

export default CreateAccountForm;
