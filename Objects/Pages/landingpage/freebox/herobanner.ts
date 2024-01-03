import { Page,expect } from "@playwright/test";

class FreeBox_HeroBanner_Section{
    readonly page:Page;
    constructor(page:Page){
        this.page=page;
    }

    //LOCATORS

    banner=()=>this.page.locator(".amerisano-homepage__banner-container");

    //METHODS
    
    async FreeboxPage_Banner_Visible(){
        await expect(this.banner()).toBeVisible();
        await expect(this.page.locator(".banner-section__container")).toBeVisible();
        await expect(this.page.getByText("Nitrile Gloves designed for dentistryTRY OUR GLOVES AND GET A$10Starbucks gift")).toBeVisible();
    }
}

export default FreeBox_HeroBanner_Section;