import { Page, expect } from "@playwright/test";

class SpecialTraits{
    readonly page:Page;
    constructor(page:Page){
        this.page = page
    }

    //LOCATORS
    specialTraits = ()=>this.page.locator('section').filter({ hasText: 'Why our gloves are different?' });
    section_bringToCenter= ()=>this.page.locator('.align-items-center');
    st_heading=()=>this.page.getByText('Why our gloves are different?');
    st_subtitle=()=>this.page.getByText('We found that dentistry requires superior dexterity and tactility from a glove without any sacrifice to safety or comfort. That’s why we worked with dentists to develop an FDA approved, 100% nitrile glove with textured fingertips and a thin, highly dexterous design that doesn’t compromise puncture resistance.');
    st_trait1=()=>this.page.getByText('Thin and Highly elastic');
    st_trait2=()=>this.page.getByText('Textured grip for better control');
    st_trait3=()=>this.page.getByText('Puncture and cut protection');
    
    //ACTIONS
    async goto_SpecialTraits(){
        await this.specialTraits().scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(200);
    }
    async center_section_specialTraits(){
        await expect(this.section_bringToCenter()).toBeVisible();
    }

    async Assert_SpecialTraits_Visibility(){
        await this.goto_SpecialTraits();
        await this.page.waitForTimeout(200);
        await expect(this.st_heading()).toBeVisible()
        await expect(this.st_subtitle()).toBeVisible();
        await expect(this.st_trait1()).toBeVisible();
        await expect(this.st_trait2()).toBeVisible();
        await expect(this.st_trait3()).toBeVisible();
        
    }
}

export default SpecialTraits;