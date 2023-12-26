import { Page, expect } from "@playwright/test";

class ShippingAddressForm {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  //LOCATORS
  email = ()=> this.page.locator("div").filter({hasText: /^Email \*Would you like to receive our newsletter$/,}).locator('input[name="email"]');
  newsletter = ()=> this.page.locator("div").filter({hasText: /^Email \*Would you like to receive our newsletter$/,});
  resedential = ()=>this.page.locator("div:nth-child(2) > .switch_swtich_container___Ibn7 > .switch_switch__n7BcE");
  commercial = ()=>this.page.locator("div:nth-child(2) > .switch_swtich_container___Ibn7 > .switch_switch__n7BcE")
  firstname = ()=>this.page.locator('input[name="name"]');
  lastname=()=>this.page.locator('input[name="lastName"]');
  company=()=>this.page.locator('input[name="company"]');
  address1=()=>this.page.locator('input[name="address1"]');
  address2=()=>this.page.locator('input[name="apartment"]');
  city=()=>this.page.locator('input[name="city"]');
  clickCountry=()=>this.page.locator('.styles_dropdown__k8MjX > div > .input_container__8yb9l > .input_data__fSFbO > .input_input__lyuFG').first();
  //locator('.styles_dropdown__k8MjX > div > .input_container__8yb9l > .input_data__fSFbO > .input_input__lyuFG').first()
  selectCountry=()=>this.page.getByText("United States");
clickState=()=>this.page.locator('div:nth-child(8) > .styles_dropdown__k8MjX > div > .input_container__8yb9l > .input_data__fSFbO > .input_input__lyuFG');
selectState=()=>this.page.getByText("Alabama");
zipcode=()=>this.page.locator('input[name="zipcode"]');
phone=()=>this.page.locator('input[type="phone"]');
addAddressButton =()=>this.page.locator("button").filter({ hasText: "Add address" });

//METHODS

async fillShippingAddressForm(data:any){
  await this.email().fill(data.email);
  await this.newsletter().click();
  await this.resedential().click();
  await this.commercial().click();
  await this.firstname().fill(data.firstname);
  await this.lastname().fill(data.lastname);
  await this.company().fill(data.company);
  await this.address1().fill(data.address1);
  await this.address2().fill(data.address2);
  await this.city().fill(data.city);
  await this.clickCountry().click();
  await this.selectCountry().click();
  await this.clickState().click();
  await this.selectState().click();
  await this.zipcode().fill(data.zipcode);
  await this.phone().fill(data.phone);
}

async clickAddAddressBtn(){
  await this.addAddressButton().click();
}
async checkAddAddressBtn(){
  await this.addAddressButton().scrollIntoViewIfNeeded();
  await expect(this.addAddressButton()).toBeEnabled();
}
}

export default ShippingAddressForm;