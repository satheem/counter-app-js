let increamentButton = document.getElementById("increase")
let decreamentButton = document.getElementById("decrease")
let resetButton = document.getElementById("reset")
let countDisplay = document.getElementById("counter")
let count = 0


countDisplay.textContent = count

increamentButton.addEventListener("click", function(){
    count = count+1
    countDisplay.textContent = count
})
decreamentButton.addEventListener("click", function(){
    if (count>0) {
        count = count-1
    countDisplay.textContent = count
    }
})
resetButton.addEventListener("click" ,function(){
    count = 0
    countDisplay.textContent = count
})