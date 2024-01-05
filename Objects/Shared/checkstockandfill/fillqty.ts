import { Page } from "@playwright/test";

class checkStockAndFill {

    page:Page;
    
    constructor(page:Page){
        this.page=page;
    }

    //Methods

    public async checkstockandfill(sizeLocator, quantity: string, glovesize?:string) {
      if(sizeLocator){
        
        await sizeLocator().click();
      }
      else{
        console.log(`this ${glovesize} size is not available for this model` );
        return false;
      }
        
        await this.page.waitForTimeout(200);
        if (
          (await this.page
            .getByPlaceholder("Please enter your email")
            .isVisible()) === false
        ) {
          await sizeLocator().fill(quantity);
          console.log(
            ` Size-${glovesize} in stock, added qty of ${quantity} no(s) to cart `
          );
        } else {
          console.log(`Size-${glovesize} is out of stock`);
          return false
        }
      }
    }

export default checkStockAndFill;