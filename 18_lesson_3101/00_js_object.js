let users = [
    { // объект
        first_name: 'John',
        last_name: 'Doe',
        city: 'New York',
        phone: '+1 (499) 555-0100'
    },
    { // объект
        first_name: 'Alex',
        last_name: 'Middleton',
        city: 'Washington DC',
        phone: '+1 (374) 777-0155'
    },
    { // объект
        first_name: 'Julia',
        last_name: 'Roberts',
        city: 'Orlando City',
        phone: '+1 (499) 674-0220'
    },
]

// console.log(user.first_name); обратился к ключу first_name

for (let i = 0; i < users.length; i++) {
    let u = users[i]; // переменная хранит каждый объект из массива
    console.log(u.first_name, u.last_name);
}

