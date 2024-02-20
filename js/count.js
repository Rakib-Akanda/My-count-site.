let sum = 0;
function plusBtn(){
    const firstElement = document.getElementById('count');
    sum += 1;
    if(sum > 0){
    firstElement.innerText = sum;

    }
}
function minusBtn(){
    const firstElement = document.getElementById('count');
    sum -= 1;
    if(sum >= 0){
        firstElement.innerText = sum;
    }
}
// main function 1 tehke
function clickPlus(){
    const clickMePlus = document.getElementById('plus-btn');
    clickMePlus.addEventListener('click', plusBtn)
}
function clickMinus(){
    const clickMeMinus = document.getElementById('minus-btn');
    clickMeMinus.addEventListener('click', minusBtn)
}
clickPlus();
clickMinus();
// main function 1 sesh

// main function 1 na kore jodi ami direct call kroe eventListener add kore kore taw hobe- code no 2
//code no 2
// document.getElementById('plus-btn').addEventListener('click', plusBtn)
// document.getElementById('minus-btn').addEventListener('click',minusBtn);

///



// code no 3 eta korlew hobe  uno delay hobe nah
// let sum = 0;

// function plusBtn() {
//     const firstElement = document.getElementById('count');
//     firstElement.innerText = ++sum;
// }

// function minusBtn() {
//     const firstElement = document.getElementById('count');
//     if (sum > 0) {
//         firstElement.innerText = --sum;
//     }
// }

// document.getElementById('plus-btn').addEventListener('click', plusBtn);
// document.getElementById('minus-btn').addEventListener('click', minusBtn);