let Body = document.getElementById("body");
let Blue = document.getElementById("blue");
let Green = document.getElementById("green");
let Purple = document.getElementById("purple");
let Sunny = document.getElementById("sunny");
let Night = document.getElementById("night");
let Label = document.querySelectorAll("label")
Blue.addEventListener("click",
    function () {
    Body.style.background = "#5ab5ff";
    Label.forEach(function (label) {
        label.style.color = "black";
    });
    }
);
Green.addEventListener("click",
    function () {
    Body.style.background = "#03c4a1";
    Label.forEach(function (label) {
        label.style.color = "black";
    });
    }
);
Purple.addEventListener("click",
    function () {
    Body.style.background = "#c300ff";
    Label.forEach(function (label) {
        label.style.color = "black";
    });
    }
);
Sunny.addEventListener("click",
    function () {
    Body.style.background = "#FFEB3B";
    Label.forEach(function (label) {
        label.style.color = "black";
    });
    }
);
Night.addEventListener("click",
    function () {
    Body.style.background = "#000";
    Label.forEach(function (label) {
        label.style.color = "white";
    });
    }
);