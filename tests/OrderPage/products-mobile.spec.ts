import { test, expect } from '@playwright/test';

const devicesToTest = [
  'iPhone 14',
  'Galaxy S5',
  'Pixel 7',
  'Nexus 7',
  'iPhone 12',
  'iPhone SE',

];


test( 'visual-mobile', async ( { browser }, testInfo ) => {
  test.slow();
  /**
   * @Epic Products visibility check
   * @Feature Order Page
   * @Story Screenshots
  */
  const { devices } = require( "playwright" );
  for ( const device of devicesToTest ) {
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
      * @Step locate products
      */
    await expect( page.locator( '[id="\\#startorder"]' ) ).toBeInViewport();
    await expect( page.locator( '[id="\\#startorder"]' ) ).toBeVisible();
    /**
      * @Step Take Product Screenshot
      */
    await page.screenshot( { path: `./tests/visibility/screenshots/orderpage/products/gloves_${ device.replace( " ", "" ) }.png`, fullPage: true } );
    /**
      * @Step Attach Screenshot
      */
    await testInfo.attach( `glove_${ device.replace( " ", "" ) }.png`, {
      body: await page.screenshot( { fullPage: true } ),

      contentType: "image/png",
    } );
    await context.close();
    await page.close();

  };

} )
