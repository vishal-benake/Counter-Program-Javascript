const DecreaseBtn = document.getElementById("btn-decrease");
const ResetBtn = document.getElementById("btn-reset");
const IncreaseBtn = document.getElementById("btn-increase");
const CountLabel = document.getElementById("count-txt");

let count = 0;

DecreaseBtn.onclick = function(){
    count--;
    CountLabel.textContent = count;
}

IncreaseBtn.onclick = function(){
    count++;
    CountLabel.textContent = count;
}

ResetBtn.onclick = function(){
    count = 0;
    CountLabel.textContent = count;
}