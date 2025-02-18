const button1 = document.querySelector('button');
const firstInput1 = document.getElementById('firstInput')! as HTMLInputElement;
const secondInput1 = document.getElementById('secondInput')! as HTMLInputElement;

function addTwoNumbers1(number1 : number,  number2 : number){
    return number1 + number2;
}


button1!.addEventListener("click", function(){
    console.log(`Sum of Two numbbers is: ${addTwoNumbers1(+firstInput1.value , +secondInput1.value )}`);
})

