import { test, expect, Locator, ElementHandle } from "@playwright/test";
import { setupTest, teardownTest, getPage } from "../SetupTest/setupTest";
import { largeScreen } from "../Context/largeScreen";
import { GotoLandingPage } from "../Objects/Pages";

import { Cookies } from "../Objects/Shared";


test('record', async({page}, testInfo)=>{

const pom=new GotoLandingPage(page);

await pom.LoadLandingPage();

await page.locator('#products').scrollIntoViewIfNeeded();
await expect(page.locator('#products')).toBeVisible();
await testInfo.attach('screenshot', {
    body: await page.screenshot(),
    contentType: 'image/png'
})

})