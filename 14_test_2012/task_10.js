/*Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50.
Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация -
это проход цикла), и запишите его в переменную num.*/

let n = 1000;
let num = 1;
while (n > 50) {
    n /= 2;
    num += 1
}
console.log(n)
console.log(num - 1);