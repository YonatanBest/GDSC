let Values = document.getElementById("h1");
let Minus = document.getElementById("minus");
let Plus = document.getElementById("plus");
let a = 0;
Minus.addEventListener("click",
    function () {
        if (a > 0){
        a -= 1;
        Values.innerHTML = a;
        }
    }
);
Plus.addEventListener("click",
    function(){
        if(a < 20){
        a += 1;
        Values.innerHTML = a;
        }
    }
);