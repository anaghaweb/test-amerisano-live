import { test, expect } from '@playwright/test';

const customViewport = [
  { name: 'ultrawide_FHD', width: 2560, height: 1080 },
  { name: 'ultrawide_QHD', width: 3440, height: 1440 },
  { name: 'ultrawide_4K', width: 3840, height: 1600 },
];
const { chromium, webkit, firefox } = require( "playwright" );

test( 'AS580-add-to-cart', async ( { }, testInfo ) => {

  /**
   * @Epic Add to Cart
   * @Feature place order
   * @Story OrderPage
  */

  for ( const browsertype of [ chromium ] ) {
    const browser = await browsertype.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto( 'https://www.amerisano.com/order' );
    await expect( page ).toHaveTitle( "Order Amerisano dental gloves - | The gloves you recieve are direct from the factory and only change hands once, significantly lowering the cost to your practice." );
    /**
     * @Step Accept Cookies
     */
    await expect( page.getByText( 'Accept AllSetup Cookies' ) ).toBeVisible();
    await page.getByRole( 'button', { name: 'Accept All' } ).click();
    /**
    * @Step Locate Product
    */
    await page.getByRole( 'heading', { name: 'Nitrile Exam Gloves | AS-580' } ).scrollIntoViewIfNeeded();
    const element = await page.locator( 'div:nth-child(2) > .product_product__DrVEg > .product_content__yjUC8 > .product_row__cJSpY > .product_product-details__2Zl1a > .product_bottom__g5i_4 > .product_pricing__PC29q > .product_product-order__xPM4i > div > .product_product-variations__pWyyw > .product_form__mHjXD > .product_form-row___weFk > div > .input_container__8yb9l > .input_data__fSFbO > .input_input__lyuFG' ).first();
    await element.click();
    await element.fill( '1' );
    const inputValue = await element.inputValue();
    /**
      * @Step Add Product to Cart
      */
    await expect( page.getByRole( 'button', { name: 'ADD TO CART' } ).nth( 1 ) ).toBeEnabled();
    await page.getByRole( 'button', { name: 'ADD TO CART' } ).nth( 1 ).click();
    await expect( inputValue ).toContain( '1' );
    console.log( inputValue );
    await expect( page.getByRole( 'heading', { name: 'Your Order' } ) ).toBeVisible();
    const Checkout = await page.getByRole( 'button', { name: 'Proceed to Checkout' } );
    await Checkout.scrollIntoViewIfNeeded();
    await Checkout.click();
    await page.getByRole( 'link', { name: 'Please add a shipping address' } ).click();
    const email = await page.locator( 'div' ).filter( { hasText: /^Email \*Would you like to receive our newsletter$/ } ).locator( 'input[name="email"]' ).fill( 'william.henry.harrison@example-pet-store.com' );
    await page.getByText( 'Would you like to receive our' ).click();
    const resedential = await page.locator( 'div:nth-child(2) > .switch_swtich_container___Ibn7 > .switch_switch__n7BcE' ).click();
    const commercial = await page.locator( 'div:nth-child(2) > .switch_swtich_container___Ibn7 > .switch_switch__n7BcE' );
    const firstname = await page.locator( 'input[name="name"]' ).fill( 'Test' );
    const lastname = await page.locator( 'input[name="lastName"]' ).fill( 'form' );
    const company = await page.locator( 'input[name="company"]' ).fill( 'test company ' );
    const address = await page.locator( 'input[name="address1"]' ).fill( 'test address' );
    const address2 = await page.locator( 'input[name="apartment"]' ).fill( 'test apartment' );
    const city = await page.locator( 'input[name="city"]' ).fill( 'test city' );
    await page.locator( '.styles_dropdown__k8MjX > div > .input_container__8yb9l > .input_data__fSFbO > .input_input__lyuFG' ).first().click();
    await page.getByText( 'United States' ).click();

    await page.locator( 'div:nth-child(8) > .styles_dropdown__k8MjX > div > .input_container__8yb9l > .input_data__fSFbO > .input_input__lyuFG' ).click();
    const state = await page.getByText( 'Alabama' ).click();
    const zipcode = await page.locator( 'input[name="zipcode"]' ).fill( '12345' );
    const phone = page.locator( 'input[type="phone"]' ).fill( '1234567890' );
    const addaddressbutton = await page.locator( 'button' ).filter( { hasText: 'Add address' } )
    await addaddressbutton.scrollIntoViewIfNeeded();
    await addaddressbutton.click();
    await page.close();
    await context.close();
    await browser.close();
  };
} );
