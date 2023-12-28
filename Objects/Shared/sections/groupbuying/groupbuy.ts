import { Page,expect } from "@playwright/test";

class GroupBuying{

    readonly page:Page;

    constructor(page:Page){
        this.page=page;
    }

    //LOCATORS
    groupContainer=()=>this.page.locator('#group');
    content=()=>this.page.locator('div').filter({ hasText: 'Group BuyingOur distribution' }).nth(2);
    heading=()=>this.page.getByRole('heading', { name: 'Group Buying' });
    subhead1=()=>this.page.getByText('Our distribution system allows substantial cost savings for dental groups. We have multiple options including bulk pricing, group purchasing, order splitting, and can even create a specific ordering page just for your group.');
    subhead2=()=>this.page.getByText('This program can be beneficial for an owner that has multiple practices, a nationwide dental group, an informal association, or even a group of friends! If you would like more information on the discounted pricing please schedule a time with us and we would be happy to help');
    form=()=>this.page.getByText('Schedule a call with our team to get the best pricing for your groupGroup Size*');
   
    
    //METHODS

    async GroupBuying(){
        await this.heading().scrollIntoViewIfNeeded();
       
        await expect(this.content()).toBeVisible();
        await expect(this.subhead1()).toBeVisible();
        await expect(this.subhead2()).toBeVisible();
        await this.form().scrollIntoViewIfNeeded();
        await expect(this.form()).toBeVisible();

    }
}

export default GroupBuying;