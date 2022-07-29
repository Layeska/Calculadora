let display = document.querySelector(".calculator__screen-top");
let display2 = document.querySelector(".calculator__screen-content");
let buttons = document.querySelectorAll(".btn");

let value = "";
let newvalue = "";

function calcular(e) {
    let tecla = e.target.textContent;

    switch(tecla) {
        case "=":
            /*display.textContent = eval(value.replace("÷","/"));*/
            display2.textContent = eval(value.replace("÷","/"));
            value = eval(value.replace("÷","/"));
            break;

        case "CA": 
            display.textContent = "0";
            value = " ";

            display2.textContent = " ";
            break;
        
        case "C":/*
            display.textContent = "*******";
            display2.textContent = "Apagado ";
            break;*/

        case "%":
            let values = [];

            newvalue = value.replace(/[^\d?]/g, " ");
            const operador = value.replace(/[\d?]/g, " ").trim();
            values = newvalue.split(" ");
            let porcentaje = (values[0] * values[1]) / 100;
            value = `${values[0]}${operador}${porcentaje}`;
            display.textContent = value;
            display2.textContent = porcentaje;
            break;

        case "/":            
        case "*":
        case "+":
        case "-":
        default:
            value += tecla;
            display.textContent = value;
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", calcular);
}
