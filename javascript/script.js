$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

document.querySelector('#menu-button').addEventListener('click', openMenu);

function openMenu(){
    window.open('file:///D:/Downloads/kamdingGit/kamding/kamdingmenu.pdf');
}