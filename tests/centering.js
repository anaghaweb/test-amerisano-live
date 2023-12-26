import { ElementHandle } from "@playwright/test";

async function centerElementOnScreen(page, div) {
  await page.div.evaluate((element) => 
    element.scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' }));
  }

  export default centerElementOnScreen;
  