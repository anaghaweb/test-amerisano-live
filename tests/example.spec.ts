import { test, expect, Locator, ElementHandle } from "@playwright/test";
import { setupTest, teardownTest, getPage } from "../SetupTest/setupTest";
import { largeScreen } from "../Context/largeScreen";
import centerElementOnScreen from "./centering";
import { Cookies } from "../Objects/Shared";


test('record', async({page})=>{

await page.goto('https://www.amerisano.com/buy');


})