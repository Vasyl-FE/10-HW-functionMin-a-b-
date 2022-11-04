const num1 = +prompt("Enter first number:");
const num2 = +prompt("Enter second number:");

alert(`The smallest value is ${min(num1, num2)}`);

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
