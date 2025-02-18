if ("0") {
  alert("Привет");
}
// Выведется Привет так как это не пустая строка а "0"

let tiptop = prompt('Какое "Официальное" название JavaScript?', "");
if (tiptop == "ECMAScript") {
  alert("Верно!!!");
} else {
  alert("Не знаете? ECMAScript :(");
}

let yo = prompt("Введите число", 0);
if (yo > 0) {
  alert(1);
} else if (yo < 0) {
  alert(-1);
} else {
  alert(0);
}

result = a + b < 4 ? "Мало" : "Много";

let meessage =
  login == "Сотрудник"
    ? "Привет"
    : login == "Директор"
    ? "Здравствуйте"
    : login == ""
    ? "Нет логина"
    : "";
