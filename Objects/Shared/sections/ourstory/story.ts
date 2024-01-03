import { Page, expect } from "@playwright/test";

class OurStory{
    readonly page:Page;

    constructor(page:Page){
        this.page=page;
    }
    //LOCATORS
    storyContainer=()=>this.page.locator('#our-story');
    desc1=()=>this.page.getByText('Amerisano was born as a permanent solution to the broken supply chains and low quality products that medical professionals faced in the wake of the COVID-19 pandemic. We built a vertically integrated supply chain that starts with manufacturing and ends with shipping. Eliminating third party middlemen lowers costs and increases efficiencies that benefit our customers through factory direct pricing and timely delivery.');
    desc2=()=>this.page.getByText('More recently, dentists told us they could not find nitrile gloves tailored to their needs. We worked closely with dental industry leaders and developed two models of gloves with these specific needs in mind. These dental experts are very pleased. And we are so confident you will be, too, that we invite you to request free sample boxes with absolutely no obligation by filling out this short form.');
    cta_link=()=>this.page.getByRole('link', { name: 'filling out this short form.' });


    //METHODS
    async OurStoryVisible(){
        await this.storyContainer().scrollIntoViewIfNeeded();
        await expect(this.storyContainer()).toBeVisible();
        await expect(this.desc1()).toBeVisible();
        await expect(this.desc2()).toBeVisible();
        await expect(this.cta_link()).toBeVisible();

    }
}

export default OurStory;