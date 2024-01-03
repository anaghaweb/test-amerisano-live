import { Page,expect } from "@playwright/test";

class GoogleMapAddress{
    readonly page:Page;

    constructor(page:Page){
        this.page=page;
    }

    //LOCATORS
    address=()=>this.page.locator('div').filter({ hasText: '4303 Russell Dr. Unit BAustin' }).nth(2);
    map=()=>this.page.locator('div').filter({ hasText: '+− Leaflet | © OpenStreetMap' }).nth(2);

    //Methods
    async AddressMap(){
        await this.address().scrollIntoViewIfNeeded();
        await expect(this.address()).toBeVisible();
        await expect(this.map()).toBeVisible();
    }
}

export default GoogleMapAddress;