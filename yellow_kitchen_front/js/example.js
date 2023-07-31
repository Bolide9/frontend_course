/// 1

function checkNumberConstant(number) {
  if (number < 10) {
    console.log("константа меньше 10");
  } else {
    console.log("константа не меньше 10");
  }
}

checkNumberConstant(5);
checkNumberConstant(15);

/// 2

function showAlert() {
  alert("Привет, Мир");
}

showAlert();

/// 3

function printJavaScript() {
  console.log("JavaScript");
}

printJavaScript();

/// 4

let text = "Этот текст содержит lorem";

function checkTextContent(str) {
  if (str.includes("lorem")) {
    console.log("У вас ошибка в тексте");
  } else {
    console.log("Содержимое переменной: " + str);
  }
}

checkTextContent(text);
checkTextContent("Этот текст не содержит");
