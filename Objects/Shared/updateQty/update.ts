import { Page } from "@playwright/test";

class updateQty {
    page:Page;
    constructor(page:Page){
        this.page=page;
    }

    //LOCATORS
    //Update button locators
    update = ()=>this.page.getByText('Update', { exact: true });
    update_1st_item=()=>  this.page.getByText('Update').first();
    update_2nd_item=()=>this.page.getByText('Update').nth(1);
    update_3rd_item=()=>this.page.getByText('Update').nth(2);

    plus=()=>this.page.locator('.quantity_plus__eEAr3');


    plus_1st=()=>this.page.locator('.quantity_plus__eEAr3').first();
   save=()=>this.page.getByText('Save', { exact: true });
   


    //METHODS
    async IncreaseQty_by_1_(){
            await this.update().click();
            await this.plus().click();
            await this.save().click();
    }
}

export default updateQty;