import {  cartData, loginformData, forgotpwdData, freeSampleData, groupFormData, wholesaleFormData, shippingaddFormData, paymentMethodFormData, needinfoFormData, createAccFormData} from "../data/data.js";


function generateList(data, listId, basePath){
    const list = document.getElementById(listId);
    data.forEach(element => {
        const listItem = document.createElement('li');
        listItem.className = 'accordion-body-content';
        listItem.innerHTML=`<a href="${basePath}/${element.path}/index.html" class="accordion-body-content" target="contentContainer">${element.name}</a>`
        list.appendChild(listItem);
    });   
}

generateList(cartData, 'cartSection', './TestReports/cart/addtocart/screenshot');
generateList(needinfoFormData, 'needInfoForm', './TestReports/forms');
generateList(createAccFormData, 'createAccFrom', './TestReports/forms');
generateList(loginformData, 'loginFormSect', './TestReports/forms/loginform');
generateList(forgotpwdData, 'forgotPwdform', './TestReports/forms/forgotpwd');
generateList(freeSampleData, 'freeSampleForm', './TestReports/forms/freesample');
generateList(groupFormData, 'groupBuyingForm', './TestReports/forms/wholesaleaccount');
generateList(wholesaleFormData, 'wholesaleForm', './TestReports/forms/wholesaleaccount');
generateList(shippingaddFormData, 'shippingAddForm', './TestReports/forms/shipadd');
generateList(paymentMethodFormData, 'paymentMethodForm', './TestReports/forms/paymentmethod');

