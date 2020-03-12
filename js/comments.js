window.onload = function(){
    var body = document.querySelector('body');
    body.style.visibility = 'visible';
    // var sceneFirstSection = $('#sceneFirstSection').get(0);
    // var parallaxInstance = new Parallax(sceneFirstSection);
	let animation_time = 0;
	comment.forEach((element) => {
		animation_time += 150;
		setTimeout(function(){
			element.style.opacity = '1';
		},animation_time);
		element.addEventListener('mousemove', function(event){
			this.classList.remove('comment_comeback');
			var coordinateComment = this.getBoundingClientRect();
			var rotateX = (coordinateComment.left + this.offsetWidth/2) - event.clientX;
			rotateX = -rotateX/70;
			var rotateY = (coordinateComment.top + this.offsetHeight/2) - event.clientY;
			rotateY = rotateY/20;
			this.style.transform = 'rotateY(' + rotateX + 'deg) rotateX(' + rotateY + 'deg)';
		});
		element.addEventListener('mouseout', function(event){
			this.classList.add('comment_comeback');
			this.style.transform = 'rotateY(0deg) rotateX(0deg)';
		});

	})
}




var comment = document.querySelectorAll('.comment');
let from = 0;
let to = 6;
function animationNewPage(comments, arrow){
	console.log(arrow);
	let translate;
	let animation_time = 0;
	if(arrow == 'next'){
		translate = -150;
		from += 6;
		to = from + 6;
		if(to > countComments)
		{
			to = countComments;
		}
	}
	else{
		to = from;
		from -=6;
		if(from <= 0)
		{
			from = 0;
			document.querySelector('.prev-arrow').removeEventListener('click',  function(){
			});
			to = 6;
		}
		translate = 150;
	}
	comments.forEach((element) => {
		animation_time += 50;
		setTimeout(function(){
			element.style.transform = 'translateX(' + translate + 'px)';
			element.style.opacity = 0;
		},animation_time);
	});
	getCommentsPage(from, to);
}

function getCommentsPage(from, to){
	// let j = 0;
	// for(let i = from; i < to; i++){
	// 	j++;
	// 	datesComments[j].innetHTML = dataComments[i].date;
	// 	autorsComments[j].innetHTML = dataComments[i].autors;
	// 	estimationComments[j].innetHTML = dataComments[i].estimation;
	// 	textComments[j].innetHTML = dataComments[i].text;
	// 	telegramComments[j].innetHTML = dataComments[i].telegram;
	// }
	console.log(from, to);
}


document.querySelector('.prev-arrow').addEventListener('click', function(){
	animationNewPage(comment, 'prev');
});
document.querySelector('.next-arrow').addEventListener('click', function(){
	animationNewPage(comment, 'next');
});


let datesComments = document.querySelectorAll('.date-comment');
let autorsComments = document.querySelectorAll('.author-comment');
let estimationComments = document.querySelectorAll('.estimation-comment');
let textComments = document.querySelectorAll('.text-comment');
let telegramComments = document.querySelectorAll('.telegram-comment');

let countComments = 14;
let countAllPages = Math.ceil(countComments / 6);

document.querySelector('.all-pages').innerHTML = '0' + countAllPages;






























// $(document).ready(function(){
// 	$('.wrapper_page > h1').css({
// 		'opacity' : '1'
// 	});
// 	$('.wrapper_page > h1').textillate({ in: { effect: 'fadeIn',  delayScale: 1.5 } });
// 	for(var i = 0; i < 6; i ++)
// 	{
// 		$('<div class="user-comment">\
// 			<img src="../img/avatars/avatar.jpg">\
// 			<div class="svg-comment">\
// 				\
// 			</div>\
// 			<div class="info-comment">\
// 				<div class="info-user">\
// 					<div class="info">\
// 						<span class="date">29.04.19</span>\
// 						<h2 class="name">Влад Казбан</h2>\
// 						<div class="rating">\
// 						</div>\
// 					</div>\
// 					<a href="" class="win-telegram">\
//             			<svg class="telegram-header" height="512pt" viewBox="0 -39 512.00011 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m504.09375 11.859375c-6.253906-7.648437-15.621094-11.859375-26.378906-11.859375-5.847656 0-12.042969 1.230469-18.410156 3.664062l-433.398438 165.441407c-23 8.777343-26.097656 21.949219-25.8984375 29.019531s4.0390625 20.046875 27.4999995 27.511719c.140626.042969.28125.085937.421876.125l89.898437 25.726562 48.617187 139.023438c6.628907 18.953125 21.507813 30.726562 38.835938 30.726562 10.925781 0 21.671875-4.578125 31.078125-13.234375l55.605469-51.199218 80.652344 64.941406c.007812.007812.019531.011718.027343.019531l.765625.617187c.070313.054688.144532.113282.214844.167969 8.964844 6.953125 18.75 10.625 28.308594 10.628907h.003906c18.675781 0 33.546875-13.824219 37.878906-35.214844l71.011719-350.640625c2.851563-14.074219.460937-26.667969-6.734375-35.464844zm-356.191406 234.742187 173.441406-88.605468-107.996094 114.753906c-1.769531 1.878906-3.023437 4.179688-3.640625 6.683594l-20.824219 84.351562zm68.132812 139.332032c-.71875.660156-1.441406 1.25-2.164062 1.792968l19.320312-78.25 35.144532 28.300782zm265.390625-344.566406-71.011719 350.644531c-.683593 3.355469-2.867187 11.164062-8.480468 11.164062-2.773438 0-6.257813-1.511719-9.824219-4.257812l-91.390625-73.585938c-.011719-.011719-.027344-.023437-.042969-.03125l-54.378906-43.789062 156.175781-165.949219c5-5.3125 5.453125-13.449219 1.074219-19.285156-4.382813-5.835938-12.324219-7.671875-18.820313-4.351563l-256.867187 131.226563-91.121094-26.070313 433.265625-165.390625c3.660156-1.398437 6.214844-1.691406 7.710938-1.691406.917968 0 2.550781.109375 3.15625.855469.796875.972656 1.8125 4.289062.554687 10.511719zm0 0"/>\
//             			</svg>\
//             		</a>\
// 					</div>\
// 					<div class="some-comment">\
// 						<p>Fucking site!Верстка на троечку, Дизайн уебище полное!</p>\
// 					</div>\
// 				</div>\
// 			</div>\
// 		</div>').appendTo('.comments');
// 	}
// 	for(var i = 0; i < 5; i ++)
// 	{
// 		$('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 47.94 47.94" style="enable-background:new 0 0 47.94 47.94;" xml:space="preserve" width="50px" height="50px" class=""><g><path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757  c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042  c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685  c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528  c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956  C22.602,0.567,25.338,0.567,26.285,2.486z" data-original="#ED8A19" class="active-path" data-old_color="#ED8A19" fill="#EFD342"/></g>\
// 			</svg>').appendTo('.rating');
// 	}
// 	var delay = 0;
// 	for(var i = 0; i < 6; i++)
// 	{
// 		$('.comments > div:nth-child(' + (i + 1) + ')').delay(delay).animate({
// 			opacity : 1
// 		},300);
// 		delay += 200;
// 	}
// 	$('.navigation').delay(1200).animate({
// 		opacity : 1
// 	},300);
// 	$('.sendcomment').on('click', function(){
// 		if(!$('.user').length)
// 		{
// 			//вывод модального окна(не зарегистрирован)
// 		}
// 		else{
// 			window.location.href = '../pages/sendcomment.php';
// 		}
// 	});
// });