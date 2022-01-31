// //  ============== Функции
// console.log('Объявление функции')

// function multiply(x, c, v) {
//     console.log("Код до return выполняется как обычно");

//     return x + c + v;

//     console.log("Этот лог никогда не выполнится, он стоит после return");
// };

// let result = multiply(1, 2, 3);
// console.log(result);


// console.log('')
// console.log('Порядок выполнения кода');

// function multiply1 (x, y, z) {
//     console.log(`Результат умножения равен ${x * y * z}`)
// };

// console.log('Лог до вызова функции multiply');
// multiply1 (2, 3, 5);
// console.log('Лог после вызова функции multiply');


// console.log('')
// console.log('Параметры по умолчанию');

// function count (countFrom = 0, countTo = 10, step = 1) {
//     console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//     for (let i = countFrom; i <= countTo; i += step) {
//         console.log(i);
//     }
// }

// count(1, 5);
// count(2);
// count();


// console.log('')
// console.log('Псевдомассив arguments');

// function multiply2 () {
//     let total = 1;

//     for (const argument of arguments) {
//         total *= argument;
//     }

//     return total;
// } 

// console.log(multiply2(1, 2, 3, 4));


// console.log('')
// console.log('Преобразование псевдомассива');

// function fn() {
//     const args = Array.from(arguments);
// }

// function fn1(...args) {

// };



// console.log('')
// console.log('Паттерн «Ранний возврат»');

// function withdraw01(amount, balance) {
//     if (amount === 0) {
//         console.log('Для проведения операции введите сумму больше нуля');
//     } else if (amount > balance) {
//         console.log('Недостаточно средств на счету');
//     } else {
//         console.log('Операция снятия средств проведена успешно');
//     }
// }

// console.log('')

// withdraw01(0, 300);
// withdraw01(500, 300);
// withdraw01(100, 300);

// console.log('')

// function withdraw02 (amount, balance) {
//     if (amount === 0) {
//         console.log('Для проведения операции введите сумму больше нуля');
//         return;
//     }

//     if (amount > balance) {
//         console.log('Недостаточно средств на счету');
//         return;
//     }

//     console.log('Операция снятия средств проведена успешно');
// }

// withdraw02(0, 300);
// withdraw02(500, 300);
// withdraw02(100, 300);


// console.log('')
// console.log('Функциональное выражение / function expression')

// console.log('function declaration');

// function multiply02 (x, y, z) {
//     console.log(`Результат умножения равен ${x * y * z}`);
// };

// console.log('function expression');

// const multiply03 = function (x, y, z) {
//     console.log(`Результат умножения равен ${x * y * z}`);
// };



//   ============== Область видимости


//   ============== Стек вызовов