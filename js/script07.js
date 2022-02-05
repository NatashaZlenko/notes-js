// ============= Функция с побочными эффектами 

// console.log('Функция с побочными эффектами');

// const dirtyMultiply = (array, value) => {
//     for (let i = 1; i < array.length; i += 1) {
//         array[i] = array[i] * value;
//     }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// console.log(numbers);

// console.log('Чистая функция (pure function)');

// const pureMultiply = (array, value) => {
//     const newArray = [];
    
//     array.forEach(element => {
//         newArray.push(element * value);
//     });

//     return newArray;
// };

// const numbers2 = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers2, 2);
// console.log(numbers2);
// console.log(doubledNumbers);


// ============= Перебирающие методы массива


// console.log('Перебирающие методы массива');

// console.log('array.method((item, idx, arr) => {}');


// ============= Метод map()

// console.log('Метод map()');

// const planets = ["Земля", "Марс", "Венера", "Юпитер"];
// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());

// console.log(planets);
// console.log(planetsInUpperCase);
// console.log(planetsInLowerCase);


// console.log('Массив объектов');

// const students = [
//     { name: "Манго", score: 83 },
//     { name: "Поли", score: 59 },
//     { name: "Аякс", score: 37 },
//     { name: "Киви", score: 94 },
//     { name: "Хьюстон", score: 64 },
// ];

// const studentsNames = students.map(student => student.name);
// console.log(studentsNames);



// ============= Метод flatMap()

// console.log('Метод flatMap()');

// const students = [
//     { name: "Манго", courses: ["математика", "физика"] },
//     { name: "Поли", courses: ["информатика", "математика"] },
//     { name: "Киви", courses: ["физика", "биология"] },
// ];

// const studentCources = students.map(student => student.courses);
// const allCources = students.flatMap(student => student.courses);

// console.log(studentCources);
// console.log(allCources);


// // ============= Метод filter()
// console.log('Метод filter()');

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues);

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues);

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues);


// // ============= 'Фильтрация уникальных элементов
// console.log('Фильтрация уникальных элементов');

// const students = [
//     { name: "Манго", courses: ["математика", "физика"] },
//     { name: "Поли", courses: ["информатика", "математика"] },
//     { name: "Киви", courses: ["физика", "биология"] },
// ];

// const courses = students.flatMap(student => student.courses);
// console.log(courses);

// const uniqueCourses = courses.filter(
//     (course, index, array) => array.indexOf(course) === index
// );

// console.log(uniqueCourses);


// // ============= Массив объектов
// console.log('Массив объектов');

// const lowScore = 50;
// const highScore = 80;
// const students1 = [
//     { name: "Манго", score: 83 },
//     { name: "Поли", score: 59 },
//     { name: "Аякс", score: 37 },
//     { name: "Киви", score: 94 },
//     { name: "Хьюстон", score: 64 },
// ];

// const best = students1.filter(student => student.score >= highScore);
// console.log(best);

// const worst = students1.filter(student => student.score < lowScore);
// console.log(worst);

// const average = students1.filter(({score}) => score >= lowScore && score < highScore);
// console.log(average);



// ============= Метод find()
console.log('Метод find()');