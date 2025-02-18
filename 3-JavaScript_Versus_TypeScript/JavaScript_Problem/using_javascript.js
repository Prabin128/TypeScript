const button = document.querySelector('button');
const firstInput = document.getElementById('firstInput');
const secondInput = document.getElementById('secondInput');

function addTwoNumbers(number1,  number2){
    return number1 + number2;
}


button.addEventListener("click", function(){
    console.log(`Sum of Two numbbers is: ${addTwoNumbers(firstInput.value,secondInput.value )}`);
})