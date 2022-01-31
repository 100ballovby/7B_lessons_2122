let cards = [
    {
        text: true,
        heading: true
    },
    {
        text: false,
        heading: true
    },
]

function create_cards(card_list) {
    for (let i = 0; i < card_list.length; i++) {
        let elem = document.createElement('div');
        elem.classList.add('card');

        if (card_list[i].text) {  // если текст нужен
            let p = document.createElement('p');  // создать параграф
            elem.appendChild(p);  // добавить созданный элемент в div
        } else if (card_list[i].heading) {  // если заголовок нужен (true)
            let h1 = document.createElement('h1');  // создать заголовок
            elem.appendChild(h1);  // добавить его в div
        }

        document.body.appendChild(elem);
    }
}
create_cards(cards);