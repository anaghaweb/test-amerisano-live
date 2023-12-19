import { test, expect } from '@playwright/test';

const customViewport = [
  { name: 'ultrawide FHD', width: 2560, height: 1080 },
  { name: 'ultrawide QHD', width: 3440, height: 1440 },
  { name: 'ultrawide 4K', width: 3840, height: 1600 },
];


const devicesToTest = [
  'iPhone 14',
  'Galaxy S5',
  'Pixel 7',
  'iPhone SE',
  'Galaxy Tab S4',
  'iPad (gen 5)',
  'iPad Pro 11',
];
const { chromium, webkit, firefox } = require( "playwright" );

test( 'better-pricing-lg', async ( { }, testInfo ) => {
  test.slow();
  /**
   * @Epic Better prising visibility check
   * @Feature Order Page
   * @Story betterpricing Screenshots
  */


  for ( const browsertype of [ chromium, webkit, firefox ] ) {
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
 * @Step Better pricing section to be visibile
 */
    const element = await page.locator( '.order-gloves_wrapper__DZ1jF' );
    await element.scrollIntoViewIfNeeded();
    await expect( element ).toBeInViewport();
    await expect( element ).toBeVisible();
    /**
      * @Step Take Screenshot
      */
    await page.screenshot( { path: `./tests/visibility/screenshots/orderpage/betterprice_section_${ browsertype.name() }.png`, fullPage: false } );
    /**
      * @Step Take Screenshot
      */
    await testInfo.attach( `betterprice_section_${ browsertype.name() }.png`, {
      body: await page.screenshot(),
      contentType: "image/png",
    } );
    await page.close();
    await context.close();
    await browser.close();
  };
} );


test( 'better-pricing-xl', async ( { }, testInfo ) => {

  /**
   * @Epic Better prising visibility check
   * @Feature Order Page
   * @Story betterpricing Screenshots
 */

  for ( const size of customViewport ) {
    const browser = await chromium.launch();
    const context = await browser.newContext( { viewport: { width: size.width, height: size.height } } );

    const page = await context.newPage();
    await page.goto( 'https://www.amerisano.com/order' );
    await expect( page ).toHaveTitle( "Order Amerisano dental gloves - | The gloves you recieve are direct from the factory and only change hands once, significantly lowering the cost to your practice." );
    /**
     * @Step Accept Cookies
     */
    await expect( page.getByText( 'Accept AllSetup Cookies' ) ).toBeVisible();
    await page.getByRole( 'button', { name: 'Accept All' } ).click();
    /**
 * @Step Better pricing section to be visibile
 */
    const element = await page.locator( '.order-gloves_wrapper__DZ1jF' );
    await element.scrollIntoViewIfNeeded();
    await expect( element ).toBeInViewport();
    await expect( element ).toBeVisible();
    /**
      * @Step Take Screenshot
      */
    await page.screenshot( { path: `./tests/visibility/screenshots/orderpage/betterpricing_section_${ size.name }.png` } );
    /**
      * @Step Take Screenshot
      */
    await testInfo.attach( `betterpricing_section_${ size.name }.png`, {
      body: await page.screenshot(),
      contentType: "image/png",
    } );
    await page.close();
    await context.close();
    await browser.close();
  }

} )


test( 'better-pricing-mobile-tablet', async ( { isMobile }, testInfo ) => {
  test.slow();

  /**
   * @Epic Better prising visibility check
   * @Feature Order Page
   * @Story betterpricing Screenshots
  */
  const { devices } = require( "playwright" );
  for ( const device of devicesToTest ) {
    const browser = await chromium.launch();
    const context = await browser.newContext( { ...devices[ device ] } )
    const page = await context.newPage();
    await page.goto( 'https://www.amerisano.com/order' );

    /**
        * @Step Check page Title
        */
    await expect( page ).toHaveTitle( "Order Amerisano dental gloves - | The gloves you recieve are direct from the factory and only change hands once, significantly lowering the cost to your practice." );
    /**
     * @Step Accept Cookies
     */
    await expect( page.getByText( 'Accept AllSetup Cookies' ) ).toBeVisible();
    await page.getByRole( 'button', { name: 'Accept All' } ).click();
    /**
    * @Step Better pricing section to be visibile
    */
    const element = await page.locator( '.order-gloves_wrapper__DZ1jF' );
    await element.scrollIntoViewIfNeeded();
    await expect( element ).toBeVisible();

    /**
      * @Step Take Product Screenshot
      */
    await page.screenshot( { path: `./tests/visibility/screenshots/orderpage/betterpricing_section_${ device }.png`, fullPage: true } );
    /**
      * @Step Attach Screenshot
      */
    await testInfo.attach( `betterpricing_section_${ device }.png`, {

      body: await page.screenshot(),
      contentType: "image/png",
    } );
    await page.close();
    await context.close();
    await browser.close();
  };
} )
