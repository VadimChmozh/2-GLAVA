// 1 оба варианта работают и одинаковы

function checkAge(age) {
  return age > 18 ? true : confirm("Родители разрешили?");
}

//&&

function checkAge(age) {
  return age > 18 || confirm("Родители разрешили?");
}

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

function pow(x, n) {
  // возведение в степень
  let result = n ** x;
  // вывод результата
  alert(result);
}

// запрос x и n
let x = prompt("Введите число x", "");
let n = prompt("Введите число n", "");

// проверка на натуральность
if (n >= 1 && n % 1 == 0) {
  alert(pow(x, n));
} else {
  // отбой
  alert(
    `Степень ${n} не поддерживается. Поддерживаются только натуральные значения числа n`
  );
}
