/*
 * События.
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Ссылочная идентичность колбеков
 * - Объект события
 */

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');


// просто клик по целевой кнопке  :
// targetBtn.addEventListener('click', handleTargetBtnClick);

// function handleTargetBtnClick() {
//     console.log('click');
// }

// another variant to name the function :
// function targetBtnClickHandler() {
//     console.log('click');
// }
// function ontargetBtnClick() {
//     console.log('click');
// }

addListenerBtn.addEventListener('click', event => {
    console.log(event);
    console.log('handle event listener on target button');

    targetBtn.addEventListener('click', onTargetBtnClick);
});


removeListenerBtn.addEventListener('click', event => {
    console.log('remove event listener from target button');

    targetBtn.removeEventListener('click', onTargetBtnClick);
});

function onTargetBtnClick(event) {
    console.log('click on target button')
}
