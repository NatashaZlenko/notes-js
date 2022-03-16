// theory (1)
    
// const button = document.querySelector('.my-button');

// const handleClick = () => {
//   console.log('button was clicked');
// }

// button.addEventListener('click', handleClick);


// practice (2)
// Метод addEventListener(2)

// const singleBtn = document.querySelector('#single');

// const handleClick = () => {
//   console.log('click event listener callback');
// };

// singleBtn.addEventListener('click', handleClick);

// // ===============================================

// const multiBtn = document.querySelector('#multiple');

// const firstCallback = () => {
//   console.log('first callback');
// };
// const secondCallback = () => {
//   console.log('second callback');
// };
// const thirdCallback = () => {
//   console.log('third callback');
// };

// multiBtn.addEventListener('click', firstCallback);
// multiBtn.addEventListener('click', secondCallback);
// multiBtn.addEventListener('click', thirdCallback);



// Метод removeEventListener()(3)

// const addListenerBtn = document.querySelector('[data-action="add"]');
// const removeListenerBtn = document.querySelector('[data-action="remove"]');
// const btn = document.querySelector('#btn');

// const handleClick = () => {
//   console.log('click event listener callback');
// };

// addListenerBtn.addEventListener('click', () => {
//   btn.addEventListener('click', handleClick);
//   console.log('click event listener was added to btn');
// });

// removeListenerBtn.addEventListener('click', () => {
//   btn.removeEventListener('click', handleClick);
//   console.log('click event listener was removed from btn');
// });




// Ключевое слово this(4)

// const mango = {
//   username: 'mango',
//   showUserName() {
//     console.log(this);
//     console.log(`My username is: ${this.username}`);
//   },
// };

// const btn = document.querySelector('.js-btn');

// mango.showUserName();

// btn.addEventListener('click', mango.showUserName);

// btn.addEventListener('click', mango.showUserName.bind(mango));



// Объект события(5)

// theory
// const handleClick = event => {
//   console.log(event);
// };

// button.addEventListener('click', handleClick);

// practise
// const button = document.querySelector('.btn');

// const handleClick = (event) => {
//   console.log('event:', event);
//   console.log('event type:', event.type);
//   console.log('eventTerget:', event.currentTarget);
// };

// button.addEventListener('click', handleClick);



// Действия браузера по умолчанию(6)

const form = document.querySelector('.register-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const {
    elements: { username, password }
  } = event.currentTarget;
  console.log(username.value, password.value);
});