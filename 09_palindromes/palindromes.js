const palindromes = function (string) {
    let processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");

    let reverseString = processedString.split('').reverse().join('');

    return processedString === reverseString;
};
// Do not edit below this line
module.exports = palindromes;
