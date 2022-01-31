/*
.querySelector(element) - найти элемент
.querySelectorAll(element) - найти все элементы
.classList.add(class) - добавить класс к элементу
*/
let cards_info = [
    {special: true},
    {special: false},
    {special: false},
    {special: false},
]

function add_card(element) {
    let div = document.querySelectorAll(element);

    for (let i = 0; i < cards_info.length; i++) {
        let class_name = '';
        if (cards_info[i].special) {
            class_name = 'card-hit';
        } else {
            class_name = 'card';
        }
        div[i].classList.add(class_name);
    }
}

add_card('div');

