//  ============== Массивы



// const clients = ["Mango", "Poly", "Ajax"];
// clients[0] = 'kiwi';

// console.log(clients[0]);
// console.log(clients[1]);
// console.log(clients[2]);

// console.log(clients.length);

// const lastIndex = clients.length - 1;
// console.log(lastIndex);
// console.log(clients[lastIndex]);



// ============== Итерация по массиву



// const clients = ["Mango", "Poly", "Ajax"];

// for (let i = 0; i < clients.length; i += 1) {
//     console.log(clients[i])
// };


// console.log('перебор массива без счетчика')

// for (const client of clients) {
//     console.log(client)
// };


// console.log('перебор строки по буквам')

// const string = "javascript";

// console.log(string);

// for (const character of string) {
//     console.log(character)
// };



// console.log("Будем искать имя клиента в массиве имен, если нашли - прервем цикл.")

// const clientNameToFind = "Poly";
// let msg;

// for (const client of clients) {
//     if (client === clientNameToFind) {
//         msg = "Клиент с таким именем есть в базе данных! и этооо... ";
//         break;
//     }

//     msg = "Клиента с таким именем нету в базе данных!";
// }

// console.log(msg, clientNameToFind, '!!');

// console.log("");

// console.log('Используем цикл для вывода только чисел больше определенного значения.')

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold  = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] < threshold ) {
//         continue;
//     }

//     console.log(`Число больше чем ${threshold}: ${numbers[i]}`);
// };



// =============== Присвоение по ссылке и по значению


// console.log("Все примитивные типы присваиваются по значению, то есть создается копия.");

// let a = 5;
// let b = a; 
// console.log(a);
// console.log(b);

// a = 10
// console.log(a);
// console.log(b);



// console.log("Сложные типы - объекты, массивы, функции присваиваются по ссылке,");
// console.log("то есть переменная просто получает ссылку на уже существующий объект.");

// const c = ['Mango'];
// const d = c;

// console.log(c); 
// console.log(d);


// console.log("d изменилось, потому что d, как и c, содержит ссылку на одно и то же место в памяти");

// c.push('Poly');

// console.log(c);
// console.log(d);


// console.log("Результат повторяется");

// d.push('Clara');

// console.log(c);
// console.log(d);



// ============== Методы массива

// console.log("split()");

// const name = 'Mango';
// console.log(name.split(''));

// const msg = 'JavaScript это интересно';
// console.log(msg.split(' '));


// console.log("");
// console.log("join()");

// const words = ["JavaScript", "это", "интересно"];
// console.log(words.join(' '));
// console.log(words.join('-'));
// console.log(words.join(''));



// console.log("");
// console.log("indexOf()");

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Poly"));
// console.log(clients.indexOf("Lola"));


// console.log("");
// console.log("includes()");

// console.log(clients.includes("Ajax"));
// console.log(clients.includes('Lola'));


// console.log("");
// console.log("Проверка множественных условий с includes()");

// const fruit = 'apple';

// if (fruit ===  'apple' || fruit === 'strawberry') {
//     console.log('It is a red fruit!');
// };


// console.log("");
// console.log("Можем переписать условие используя метод includes()");

// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];

// const fruitVar2 = 'cherry';

// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//     console.log(`${fruit} is a red fruit!`);
// };


// console.log("");
// console.log("Методы push() и pop()");

// const numbers = [];

// numbers.push(1);
// console.log(numbers);
// numbers.push(3);
// console.log(numbers);
// numbers.push(5, 7);
// console.log(numbers);

// numbers.pop(7);
// console.log(numbers);
// numbers.pop(5);
// console.log(numbers);


// console.log("");
// console.log("slice(begin, end)");

// const clientsSlice = ["Mango", "Ajax", "Poly", "Kiwi"];

// console.log(clientsSlice.slice(0, 3));
// console.log(clientsSlice.slice());
// console.log(clientsSlice.slice(2));
// console.log(clientsSlice.slice(-3));



// console.log("");
// console.log("Метод splice()");
// console.log("");

// console.log("Удаление");
// console.log("splice(position, num)");

// const scores = [1, 2, 3, 4, 5];

// const deletedScores = scores.splice(0,3);

// console.log(scores);
// console.log(deletedScores);

// console.log("Добавление");
// console.log("splice(position, 0, new_element_1, new_element_2, ...)");

// const colors = ["red", "green", "blue"];
// colors.splice(2, 0, 'purple', 'grey', 'black');
// console.log(colors);

// console.log("Замена");
// console.log("splice(position, num, new_element_1, new_element_2, ...)");

// const languages = ["C", "C++", "Java", "JavaScript"];
// languages.splice(1, 1, "Python");
// console.log(languages);


// console.log("");
// console.log("Метод concat()");

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];

// const allClients = oldClients.concat(newClients);
// console.log(allClients);