// События на мобильных устройствах

// Touchstart - Клик
// Touchmove  - Перемещения 
// Touchend - удаление клика
// Touchenter - изменение элмента
// TouchLeave - удаление клика после изменение
// Touchcancel - отмена клика выход из страницы

window.addEventListener('DOMContentLoaded', function () {
  let box = this.document.querySelector('.block');
 
  box.addEventListener('touchstart', function (e) {
   e.preventDefault();
   console.log('Работает! touchstart');
   console.log(e.target);
   console.log(e.touches[0].target);
   console.log(e.changedTouches);
   console.log(e.targetTouches);
  });

  box.addEventListener('touchmove', function (e) {
   e.preventDefault();
   console.log('Работает!: touchmove ' + e.touches[0].pageX);
  });

  box.addEventListener('touchend', function (e) {
   e.preventDefault();
   console.log('Работает!: touchend');
  });

 new RegExp('pattern', 'flags');
  /pattern/flags

   let ans = prompt('Введите ваше имя');

   let reg = /n/gi;

   console.log(ans.search(reg));
   console.log(ans.match(reg));
   console.log(reg.test(ans));
   

   // flags
   // i - Поиск по регистру A,a итд
   // g - Глобальный поиск, все вхождения
   // m - Многострочный поиск

   // \d  не\D - Числа
   // \w  не\W - Буквы
   // \s  не\S - Пробелы

   // let pass = prompt('Введите пороль');

   // console.log(pass.replace(/./g, '*'));
   // alert('12-34-45'.replace(/-/g, ':'));

   // let ans = prompt('Введите число');

   // let reg = /\d/g;
   
   // console.log(ans.match(reg));

   // console.log(ans.search(reg));

   // let str = 'My name is R2D2'

   // console.log(str.match(/\w\d\w\d/i));
   
});