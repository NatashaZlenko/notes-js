//  ============== Функции
console.log('Объявление функции')

function multiply(x, c, v) {
    console.log("Код до return выполняется как обычно");

    return x + c + v;

    console.log("Этот лог никогда не выполнится, он стоит после return");
};

let result = multiply(1, 2, 3);
console.log(result);


console.log('')
console.log('Порядок выполнения кода');

function multiply1 (x, y, z) {
    console.log(`Результат умножения равен ${x * y * z}`)
};

console.log('Лог до вызова функции multiply');
multiply1 (2, 3, 5);
console.log('Лог после вызова функции multiply');


console.log('')
console.log('Параметры по умолчанию');

function count (countFrom = 0, countTo = 10, step = 1) {
    console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

    for (let i = countFrom; i <= countTo; i += step) {
        console.log(i);
    }
}

count(1, 5);
count(2);
count();


console.log('')
console.log('Псевдомассив arguments');

function multiply2 () {
    let total = 1;

    for (const argument of arguments) {
        total *= argument;
    }

    return total;
} 

console.log(multiply2(1, 2, 3, 4));


console.log('')
console.log('Преобразование псевдомассива');
