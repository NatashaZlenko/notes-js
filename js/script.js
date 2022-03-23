// События клавиатуры
// document.addEventListener('keydown', event => {
//   console.log('Keydown: ', event);
// });

// document.addEventListener('keyup', event => {
//   console.log('Keyup: ', event);
// })




// Свойства key и code
// пример
const clearLogBtn = document.querySelector('[data-action="clear"]');
const logList = document.querySelector(".log-list");
let keypressCounter = 1;

document.addEventListener("keydown", logMessage);
document.addEventListener("keyup", logMessage);
clearLogBtn.addEventListener("click", reset);

function logMessage({ type, key, code }) {
  const markup = `<div class="log-item">
    <span class="chip">${keypressCounter}</span>
    <ul>
      <li><b>Event</b>: ${type}</li>
      <li><b>Key</b>: ${key}</li>
      <li><b>Code</b>: ${code}</li>
    </ul>
  </div>`;

  logList.insertAdjacentHTML("afterbegin", markup);

  if (type === "keyup") {
    incrementKeypressCounter();
  }
}

function reset() {
  keypressCounter = 1;
  logList.innerHTML = "";
}

function incrementKeypressCounter() {
  keypressCounter += 1;
}




// Клавиши-модифкаторы
document.addEventListener('keydown', event => {
  event.preventDefault();

  if ((event.ctrlKey )) {

  }
})