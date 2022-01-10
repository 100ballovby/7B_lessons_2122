function say_hello(name) {  // <- определение функции
    return 'hello ' + name + '!';  // <- тело функции
}

// присваиваю результат работы функции переменной res
let res = say_hello('Demid');  // <- вызов функции
console.log(res);

