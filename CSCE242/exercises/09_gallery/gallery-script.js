//every one second go through and move the class of highlighted
setInterval(()=>{
    let currentSection = document.querySelector(".items section.highlighted");

    //highlight first item
    if(currentSection == null ) {
        document.querySelector(".items section:first-child").classList.add("highlighted");
        return;
    }
    let nextSection = currentSection.nextElementSibling;

     //hit the end
     if(nextSection == null){
        nextSection = document.querySelector(".items section");
    }

    currentSection.classList.remove("highlighted");
    nextSection.classList.add("highlighted");
}, 500);