// 1. Даны массив arr_1 = [101, 202, 303, 404, 505] и arr_2 = [606, 707, 808, 909] - создайте третий массив superArr который будет результатом "слияния" предыдущих двух.
// Результатом должен быть массив superArr = [101, 202, 303, 404, 505, 606, 707, 808, 909];

let arr_1 = [101, 202, 303, 404, 505];
let arr_2 = [606, 707, 808, 909];

let superArr = [...arr_1, ...arr_2];
// also can use
// let superArr = arr_1.concat(arr_2);

console.log(superArr);

// 2 Метод Math.min() может принимать в параметры неограниченное кол - во чисел и возвращает наименьшее из них.
// Например:
// Math.min(102, 1231, 29922, 1); // вернет 1

// Передайте в этот метод элементы массива superArr(не сам массив, а его элементы)
// Для этого вам надо раскрыть массив. 

let numbers = [1, 2, 3, 4, 5];
console.log(Math.min(...numbers));

// 3. Дан объект obj со свойствами width: 300 и heigth: 550. 
// Создайте новый объект, который будет копией obj, но будет иметь еще и метод area(), который должен вернуть произведение свойств width и height;

let obj = {
  width: 300,
  height: 550,
}

let copyObj = {
  ...obj,
  area: function () {
    return this.width * this.height;
  }
};

console.log(copyObj.area());

// 4 Создайте функцию которая принимает произвольное количество параметров и возвращает их сумму. 

function sum(...numbers) {
  let sum = 0;

  for (const key in numbers) {
    sum += numbers[key];
  }

  return sum;
}

console.log(sum(1, 2, 3));