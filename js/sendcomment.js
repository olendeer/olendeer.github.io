$(document).ready(function(){
	$('.comment > h1').css({
		'opacity' : '1'
	});
	$('.comment > h1').textillate({ in: { effect: 'fadeIn',  delayScale: 1.5 } });
	$('.user-comment').delay(600).animate({
		opacity : '1'
	},300);
	$('button').delay(900).animate({
		opacity : '1'
	},300);
	$('.illustration').delay(1300).animate({
		opacity : '1'
	},300);
	$('.comment-input').on("input",function(){
		$('.error-comment').animate({
			opacity: "0"
		},200);
	});
	function comment_valid()
	{
		var comment_error = false;
		var comment_input = $('.comment-input').val();
		if(comment_input.length == 0)
		{
			$('.comment-input').addClass("blank");
			$('.description-comment-error').text('Вы не ввели комментарий!');
			$('.error-comment').animate({
				opacity: "1"
			},200);
			comment_input = true;
		}
		return comment_input;
	}
	$('.sendcomment').on('click', function(){
		var valid_comment = comment_valid();
		if(!valid_comment)
		{
			//ajax запрос на добавление коммента
		}
	});
});