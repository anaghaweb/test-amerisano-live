import { test, expect } from '@playwright/test';
import { AS580_Order_Section } from '../Objects/forms';

test.use({viewport:{width:1980, height:1080}});
process.env.PLAYWRIGHT_JSON_OUTPUT_NAME="jsonReports/as580.json"

test('testthis', async ({ page }, testInfo) => {
 await page.goto("https://amerisano.com/order");

 const pom = new AS580_Order_Section(page);
 await pom.addOnetocart_AS580('XS','2');

 await testInfo.attach('screenshot', 
  {
    body: await page.screenshot({fullPage:true}),
    'contentType':'image/png'
  
  }
 )
 
});