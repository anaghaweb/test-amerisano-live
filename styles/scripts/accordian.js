document.addEventListener("DOMContentLoaded", function () {
    const accordionHeader = document.querySelectorAll(".accordion-header");
    accordionHeader.forEach(accheader => {
      accheader.addEventListener("click", event => {
        const currentheader = document.querySelector('.accordion-header.active');
        
        if(currentheader && currentheader!==accheader){
          currentheader.classList.toggle("active");
          currentheader.nextElementSibling.style.maxHeight=0;
        }
        accheader.classList.toggle("active");
        const accordionBody = accheader.nextElementSibling;
        if(accheader.classList.contains("active")){
          accordionBody.style.maxHeight= accordionBody.scrollHeight + "px"
        }
        else{
          accordionBody.style.maxHeight = 0;
        }
      });
    });
  });