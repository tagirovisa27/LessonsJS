
$(document).ready(function () {
    $('.list-item:first').hover(function () {
        $(this).toggleClass('active');
    });
    $('.list-item:eq(1)').on('click', function () {
        $('.block:even').fadeToggle('4000');
    });
    $('.list-item:eq(4)').on('click', function () {
        $('.block:odd').animate(
            {
                opacity: 'toggle',
                height: 'toggle'
            }, 3000
        )
    });
});

// document.querySelectorAll('.list-item').forEach(); - $
// classList - toggleClass
// addEventListener(); - on
// fetch - $.ajax
// animate.css - animate
