// 1. Создай переменную с именем name и задай ей значение свое имя;

let name = 'Muhammad';

// 2.  Какой тип данных у этой переменной? (напиши в однострочном комментарии рядом с переменной)

console.log(typeof (name)); // string

// 3. Создай константу age и запиши туда свой возраст. (напиши в однострочном комментарии рядом с переменной тип данных этой переменной)

const age = 23; // number
console.log(typeof (age)); // number


// 4. Напиши код, который выведет в консоль «доступ запрещен» если значение константы age меньше 15, 
// иначе выведет в консоль «Привет name`» где `name это переменная созданная в задании 1. 

if (age < 15) {
  console.log('доступ запрещен');
} else {
  console.log(`Привет ${name}`);
}

// 5. Создай функцию с именем viewMoney().  
// Функция должна ВЫВОДИТЬ в консоль текст «Вот вам 10$». Вызови функцию. 

function viewMoney() {
  console.log('Вот вам 10$');
}

viewMoney();

// 6.  Создай функцию с именем getMoney() так, чтобы она не выводила текст в консоль, а ВОЗВРАЩАЛА текст «Вот вам 10$».

function getMoney() {
  return 'Вот вам 10$';
}

console.log(getMoney());


// 7.  Измени функцию так, чтобы она принимала один параметр cash и возвращала текст «Вот вам cash`$», где `cash - это параметр переданный в функцию.  

function getMoney2(cash) {
  return `Вот вам ${cash}$`;
}

console.log(getMoney2(100));


// 8. Создай функцию которая выводит квадрат числа в консоль

function sqrt(number) {
  return number * number;
}

console.log(sqrt(5));


// 9. Создай функцию которая выводит наибольшее число из переданных в аргументе

function max(numbers) {
  if (numbers.length <= 1) {
    return numbers;
  }

  current = numbers[0];

  for (let index = 1; index < numbers.length; index++) {
    const element = numbers[index];
    if (element > current) current = element;
  }


  return current;
}

console.log(max([10, 20]));


// 10. Создай функцию которая вычисляет дискриминант. Она должна принимать в параметры 3 числа. Формула дискриминанта:  b``2``-4ac;

function discriminant(a, b, c) {
  discr = b * b - 4 * a * c;

  if (discr > 0) {
    x1 = (-b + Math.sqrt(discr)) / (2 * a)
    x2 = (-b - Math.sqrt(discr)) / (2 * a)

    return `D = ${discr}, x1: ${x1}, x2: ${x2}`;
  }
  else if (discr === 0) {
    return `${(-b / (2 * a))}`
  }

  return `D = ${discr}, Нет корней`;
}

console.log(discriminant(1, 1, 1));

// 11.  Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение.
// Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное функция возвращает это нечётное число.

function isEven(char) {
  return char % 2 === 0;
}

function func(number1, number2) {
  if (isEven(number1) && isEven(number2)) {
    return number1 * number2;
  }
  else if (!isEven(number1) && !isEven(number2)) {
    return number1 + number2;
  }
  else if (isEven(number1) || isEven(number2)) {
    if (!isEven(number1)) {
      return number1;
    }

    return number2;
  }
}

console.log(func(2, 2));