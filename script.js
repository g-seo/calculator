let cur = "";

const display = document.querySelector('.display');

for (let i = 0; i <= 9; i++) {
    const num = document.querySelector(`.num_${i}`);
    num.addEventListener('click', () => {
        cur += i;
        display.textContent = cur;
    })
}

let operandList = [];
const operator = document.querySelectorAll('.rator');
operator.forEach((element) => {
    element.addEventListener('click', () => {
        console.log(1);
        let selectedRator;
        if (element.classList.contains('add')) selectedRator = '+';
        else if (element.classList.contains('subtract')) selectedRator = '-';
        else if (element.classList.contains('multiply')) selectedRator = '*';
        else selectedRator = '/';
        operandList.push(cur, selectedRator);
        cur = 0;
        display.textContent = '';
        if (operandList.length == 4) {
            let result;
            if (operandList[1] == '+') result = Number(operandList[0]) + Number(operandList[2]);
            else if (operandList[1] == '-') result = Number(operandList[0]) - Number(operandList[2]);
            else if (operandList[1] == '*') result = Number(operandList[0]) * Number(operandList[2]);
            else result = Number(operandList[0]) / Number(operandList[2]); // Check division by 0
            display.textContent = result;
            operandList.splice(0,3,result);
        }
    })
})




