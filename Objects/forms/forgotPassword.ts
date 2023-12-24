import { Page,expect } from "@playwright/test"; 

class ForgotPwdForm{
    readonly page: Page;
    
    constructor(page: Page){
        this.page = page;
    }

    //LOCATORS
    goto_amerisano_orderpage = ()=>this.page.goto("https://www.amerisano.com/order");
    open_loginform =()=>this.page.getByRole("button", { name: "Link to account page Log in" });
    formmodal=()=>this.page.locator('.modal_item__DwiZP');
    goto_forgot_password_form = ()=> this.page.getByRole("link", { name: "Forgot your password?" });
    heading = ()=> this.page.getByRole("heading", { name: "Forgot your password?" });
    emailfield = ()=> this.page.getByPlaceholder("email@example.com");
    reset_password_button = ()=> this.page.locator('button').filter({ hasText: 'Reset password' });
    acknowladge_button = ()=> this.page.locator('button').filter({ hasText: 'Got it' });

    //METHODS
    async OpenLoginForm(){
        await this.goto_amerisano_orderpage();
        await this.open_loginform().click();
    }
    async open_forgot_password_form(){
        await this.goto_forgot_password_form().scrollIntoViewIfNeeded();
        await this.goto_forgot_password_form().click();
    }

    async assert_form_is_visible(){
        await expect(this.formmodal()).toBeVisible();
    }
    async fillEmailField(email:string){
        await this.emailfield().fill(email);
    }
    async submitEmailid(){
        await this.reset_password_button().click();
    }

    async resetLinkConfirmation(){
        await expect(this.page.locator('body')).toContainText('Done!An email with a link has been sent to your inbox. Please, follow the instructions to reset your password.(be sure to check your SPAM folder)If you didn\'t recieve any email pleaseContact us or send us a message at support@amerisano.comGot it');
    }

    async assert_form_closed(){
        await this.acknowladge_button().click();
        await this.page.waitForTimeout(300);
        await expect(this.formmodal()).toBeHidden();
    }

}

export default ForgotPwdForm;