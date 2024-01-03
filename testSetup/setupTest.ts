import {
  chromium,
  webkit,
  firefox,
  Browser,
  BrowserContext,
  Page,
} from "playwright";

import GetContext from "../context/getContext";

let browser: Browser;
let context: BrowserContext;
let page: Page;

export async function setupTest({ device }) {
  const browsertype = device.name.includes(
    "iPhone || iPad || MacBook || Safari"
  )
    ? webkit
    : device.name.includes("Firefox")
    ? firefox
    : chromium;
  browser = await browsertype.launch();
  context = await browser.newContext(GetContext({ ...device }));
  page = await context.newPage();
}

export async function teardownTest() {
  if (context) {
    await page.close();
    await context.close();
    await browser.close();
    
  }
  
}

export function getPage(): Page {
  return page;
}
