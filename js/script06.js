// //  ============= Колбэк-функции

// console.log('Колбэк-функции');

// function greet(name) {
//     return `Добро пожаловать ${name}.`;
// };

// function registerGuest(name, callback) {
//     console.log(`Регистрируем гостя ${name}.`);
//     callback(name);
// };

// registerGuest('Nata', greet);

// //  =

// console.log('');
// console.log('Инлайн колбэки');

// function registerGuest2 (name, callback) {
//     console.log(`Регистрируем гостя ${name}.`);
//     callback(name);
// }

// registerGuest2('nata', function greet(name) {
//     console.log(`Добро пожаловать ${name}.`);
// });

// registerGuest2('NaTa', function notify(name) {
//     console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });

// //  =

// console.log('');
// console.log('Несколько колбэков');
// console.log('1');

// function processCall(recipient) {
//     const isRecipientAvailable = Math.random() > 0.5;

//     if (!isRecipientAvailable) {
//         console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//     } else {
//         console.log(`Соединяем с ${recipient}, ожидайте...`);
//     };
// }

// processCall('nata');

// console.log('2');

// function processCall2(recipient2, onAvailable, onNotAvailable) {
//     const isRecipientAvailable2 = Math.random() > 0.5;

//     if (!isRecipientAvailable2) {
//         onNotAvailable(recipient2);
//         return;
//     }

//     onAvailable(recipient2);
// }

// function takeCall(name) {
//     console.log(`Соединяем с ${name}, ожидайте...`);
// }

// function activateAnsweringMachine(name) {
//     console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
// }

// function leaveHoloMessage(name) {
//     console.log(`Абонент ${name} недоступен, записываем голограмму.`);
// }

// processCall2('nata', takeCall, activateAnsweringMachine);
// processCall2('tana', takeCall, leaveHoloMessage);


// //  =

// console.log('');
// console.log('Абстрагирование повторения');
// console.log('1');

// function repeatLog(n) {
//     for( let i = 0; i < n; i += 1) {
//         console.log(i)
//     }
// }

// repeatLog(5);

// console.log('');
// console.log('2');

// function printValue(value) {
//     console.log(value);
// }

// function prettyPrint(value) {
//     console.log("Logging value: ", value);
// }

// function repeat(n, action) {
//     for (let i = 0; i < n; i += 1) {
//         action(i);
//     }
// }

// repeat(3, printValue);
// repeat(3, prettyPrint);


//  ============= Метод forEach

// console.log('Метод forEach');
// console.log('массив.forEach(function callback(element, index, array) {}');

// const numbers = [5, 10, 15, 20, 25];
// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function(number, index) {
//     console.log(`Индекс ${index}, значение ${number}`);
// }) 


// //  ============= Стрелочные функции

// console.log('');
// console.log('Стрелочные функции');

// function classicAdd(a, b, c) {
//     return a + b + c;
// }

// const arrowAdd = (a, b, c) => {
//     return a + b + c;
// }

// const add = a => {
//     return a + 5;
// }

// const greet = () => {
//     console.log('hello!');
// }

// console.log(classicAdd(1, 2, 3));
// console.log(arrowAdd(2, 2, 3));
// console.log(add(3));
// console.log(greet());


// //  ============= Неявный возврат

// console.log('');
// console.log('явный возврат (explicit return)');

// const add1 = (a, b, c) => {
//     console.log(a, b, c);
//     return a + b + c;
// }
// console.log(add(1, 2, 3));

// console.log('неявный возврат (implicit return)');

// const add2 = (a, b, c) => a + b + c;
// console.log(add2(1, 3, 3));

// console.log('example');

// function classicAdd2 (a, b, c) {
//     return a + b + c;
// }

// const arrowAdd2 = (a, b, c) => a + b + c;

// console.log(classicAdd2(1, 2, 3));
// console.log(arrowAdd2(1, 2, 3));


// //  ============= Псевдомассив arguments
// console.log('Псевдомассив arguments');

// const add3 = (...args) => {
//     console.log(args);
// }

// add3(1, 2, 3);


// //  ============= Стрелочные функции как коллбеки

// console.log('');
// console.log('Стрелочные функции как коллбеки');
// console.log('');

// const numbers1 = [5, 10, 15, 20, 25];

// console.log('Объявление функции');
// numbers1.forEach(function (number,index) {
//     console.log(`Индекс ${index}, значение ${number}`);
// });

// console.log('Анонимная стрелочная функция');
// numbers1.forEach((number, index) => {
//     console.log(`Индекс ${index}, значение ${number}`);
// });

// const logMessage = (number, index) => {
//     console.log(`Индекс ${index}, значение ${number}`);
// }

// console.log('');
// numbers.forEach(logMessage);


//  ============= Разновидности кода
// console.log('Разновидности кода');
// console.log('');

// console.log('Императивный подход');

// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > 3) {
//         filteredNumbers.push(numbers[i]);
//     }
// }
// console.log(filteredNumbers);

// console.log('Императивный подход');

// const filteredNumbers2 = numbers.filter(value => value < 3);
// console.log(filteredNumbers2);

