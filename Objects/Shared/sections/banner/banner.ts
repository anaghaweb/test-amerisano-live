import { Page, expect } from "@playwright/test";


class HeroBanner{
    readonly page:Page

    constructor(page:Page){
        this.page=page;
    }

   // Locators
    goto=()=>this.page.goto("https://www.amerisano.com");

    //banner
    banner=()=>this.page.getByRole('img', { name: 'banner', exact: true });
    heading=()=>this.page.getByText('Nitrile Gloves designed for dentistry.');
    cta_button=()=>this.page.getByRole('button', { name: 'SEND ME A FREE BOX NOW!' });

    //METHODS
    async HeroBannerSection_Assert(){
        
        await expect(this.banner()).toBeVisible();
        await expect(this.heading()).toBeVisible();
        await expect (this.cta_button()).toBeVisible();
    }
   

}

export default HeroBanner;



