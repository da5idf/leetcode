var MyCounter = (function () {
    var myNumber = 0;

    return {
        init: function (val) {
            myNumber = val;
            return this;
        },
        decrement: function () {
            return --myNumber;
        },
        get: function () {
            return myNumber;
        }
    }
})()

// console.log(MyCounter instanceof Array);
// MyCounter.init(10);
// MyCounter.decrement();
// console.log(MyCounter.get());
// console.log(MyCounter.myNumber);

let students = [
    { "firstName": "Ricardo", "lastName": "Arjona", "group": 1, "age": 14 },
    { "firstName": "Luis", "lastName": "Silva", "group": 1, "age": 14 },
    { "firstName": "Rocio", "lastName": "Durcal", "group": 1, "age": 15 },
    { "firstName": "Gloria", "lastName": "Estefan", "group": 2, "age": 14 },
    { "firstName": "Franco", "lastName": "De Vita", "group": 2, "age": 14 },
    { "firstName": "Emmanuelle", "lastName": "Beart", "group": 1, "age": 13 },
    { "firstName": "Etienne", "lastName": "Daho", "group": 2, "age": 15 }
];

console.log(students.filter(student => student.group === 1).reduce((prev, curr) => prev += curr.age, 0))

const getStudentsFromGroup = (groupNumber) => {
    return students.filter(student => student.group === groupNumber);
}