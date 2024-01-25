"use strict;"

const panels = document.querySelectorAll(".panels .panel");

function openPanel(e){
    console.log(this.parentNode.firstChild);
    this.classList.add("open");
}


for(const panel of panels){
    panel.addEventListener('click',openPanel);
};

