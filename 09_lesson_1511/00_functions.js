let name = prompt('Как тебя зовут?');
// функция prompt позволяет ввести что-то с клавиатуры
// в скобочках можно написать вопрос для пользователя, который будет отображаться в рамочке
alert('Привет, ' + name);

let isMain = confirm('Ты главный?');
// confirm - подтвердить действие на странице. возвращает true/false
alert(isMain);