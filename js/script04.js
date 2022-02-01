// ================== Объекты (не полная часть)

// console.log('Доступ к свойствам объекта в методах');
// console.log('');

// const bookShelf = {
//     books: ["The Last Kingdom"],

//     getBooks() {
//         return this.books;
//     },

//     addBook(bookName) {
//         this.books.push(bookName);
//     },

//     removeBook(bookName) {
//         const bookIndex = this.books.indexOf(bookName);
//         this.books.splice(bookIndex, 1)
//     },
// };

// console.log(bookShelf.getBooks());

// bookShelf.addBook('The Mist');
// bookShelf.addBook('Dream Guardian');
// console.log(bookShelf.getBooks());

// bookShelf.removeBook('Dream Guardian');
// console.log(bookShelf.getBooks());



// ================== Перебор объекта

// console.log('Цикл for...in');
// console.log('');

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
// };

// for (const key in book) {
//     if (book.hasOwnProperty(key)) {
//         console.log(key);
//         console.log(book[key]);
//     };
// };


// console.log('');
// console.log('Метод hasOwnProperty()');

// // const animal = {
// //     legs: 4,
// // };

// // const dog = Object.create(animal);
// // dog.name = 'Mango';

// // console.log(dog);
// // console.log(dog.name);
// // console.log(dog.legs);



// console.log('');
// console.log('Метод Object.keys()');
// console.log('');

// const keys = Object.keys(book);

// for (const key of keys) {
//     console.log(key);
//     console.log(book[key]);
// };



// console.log('');
// console.log('Метод Object.values()');

// const keys1 = Object.keys(book);
// const values = Object.values(book);

// console.log(keys1, values);


// const goods = {
//     apples: 6,
//     grapes: 3,
//     bread: 4,
//     cheese: 7,
// };

// const values1 = Object.values(goods);

// let total = 0;

// for (const value of values1) {
//     total += value
// };

// console.log(total);


// console.log('');
// console.log('Метод Object.entries()');

// const entries = Object.entries(book);
// console.log(entries);



// ================== Массив обьектов

const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "На берегу спокойных вод",
      author: "Роберт Шекли",
      rating: 8.51,
    },
    {
      title: "Сон смешного человека",
      author: "Федор Достоевский",
      rating: 7.75,
    },
];

for (const book of books) {
    console.log(book);
    console.log(book.title);
    console.log(book.author);
    console.log(book.rating);
};


console.log('');
console.log('список названий всех книг');

const bookNames = [];

for (const book of books) {
    bookNames.push(book.title);
}

console.log(bookNames);


console.log('');
console.log('средний рейтинг всей коллекции');

let totalRating = 0;

for (const book of books) {
    totalRating += book.rating;
};

const averageRating = (totalRating / books.length).toFixed(1);
console.log(averageRating);