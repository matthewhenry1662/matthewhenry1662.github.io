let cont;

function loadEvents() {
    cont = document.getElementById("md-typeset");

    let slider = document.getElementById("slider");
    slider.addEventListener("change", () => {
        changeSize(slider.value);
    });

    
    let btns = document.getElementsByClassName("btn");
    for (const btn of btns) {
        btn.addEventListener("click", () => {
            changeSize(btn.value);
        });
    }
}


function changeSize(size) {
    cont.style.fontSize = `${size}rem`;
}



// Load the events after loading the DOM elements
addEventListener("DOMContentLoaded", loadEvents);