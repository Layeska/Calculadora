'use strict';

var screenOperations = document.getElementById("screen_top");
var screenResultview = document.getElementById("screen_result");
var btts = document.getElementById("btns");

var operations = false;

var lastValue = function lastValue() {
    return screenOperations.textContent.substring(screenOperations.textContent.length-1);
};

var writeOperation = function writeOperation(txt) {
    if(screenOperations.textContent == '0' && txt != '.') screenOperations.textContent = ' ';

    if(operations && isNaN(txt)) {
        screenOperations.textContent = screenResultview.textContent;
        operations = false;
    }

    if(operations && !isNaN(txt)) {
        screenOperations.textContent = ' ';
        screenResultview.textContent = '0';
        operations = false;
    }

    if(isNaN(lastValue()) && isNaN(txt)) {
        screenOperations.textContent = screenOperations.textContent.substring(0,screenOperations.textContent +=tr);
    }



};