import {  loginformData, forgotpwdData, freeSampleData, groupFormData, wholesaleFormData, shippingaddFormData, paymentMethodFormData, needinfoFormData, createAccFormData,
as580, as600, as588, as580588, as580600, as588600, as580588600} from "../data/data.js";


function generateList(data, listId, basePath){

    const list = document.getElementById(listId);
    data.forEach(element => { 
        const listItem = document.createElement('li');
        listItem.className = 'accordion-body-content';
        listItem.innerHTML=`<a href="${basePath}/${element.path}/index.html" class="accordion-body-content" target="contentContainer">${element.name}</a>`
        listItem.id=`${element.path}`        
        list.appendChild(listItem);
    });   
}


generateList(needinfoFormData, 'needInfoForm', './TestReports/forms');
generateList(createAccFormData, 'createAccFrom', './TestReports/forms');
generateList(loginformData, 'loginFormSect', './TestReports/forms/loginform');
generateList(forgotpwdData, 'forgotPwdform', './TestReports/forms/forgotpwd');
generateList(freeSampleData, 'freeSampleForm', './TestReports/forms/freesample');
generateList(groupFormData, 'groupBuyingForm', './TestReports/forms/groupbuying');
generateList(wholesaleFormData, 'wholesaleForm', './TestReports/forms/wholesaleaccount');
generateList(shippingaddFormData, 'shippingAddForm', './TestReports/forms/shipadd');
generateList(paymentMethodFormData, 'paymentMethodForm', './TestReports/forms/paymentmethod');
generateList(as580, 'cartSectionAS580', './TestReports/cart');
generateList(as588, 'cartSectionAS588', './TestReports/cart');
generateList(as600, 'cartSectionAS600', './TestReports/cart');
generateList(as580588, 'cartSectionAS580AS588', './TestReports/cart');
generateList(as580600, 'cartSectionAS580AS600', './TestReports/cart');
generateList(as588600, 'cartSectionAS588AS600', './TestReports/cart');
generateList(as580588600, 'cartSectionAS580AS588AS600', './TestReports/cart');

