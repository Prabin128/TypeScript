var button1 = document.querySelector('button');
var firstInput1 = document.getElementById('firstInput');
var secondInput1 = document.getElementById('secondInput');
function addTwoNumbers1(number1, number2) {
    return number1 + number2;
}
button1.addEventListener("click", function () {
    console.log("Sum of Two numbbers is: ".concat(addTwoNumbers1(+firstInput1.value, +secondInput1.value)));
});
