"use strict;"

// const panels = document.querySelectorAll(".panels .panel");

// function openPanel(e) {
//     for(const item of this.parentNode.children){
//         item.classList.remove("open");
//     }
//     this.classList.add("open");
// }

// for (const panel of panels) {
//     panel.addEventListener('click', openPanel);
// }

// const panels = document.querySelectorAll(".panel");





// // biome-ignore lint/complexity/noForEach: <explanation>
// panels.forEach(panel => panel.addEventListener('click',toggleOpen));

const panels = document.querySelectorAll(".panel");

// biome-ignore lint/complexity/noForEach: <explanation>

function toggleOpen(){
    panels.forEach(sib => sib.classList.remove("open"));
    this.classList.toggle("open");
}

function animateText(e){
    //e.propagate.stop;
    if(e.propertyName.includes("font")){
        this.classList.toggle('textAnimate');
    }    
}

// biome-ignore lint/complexity/noForEach: <explanation>
panels.forEach(panel => panel.addEventListener('click',toggleOpen));
// biome-ignore lint/complexity/noForEach: <explanation>
panels.forEach(panel => panel.addEventListener('transitionend',animateText));