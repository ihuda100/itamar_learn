const init=()=>{
    calc();
}

let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let multy = document.querySelector('#multy');
let divied = document.querySelector('#divied');
let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let res = document.querySelector('#res');

let calc=()=>{
    multy.addEventListener('click',()=>{
        res.innerHTML = num1.value * num2.value;
    });
    divied.addEventListener('click',()=>{
        res.innerHTML = num1.value / num2.value;
    });
    plus.addEventListener('click',()=>{
        res.innerHTML = num1.value + num2.value;
    })
    minus.addEventListener('click',()=>{
        res.innerHTML = num1.value - num2.value;
    })
}

init();