const findTheOldest = function(array) {
    let oldestAge = -Infinity;
    let oldestPerson = null;

    array.forEach(person => {
        const currentYear = new Date().getFullYear();
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = currentYear;
        }
        const age = person.yearOfDeath - person.yearOfBirth;
        if (age > oldestAge) {
            oldestAge = age;
            oldestPerson = person;
        }
    });
    return oldestPerson;
};
// Do not edit below this line
module.exports = findTheOldest;
