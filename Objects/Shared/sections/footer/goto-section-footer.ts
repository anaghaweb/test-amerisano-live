import { Page, expect } from "@playwright/test";


class Footer_Section{
    readonly page:Page;
    constructor(page:Page){
        this.page=page;
           }

    //LOCATORS
      
    goto_footer = ()=>this.page.getByText('Our Products');

    freeboxfooter=()=>this.page.locator('div').filter({ hasText: /^GET MY FREE NITRILE GLOVES BOX NOW!Privacy Policy$/ }).nth(2);

    //Methods

    async Check_Footer_isvisible(){
        await this.goto_footer().scrollIntoViewIfNeeded();
        await expect(this.goto_footer()).toBeVisible();
    }

    async Assert_FreeBox_Footer_Visible(){
        await this.freeboxfooter().scrollIntoViewIfNeeded();
        await expect(this.freeboxfooter()).toBeVisible();
    }
}


export default Footer_Section;