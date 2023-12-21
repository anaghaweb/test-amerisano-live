import { Page, expect } from "@playwright/test";

class DiscountCoupanPopup {
    readonly page:Page;

    constructor(page:Page){
        this.page=page;
    }

    //LOCATORS
    discountCoupan = ()=>this.page.locator('.modal_item__DwiZP');
    closeCoupan = ()=>this.page.locator('.modal_close__nC_6v').locator('.icon-close');
    //ACTIONS

    async waitForDiscountCoupan(){
       await this.discountCoupan().isVisible().then((result)=>{
         this.closeCoupan().click();
    })}
}

export default DiscountCoupanPopup