import { Page, expect } from "@playwright/test";

class LoginForm {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  //LOCATORS

  HomePage = () => this.page.goto("https://www.amerisano.com/");
  LoginForm = () =>
    this.page.getByRole("button", { name: "Link to account page Log in" });
  email_uname = () =>
    this.page
      .locator("form")
      .filter({ hasText: "Username or email address" })
      .locator('input[type="email"]');
  password = () => this.page.locator('input[type="password"]').first();

  remember_me = () => this.page.getByLabel("Remember me");
  Login_Btn = () => this.page.getByRole("button", { name: "Login" });
  loginform_div = ()=>this.page.getByText('My accountLoginView pricing,');
  //ACTIONS

  async gotoAmerisanoHomePage(){
    await this.HomePage();
  }
  async Open_LoginForm(){
    await this.LoginForm().click();
  }
  async Fill_UserName_Email(username: string) {
    await this.email_uname().fill(username);
  }

  async Fill_Password(password: string) {
    this.password().fill(password);
  }
  async Click_RememberMe() {
   
    
    await this.remember_me().check();
  }
  async Click_Login_Button() {
    await this.Login_Btn().click();
  }
  async CheckLoginForm_is_visible(){
    await this.loginform_div().scrollIntoViewIfNeeded();
    await expect(this.loginform_div()).toBeVisible();
  }

}

export default LoginForm;
