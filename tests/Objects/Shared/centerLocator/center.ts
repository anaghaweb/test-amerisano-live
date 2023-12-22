// import { Page} from "@playwright/test";

// class Center_Section_Vertical{
//     readonly page:Page;
//     constructor(page:Page){
//         this.page=page;
//     }

   
// async centerIt (section:string) {
 

//   // Replace the following selector with your specific element locator
  

//   // Bring the section into view
//   await this.page.section.scrollIntoViewIfNeeded();

//   // Get the bounding box of the section
//   const sectionBoundingBox = await this.page.locator(section).boundingBox();

//   if (sectionBoundingBox) {
//     // Calculate the vertical center of the section
//     const centerY = sectionBoundingBox.y + sectionBoundingBox.height / 2;

//     // Get the viewport size
//     const viewportSize = await this.page.viewportSize()!;

//     // Calculate the scroll position to center the section vertically
//     const scrollY = centerY - viewportSize.height / 2;

//     // Scroll to the calculated position
//     await this.page.evaluate((scrollY) => {
//       window.scrollTo(window.scrollX, scrollY);
//     }, scrollY);

//     // Capture a screenshot of the centered section
//     const screenshot = await this.page.screenshot();

//     // Save the screenshot to a file or process it as needed
//     // Example: await screenshot.save('path/to/screenshot.png');
//   }

 
// };
// }

// export default Center_Section_Vertical;