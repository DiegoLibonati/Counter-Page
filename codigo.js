
const btnDecrease = document.getElementById("btndecrease");
const btnReset = document.getElementById("btnreset");
const btnIncrease = document.getElementById("btnincrease");

const numberCounter = document.querySelector(".number_counter");

let count = 0;

function Colors(){

    if (count > 0){
        numberCounter.style.color = "green";
    } else if (count < 0){
        numberCounter.style.color = "red";
    } else{
        numberCounter.style.color = "black";
    }
    
}



btnIncrease.addEventListener("click", ()=>{

    count++;

    numberCounter.textContent = count;

    Colors();


});

btnReset.addEventListener("click", ()=>{

    count = 0;

    numberCounter.textContent = count;

    Colors();
});

btnDecrease.addEventListener("click", ()=>{

    count--;

    numberCounter.textContent = count;

    Colors();
  

});