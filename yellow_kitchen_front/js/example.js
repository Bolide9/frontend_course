/// 1 

let man = {
  age: 23,
  height: 185,
  money: 1000,
  name: "Иван",
  lastName: "Иванов",
  login: "ivan123",
  password: "qwerty",
};

man.address = "ул. Пушкина, д. 10, кв. 5";
console.log(man);


/// 2

let password = "qwerty"; // Здесь можно изменить значение для тестирования

if (password === man.password) {
  console.log(`Добро пожаловать, ${man.name} ${man.lastName}. Ваш логин ${man.login}.`);
} else {
  console.log(`Указанный пароль "${password}" не верен. Попробуйте еще раз.`);
}


/// 3

let num = 1;
while (num < 3) {
  console.log(`4ucno: ${num}`);
  num++;
}

/// 4

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

