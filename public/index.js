
const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

const acButton = document.getElementById('acButton');

acButton.addEventListener('click', function() {
    display.value = "";
})

const delButton = document.getElementById('delButton');

delButton.addEventListener('click', function() {
    display.value = display.value.slice(0, -1);
})

const calc = document.getElementById('calc');

calc.addEventListener('click', function() {
    if (display.value.includes("%")) {
        display.value = eval(display.value.replace("%", "/100"));
    }
    else {
        display.value = eval(display.value);
    }
    
})

