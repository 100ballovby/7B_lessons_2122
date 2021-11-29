/* счетный цикл for
Счетный цикл for имеет управляющую
переменную, как правило, называется i.
Управляющая переменная отвечает за
подсчет количества итераций цикла.
*/

for (let i = 10; i > 0; i--) {
    console.log(i)
}
/*
 ++ <- увеличение на единицу
 -- <- уменьшение на единицу
*/

for (let i = 1000; i < 1100; i++) {  // в промежутке от 1000 до 1100
    console.log(i);  // выводить числа
    if (i === 1006) {  // если число 1006
        break;  // выйти из цикла принудительно
    }
}
