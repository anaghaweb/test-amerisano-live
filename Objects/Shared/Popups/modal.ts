import { Page, expect } from "@playwright/test";

class DiscountCoupanPopup {
    readonly page:Page;
    


    constructor(page:Page){
        this.page=page;
    }

    //LOCATORS
    discountCoupan = ()=>this.page.locator('.modal_item__DwiZP');
    closeCoupan = ()=>this.page.locator('.modal_close__nC_6v');
    //ACTIONS locator('.modal_close__nC_6v')

    async waitForDiscountCoupan(){
       await 
         this.closeCoupan().click();
         console.log("close button clicked");
    }

    async verifyDiscountCoupan(){
        await expect(this.discountCoupan()).toBeVisible();
        console.log("Discount Coupon is visible");
    }
    async closeModal(){
     await this.page.mouse.move(-1000, -1000);
     await this.page.waitForTimeout(2000); 
     const result = await expect(this.discountCoupan()).toBeVisible()// Move the mouse to a specific position (e.g., top-left corner)
      if(result !== null){
        console.log("modal visible")
        await expect(this.page.locator('button').filter({ hasText: 'I WANT MY COUPON' })).toBeVisible();
        console.log("MODAL button visible")
        this.closeCoupan().click();
        console.log("close button clicked");
        await expect(this.discountCoupan()).toBeHidden();
        console.log("modal closed");
      }
    // Set up an event listener for the 'dialog' event
    this.page.on('dialog', async (dialog) => {
        console.log(`Dialog message: ${dialog.message()}`);

        // Close the dialog
        await dialog.dismiss();
    });

    // Wait for the modal to appear (adjust as needed)
    //await this.page.waitForSelector('xpath://html/body/div[11]/div/div/div[2]/div');

    // Continue with the rest of your code...

    // Optionally, remove the 'dialog' event listener if it's no longer needed
    this.page.off(    'dialog', async (dialog) => {
        console.log(`Dialog message: ${dialog.message()}`);

        // Close the dialog
        await dialog.dismiss();
    });
}

}


export default DiscountCoupanPopup