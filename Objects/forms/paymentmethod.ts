import { Page, expect } from "@playwright/test";

const fakeVisaCreditCarddata={number:'4701322211111234', expiry:'12/26', cvv:'837'}

class PaymentMethodForm {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  //Fake Credit Card Data
  

  //LOCATORS
  goto = () =>
    this.page.getByRole("link", { name: "Please add a payment method" });
   CreditCard=()=>this.page.locator('div').filter({ hasText: /^Credit Card$/ }).locator('span').nth(1);
    PayPal=()=>this.page.locator('div').filter({ hasText: /^PayPal$/ }).locator('span').nth(1);
  cardnumber = () => this.page.getByLabel("Card number");
  expiry = () => this.page.getByLabel("Expiry date in format MM YY");
  cvv = () => this.page.getByLabel("CVC");
  ship_bill_add_same = () =>
    this.page.locator("div:nth-child(4) > span > .radio_radio__gkXW4").first();
  newbilladdress = () =>
    this.page.locator("span:nth-child(3) > .radio_radio__gkXW4");//
  firstname = () => this.page.locator('input[name="name"]');
  lastname = () => this.page.locator('input[name="lastName"]');
  company = () => this.page.locator('input[name="company"]');
  address1 = () => this.page.locator('input[name="address1"]');
  address2 = () => this.page.locator('input[name="apartment"]');
  city = () => this.page.locator('input[name="city"]');
  clickCountry = () =>
    this.page
      .locator(
        ".styles_dropdown__k8MjX > div > .input_container__8yb9l > .input_data__fSFbO > .input_input__lyuFG"
      )
      .first();

  selectCountry = () => this.page.getByText("United States");
  clickState = () =>
    this.page.locator(
      "div:nth-child(8) > .styles_dropdown__k8MjX > div > .input_container__8yb9l > .input_data__fSFbO > .input_input__lyuFG"
    );
  selectState = () => this.page.getByText('Alabama', { exact: true }); //getByText('Alabama', { exact: true })
  zipcode = () => this.page.locator('input[name="zipcode"]');
  phone = () => this.page.locator('input[type="phone"]');
    addPaymentMethodButton=()=>this.page.locator('button').filter({ hasText: 'Add payment method' });

    //METHOD
    async OpenPaymentMethodForm(){
        await this.goto().click();
    }

    //pay by credit card
    async PaybyCreditCard(){
        await this.CreditCard().click();
    }

    //Fill card details
    async FillCardDetails(){
      await this.cardnumber().fill(fakeVisaCreditCarddata.number);
      await this.expiry().fill(fakeVisaCreditCarddata.expiry);
      await this.cvv().fill(fakeVisaCreditCarddata.cvv);
    }
    //select same billing address as shipping
    async ShippingBillingAddress_Same(){
        await this.ship_bill_add_same().click();
    }
    async selectNewBillingAddress(){
        await this.newbilladdress().click();
    }

    //update new shipping address
    async fillBillingAddressForm(data:any){
        
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
      // 1) <p class="typography_p__2F_6g typography_w-400__HSp…>…</p> aka getByText('oceanviewalabama, AL 20003')
      // 2) <p class="styles_option__GODSG">Alabama</p> aka getByText('Alabama', { exact: true })

    //pay by paypal
    async PaybyPayPal(){
await this.PayPal().click();
    }

    async ClickaddPaymentButton(){
        await this.addPaymentMethodButton().click();
    }
    async PaymentButtonEnabled(){
await expect(this.addPaymentMethodButton()).toBeEnabled();
    }

}

export default PaymentMethodForm;