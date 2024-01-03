import { Page, expect } from "@playwright/test";
class WholesaleForm{
    readonly page:Page;
    constructor(page:Page){
        this.page=page;
    }
    goto = ()=>this.page.goto("https://www.amerisano.com/request-wholesale-account");
    firstname=()=>this.page.locator('input[name="name"]').first();
    lastname=()=>this.page.locator('input[name="name"]').nth(1);
    position=()=>this.page.locator('input[name="position"]');
    company=()=>this.page.locator('input[name="company"]');
    email=()=>this.page.locator('form').filter({ hasText: 'First Name Last Name Position' }).locator('input[name="email"]');
    phone=()=>this.page.locator('form').filter({ hasText: 'First Name Last Name Position' }).locator('input[name="phone"]');
    DUNSNumber=()=>this.page.getByRole('spinbutton');
    creditTermsYes=()=>this.page.getByRole('radio').first();
    creditTermsNo=()=>this.page.getByRole('radio').nth(1);
    taxExemptYes=()=>this.page.getByRole('radio').nth(2);
    taxExemptNo=()=>this.page.getByRole('radio').nth(3);
    employees = ()=>this.page.locator('//html/body/div[1]/div[1]/div[3]/div/div[2]/div/div[2]/form/div/div[9]/select');
    option1=()=>this.employees().selectOption({value:"1 - 50 employees"});
    option2=()=>this.employees().selectOption({value:"51 - 100 employees"});
    option3=()=>this.employees().selectOption({value:"101 - 200 employees"});
    submit=()=>this.page.getByRole("button", { name: "Submit" });

    //METHODS

    async LoadWholesaleAccPage(){
      await this.goto();
      await expect(this.page).toHaveURL("https://www.amerisano.com/request-wholesale-account");
    }

    async FillWholesaleForm(data:any){
      await this.firstname().fill(data.firstname);
      await this.lastname().fill(data.lastname);
      await this.position().fill(data.position);
      await this.company().fill(data.company);
      await this.email().fill(data.email);
      await this.phone().fill(data.phone);
      await this.employees().click();
      await this.employees().selectOption({value:data.employees});
      await this.DUNSNumber().fill(data.DUNSNumber);
      await this.creditTermsYes().check();
      await this.taxExemptYes().check();
      
    }

    async SubmitWholesaleForm(){
      await this.submit().click();
    }
}

export default WholesaleForm;



    


