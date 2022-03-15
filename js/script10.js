// Объектная модель документа
// console.log('Объектная модель документа');
// console.log('Объектная модель документа (Document Object Model) - ');
// console.log('независимый от языка интерфейс для работы с HTML-документом');
// console.log('Объектная модель браузера (Browser Object Model) - ');
// console.log('независимый от языка интерфейс для работы с владкой браузера');


// console.log('');
// console.log('Навигация по DOM');
// console.log(document);

// const body = document.body;
// console.log(body);

// const section = body.firstElementChild;
// console.log(section);

// const title = section.firstElementChild;
// console.log(title);

// const list = section.lastElementChild;
// console.log(list);

// const listItems = list.children;
// console.log(listItems);



// console.log('');
// console.log('Поиск элементов');
// console.log('Группа методов elem.querySelector* это современный стандарт для поиска элементов.');
// console.log('element.querySelector(selector);');
// console.log('Используется если необходимо найти только один, чаще всего уникальный элемент.');
// console.log('element.querySelectorAll(selector);');
// console.log('Используется если необходимо найти коллекцию элементов, то есть получить массив ссылок на элементы с одинаковым селектором.');

// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelectorAll('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll('li');
// console.log(menuItemsByTagName);

// const menuItemsByClass  = document.querySelectorAll('.menu-item');
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector('.menu-item');
// firstMenuItem.style.color = 'skyblue';
// console.log(firstMenuItem);


// console.log('');
// console.log('Свойства и атрибуты ');

// const message = document.querySelector('#message');
// console.log(message.value);

// const activeLink = document.querySelector('.btn.active');
// console.log(activeLink.href);

// const image = document.querySelector('.image');
// console.log(image.src);
// image.src = 'https://placeimg.com/640/480/tech';



// console.log('');
// console.log('Свойство textContent');

// const text = document.querySelector('.article-text');
// console.log(text.textContent);

// const title1 = document.querySelector('.article-title');
// console.log(title1.textContent);
// title1.textContent = 'Welcome to Bahamas!'
// console.log(title1.textContent);


// console.log('');
// console.log('Свойство classList');

// const text1 = document.querySelector('#paragraph');
// console.log(text1.classList);

// text1.classList.remove('big');
// console.log(text1.classList);

// console.log(text1.classList.contains('red'));

// text1.classList.add('new-cls');
// console.log(text1.classList);

// // Can add multiple classes

// text1.classList.add('a', 'b', 'c');
// console.log(text1.classList);

// // добавили класс is-hidden
// text1.classList.toggle('is-hidden');
// console.log(text1.classList);
// // убрали класс is-hidden
// text1.classList.toggle('is-hidden');
// console.log(text1.classList);

// // classList has a forEach method
// text1.classList.forEach(cls => {
//     console.log(cls);
// });


// // СТИЛИЗАЦИЯ КНОПКИ

// const button = document.querySelector('.button');

// button.style.backgroundColor = 'pink';
// button.style.color = 'white';
// button.style.border = 'none';
// button.style.width = '100px';
// button.style.height = '40px';
// button.style.fontSize = '24px';

// console.log(button.style);


// console.log('');
// // АТРИБУТЫ
// console.log('Атрибуты');

// const image1 = document.querySelector('.image-attribute');
// console.log(image1.attributes);
// console.log(image1.hasAttribute('src'));
// console.log(image1.getAttribute('alt'));
// image1.setAttribute('alt', 'amazing landscapes');
// console.log(image1.getAttribute('alt'));



// console.log('');
// // DATA-АТРИБУТЫ
// console.log('data-атрибуты');

// const saveBtn0 = document.querySelector('button[data-action="save"]');
// console.log(saveBtn0.dataset.action);

// const closeBtn0 = document.querySelector('button[data-action="close"]');
// console.log(closeBtn0.dataset.action);


// // КОЛДУЕМ С ВЕРСТКОЙ
// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.editor button[data-action="close"]');
// console.log(saveBtn.dataset.action);
// console.log(closeBtn.dataset.action);

// const dishes = document.querySelectorAll('.dishes > li');
// dishes.forEach((dish) => {
//     console.log(dish.dataset.id);
// });




// console.log('');
// // СОЗДАНИЕ И УДАЛЕНИЕ ЭЛЕМЕНТОВ
// console.log('Создание и удаление элементов');
// console.log('Создание');

// // document.createElement(tagName);

// const heading = document.createElement('h2');
// heading.textContent = 'this is heading';
// console.log(heading);

// const image = document.createElement('img');
// image.src = 'https://placeimg.com/640/480/nature';
// image.alt = 'Nature';
// console.log(image);

// // ВНЕСЕНИЕ СОЗДАННЫХ ЭЛЕМЕНТОВ В ДОМ

// const list = document.querySelector('.usernames');

// // Adds an item to the end of the list
// const lastItem = document.createElement('li');
// lastItem.textContent = 'Poly';
// list.append(lastItem);

// // Adds an item to the beginning of the list
// const firstItem = document.createElement('li');
// firstItem.textContent = 'Ajax';
// list.prepend(firstItem);

// // Adds a title before the list
// const title = document.createElement('h2');
// title.textContent = 'usernames';
// title.style.color = 'green';
// title.style.fontSize = '30px';
// list.before(title);

// // Adds a paragraph after the list
// const text = document.createElement('p');
// text.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
// list.after(text);

// text.after(image);
// text.after(heading);


// console.log('Удаление');
// list.remove();




// Свойство innerHTML
console.log('Свойство innerHTML');
console.log('Создание');

const article0 = document.querySelector(".article0");
console.log(article0.innerHTML);

const title0 = document.querySelector('.title0');
console.log(title0.innerHTML);

const text0 = document.querySelector('.text0');
console.log(text0.innerHTML);

const link0 = document.querySelector('.link0');
console.log(link0.innerHTML);


// Изменение
console.log('Изменение');

title0.innerHTML = 'New and <span class="accent">improved</span> title';