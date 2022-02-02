//  ============= Синтаксис spread и rest

// console.log('spread: передача аргументов')

// const temps = [14, -4, 25, 8, 11];

// console.log(temps);
// console.log(Math.max(temps));
// console.log(Math.max(...temps));



// console.log('')
// console.log('spread: создание нового массива')

// console.log('1');
// const temps1 = [14, -4, 25, 8, 11];
// const copyOfTemps1 = [...temps1];
// console.log(copyOfTemps1)

// console.log('2');

// const currentWeekTemps = [14, 25, 11];
// const lastWeekTemps = [23, 17, 18];

// const allTemps = [...currentWeekTemps, ...lastWeekTemps];
// console.log(currentWeekTemps);
// console.log(lastWeekTemps);
// console.log(allTemps);


// console.log('')
// console.log('spread: создание нового объекта')

// const first = {
//     propA: 5, 
//     propB: 10
// };
// const second = {propC: 15};
// const third = {...first, ...second};

// // console.log(third);



// // console.log('')
// // console.log('rest: сбор всех аргументов функции')

// // function multiply(...args) {
// //     console.log(args);
// // }

// // multiply(1, 2);
// // multiply(1, 2, 3);
// // multiply(1, 2, 3, 4);



// // console.log('')
// // console.log('rest: сбор части аргументов функции')

// // function multiply2 (firstNumber, ...otherArgs) {
// //     console.log(firstNumber);
// //     console.log(...otherArgs);
// // };

// // multiply2(1, 2);
// // multiply2(1, 2, 3);
// // multiply2(1, 2, 3, 4);




// //  ============= Деструктуризация объектов

// console.log('spread: создание нового объекта');
// console.log('');


// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: false,
//     rating: 8.38,
// };

// // const accessType = book.isPublic ? 'публичном' : 'закрытом';
// // const message = `Книга ${book.title} автора ${book.author} с рейтингом ${book.rating} находится в ${accessType} доступе.`;

// const { title, author, isPublic, rating, coverImage } = book;
// console.log(coverImage);

// const accessType = isPublic ? 'публичном' : 'закрытом';
// const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`
// console.log(message);



// console.log('');
// console.log('Значения по умолчанию');

// const {coverImage1 = 'https://via.placeholder.com/640/480'} = book;
// console.log(coverImage1);



// console.log('');
// console.log('Изменение имени переменной');

// const firstBook = {
//     title: "The Last Kingdom",
//     coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {
//     title: firstTitle,
//     coverImage: firstCoverImage = 'https://via.placeholder.com/640/480',
// } = firstBook;

// console.log(firstTitle);
// console.log(firstCoverImage);

// const secondBook = {
//     title: "Сон смешного человека",
// };

// const {
//     title: secondTitle,
//     coverImage: secondCoverImage = 'https://via.placeholder.com/640/480',
// } = secondBook;

// console.log(secondTitle);
// console.log(secondCoverImage);



// console.log('');
// console.log('Деструктуризация в циклах');
// console.log('');

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "На берегу спокойных вод",
//       author: "Роберт Шекли",
//       rating: 8.51,
//     },
// ];

// console.log('1');
// for (const book of books) {
//     const {title, author, rating} = book;

//     console.log(title);
//     console.log(author);
//     console.log(rating);
// };

// console.log('');
// console.log('2');

// for (const {title, author, rating} of books) {
//     console.log(title);
//     console.log(author);
//     console.log(rating);
// };


// console.log('');
// console.log('Глубокая деструктуризация');
// console.log('');

// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const {
//     name, 
//     tag, 
//     stats: {followers, views, likes: userLikes},
// } = user;

// console.log(name);
// console.log(tag);
// console.log(followers);
// console.log(views);
// console.log(userLikes);



//  ============= Деструктуризация массивов


// console.log('1');

// const rgb = [200, 255, 100]
// const [red, green, blue] = rgb;
// console.log(`R:${red},G:${green},B:${blue}`);

// console.log('');
// console.log('2');

// const rgb2 = [200, 255, 100];
// let red2, green2, blue2;
// [red2, green2, blue2] = rgb2;
// console.log(`R:${red2},G:${green2},B:${blue2}`);

// console.log('');
// console.log('3');

// const rgb3 = [200, 100, 255];
// const [red3, green3, blue3, alfa = 0.3] = rgb3;
// console.log(`R:${red3},G:${green3},B:${blue3},Alfa:${alfa}`);

// console.log('');
// console.log('4');

// const rgb4 = [200, 255, 100];
// const [red4, ...colors] = rgb4;
// console.log(red4);
// console.log(colors);

// console.log('');
// console.log('5');

// const rgb5 = [200, 100, 255];
// const [, , blue5] = rgb5;
// console.log(`Blue: ${blue}`);


//  ============= Паттерн «Объект параметров»

function doStuffWithBook(book) {

}

