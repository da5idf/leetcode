let students = [
    { firstName: 'Ricardo', lastName: 'Arjona', group: 1, age: 14 },
    { firstName: 'Luis', lastName: 'Silva', group: 1, age: 14 },
    { firstName: 'Rocio', lastName: 'Durcal', group: 1, age: 15 },
    { firstName: 'Gloria', lastName: 'Estefan', group: 2, age: 14 },
    { firstName: 'Franco', lastName: 'De Vita', group: 2, age: 14 },
    { firstName: 'Emmanuelle', lastName: 'Beart', group: 1, age: 13 },
    { firstName: 'Etienne', lastName: 'Daho', group: 2, age: 15 },
];

// 2.a
const getStudentsFromGroup = (students, groupNumber) => {
    return students.filter((student) => student.group === groupNumber);
};

// 2.b
const getStudentNames = (students) => {
    return students.map(student => `${student.firstName} ${student.lastName}`)
}

// 2.c
const getStudentAges = (students) => {
    const ages = new Set();
    students.forEach(student => ages.add(student.age));
    return ages;
}

// 2.d
const getSumOfGroupAges = (students, groupNumber) => {
    return students.filter(student => student.group === groupNumber).reduce((prev, curr) => prev += curr.age, 0);
}

// 2.e
const aveAgeOfGroup = (students, groupNumber) => {
    const studentsInGroup = getStudentsFromGroup(students, groupNumber);
    const sumOfAges = getSumOfGroupAges(students, groupNumber);
    return sumOfAges / studentsInGroup.length;
}

// 2.f
const addStudents = (currentStudents, newStudents) => {
    newStudents.forEach(student => currentStudents.push(student));
    return currentStudents;
}

// 2.g
const updateAges = (students, updates) => {
    updates.forEach(updateStudent => {
        found = students.find(student => student.firstName === updateStudent.firstName);
        found.age = updateStudent.age;
    })
    return students;
}

// 2.f2
class StudentRoster {
    constructor(sudents) {
        this.students = sudents;
    }

    addStudents(newStudents) {
        newStudents.forEach(student => this.students.push(student));
    }
}

const moreStudents = [
    { "firstName": "Manu", "lastName": "Chao", "group": 1, "age": 17 },
    { "firstName": "Shakira", "lastName": "Shakira", "group": 2, "age": 12 }
];


const updates = [
    { "firstName": "Manu", "lastName": "Chao", "group": 1, "age": 18 },
    { "firstName": "Shakira", "lastName": "Shakira", "group": 2, "age": 14 }
];

// console.log(addStudents(students, moreStudents))
// console.log(updateAges(students, updates))

const StudentRoster1 = new StudentRoster(students);
StudentRoster1.addStudents(moreStudents);
console.log(StudentRoster1.students)