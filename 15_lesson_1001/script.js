function change_text_color(element) {
    let e = document.querySelectorAll(element);
    for (let i = 0; i < e.length; i++) { // количество повторений цикла = количеству элементов
        e[i].classList.add('change');
    }
};

function change_element(element, color) {
    let e = document.querySelectorAll(element);
    for (let i = 0; i < e.length; i++) {
        e[i].style.color = color;
    }
};
