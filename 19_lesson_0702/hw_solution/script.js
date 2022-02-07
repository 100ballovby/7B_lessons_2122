let list = [
    {
        text: 'Create JS function',
        status: true
    },
    {
        text: 'Read the docs',
        status: false
    },
    {
        text: 'Make HTML template',
        status: true
    },
    {
        text: 'Troubleshooting',
        status: false
    },
    {
        text: 'Make an live demo prototype',
        status: true
    },
    {
        text: 'Refactor JS function',
        status: true
    },
    {
        text: 'Get money',
        status: false
    },
]

function create_list(array) {
    let ul = document.createElement('ul');
    let list = document.querySelector('.list')
    for (let i = 0; i < array.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = array[i].text; // добавил текст в элемент списка

        if (array[i].status === true) {
            li.classList.add('done')
        }

        ul.appendChild(li);
    }
    list.appendChild(ul);
}

create_list(list);