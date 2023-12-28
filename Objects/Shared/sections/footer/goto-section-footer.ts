import { Page, expect } from "@playwright/test";


class Footer_Section{
    readonly page:Page;
    constructor(page:Page){
        this.page=page;
           }

       
    goto_footer = ()=>this.page.getByText('Our Products');

    async Check_Footer_isvisible(){
        await this.goto_footer().scrollIntoViewIfNeeded();
        await expect(this.goto_footer()).toBeVisible();
    }
}

export default Footer_Section;