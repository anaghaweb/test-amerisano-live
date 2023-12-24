import { Page } from "@playwright/test";
import { expect } from "@playwright/test";

class GroupBuyingForm{
    readonly page:Page
    constructor(page:Page){
        this.page=page;
    }

  //Locators
    scrollToForm=()=>this.page.getByRole('heading', { name: 'Schedule a call with our team' });
    
    //form fields
    firstname=()=>this.page.getByPlaceholder("First name*", { exact: true });
    lastname=()=>this.page.getByPlaceholder("Last name*", { exact: true });
    email=()=>this.page.locator("#am-home-group-buying").getByPlaceholder("Email*", { exact: true });
    phone=()=>this.page.getByPlaceholder("Phone*", { exact: true });
    groupsize=()=>this.page.getByRole("button", { name: "Group Size* dropdown-icon", exact: true });
    groupsizeoption1=()=>this.page.getByRole("option", { name: "0-50", exact: true });
    groupsizeoption2=()=>this.page.getByRole("option", { name: "50-250", exact: true });
    groupsizeoption3=()=>this.page.getByRole("option", { name: "250-500", exact: true });
    groupname=()=>this.page.getByPlaceholder("Name of your group*", { exact: true });
    submitButton=()=>this.page.getByRole("button", { name: "Book Call Now!", exact: true });
    successMessage=()=>this.page.getByText("Your message has been sent");
    warningText=()=>this.page.getByText('Please fill out all fields');
    //METHODS

async gotoGroupBuyingForm(){
    await this.scrollToForm().scrollIntoViewIfNeeded();
    await expect(this.scrollToForm()).toBeVisible();
}

async fillGroupBuyingForm(groupformdata:any){
    await this.firstname().fill(groupformdata.firstname);
    await this.lastname().fill(groupformdata.lastname);
    await this.email().fill(groupformdata.email);
    await this.phone().fill(groupformdata.phone);
    await this.groupsize().click();
    await this.groupsizeoption1().click();
    await this.groupname().fill(groupformdata.groupname);

}

async SubmitFormData(){
    await this.submitButton().click();
}

async verifySuccessMessage(){
    await expect(this.successMessage()).toBeVisible();
}

async checkWarningText(){
    await expect(this.warningText()).toBeVisible();
}

}

export default GroupBuyingForm;