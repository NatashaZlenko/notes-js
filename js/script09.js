// Объектно-ориентированное программирование
// console.log('Объектно-ориентированное программирование');

// console.log('пример процедурного кода');

// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//     return baseSalary + overtime * rate;
// }

// console.log(getWage(baseSalary, overtime, rate));


// console.log('Используем ООП, собрав данные в объект employee');

// const employee = {
//     baseSalary: 30000, 
//     overtime:  10, 
//     rate:  20,
//     getWage() {
//         return this.baseSalary + this.overtime * this.rate;
//     }, 
// };

// employee.getWage();
// console.log(employee.getWage());


// console.log('Сущности ООП');
// console.log('Класс');
// console.log('Экземпляр (объект)');
// console.log('Интерфейс');


// Объектно-ориентированное программирование
// console.log('Прототипное наследование');
// console.log('Прототип объекта');

// const animal = {
//     legs: 4,
// }; // прототип 
// const dog = Object.create(animal);
// dog.name = 'Mango';

// console.log(dog);
// console.log(animal.isPrototypeOf(dog));
// console.log('');
// console.log(dog.hasOwnProperty('name'));
// console.log(dog.name);
// console.log(dog.hasOwnProperty('legs'));
// console.log(dog.legs);


// console.log('');
// console.log('Метод hasOwnProperty()');

// const animal1 = { eats: true};
// const cat = Object.create(animal1);
// cat.meows = true;

// for (const key in cat) {
//     console.log(key);
// };

// for (const key in cat) {
//     if (!cat.hasOwnProperty(key)) continue;

//     console.log(key);
// };

// console.log('Метод Object.keys(obj)');

// const catKeys = Object.keys(cat);
// console.log(catKeys);



// // Классы
// console.log('Классы');

// class User {
//     // Тело класса
// }
// const mango = new User();
// console.log(mango);

// const poly = new User();
// console.log(poly);


// console.log('Конструктор класса');

// class User1 {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
// }

// const mango1 = new User1('mango', 'mango@mail.com');
// console.log(mango);

// const poly1 = new User1('poly', 'poly@mail.com');
// console.log(poly);


// console.log('Объект параметров');

// class User2 {
//     constructor({name, email}) {
//         this.name = name;
//         this.email = email;
//     }
// }

// const mango2 = new User ({
//     name: 'mango',
//     email: 'mango@mail.com'
// });
// console.log(mango2);

// const poly2 = new User ({
//     name: 'poly',
//     email: 'poly@mail.com'
// })
// console.log(poly2);


// console.log('Методы класса');

// class User3 {
//     constructor({name, email}) {
//         this.name = name;
//         this.email = email;
//     }

//     getEmail() {
//         return this.email;
//     }

//     chnageEmail(newEmail) {
//         this.email = newEmail;
//     }
// }



// console.log('');
// console.log('Приватные свойства');

// class User4 {
//     name;
//     #email;

//     constructor ({name, email}) {
//         this.name = name;
//         this.#email = email;
//     }

//     getEmail() {
//         return this.#email;
//     }

//     changeEmail(newEmail) {
//         this.#email = newEmail;
//     }
// }

// const mango4 = new User4({
//     name: 'mango',
//     email: 'mango@MediaList.com',
// });
// mango4.changeEmail('mango@supermail.com');
// console.log(mango4.getEmail());



// console.log('');
// console.log('Геттеры и сеттеры');
// console.log('Геттер выполняется при попытке получить значение свойства');
// console.log('сеттер - при попытке его изменить.');

// class User5 {
//     #email;

//     constructor ({name, email}) {
//         this.name = name;
//         this.#email = email;
//     }

//     get email () {
//         return this.#email;
//     }

//     set email(newEmail) {
//         if (newEmail === '') {
//             console.error("Ошибка! Почта не может быть пустой строкой!");
//             return;
//         }

//         this.#email = newEmail;
//     }
// }

// const mango5 = new User5({name: "Манго", email: "mango@mail.com"});
// console.log(mango5.email);
// mango5.email = 'dhntjn';
// console.log(mango5.email);



// console.log('');
// console.log('Статические свойства');

// class User6 {
//     static Roles = {
//         ADMIN: 'admin',
//         EDITOR: 'editor',
//     }

//     #email;
//     #role;

//     constructor({email, role}) {
//         this.#email = email;
//         this.#role = role;
//     }

//     get role() {
//         return this.#role;
//     }

//     set role(newRole) {
//         this.#role = newRole;
//     }
// }

// const mango6 = new User6 ({
//     email: "mango@mail.com",
//     role: User6.Roles.ADMIN,
// })

// console.log(mango6.Roles);
// console.log(User6.Roles);
// console.log(mango6.role);
// mango6.role = User6.Roles.EDITOR;
// console.log(mango6.role);


// console.log('');
// console.log('Статические методы');

// class User7 {
//     static #takenEmails = [];

//     static isEmailTaken(email) {
//         return User7.#takenEmails.includes(email);
//     }

//     #email;

//     constructor({email}) {
//         this.#email = email;
//         User7.#takenEmails.push(email);
//     }
// }

// const mango7 = new User7({email: 'mango@mail.com'});

// console.log(User7.isEmailTaken('poly@mail.com'));
// console.log(User7.isEmailTaken('mango@mail.com'));



// console.log('');
// console.log('Наследование классов');
// console.log('class Child extends Parent {}');

// class User8 {
//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }

// class ContentEditor8 extends User8 {
//     // Тело класса ContentEditor
// }

// const editor8 = new ContentEditor8('mango@mail.com');
// console.log(editor8);
// console.log(editor8.email);



// console.log('');
// console.log('Конструктор дочернего класса');

// class User9 {
//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }

// class ContentEditor9 extends User9 {
//     constructor({email, posts}) {
//         // Вызов конструктора родительского класса User
//         super(email);
//         this.posts = posts;
//     }

//     addPost(post) {
//         this.posts.push(post);
//     }
// }

// const editor9 = new ContentEditor9({
//     email:"mango@mail.com",
//     posts: [],
// });
// console.log(editor9);
// console.log(editor9.email);
// editor9.addPost('post-1');
// console.log(editor9.posts);



// console.log('');
// console.log('Методы дочернего класса');