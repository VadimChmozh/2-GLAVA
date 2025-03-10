//Конструкция "switch"
/*
Конструкция switch заменяет собой сразу несколько if.

Она представляет собой более наглядный способ сравнить выражение сразу с несколькими вариантами.
Конструкция switch имеет один или более блок case и необязательный блок default.
Выглядит она так:

switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
Переменная x проверяется на строгое равенство первому значению value1, затем второму value2 и так далее.
Если соответствие установлено – switch начинает выполняться от соответствующей директивы case и далее, до ближайшего break (или до конца switch).
Если ни один case не совпал – выполняется (если есть) вариант default.

Несколько вариантов case, использующих один код, можно группировать.
Нужно отметить, что проверка на равенство всегда строгая. 
Значения должны быть одного типа, чтобы выполнялось равенство.*/
