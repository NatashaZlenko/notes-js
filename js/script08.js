// Контекст выполнения функции
// console.log('Контекст выполнения функции');

// const petya = {
//     username: 'Petya', 
//     showName() {
//         console.log(this.username)
//     },
// };

// petya.showName();


// const bookShelf = {
//     authors: ["Бернард Корнуэлл", "Роберт Шекли"],
//     getAuthors() {
//         return this.authors;
//     },
//     addAuthor(authorName) {
//         this.authors.push(authorName);
//     },
// };

// console.log(bookShelf.getAuthors());
// bookShelf.addAuthor('John Black');
// console.log(bookShelf.getAuthors());



// Правила определения this
// console.log('Правила определения this');
// console.log('');
// console.log('this в глобальной области видимости');

// function foo() {
//     console.log(this);
// };

// foo();



// console.log('');
// console.log('this в методе объекта');

// const petya = {
//     username: 'Petya',
//     showThis() {
//         console.log(this);
//     }, 
//     showName() {
//         console.log(this.username);
//     },
// }

// petya.showName();
// petya.showThis();

// console.log('');

// function showThis() {
//     console.log('this in showThis: ', this);
// };

// showThis();

// const user = {
//     username: 'mango',
// };

// user.showContext = showThis;

// user.showContext();



// console.log('');
// console.log('this в callback-функциях');

// const customer = {
//     firstName: "Jacob",
//     lastName: "Mercer",
//     getFullName() {
//       return `${this.firstName} ${this.lastName}`;
//     },
// };

// function makeMessage(callback) {
//     console.log(`Обрабатываем заявку от ${callback()}.`);
// }

// // makeMessage(customer.getFullName);



// console.log('');
// console.log('this в стрелочных функциях');

// console.log('1');

// const showThis1 = () => {
//     console.log('this in showThis: ', this);
// };

// showThis1();

// const user1 = {
//     username: 'mango', 
// };

// user1.showContext = showThis1;

// user1.showContext();


// console.log('2');

// const hotel = {
//     username: "Resort hotel",
//     showThis2() {
//         const foo = () => {
//             console.log('this in foo: ', this);
//         };

//         foo();
//         console.log('this in showThis2: ', this);
//     },
// };

// hotel.showThis2()



// Методы функций
console.log('Методы функций');
console.log('');


console.log('Метод call()');

function greetGuest(greeting) {
    console.log(`${greeting}, ${this.username}.`);
};

const mango = {
    username: 'mango',
};
const poly = {
    username: 'poly',
};

greetGuest.call(mango, "Добро пожаловать");
greetGuest.call(poly, "С приездом");


console.log('');
console.log('Метод apply()');

greetGuest.apply(mango, ["Добро пожаловать"]);
greetGuest.apply(poly, ["С приездом"]);



console.log('');
console.log('Метод bind()');

function greet(clientName) {
    return `${clientName}, добро пожаловать в "${this.service}".`;
}

const steam = {
    service: 'steam',
}; 
const steamGreeter = greet.bind(steam);
steamGreeter('Lora');

// const gmail = {
//     service: 'gmail',
// };
// const gmailGreeter = greet.bind(gmail);
// gmailGreeter('Nora');


