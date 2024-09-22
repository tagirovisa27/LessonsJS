
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();
    request.open('GET', 'js/a.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', function () {
        if (request.readyState === 4 && request.status == 200) {
            let date = JSON.parse(request.response);
            inputUsd.value = inputRub.value / date.usd;
            if (!isNaN(inputRub.value)) {
                inputUsd.value = inputRub.value / date.usd;
            } else {
                inputUsd.value = '';
            }
        } else {
            inputUsd.value = "Ошибка!";
        }
    });
});

// http-запросы
// XMLHttpRequest(); - Объект

// Методы
// open - Настройка запроса
// method - общение между клиентом и сервером GET POST
// URL - Путь к серверу локальный глобальный итд
// async - Асинхронность запроса по умолчанию true (false)
// login password - Имя пользователя и пороль


// Свойство
// status - http-код ответ от сервера - 404, 403, 0 итд
// statusText - Текстовый ответ от сервера - ok, notfound
// responseText - Текстовый ответ сервера от разработчика  - response
// readyState - Текущая состояние запроса - этапы 

