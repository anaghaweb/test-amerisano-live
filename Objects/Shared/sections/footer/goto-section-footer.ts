import { Page, expect } from "@playwright/test";


class Footer_Section{
    readonly page:Page;
    constructor(page:Page){
        this.page=page;
           }

        //Locators
        /**
         * await expect(page.locator('div').filter({ hasText: /^GET MY FREE NITRILE GLOVES BOX NOW!Privacy Policy$/ }).nth(2)).toBeVisible();
    await expect(page.locator('.col-md-6 > img')).toBeVisible();
    await expect(page.locator('[id="__next"]')).toContainText('GET MY FREE NITRILE GLOVES BOX NOW!');
    await expect(page.locator('[id="__next"]')).toContainText('Privacy Policy');
    await expect(page.getByRole('link', { name: 'scroll-to-top' })).toBeVisible();
         */

    goto_footer = ()=>this.page.locator('div').filter({ hasText: /^GET MY FREE NITRILE GLOVES BOX NOW!Privacy Policy$/ }).nth(2);

    async Check_Footer_isvisible(){
        await this.goto_footer().scrollIntoViewIfNeeded();
        await expect(this.goto_footer()).toBeVisible();
    }
}

export default Footer_Section;