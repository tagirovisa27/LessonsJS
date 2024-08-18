
let btn = document.querySelectorAll('button');
    link = document.querySelector('a');


btn[0].onclick = function() { 
    alert('Вы нажали на первую кнопку');
}


btn[0].addEventListener('click', function (){
   alert('Вы нажали на первую кнопку');
});

btn[0].addEventListener('click', function (){
    alert('Вы еще раз нажали на эту кнопку');
 });


btn[0].addEventListener('mouseenter', function (){
    alert('Вы навели на первую кнопку');
 });


btn[0].addEventListener('click', function (event){
   let target = event.target;
   console.log('Произошло событие: ' + event.type + ' На элменте ' + event.target);
});

link.addEventListener('click', function (event) {
   event.preventDefault();
   console.log('Произошло событие: ' + event.type + ' На элменте ' + event.target);   
});

btn.forEach(function(item) {
  item.addEventListener('mouseleave', function(){
    console.log('Вышли');
  });
});