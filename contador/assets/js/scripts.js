
var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
       if (currentNumber < 10) {
        currentNumber += 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }

    if (currentNumber >= 0) {
        currentNumberWrapper.style.color = '#000000';
    }
} 

function decrement() {
    if (currentNumber > -10) {
        currentNumber -= 1;
        currentNumberWrapper.innerHTML = currentNumber;        
    } 
    
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = '#e63946';
    }    
}

