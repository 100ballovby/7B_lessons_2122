// условный цикл while

let count = 1;
while (count <= 10) {  // пока count меньше 10
    console.log(count); // вывожу значение переменной в консоль
    count++; // увеличиваю значение переменной на 1
}

/* Одно выполнение тела цикла по-научному называется
итерация. Цикл в примере выше совершает десять итерации.

Если бы строка i++ отсутствовала в примере выше, то цикл
бы повторялся (в теории) вечно. На практике, конечно, браузер
не позволит такому случиться, он предоставит пользователю
возможность остановить «подвисший» скрипт, а JavaScript на
стороне сервера придётся «убить» процесс.
Любое выражение или переменная может быть условием цикла,
а не только сравнение: условие while вычисляется и
преобразуется в логическое значение.*/