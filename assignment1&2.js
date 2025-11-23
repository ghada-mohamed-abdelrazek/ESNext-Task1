const students = [
    { id: 1, name: "Ali", grade: 80, city: "Cairo" },
    { id: 2, name: "Sara", grade: 92, city: "Alexandria" },
    { id: 3, name: "Omar", grade: 74, city: "Giza" },
    { id: 4, name: "Mona", grade: 88, city: "Cairo" }
];
// 1- Create a new array that contains only the names of students using arrow functions.
let stdNames = students.map(s => s.name);
console.log("Students Names :" , stdNames);

// 2-Get all students who have a grade greater than or equal to 85.(filter)
let stdHighGrades = students.filter (s => s.grade >= 85);
console.log(stdHighGrades);

//3-Find the student whose name is "Sara".( list object details)
let findStdByName = StdName => students.find( s => s.name === StdName);
console.log(findStdByName("Sara"))

// 4-Calculate the average grade of all students.(reduce)
let stdAvgGrade = students.reduce((sum, s) => sum + s.grade, 0)/students.length
console.log("Average Grade : ",stdAvgGrade );

// 5-Sort students by grade (descending) using arrow function in sort.
let stdSortByGrade = students.sort((a,b) => b.grade - a.grade)
console.log("Sort Student By Grade Desc : ",stdSortByGrade)

// 6-Print Students using forEach arr fun  
students.forEach(s => console.log(s));

// 7-Make a shallow copy of the students array using spread.

let studentsCopy = [...students]
console.log(studentsCopy);

// 8-Add a new student object into the array using spread.
studentsCopy = [...students, { id: 5, name: "Mohamed", grade: 90, city: "Luxor" }];
console.log("With New:", studentsCopy);

// 9-Suppose you have another array of students, merge it with the first array using spread
let anotherStdArray = [
    { id: 5, name: "Menna", grade: 85, city: "Cairo" },
    { id: 6, name: "Hana", grade: 78, city: "Cairo" }
]
let newStudents = [...students, ...anotherStdArray];
console.log("Student New Array", newStudents)

// 10- Update "Omar"’s grade to 95 without mutating the original array (use spread inside map).
let omarUpdate = students.map( s => s.name === "Omar" ? {...s, grade: 95} : s)

console.log("Student With Update: ", omarUpdate)

// 11-Remove the student with id = 2 using filter + spread.

let stdRemoveById = stdId =>[...students.filter(s => s.id !== stdId)]

console.log(stdRemoveById(2))

// 12- Take out the first student and keep the rest in another array using destructuring + spread
let [firstStd, ...restStds] = students;
console.log("First student:", firstStd);
console.log("Rest of students:", restStds);

//13- destruct and Extract the first student into a variable, and keep the rest into another array using rest 
// students.sort((a,b) => a.id - b.id)
let [firstStdt, ...otherStds] = students;
console.log("First:", firstStdt);
console.log("Others:", otherStds);

// 14- Skip the first two students and store the third one in a variable.
let [, , thirdStd] = students;
console.log("Third Student:", thirdStd);

// Assigment 2 
// Write a function printNames(...names) that accepts any number of student objects  and prints their name using spread operator .

function printNames(...students) {
    students.forEach(student => {
        console.log(student.name);
    });
}
printNames(...students);
