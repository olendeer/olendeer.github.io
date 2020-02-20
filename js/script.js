window.onload = function(){
    var body = document.querySelector('body');
    body.style.visibility = 'visible';
    leftMargin();
}
window.onresize = leftMargin;


function leftMargin(){
    var width = window.innerWidth;
    if(width >= 1440 && width <= 1680 || width >= 1024 && width <= 1280)
    {
        var content = document.querySelector('.description');
        var coordinateX = content.getBoundingClientRect();
        var left = coordinateX.left;
        content = document.querySelectorAll('.second_page > *, .acq');
        for(var i = 0; i < content.length; i++)
        {
            var block = content[i];
            block.style.marginLeft = left + 'px';
        }
    }
}
// $(document).ready(function() {
//     new WOW().init();
    // $('.name > h1, .p > .span1').css({
    //     'opacity' : '1'
    // });
    // $('.name > h1').textillate({ in: { effect: 'fadeIn',  delayScale: 1.5 } });
    // $('.p > .span1').textillate({ in: { effect: 'fadeIn',  delayScale: 0.1 } });
    // setTimeout(function(){
    //     $('.telegram-descripton').css({
    //         'opacity' : '1'
    //     });
    //     const tg =  document.querySelector('.telegram-descripton');
    //     tg.classList.add('animated', 'fadeInDown');
    // },200);
    // setTimeout(function(){
    //     const vk =  document.querySelector('.vk-description');
    //     vk.classList.add('animated', 'fadeInDown');
    // },300);
    // setTimeout(function(){
    //     $('.p > .a1').animate({
    //         opacity : 1
    //     },300);
    //     $('.vk-descripton, .span2').css({
    //         'opacity' : '1'
    //     });
    //     // $('.p > .span2').textillate({ in: { effect: 'fadeIn',  delayScale: 0.1 } });
    // },400);
    // setTimeout(function(){
    //     $('.p > .a2').animate({
    //         opacity : 1
    //     },300);
    //     $('.p > .span3').css({
    //         'opacity' : '1'
    //     });
    //     // $('.p > .span3').textillate({ in: { effect: 'fadeIn',  delayScale: 0.1 } });
    // },1000);
    // $('.singUp-btn').delay(1200).animate({
    //     opacity: 1
    // },300);
    // $('.aboutUs-btn').delay(1400).animate({
    //     opacity: 1
    // },300);
    // $('.wrapper_Next-btn').delay(1500).animate({
    //     opacity: 1
    // },300);
    // $('.illustrationFirstSection > img').delay(500).animate({
    //     opacity: 1
    // },700);
    // $('.secondPage').on('mouseover', function(){
    //     $('.advan-btns > .singUp-btn').delay(200).animate({
    //         opacity : 1
    //     },300);
    //     $('.comments-btn').delay(300).animate({
    //         opacity : 1
    //     },300);
    // });
    // $('.acq > h1, .a3').css({
    //     'opacity' : '1'
    // });
    // $('.acq > h1').textillate({ in: { effect: 'fadeIn',  delayScale: 1.5 } });
    // $('.a3').textillate({ in: { effect: 'fadeIn',  delayScale: 0.1 } });
    // $('.descriptionThirdSection > div > a').delay(500).animate({
    //     opacity : 1
    // },300);
    // setTimeout(function(){
    //     $('.a4').css({
    //         'opacity' : '1'
    //     });
    //     $('.a4').textillate({ in: { effect: 'fadeIn',  delayScale: 0.1 } });
    // },550);
    // $('.illustrationThirdSection1 > img, .illustrationThirdSection2 > img').delay(700).animate({
    //     opacity : 1
    // },600);
    // $('.read').delay(750).animate({
    //     opacity : 1
    // },300);
    // $('.save').delay(850).animate({
    //     opacity : 1
    // },300);
    // $('#fullpage').fullpage({
    //     // anchors:['first_page', 'second_page', 'thirdPage'],
    //     scrollBar: true,
    //     // scrollingSpeed: 450,
    //     // loopBottom: true,
    //     // afterRender: function(){
    //     //     new WOW().init();
    //     // }
    // });
    // $.fn.fullpage.setAllowScrolling(true);
    // function slowScroll(id) { 
    //     var offset = 0;
    //     $('html, body').animate({ 
    //           scrollTop: $(id).offset().top - offset 
    //     }, 1000);
    //     return false; 
    // }
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
    // $('a[href="#secondPage"]').click(function() {
    //     $(this).css({
    //         'background-color':'#B042D1',
    //         'border': '0.4vw solid #B042D1'
    //     });
    //     $('a > .next').animate({
    //         border: '0.4vw solid #B042D1'
    //     },500);
    // });
    // $('.secondPage').mouseenter(function(){
    //     $('a[href="#secondPage"]').css({
    //         'background-color':'#E7B2F7',
    //         'border': '0.4vw solid #E7B2F7'
    //     });
    // });
    // var sceneSecondSection = $('#sceneSecondSection').get(0);
    // var parallaxInstance = new Parallax(sceneSecondSection);
    // var sceneThirdSection = $('#sceneThirdSection').get(0);
    // var parallaxInstance = new Parallax(sceneThirdSection);
// });
// var user = detect.parse(navigator.userAgent);
// if(user.browser.family == 'Other') 
// {
//     $('wrapper_firstSection').removeClass('flex3');
//     $('illustrationFirstSection').removeClass('flex1');
//     $('header').removeClass('flex1').css({
//         'padding-top' : '3%',
//         'min-height' : '15%'
//     });
//     $('.wrapper_Next-btn').removeClass('flex1').css({
//         'padding-top' : '4%',
//         'min-height' : '15%'
//     });
//     $('.description > p').css({
//         'max-width' : '100%'
//     });
//     $('.description > .name').css({
//         'max-width' : '100%'
//     });
//     $('.description').removeClass('flex1').css({
//         'max-width' : '60%'
//     })
//     $('.wrapper_thirdSection').css({
//         'max-width' : '96%'
//     });
//     $('.illustrationThirdSection1').removeClass('flex1').css({
//         // 'min-width' : '100%' 
//     });
//     $('.illustrationThirdSection2').removeClass('flex2');
//     $('.acq').removeClass('flex3').css({
//         'max-width' : '50%',
//         // 'padding-left' : '2em'
//     });
// }