import { test, expect, Locator, ElementHandle } from "@playwright/test";
import { setupTest, teardownTest, getPage } from "../SetupTest/setupTest";
import { largeScreen } from "../Context/largeScreen";
import centerElementOnScreen from "./centering";
import { Cookies } from "../Objects/Shared";

// test.beforeEach("teardown", async () => {
//   await teardownTest();
// });

// for (const device of largeScreen) {
//   test.describe("recordlocator", () => {
//     test(`testinglocator for ${device.name} `, async ({ page }, testInfo) => {
//       //Freebox page
//       test.slow();
//       setupTest({ device });
//       //const page = getPage();
//       //Go to the
//       await page.goto("https://www.amerisano.com/order");
//       const section = page.getByText('Full Product DetailsNitrile Exam Gloves | AS-588Medical-Grade, Silken Soft');
//       const newcookie = new Cookies(page);
//       await newcookie.Accept_Cookies()
//       await section.evaluate((e) =>
//         e.scrollIntoView({
//           block: "center",
//           inline: "center",
//           behavior: "smooth",
//         })
//       );

//       //await centerElementOnScreen(page, div);
       
//       await testInfo.attach("screenshot", {
//         body: await page.screenshot(),
//         contentType: "image/png",
//       });
//     });
//   });
// }
test('record', async({page})=>{
await page.getByRole('button', { name: 'Place order' }).click();
await page.getByRole('heading', { name: 'Pay with PayPal' });
})