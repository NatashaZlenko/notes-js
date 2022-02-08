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
// console.log('Метод find()');

// const colorPickerOptions = [
//     { label: "red", color: "#F44336" },
//     { label: "green", color: "#4CAF50" },
//     { label: "blue", color: "#2196F3" },
//     { label: "pink", color: "#E91E63" },
//     { label: "indigo", color: "#3F51B5" },
// ];

// const blue = colorPickerOptions.find(option => option.label === "blue");
// console.log(blue);

// const red = colorPickerOptions.find(option => option.label === 'red');
// console.log(red);

// const indigo = colorPickerOptions.find(option => option.label === 'indigo');
// console.log(indigo);



// ============= Метод findIndex()
// console.log('Метод findIndex()');

// const colorPickerOptions = [
//     { label: "red", color: "#F44336" },
//     { label: "green", color: "#4CAF50" },
//     { label: "blue", color: "#2196F3" },
//     { label: "pink", color: "#E91E63" },
//     { label: "indigo", color: "#3F51B5" },
// ];

// const indexOfGreen = colorPickerOptions.findIndex(option => option.label === 'green');
// console.log(indexOfGreen);

// const indexOfPink = colorPickerOptions.findIndex(option => option.label === 'pink');
// console.log(indexOfPink);



// ============= Методы every() и some()
// console.log('Методы every() и some()');
// console.log('Метод every()');

// const yes = [1, 2, 3, 4, 5].every(value => value >= 0);
// console.log(yes);

// const no = [1, 2, 3, -10, 4, 5].every(value => value > 0);
// console.log(no);

// console.log('Метод some()');

// const first = [1, 2, 3, 4, 5].some(value => value >= 0);
// console.log(first);

// const second = [-7, -20, 3, -10, -14].some(value => value >= 0);
// console.log(second);

// const third = [1, 2, 3, 4, 5].some(value => value < 0);
// console.log(third);

// const fourth = [1, 2, 3, -10, 4, 5].some(value => value < 0);
// console.log(fourth);


// console.log('Массив объектов');

// const fruits = [  
//     { name: "apples", amount: 100 },
//     { name: "bananas", amount: 0 },
//     { name: "grapes", amount: 50 },
// ];

// const allFruits = fruits.every(fruit => fruit.amount > 0); 
// console.log(allFruits);

// const anyFruits = fruits.some(fruit => fruit.amount > 0);
// console.log(anyFruits);


// ============= Метод reduce()
// console.log('Метод reduce()');

// const total = [1, 2, 3, 4, 5].reduce((previousNumber, number) => {
//     return previousNumber + number
// }, 0);

// console.log(total);


// console.log('Массив объектов');

// const students = [
//     { name: "Манго", score: 83 },
//     { name: "Поли", score: 59 },
//     { name: "Аякс", score: 37 },
//     { name: "Киви", score: 94 },
//     { name: "Хьюстон", score: 64 },
// ];

// const totalScore = students.reduce((total, student) => {
//     return total + student.score
// }, 0);

// const averageScore = totalScore / students.length;

// console.log(totalScore);
// console.log(averageScore);



// ==============='Продвинутый reduce'
// console.log('Продвинутый reduce');

// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // функция для подсчета лайков 
// console.log('функция для подсчета лайков');

// const countLikes = tweets => {
//     return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// };

// console.log(countLikes(tweets));

// // соберем в массив все теги
// console.log('соберем в массив все теги');

// const tags1 = tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
// }, []);

// console.log(tags1);

// // соберем в массив все теги => переделаем в функцию
// console.log('соберем в массив все теги => переделаем в функцию');

// const getTags = tweets => 
//     tweets.reduce((allTags, tweet) => {
//         allTags.push(...tweet.tags);
    
//         return allTags;
//     }, []);

// console.log(getTags(tweets));

// // посчитаем количество уникальных тегов в массиве
// console.log('посчитаем количество уникальных тегов в массиве');

// const tags = getTags(tweets);

// const getTagsStats = (acc, tag) => {
//     if (!acc.hasOwnProperty(tag)) {
//         acc[tag] = 0;
//     }

//     acc[tag] += 1;

//     return acc;
// };

// const countTags = tags => tags.reduce(getTagsStats, {});

// const tagCount = countTags(tags);

// console.log(tagCount);



// Метод sort()
// console.log('Метод sort()');

// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort()
// console.log(scores);

// const students = ["Вика", "Андрей", "Олег", "Юля", "Борис", "Катя"];
// students.sort();
// console.log(students);

// const letters = ["b", "B", "a", "A", "c", "C"];
// letters.sort();
// console.log(letters);



// // console.log('перед сортировкой делают полную копию исходного массива и сортируют уже её.');

// // const scores1 = [61, 19, 74, 35, 92, 56];
// // const ascendingScores = [...scores1].sort();
// // console.log(scores1);
// // console.log(ascendingScores);



// // console.log('Свой порядок сортировки чисел');

// // const scores2 = [61, 19, 74, 35, 92, 56];

// // const ascendingScores2 = [...scores2].sort((a, b) => a - b);
// // console.log(ascendingScores2);

// // const descendingScores = [...scores2].sort((a, b) => b - a);
// // console.log(descendingScores);



// // console.log('Свой порядок сортировки строк');

// // const students2 = ["Вика", "Андрей", "Олег", "Юля", "Борис", "Катя"];

// // const inAlphabetOrder = [...students2].sort((a, b) => a.localeCompare(b));
// // console.log(inAlphabetOrder);

// // const inReversedOrder = [...students2].sort((a, b) => b.localeCompare(a));
// // console.log(inReversedOrder);



// // console.log('Сортировка объектов');

// // const students3 = [
// //     { name: "Манго", score: 83 },
// //     { name: "Поли", score: 59 },
// //     { name: "Аякс", score: 37 },
// //     { name: "Киви", score: 94 },
// // ];

// // const inAscendingScoreOrder = [...students3].sort(
// //     (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// // );
// // console.log(inAscendingScoreOrder);

// // const inDescendingScoreOrder = [...students3].sort(
// //     (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// // );
// // console.log(inDescendingScoreOrder);

// // const inAlphabetOrder2 = [...students3].sort(
// //     (firstStudent, secondStudent) => firstStudent.name.localeCompare(secondStudent.name)
// // );
// // console.log(inAlphabetOrder2);



// // Цепочки методов
// console.log('Цепочки методов');

// const students = [
//     { name: "Манго", score: 83, courses: ["математика", "физика"] },
//     { name: "Поли", score: 59, courses: ["информатика", "математика"] },
//     { name: "Аякс", score: 37, courses: ["физика", "биология"] },
//     { name: "Киви", score: 94, courses: ["литература", "информатика"] },
// ];

// // Для этого мы отсортируем копию массива методом sort(), 
// // после чего методом map() составим массив значений свойства name из 
// // сортированного массива.

// const sortedStudets = [...students].sort((a, b) => a.score - b.score);
// const names = sortedStudets.map(student => student.name);

// console.log(names);


// console.log('Цепочкa');

// const names2 = [...students]
//     .sort((a, b) => a.score - b.score)
//     .map(student => student.name);

// console.log(names2);

// const uniqueSortedCourses = students
//     .flatMap(student => student.courses)
//     .filter((course, index, array) => array.indexOf(course) === index)
//     .sort((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses);


