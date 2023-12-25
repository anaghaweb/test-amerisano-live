import { Page, expect } from "@playwright/test";

class ShippingAddressForm {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
/**
 * // const email = await page
    //   .locator("div")
    //   .filter({
    //     hasText: /^Email \*Would you like to receive our newsletter$/,
    //   })
    //   .locator('input[name="email"]')
    //   .fill("william.henry.harrison@example-pet-store.com");
    // await page.getByText("Would you like to receive our").click();
    // const resedential = await page
    //   .locator(
    //     "div:nth-child(2) > .switch_swtich_container___Ibn7 > .switch_switch__n7BcE"
    //   )
    //   .click();
    // const commercial = await page.locator(
    //   "div:nth-child(2) > .switch_swtich_container___Ibn7 > .switch_switch__n7BcE"
    // );
    // const firstname = await page.locator('input[name="name"]').fill("Test");
    // const lastname = await page.locator('input[name="lastName"]').fill("form");
    // const company = await page
    //   .locator('input[name="company"]')
    //   .fill("test company ");
    //  await page
    //   .locator('input[name="address1"]')
    //   .fill("test address");
    // await page
    //   .locator('input[name="apartment"]')
    //   .fill("test apartment");
    // await page.locator('input[name="city"]').fill("test city");
    // await page
    //   .locator(
    //     ".styles_dropdown__k8MjX > div > .input_container__8yb9l > .input_data__fSFbO > .input_input__lyuFG"
    //   )
    //   .first()
    //   .click();
    // await page.getByText("United States").click();

    // await page
    //   .locator(
    //     "div:nth-child(8) > .styles_dropdown__k8MjX > div > .input_container__8yb9l > .input_data__fSFbO > .input_input__lyuFG"
    //   )
    //   .click();
    // await page.getByText("Alabama").click();
    // await page.locator('input[name="zipcode"]').fill("12345");
    // page.locator('input[type="phone"]').fill("1234567890");
    // const addaddressbutton = await page
    //   .locator("button")
    //   .filter({ hasText: "Add address" });
    // await addaddressbutton.scrollIntoViewIfNeeded();
    // await addaddressbutton.click();
 */
}

export default ShippingAddressForm;