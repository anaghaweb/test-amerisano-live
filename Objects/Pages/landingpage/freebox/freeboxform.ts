import { Page, expect } from "@playwright/test";

class FreeBoxSampleForm{
    readonly page:Page;
    constructor(page:Page){
        this.page=page;
    }

    freeboxform=()=>this.page.getByText('GET YOUR FREE BOX!100% Nitrile Examination GlovesAmerisano AS-580Exceptional');
    formcards=()=>this.page.locator('#free-box-section div').filter({ hasText: 'Amerisano AS-580Exceptional' }).first();
    inputfields=()=>this.page.getByText('Shipping AddressState*');

    

    //METHODS
    async FreeBoxForm_Visible(){
        await this.freeboxform().scrollIntoViewIfNeeded();
        await expect(this.freeboxform()).toBeVisible();
    }

    async FreeBoxForm_Cards_Visible(){
        await this.formcards().scrollIntoViewIfNeeded();
        await expect(this.formcards()).toBeVisible();

    }

    async FreeboxInputFields_Visible(){
        await this.inputfields().scrollIntoViewIfNeeded();
        await expect(this.inputfields()).toBeVisible();
    }

}

export default FreeBoxSampleForm;