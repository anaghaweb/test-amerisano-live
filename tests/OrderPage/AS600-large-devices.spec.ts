import { test, expect } from '@playwright/test';

const customViewport = [
  { name: 'ultrawide FHD', width: 2560, height: 1080 },
  { name: 'ultrawide QHD', width: 3440, height: 1440 },
  { name: 'ultrawide 4K', width: 3840, height: 1600 },
];
const { chromium, webkit, firefox } = require( "playwright" );

test( 'AS600-browser-visual', async ( { }, testInfo ) => {
  test.slow();
  /**
   * @Epic AS600 model visibility check
   * @Feature Order Page
   * @Story AS_600 Screenshots
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
   * @Step Locate Product
   */
    await expect( page.getByText( 'Full Product DetailsNitrile Exam Gloves | AS-600Chemo-Rated, Maximum strength' ) ).toBeVisible();
    /**
      * @Step Take Screenshot
      */
    await page.screenshot( { path: `./tests/visibility/screenshots/orderpage/products/AS600_${ browsertype.name() }.png`, fullPage: false } );
    /**
      * @Step Take Screenshot
      */
    await testInfo.attach( `AS600_${ browsertype.name() }.png`, {
      body: await page.screenshot(),
      contentType: "image/png",
    } );
    await page.close();
    await context.close();
    await browser.close();
  };
} );


test( 'AS600-customViewport-visual', async ( { }, testInfo ) => {

  /**
  * @Epic AS600 model visibility check
  * @Feature Order Page
  * @Story AS_600 Screenshots
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
   * @Step Locate Product
   */
    await expect( page.getByText( 'Full Product DetailsNitrile Exam Gloves | AS-600Chemo-Rated, Maximum strength' ) ).toBeInViewport();
    /**
      * @Step Take Screenshot
      */
    await page.screenshot( { path: `./tests/visibility/screenshots/orderpage/products/AS600_${ size.name }.png` } );
    /**
      * @Step Take Screenshot
      */
    await testInfo.attach( `AS600_${ size.name }.png`, {
      body: await page.screenshot(),
      contentType: "image/png",
    } );
    await page.close();
    await context.close();
    await browser.close();
  }

} )
