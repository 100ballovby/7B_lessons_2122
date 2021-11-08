let age = 100 - 56 / 3; // переменная. ключевое слово let - обязательно
// = <- присвоить. То есть переменной присваивается значение выражения
console.log(age);

/*
Правила названий переменных:

1. Понятные слова. u - нельзя, username - можно
2. Не писать сочинения. my_variable_wich_i_would_printing - не надо.
3. ТОЛЬКО латиница. Не использовать символы кириллического алфавита
4. Можно использовать в названии цифры, но она не может быть первой
let var1 - можно
let g1_for - можно
let 5_obezyan - нельзя
5. Если нужно несколько слов, то делаем:
    a) CamelCase - каждое новое слово в названии с большой буквы MyDogsCount
    b) snake_case - слова разделяются знаком _ - my_dogs_count

*/

let minutes = 60;
let hours = 60;

let seconds_hour = minutes * hours;
console.log('Секунд в часе: ', seconds_hour);

alert(seconds_hour);
// alert выводит окошко на HTML страничке
