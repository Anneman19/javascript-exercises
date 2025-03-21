const reverseString = function(string) {
    let letters = [];

    for (let i = 0; i < string.length; i++) {
        letters.push(string.charAt(i));
    }

    let reverseLetters = [];

    for (let i = string.length - 1; i >= 0; i--) {
        reverseLetters.push(letters.at(i));
    }
    return reverseLetters.join("");
};
// Do not edit below this line
module.exports = reverseString;
