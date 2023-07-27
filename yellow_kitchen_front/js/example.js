// Тип данных "строка" (string)
const date = Date(1999, 2, 28);

console.log(date);

// Тип данных "число с плавающей запятой" (float)
const pi = 3.14;

console.log(`pi ${pi}`);

const myConstant = "Hello";

// Попытка изменить значение константы
myConstant = "World"; // Вызовет ошибку, так как константу нельзя изменить.

let name = prompt("Введите ваше имя:");
let address = prompt("Введите ваш адрес:");
let phone = prompt("Введите ваш номер телефона:");

console.log(`Студент ${name}. Адрес: ${address}, Номер телефона: ${phone}`);

let exchangeRate = prompt("Введите курс рубля к доллару:");
let rublesAmount = prompt("Введите количество доступных рублей:");

let dollarsAmount = rublesAmount / exchangeRate;
console.log(`На доступные рубли можно купить ${dollarsAmount.toFixed(2)} долларов.`);
