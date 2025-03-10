let i = 3;

while (i) {
  alert(i--);
}
// 1
//Каждое выполнение цикла уменьшает i и проверка while(i) остановит цикл при i = 0

let i = 0;
while (++i < 5) alert(i);
// от 1 до 4

let i = 0;
while (i++ < 5) alert(i);
// от 1 до 5

for (let i = 0; i < 5; ++i) alert(i);

for (let i = 0; i < 5; i++) alert(i);
// в обоих случаях от 0 до 4

let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}
//
let num;

do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);

let n = 10;

nextPrime: for (let i = 2; i <= n; i++) {
  // Для всех i...

  for (let j = 2; j < i; j++) {
    // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  alert(i); // простое число
}
