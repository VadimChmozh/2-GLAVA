let sayHi = function () {
  alert("Привет");
};

let age = 16; // возьмём для примера 16

if (age < 18) {
  welcome(); // \   (выполнится)
  //  |
  function welcome() {
    //  |
    alert("Привет!"); //  |  Function Declaration доступно
  } //  |  во всём блоке кода, в котором объявлено
  //  |
  welcome(); // /   (выполнится)
} else {
  function welcome() {
    alert("Здравствуйте!");
  }
}

// здесь фигурная скобка закрывается,
// поэтому Function Declaration, созданные внутри блока кода выше -- недоступны отсюда.

welcome(); // Ошибка: welcome is not defined

let age = prompt("Сколько Вам лет?", 18);

let welcome =
  age < 18
    ? function () {
        alert("Привет!");
      }
    : function () {
        alert("Здравствуйте!");
      };

welcome(); // теперь всё в порядке
