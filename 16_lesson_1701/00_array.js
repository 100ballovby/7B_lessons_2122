let fruits = ['Яблоко', 'Банан', 'Груша', 'Апельсин'];

console.log(fruits);  // вывести весь массив

for (i = 0; i < fruits.length; i++) {  // от 0 до количества элементов массива fruits
    console.log(fruits[i]);  // выводить каждый индекс из массива
}

// наполнить массив 20 случайными числами
let rand_nums = [];
for (let i = 0; i < 20; i++) {  // повторить 20 раз
    let num = Math.round(Math.random() * 100);  // сгенерировать случайно число от 0 до 100
    rand_nums.push(num);  // добавить число в массив
}

console.log(rand_nums); // вывожу массив


