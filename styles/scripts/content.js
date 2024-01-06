import { freeboxData, homePage , buyData, orderPageData, cartData} from "../data/data.js";


function populateList(data, listId, basePath){
    const list = document.getElementById(listId);
    data.forEach(element => {
        const listItem = document.createElement('li');
        listItem.className = 'accordion-body-content';
        listItem.innerHTML=`<a href="${basePath}/${element.path}/devicelarge/index.html" class="accordion-body-content" target="contentContainer">${element.name}</a>`
        list.appendChild(listItem);
    });
    
}

populateList(freeboxData, 'freeboxSection', './TestReports/pages/landingpages/freesample/screenshot');
populateList(homePage, 'homePageSection', './TestReports/pages/homepage/screenshot');
populateList(buyData, 'buyLPSection', './TestReports/pages/landingpages/buy/screenshot'); 
populateList(orderPageData, 'orderPageSection', './TestReports/pages/orderpage/screenshot');




