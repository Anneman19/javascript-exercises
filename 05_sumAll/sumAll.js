const sumAll = function(...args) {
    let [first, second] = args;

    if (first < 0 || second < 0) {
        return "ERROR";
    } else if (!Number.isInteger(first) || !Number.isInteger(second)) {
        return "ERROR";
    } else if (Number.isNaN(first) || Number.isNaN(second)) {
        return "ERROR";
    } else {
        let sum = 0;
        let largeNum = 0;
        let smallNum = 0;
        
        if (first >= second) {
            largeNum = first;
            smallNum = second;
        } else if (second > first) {
            largeNum = second;
            smallNum = first;
        }
        for (let i = smallNum; i <= largeNum; i++) {
            sum += i;
            }
        return sum;    
    }
};
// Do not edit below this line
module.exports = sumAll;
