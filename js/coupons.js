window.onload = function(){
    var body = document.querySelector('body');
    body.style.visibility = 'visible';
    // var sceneFirstSection = $('#sceneFirstSection').get(0);
    // var parallaxInstance = new Parallax(sceneFirstSection);
}

var width = window.innerWidth;
var section = document.querySelector('.section');
var chekpoints = [0, -width, -width*2, -width *3, -width*4, -width*5, -width*6];
var activeSlide = 0;


window.addEventListener('mousewheel', horizonScrollMouse);
window.addEventListener('keydown', horizonScrollKeyboard);


function horizonScrollKeyboard(event) 
{
    if(event.code == 'ArrowLeft' || event.code == 'ArrowUp')
    {
        prevSlide();
    }
    else if(event.code == 'ArrowRight' || event.code == 'ArrowDown'){
        nextSlide();
    }
};
function horizonScrollMouse(event)
{
    if(event.deltaY > 0){ 
       nextSlide();
    }
    else{
       prevSlide();
    }
}




function nextSlide()
{
    if(activeSlide < 6)
    {
        activeSlide +=1;    
    }
    section.style.transform = 'translateX(' + chekpoints[activeSlide] + 'px)';
}
function prevSlide()
{
    if(activeSlide > 0)
    {
        activeSlide -=1; 
    }
    section.style.transform = 'translateX(' + chekpoints[activeSlide] + 'px)';
}
// $(document).ready(function(){
//     $('.loader').animate({
//         opacity: 0
//     },1000);
//     setTimeout(function(){
//          $('.loader').css({
//             'z-index' : '-1'
//         });
//     },1000);
// 	$('.slide').horizon();
// 	$('.champions').on('mouseenter', function (){
// 		$('.champions').addClass('block-scroll');
// 	}).on('mouseleave',  function(){
// 		$('.champions').removeClass('block-scroll');
// 	});
// 	$('.lots').on('mouseenter', function (){
// 		$('.lots').addClass('block-scroll');
// 	}).on('mouseleave',  function(){
// 		$('.lots').removeClass('block-scroll');
// 	});
//     $('.colors-coupon > div').on('click', function (){
//         var colorClass = $(this).attr('class');
//         $(document).horizon('scrollTo', colorClass);
//     });
//     $(function($){
//         'use strict';
//         (function () {
//             for(var i = 1; i < 6; i++)
//             {
//                 var element = '#forcecentered' + i;
//                 var $frame = $(element);
//                 var $wrap  = $frame.parent();
//                 $frame.sly({
//                     horizontal: 1,
//                     itemNav: 'forceCentered',
//                     smart: 1,
//                     activateMiddle: 1,
//                     activateOn: 'click',
//                     mouseDragging: 1,
//                     touchDragging: 1,
//                     releaseSwing: 1,
//                     startAt: 0,
//                     scrollBar: $wrap.find('.scrollbar'),
//                     scrollBy: 1,
//                     speed: 300,
//                     elasticBounds: 1,
//                     dragHandle: 1,
//                     dynamicHandle: 1,
//                     clickBar: 1,
//                     });
//             }
//         }());
//     });
// });
// $('.user-name').on('click', function() {
//     var count = $('.user-main').css("opacity");
//     if(count == 0)
//     {
//         $('.user-main').animate({
//             opacity: "1"
//         }, 300);
//     }
//     else
//     {
//         $('.user-main').animate({
//             opacity: "0"
//         }, 300);
//     }
// });
// $('.user-main > a:last-child').on('click', function()
// {
//     $.ajax({
//         url: '../php/logout.php',
//         type: 'POST',
//         dataType: 'text',
//         success:function()
//         {
//             window.location.href = '../index.php';
//         }
//     });
// });
// var sceneCoupon = $('#sceneCoupon').get(0);
// var parallaxInstance = new Parallax(sceneCoupon);
// for(var i = 0; i < 5; i++)
// {
//     $('<div/>', {
//     'class' : 'winner',
//      append: $('<span class="date">29.10.30</span>\
//                 <div class="win-info">\
//                     <img src="../img/eblan/kazban.jpg">\
//                     <div class="nameandwin">\
//                         <span class="win-name">Казбан Владислав</span>\
//                         <span class="win-sum">Выиграл 250 рублей</span>\
//                     </div>\
//                     <a href="" class="win-telegram">\
//                         <svg class="telegram-header" height="512pt" viewBox="0 -39 512.00011 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m504.09375 11.859375c-6.253906-7.648437-15.621094-11.859375-26.378906-11.859375-5.847656 0-12.042969 1.230469-18.410156 3.664062l-433.398438 165.441407c-23 8.777343-26.097656 21.949219-25.8984375 29.019531s4.0390625 20.046875 27.4999995 27.511719c.140626.042969.28125.085937.421876.125l89.898437 25.726562 48.617187 139.023438c6.628907 18.953125 21.507813 30.726562 38.835938 30.726562 10.925781 0 21.671875-4.578125 31.078125-13.234375l55.605469-51.199218 80.652344 64.941406c.007812.007812.019531.011718.027343.019531l.765625.617187c.070313.054688.144532.113282.214844.167969 8.964844 6.953125 18.75 10.625 28.308594 10.628907h.003906c18.675781 0 33.546875-13.824219 37.878906-35.214844l71.011719-350.640625c2.851563-14.074219.460937-26.667969-6.734375-35.464844zm-356.191406 234.742187 173.441406-88.605468-107.996094 114.753906c-1.769531 1.878906-3.023437 4.179688-3.640625 6.683594l-20.824219 84.351562zm68.132812 139.332032c-.71875.660156-1.441406 1.25-2.164062 1.792968l19.320312-78.25 35.144532 28.300782zm265.390625-344.566406-71.011719 350.644531c-.683593 3.355469-2.867187 11.164062-8.480468 11.164062-2.773438 0-6.257813-1.511719-9.824219-4.257812l-91.390625-73.585938c-.011719-.011719-.027344-.023437-.042969-.03125l-54.378906-43.789062 156.175781-165.949219c5-5.3125 5.453125-13.449219 1.074219-19.285156-4.382813-5.835938-12.324219-7.671875-18.820313-4.351563l-256.867187 131.226563-91.121094-26.070313 433.265625-165.390625c3.660156-1.398437 6.214844-1.691406 7.710938-1.691406.917968 0 2.550781.109375 3.15625.855469.796875.972656 1.8125 4.289062.554687 10.511719zm0 0"/></svg>'
//                 )
//     }).appendTo('.champions');
// }
// var slides = ['#grey', '#azure', '#yellow', '#white', '#black'];
// for(var j = 1; j < 6; j++)
// {
//     for(var i = 2; i < 26; i ++)
//     {
//         $('<li>\
//             <img src="../img/coupon/coupon' + j + '.svg">\
//             <div class="wrapper-number">\
//                <span class="number-top">#002131</span>\
//                <span class="number-lot">Лот:</span>\
//                <span class="number-bottom">№31</span>\
//                <span class="number-right">' + i + '</span>\
//             </div>\
//             </li>'
//            ).appendTo(slides[j - 1] + ' > .coupon-bottom > .lots > .choice-lot > ul');
//     }
// }