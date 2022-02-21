// Объектная модель документа
console.log('Объектная модель документа');
console.log('Объектная модель документа (Document Object Model) - ');
console.log('независимый от языка интерфейс для работы с HTML-документом');
console.log('Объектная модель браузера (Browser Object Model) - ');
console.log('независимый от языка интерфейс для работы с владкой браузера');


console.log('');
console.log('Навигация по DOM');
console.log(document);

const body = document.body;
console.log(body);

const section = body.firstElementChild;
console.log(section);

const title = section.firstElementChild;
console.log(title);

const list = section.lastElementChild;
console.log(list);

const listItems = list.children;
console.log(listItems);



console.log('');
console.log('Поиск элементов');
console.log('Группа методов elem.querySelector* это современный стандарт для поиска элементов.');
console.log('element.querySelector(selector);');
console.log('Используется если необходимо найти только один, чаще всего уникальный элемент.');
console.log('element.querySelectorAll(selector);');
console.log('Используется если необходимо найти коллекцию элементов, то есть получить массив ссылок на элементы с одинаковым селектором.');

const listWithId = document.querySelector('#menu');
listWithId.style.textTransform = 'uppercase';
listWithId.style.fontSize = '24px';
console.log(listWithId);

const listWithClass = document.querySelectorAll('.menu');
console.log(listWithClass);

const menuItemsByTagName = document.querySelectorAll('li');
console.log(menuItemsByTagName);

const menuItemsByClass  = document.querySelectorAll('.menu-item');
console.log(menuItemsByClass);

const firstMenuItem = document.querySelector('.menu-item');
firstMenuItem.style.color = 'skyblue';
console.log(firstMenuItem);


console.log('');
console.log('Свойства и атрибуты ');