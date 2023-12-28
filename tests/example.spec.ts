import { test, expect, Locator, ElementHandle } from "@playwright/test";
import { setupTest, teardownTest, getPage } from "../SetupTest/setupTest";
import { largeScreen } from "../Context/largeScreen";

import { Cookies } from "../Objects/Shared";


test('record', async({page})=>{

await page.goto('https://www.amerisano.com/buy');

await page.goto('https://www.amerisano.com/');
// close discount coupon
//accept cookies

//Banner section
await expect(page.getByRole('img', { name: 'banner', exact: true })).toBeVisible();
await page.getByRole('button', { name: 'Accept All' }).click();
await expect(page.locator('h1')).toContainText('Nitrile Gloves designed for dentistry.');
await expect(page.getByRole('button', { name: 'SEND ME A FREE BOX NOW!' })).toBeVisible();

//Banner Reviews Section
await page.locator('.swiper').first().scrollIntoViewIfNeeded();
await expect(page.locator('.swiper').first()).toBeVisible();
//
await page.goto('https://www.amerisano.com/');
await page.goto('https://www.amerisano.com/');


})