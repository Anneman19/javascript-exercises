const fibonacci = function(num) {
    let number = parseInt(num);
    if (number < 0) {
        return "OOPS";
    } else if (number === 0) {
        return 0;
    }
    let fibonacciArr = [1, 1];
    for (let i = 2; i < number; i++) {
        fibonacciArr.push(fibonacciArr[i - 1] + fibonacciArr[i - 2]);
    }
    return fibonacciArr.at(number - 1);
};
// Do not edit below this line
module.exports = fibonacci;
