import { Page } from "@playwright/test";
import { expect } from "@playwright/test";

class FreeSampleForm{
    readonly page:Page
    constructor(page:Page){
        this.page=page;
    }

    //as580 sizes
  as580ChooseSize=()=>this.page.getByRole('button', { name: 'CHOOSE SIZE' }).first();
  as580XS=()=>this.page.locator('li').filter({ hasText: 'XS - Extra Small' });
  as580S=()=>this.page.locator('li').filter({ hasText: 'S - Small' }).first();
  as580M=()=>this.page.locator('li').filter({ hasText: 'M - Medium' }).first(); 
  as580L=()=>this.page.locator('li').filter({ hasText: 'L - Large' }).first();
  as580XL=()=>this.page.locator('li').filter({ hasText: 'XL - Extra Large' }).first();

  //as588 sizes
  as588ChooseSize=()=>this.page.locator('button').filter({ hasText: 'CHOOSE SIZE' }).nth(2);
  as588S=()=>this.page.locator('li').filter({ hasText: 'S - Small' }).nth(2);
  as588M=()=>this.page.locator('li').filter({ hasText: 'M - Medium' }).nth(2);
//as600 sizes
as600ChooseSize=()=>this.page.getByRole('button', { name: 'CHOOSE SIZE' }).nth(1)

as600S=()=>this.page.locator('li').filter({ hasText: 'S - Small' }).nth(1);
as600M=()=>this.page.locator('li').filter({ hasText: 'M - Medium' }).nth(1);
as600L=()=>this.page.locator('li').filter({ hasText: 'L - Large' }).nth(1);
as600XL=()=>this.page.locator('li').filter({ hasText: 'XL - Extra Large' }).nth(1);

    //step 1
    firstname = ()=>this.page.getByPlaceholder('First name*');
    lastname=()=>this.page.getByPlaceholder('Last name*');
    email=()=>this.page.getByPlaceholder('Email*');
    address1=()=>this.page.getByPlaceholder('Address 1*');
    address2=()=>this.page.getByPlaceholder('Address 2');
    selectstate=()=>this.page.getByRole('button', { name: 'State* Dropdown icon' });
    stateoption=()=>this.page.getByRole('option', { name: 'Alabama'});
    as580Size=()=>this.page.locator('button').filter({ hasText: 'CHOOSE SIZE' }).first();
    city=()=>this.page.getByPlaceholder('City*');
    zipcode=()=>this.page.getByPlaceholder('Zip Code*');
    phone=()=>this.page.getByPlaceholder('Phone*');
    company=()=>this.page.getByPlaceholder('Company*');
    next=()=>this.page.getByRole('button', { name: 'NEXT' });

    //step 2 Locators
    
    option1=()=>this.page.locator('div').filter({ hasText: /^Yes, someone else does the purchasing for me$/ }).locator('span').nth(1);
    option2=()=>this.page.locator('div').filter({ hasText: /^No, I will provide feedback and place the order myself$/ }).locator('span').nth(1);
    feedback=()=>this.page.locator('div').filter({ hasText: /^I will give feedback once I try the gloves$/ }).locator('div');
    sendSamplebtn=()=>this.page.getByRole('button', { name: 'SEND ME A FREE BOX NOW' });


/**
 *  await expect(page.locator('div').filter({ hasText: 'Thank You!A sales advisor' }).nth(3)).toBeVisible();
    await expect(page.getByRole('dialog')).toContainText('Thank You!');
    await expect(page.getByRole('dialog')).toContainText('A sales advisor will contact you shortly to validate your information. Once validated, your sample will be shipped in the next 24 hours.');
    await expect(page.getByRole('img')).toBeVisible();
    await page.getByRole('button', { name: 'CLOSE' }).click();
 */

//METHODS

async chooseSizeAS580(){
  await this.as580ChooseSize().click();
  await this.as580S().click();
}


    async fillGeneralInfo(testdata:any){
       await   this.firstname().fill(testdata.firstname);
       await this.lastname().fill(testdata.lastname);
       await this.email().fill(testdata.email);
       await this.address1().fill(testdata.address1);
        await this.address2().fill(testdata.address2);
       
        await this.city().fill(testdata.city);
        await this.zipcode().fill(testdata.zipcode);
        await this.phone().fill(testdata.phone);
        await this.company().fill(testdata.company);
        
    }

    async fillState(){
      await  this.selectstate().click();
        await this.stateoption().click();
    }

    async submitInfo(){
      await this.next().click();
    }

    async feedbackOption_1(){
      await  this.option1().click();
    
    }
    
    async feedbackOption_2(){
    await  this.option2().click();
  
  }
   
  async willGiveFeedback(){
    await this.feedback().click();
  }
    async sendFreeSample()
    {
      await this.sendSamplebtn().click();
    }
}

export default FreeSampleForm;