// scrollbarCheck.ts
import { Page } from "@playwright/test";

  export async function isHorizontalScrollbarPresent(page:Page): Promise<boolean> {
    
        
    
        return page.evaluate(() => {
          
            return  document.documentElement.scrollWidth > window.innerWidth;
          });
    
  }
  