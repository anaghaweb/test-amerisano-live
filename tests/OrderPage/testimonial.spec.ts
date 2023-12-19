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

test( 'testimonial-lg', async ( { }, testInfo ) => {
  test.slow();
  /**
   * @Epic Testimonial visibility check
   * @Feature Order Page
   * @Story Testimonial Screenshots
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
 * @Step Testimonial should be visibile
 */
    const element = await page.getByText( 'What our clients sayDr. Mark' );
    await element.scrollIntoViewIfNeeded();
    await expect( element ).toBeInViewport();
    await expect( element ).toBeVisible();
    /**
      * @Step Take Screenshot
      */
    await page.screenshot( { path: `./tests/visibility/screenshots/orderpage/testimonials/review_${ browsertype.name() }.png`, fullPage: false } );
    /**
      * @Step Take Screenshot
      */
    await testInfo.attach( `review_${ browsertype.name() }.png`, {
      body: await page.screenshot(),
      contentType: "image/png",
    } );
    await context.close();
    await page.close();
    await browser.close();
  };
} );


test( 'testimonial-xl', async ( { }, testInfo ) => {

  /**
 * @Epic Testimonial visibility check
   * @Feature Order Page
   * @Story Testimonial Screenshots
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
 * @Step Testimonial should be visibile
 */
    const element = await page.getByText( 'What our clients sayDr. Mark' );
    await element.scrollIntoViewIfNeeded();
    await expect( element ).toBeInViewport();
    await expect( element ).toBeVisible();
    /**
      * @Step Take Screenshot
      */
    await page.screenshot( { path: `./tests/visibility/screenshots/orderpage/testimonials/review_${ size.name }.png` } );
    /**
      * @Step Take Screenshot
      */
    await testInfo.attach( `review_${ size.name }.png`, {
      body: await page.screenshot(),
    } );
    await context.close();
    await page.close();
    await browser.close();
  }

} )


test( 'testimonial-small', async ( { browser, isMobile }, testInfo ) => {
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
    const element = await page.getByText( 'What our clients sayDr. Mark' );
    await element.scrollIntoViewIfNeeded();
    await expect( element ).toBeInViewport();
    await expect( element ).toBeVisible();
    /**
      * @Step Take Product Screenshot
      */
    await page.screenshot( { path: `./tests/visibility/screenshots/orderpage/testimonials/review_${ device }.png`, fullPage: true } );
    /**
      * @Step Attach Screenshot
      */
    await testInfo.attach( `review_${ device }.png`, {
      body: await page.screenshot( { fullPage: true } ),
      contentType: "image/png",
    } );
    await context.close();
    await page.close();
    await browser.close();
  };
} )
