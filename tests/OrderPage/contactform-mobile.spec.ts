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
  'Nexus 7',
  'iPhone 12',
  'iPhone SE',
  'Galaxy Tab S4',
  'iPad (gen 5)',
  'iPad (gen 7)',
  'iPad (gen 7) landscape',
  'iPad Pro 11',
  'iPad Pro 11 landscape',
  'Blackberry PlayBook',
  'Blackberry PlayBook landscape',
];

const { chromium, webkit, firefox } = require( "playwright" );




test( 'contactform-mobile', async ( { }, testInfo ) => {
  test.slow();

  /**
  * @Epic Testimonial visibility check
   * @Feature Order Page
   * @Story Testimonial Screenshots
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
    * @Step Testimonial should be visibile
    */
    const element = await page.locator( '#contactus' );
    await element.scrollIntoViewIfNeeded();
    await expect( element ).toBeInViewport();
    await expect( element ).toBeVisible();

    /**
      * @Step Take Product Screenshot
      */
    await page.screenshot( { path: `./tests/visibility/screenshots/orderpage/products/contactUs_${ device }.png`, fullPage: true } );
    /**
      * @Step Attach Screenshot
      */
    await testInfo.attach( `contactUs_${ device }.png`, {
      body: await page.screenshot( { fullPage: true } ),
      contentType: "image/png",

    } );
    await context.close();
    await page.close();
    await browser.close();
  };

} )
