function fill_ul(element) {
    let list = document.querySelector(element);
    let nums = [];
    for (let i = 0; i < 20; i++) {  // повторить 20 раз
        let num = Math.round(Math.random() * 100);  // сгенерировать случайно число от 0 до 100
        nums.push(num);  // добавить число в массив
    }


    for (let j = 0; j < nums.length; j++) {
        let item = document.createElement('LI'); // создаю элемент списка
        item.innerHTML = nums[j];  // добавляю текст в элемент списка из массива
        list.appendChild(item); // добавляю новый элемент в список на странице
    }
}


