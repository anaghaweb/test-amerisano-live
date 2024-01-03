import { Page, expect } from "@playwright/test";

class ProductSpecification{
    readonly page:Page;
    
    constructor(page:Page){
        this.page=page;
    }

    //LOCATORS
 heading=()=>this.page.getByRole('heading', { name: 'Recommended products' });
 product_section=()=>this.page.locator('div').filter({ hasText: 'Nitrile Exam Gloves | AS-600100 per boxChemo-Rated Strength and DurabilitySHOP' }).nth(2);
 as600=()=>this.page.getByRole('heading', { name: 'Nitrile Exam Gloves | AS-600' });
 as588=()=>this.page.getByRole('heading', { name: 'Nitrile Exam Gloves | AS-588' });
 as580=()=>this.page.getByRole('heading', { name: 'Nitrile Exam Gloves | AS-580' });
 as600specs=()=>this.page.getByRole('button', { name: 'Expand Full Specs feature-icon' }).first();
 as580specs=()=>this.page.getByRole('button', { name: 'Expand Full Specs feature-icon' }).nth(1);
 as588specs=()=>this.page.getByRole('button', { name: 'Expand Full Specs feature-icon' }).nth(2);


 //METHODS

 async AS580_Card(){
    await this.as580().scrollIntoViewIfNeeded();
    await expect(this.as580()).toBeVisible();
 }

 
 async AS588_Card(){
    await this.as588().scrollIntoViewIfNeeded();
    await expect(this.as588()).toBeVisible();
 }

 async AS600_Card(){
    await this.as600().scrollIntoViewIfNeeded();
    await expect(this.as600()).toBeVisible();
 }
 
 //Freebox HomePage Product Cards Visual Check

 async FreeBox_ProductsCards_Visible(){
   await this.page.locator('#products').scrollIntoViewIfNeeded();
   await expect(this.page.locator('#products')).toBeVisible();
 }

 //AmerisanoBuy Page
 async RecommendedProductSection(){
    await this.heading().scrollIntoViewIfNeeded();
    await expect(this.heading()).toBeVisible();
    await expect(this.product_section()).toBeVisible();
    await this.as580().scrollIntoViewIfNeeded();
    await expect(this.as580()).toBeVisible();
   }

   async ViewFullSpecs(){
      await this.heading().scrollIntoViewIfNeeded();
    await this.AS588_Card();
    await this.as588specs().click();

    await this.AS580_Card();
    await this.as580specs().click();

    await this.AS600_Card();
    await this.as600specs().click();
    
   }

}

export default ProductSpecification;