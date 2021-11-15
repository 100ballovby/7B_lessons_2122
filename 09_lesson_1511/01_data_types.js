let flag = true;
// оператор typeof выдает тип данных элемента
console.log(typeof flag); // boolean
/* Вы можете преобразовывать типы данных.
Преобразование типа - это смена класса данных
объекта. Превратить число в строку.

Функции:
1. String(x) <- преобразует x в строчку.
2. Number(x) <- преобразует х в число.
3. Boolean(x) <- преобразует х в логическое значение

*  */

flag = String(flag); // меняю тип данных переменной flag на строчный
console.log(typeof flag);  // string

let str = '22';
let str2 = '3'

console.log(str2 + str); // 322
str = Number(str);  // меняю тип
str2 = Number(str2);  // меняю тип
console.log(str2 + str); // 25

let first = 0;
let second = 1;
let third = 56;
let fourth = -7;

console.log(Boolean(first));  // 0 - false
console.log(Boolean(second));  // 1 - true
console.log(Boolean(third));  // 56 - true
console.log(Boolean(fourth));  // -7 - true
/* В логике компьютера 0 - это отсутствие сигнала, 1 - его наличие.
При преобразовании в логический тип нуля, получится false. при преобразовании
единицы получится true.
FALSE БУДЕТ ТОЛЬКО В СЛУЧАЕ ПРЕОБРАЗОВАНИЯ НУЛЯ. Знак числа и само число не имеет значения.
Только 0 дает вам false.
*/