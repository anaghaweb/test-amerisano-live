import { Page, expect } from "@playwright/test";

class DiscountCoupanPopup {
    readonly page:Page;
    constructor(page:Page){
        this.page=page;
    }
    //LOCATORS
    discountCoupan = ()=>this.page.locator('.modal_item__DwiZP');
    coupan_button_close = ()=>this.page.locator('.modal_close__nC_6v');
    //ACTIONS locator('.modal_close__nC_6v')
       async closeModal(){
     await this.page.mouse.move(-1000, -1000);
     await this.page.waitForTimeout(3000);
     const result = await expect(this.discountCoupan()).toBeVisible()
      if(result !== null){
        console.log("discount coupon visible")
        await expect(this.page.locator('button').filter({ hasText: 'I WANT MY COUPON' })).toBeVisible();
       // console.log("modal button visible")
        this.coupan_button_close().click();
       // console.log("close button clicked");
        await expect(this.discountCoupan()).toBeHidden();
        console.log("discount coupon modal closed");
      }
}
}


export default DiscountCoupanPopup