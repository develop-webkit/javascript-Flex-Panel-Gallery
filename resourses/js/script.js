"use strict;"

const panels = document.querySelectorAll(".panels .panel");

function openPanel(e) {
    for(const item of this.parentNode.children){
        item.classList.remove("open");
    }
    this.classList.add("open");
}

for (const panel of panels) {
    panel.addEventListener('click', openPanel);
}