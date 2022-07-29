let display = document.querySelector(".calculator__screen-top");
let buttons = document.querySelectorAll(".btn");

let value = "";

function calcular(e) {
    let tecla = e.target.textContent;

    let operadores = ["+", "-", "*", "÷"];

    switch(tecla) {
        case "=":
            display.textContent = eval(value.replace("÷","/"));
            value = eval(value.replace("÷","/"));
            break;

        case "C": 
            display.textContent = "0";
            value = " ";
            break;

        case "+":
        case "-":
        case "/":
            /*display.textContent = value + "/";
            value += "/";*/
            
        case "*":
        case ".":
        case "%":
            /*value = value.replace(/+ | - | * | ÷ /, " ");
            //display.textContent = value;
            break;*/

        case "+":
        default:
            value += tecla;
            display.textContent = value;
    }

    


}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", calcular);
}

