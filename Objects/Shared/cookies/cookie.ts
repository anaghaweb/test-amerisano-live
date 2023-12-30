import { Page, expect } from "@playwright/test";

class Cookies{
    readonly page:Page;

    constructor(page:Page){
        this.page=page;

    }
   //LOCATORS
   cookie_popup = ()=>this.page.getByText("Accept AllSetup Cookies");
   cookie_Button=()=>this.page.getByRole("button", { name: "Accept All" })
    
   async Accept_Cookies(){
    await expect(this.cookie_popup()).toBeVisible();
    
    await this.cookie_Button().click();
   }
  }

  export default Cookies;



