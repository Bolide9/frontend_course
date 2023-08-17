// 1 //

/*
  forEach

   Дан массив с числами [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100]. 
   Вывести в консоль только нечетные числа. (Для этого вам необходимо использовать if и узнать оператор про оператор ‘остаток от деления’ - % 
*/

const numbers = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100];

numbers.forEach(number => {
  if (number % 2 !== 0) {
    console.log(number);
  }
});


// 2 //

/*
    filter

    Дан массив со строчными элементами [ “lorem ipsum”, “javascript”, “php”, “css”, “react”, “git”, “html”, “mysql”]. 
    Вывести в консоль элементы у которых кол-во символов не больше 4-х. 
*/

const strings = ["lorem ipsum", "javascript", "php", "css", "react", "git", "html", "mysql"];

strings.filter(string => {
  if (string.length <= 4) {
    console.log(string);
  }
});

// 3 //

/*
  Дан массив [1, -3, 5, 6, -7, 8, 9, -11]. 
  Создайте новый массив в котором останутся только отрицательные элементы. 
*/

const array1 = [1, -3, 5, 6, -7, 8, 9, -11];
const negativeArray1 = array1.filter(number => number < 0);
console.log(negativeArray1);



// 4 //

/*
  Дан массив [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100]. 
  Создать новый в котором будут только четные элементы этого массива. (Нужен оператор остаток от деления - %). 
*/

const array2 = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100];
const evenArray2 = array2.filter(number => number % 2 === 0);
console.log(evenArray2);


// 5 //

/*
   Map

  Дан массив [ “lorem ipsum”, “javascript”, “php”, “css”, “react”, “git”, “html”, “mysql”].
  Создать новый массив состоящий только из элементов у которых длина строки не равна 3-м. 
*/

const array3 = ["lorem ipsum", "javascript", "php", "css", "react", "git", "html", "mysql"];
const newArray3 = array3.map(string => string.length !== 3);
console.log(newArray3);

// 6 //

/*
    Дан массив [5, 6, 7, 8, 9].
  Сделайте из него массив состоящий из квадратов этих числе. (25, 36.. и тд)
*/

const array4 = [5, 6, 7, 8, 9];
const squaresArray4 = array4.map(number => number ** 2);
console.log(squaresArray4);

// 7 //

/*
    Дан массив с объектами [{а: 10, b: 5}, {а: 20, b: 22}, {a: 131, b:55}]. 
    Создать новый массив элементами которого буду сумма свойств объекта. Должно получится [15, 42, 186]

    Reduce
*/

const array5 = [{ a: 10, b: 5 }, { a: 20, b: 22 }, { a: 131, b: 55 }];
const sumArray5 = array5.reduce((acc, obj) => {
  const sum = obj.a + obj.b;
  acc.push(sum);
  return acc;
}, []);

console.log(sumArray5);



// 8 //

/*
    Дан массив [-13, 0, 12, 1662, -0.32, -102, -2]. 
    Посчитать сумму отрицательных элементов. (Нужно будет использовать filter и reduce)
*/

const array6 = [-13, 0, 12, 1662, -0.32, -102, -2];
const negativeSum = array6.filter(number => number < 0).reduce((acc, curr) => acc + curr, 0);
console.log(negativeSum);


// 9 //

/*
      Дан массив с объектами [ {x: 10, y: “lorem”}, {x: 21, y: “lorem”}, {x: -17, y: “lorem”}, {x: 156, y: “lorem”}];
    Посчитать сумму свойств х всех объектов.
*/

const array7 = [{ x: 10, y: "lorem" }, { x: 21, y: "lorem" }, { x: -17, y: "lorem" }, { x: 156, y: "lorem" }];
const sumX = array7.reduce((acc, obj) => acc + obj.x, 0);
console.log(sumX);
