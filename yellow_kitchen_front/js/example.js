/// 1

const myConstant = 5;

myConstant < 10 ? console.log("константа меньше 10") : console.log("константа не меньше 10");

///

/// 2

let x = 10,
  y = 7;

const result = x > y ? "x больше, чем y" : "x не больше, чем y";
console.log(result);

///

/// 3

let num = prompt("Введите число");

if (num % 2 === 0) {
  console.log(`Число ${num} четное`);
} else {
  console.log(`Число ${num} нечетное`);
}

///

/// 4

let num1 = +prompt("Введите первое число");
let num2 = +prompt("Введите второе число");
let num3 = +prompt("Введите третье число");

if (num1 >= num2 && num1 >= num3) {
  console.log(`Наибольшее число: ${num1}`);
} else if (num2 >= num1 && num2 >= num3) {
  console.log(`Наибольшее число: ${num2}`);
} else {
  console.log(`Наибольшее число: ${num3}`);
}

///

/// 5

///
