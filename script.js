let cur = "";
let operandList = [];

const display = document.querySelector('.display');

for (let i = 0; i <= 9; i++) {
    const num = document.querySelector(`.num_${i}`);
    num.addEventListener('click', () => {
        cur += i;
        display.textContent = cur;
    })
}

function operate() {
    let result;
    if (operandList[1] == '+') result = Number(operandList[0]) + Number(operandList[2]);
    else if (operandList[1] == '-') result = Number(operandList[0]) - Number(operandList[2]);
    else if (operandList[1] == '*') result = Number(operandList[0]) * Number(operandList[2]);
    else result = Number(operandList[0]) / Number(operandList[2]); // Check division by 0
    operandList.splice(0,3,result);
    console.log(operandList);
    display.textContent = result;
}

const operator = document.querySelectorAll('.rator');
operator.forEach((element) => {
    element.addEventListener('click', () => {
        if (element.classList.contains('equal')) {
    
        }
        else if (element.classList.contains('add')) {

        }
        else if (element.classList.contains('subtract')) {
            
        }
        else if (element.classList.contains('multiply')) {
            
        }
        else {
            
        }
    })
})




