import { test, expect, chromium } from '@playwright/test';

const customViewport = [
  { name: 'ultrawide_FHD', width: 2560, height: 1080 },
  { name: 'ultrawide_QHD', width: 3440, height: 1440 },
  { name: 'ultrawide_4K', width: 3840, height: 1600 },
];

test( 'AS588-browser-visual', async ( { }, testInfo ) => {
  test.slow();
  /**
   * @Epic AS588 model visibility check
   * @Feature Order Page
   * @Story AS_588 Screenshots
  */
  const { chromium, webkit, firefox } = require( "playwright" );

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
    await page.getByRole( 'heading', { name: 'Nitrile Exam Gloves | AS-588' } ).scrollIntoViewIfNeeded();
    const element = await page.locator( 'div:nth-child(3) > .product_product__DrVEg > .product_content__yjUC8 > .product_row__cJSpY > .product_product-details__2Zl1a' );
    await element.scrollIntoViewIfNeeded();
    await expect( element ).toBeVisible();
    /**
      * @Step Take Screenshot
      */
    await page.screenshot( { path: `./tests/visibility/screenshots/orderpage/products/AS588_${ browsertype.name() }.png` } );
    /**
      * @Step Take Screenshot
      */
    await testInfo.attach( `AS588_${ browsertype.name() }.png`, {
      body: await page.screenshot(),
      contentType: "image/png",
    } );
  };
} );


test( 'AS588-customViewport-visual', async ( { }, testInfo ) => {
  /**
  * @Epic AS588 model visibility check
  * @Feature Order Page
  * @Story AS_588 Screenshots
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
    await page.getByRole( 'heading', { name: 'Nitrile Exam Gloves | AS-588' } ).scrollIntoViewIfNeeded();
    const element = await page.locator( 'div:nth-child(3) > .product_product__DrVEg > .product_content__yjUC8 > .product_row__cJSpY > .product_product-details__2Zl1a' );
    await element.scrollIntoViewIfNeeded();
    await expect( element ).toBeVisible();
    /**
      * @Step Take Screenshot
      */
    await page.screenshot( { path: `./tests/visibility/screenshots/orderpage/products/AS588_${ size.name }.png` } );
    /**
      * @Step Take Screenshot
      */
    await testInfo.attach( `AS588_${ size.name }.png`, {
      body: await page.screenshot(),
      contentType: "image/png",
    } );
  }
} )