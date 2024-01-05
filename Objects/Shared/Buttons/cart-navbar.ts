import { Page } from "@playwright/test";

class CartNavbarButton{

    readonly page: Page;
    constructor(page:Page){
        this.page = page;
    }

    //LOCATORS
    cart_button=()=>this.page.getByRole('link', { name: 'Link to cart page Cart' });

    //METHODS

    async Open_Main_Cart(){
        await this.cart_button().click();
        await this.page.waitForTimeout(2000)
    }
}

export default CartNavbarButton;