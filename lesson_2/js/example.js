// Дан массив из городов, каждый из которых представляет собой объект и содержит по два свойства: name и population:
//     const cities = [        {name: 'Москва', population: 12506468},
//         {name: 'Санкт-Петербург', population: 5351935},        {name: 'Новосибирск', population: 1612833},
//         {name: 'Калиниград', population: 482443},        {name: 'Калуга', population: 336726}
//     ];   
//  Напоминаю, что обратиться к свойствам объекта находящимся в массиве можно следющим образом:
//  cities[0].name; // Москва    cities[3].name; // Калиниград
//  сities[2].population; // 1612833


const cities = [
    { name: 'Москва', population: 12506468 },
    { name: 'Санкт-Петербург', population: 5351935 },
    { name: 'Новосибирск', population: 1612833 },
    { name: 'Калиниград', population: 482443 },
    { name: 'Калуга', population: 336726 }
];

//  1. Добавьте к массиву два ваших любимых города и их население. Один в начала массива, второй в конец. Добавлять вы должны в виде объекта. Например:
//  {name: 'Моя луна', population: 1}; 

cities.push({ name: 'Грозный', population: 150000000 });
console.log(cities);
console.log();

//  2. Выведите в консоль все элементы массива следующем образом:    
//     город: Москва, население: 12506468
//     город: Санкт-Петербург, население: 12506468 и тд

cities.forEach((e) => console.log(`город ${e.name}, население: ${e.population}`));

// 3. Нужно найти и сохранить в новый массив, города население которых больше миллиона человек.

let largeCities = cities.filter((e) => e.population > 1000000);
console.log(largeCities);
console.log();

// 4. Через время население во всех городах увеличилось в 1.5 раза. 
//  Создайте новый массив в котором это будет отражено.

cities.forEach((e) => e.population = (e.population * 1.5).toFixed());
console.log(cities);
console.log();

// 5. Подсчитайте количество население во всех городах после его повышения.

let allCitiesPopulation = cities.reduce((acc, city) => acc + city.population, 0);
console.log(allCitiesPopulation);
console.log();

// 6. Вывести из массива с объектами (Взять по этой ссылку https://jsonplaceholder.typicode.com/posts) первые 10 объектов
// по этой ссылке. Отфильтровать объекты с id больше 5. Вывести title и body этих объектов. Изменить title "Expovision"

(await(await fetch("https://jsonplaceholder.typicode.com/posts")).json()).slice(0, 10).filter((e) => e.id > 5).forEach((e) => console.log(`title: ${e.title}\nbody: ${e.body}`));