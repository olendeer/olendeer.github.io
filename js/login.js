$(document).ready(function(){
	$('.loginInputs > h1').css({
		'opacity' : '1'
	});
	$('.loginInputs > h1').textillate({ in: { effect: 'fadeIn',  delayScale: 1.5 } });
	$('.login').animate({
		opacity : '1'
	},200);
	$('.fieldset').delay(200).animate({
		opacity : '1'
	},200);
	$('.password-action').delay(400).animate({
		opacity : '1'
	},200);
	$('button[type="submit"]').delay(600).animate({
		opacity : '1'
	},200);
	$('form > h2').delay(1000).animate({
		opacity : '1'
	},200);
	$('.loginIllustration > img').delay(400).animate({
		opacity : '1'
	},700);
	$('.modal > a').on('click', function(){
		$('.modal_wrap').animate({
			opacity : '0',
		},300);
		setTimeout(function(){
			$('.modal_wrap').css({
				'z-index' : '-1'
			});
		},200);
	});
	$('.login').focusin(function(){
		if($(this).hasClass("blank") == false)
		{	
			if(login_detection != true)
			{
				$(this).animate({
					borderColor: "#2196F3",
				},100);
			}
		}
	});
	var login_detection = false;
	$('.login').on("input",function(){
		var login_length = $.trim($('.login').val());
		if(login_length.length > 0 && login_length.length < 4)
		{
			login_detection = false;
			$(this).animate({
				borderColor: "#2196F3",
				color: "#2196F3"
			},100);
			$('.error-login').animate({
				opacity: "0"
			},300);
		}
		else if(login_length.length >= 4 && login_length.length < 32)
		{
			login_detection = true;
			$(this).animate({
				borderColor: "#4CAF50",
				color: "#4CAF50"
			},100);
			$('.error-login').animate({
				opacity: "0"
			},300);
		}
		else if(login_length.length == 32)
		{
			login_detection = false;
			$(this).animate({
				borderColor: "rgb(238,135,136)"
			},100).addClass("blank wow jello");
			valid = false;
			$('.description-login-error').text('Слишком длинный логин!');
			$('.error-login').animate({
				opacity: "1"
			},200);
		}
	});
	$('.login').focusout(function(){
		if(login_detection != true)
		{
			$(this).animate({
				borderColor: "#8FCAF9",
				color: "#2196F3"
			},100);
		}
		$('.error-login').animate({
			opacity: "0"
		},200);
		$(this).removeClass('blank');
	});
	$('.password > input').focusin(function(){
		if($(this).hasClass("blank") == false)
		{
			if(password_detection != true)
			{
				$('.password').animate({
					borderColor: "#2196F3",
				},100);
			}
		}
	});
	var password_detection = false;
	$('.password > input').on("input",function(){
		var password_length = $.trim($('.password > input').val());
		if(password_length.length > 0 && password_length.length < 8)
		{
			password_detection = false;
			$('.password').animate({
				borderColor: "#2196F3",
			},100);
			$(this).animate({
				color: "#2196F3"
			},100);
			$('.error-password').animate({
				opacity: "0"
			},300);
		}
		else if(password_length.length >= 8 && password_length.length < 24)
		{
			password_detection = true;
			$('.password').animate({
				borderColor: "#4CAF50"
			},100);
			$(this).animate({
				color: "#4CAF50"
			},100);
			$('.error-password').animate({
				opacity: "0"
			},300);
		}
		else if(password_length.length == 24)
		{
			password_detection = false;
			$('.password').animate({
				borderColor: "rgb(238,135,136)"
			},100).addClass("blank wow jello");
			valid = false;
			$('.description-password-error').text('Слишком длинный пароль!');
			$('.error-password').animate({
				opacity: "1"
			},200);
		}
	});
	$('.password > input').focusout(function(){
		if(password_detection != true)
		{
			$('.password').animate({
				borderColor: "#8FCAF9"
			},100);
			$(this).animate({
				color: "#2196F3"
			},100);
		}
		$('.error-password').animate({
			opacity: "0"
		},200);
		$(this).removeClass('blank');
	});

	$('.password > img').on('click', function(){
		if($(this).css('opacity') == 0.5)
		{
			$(this).animate({
				opacity: 1
			},200);
		}
		else
		{
			$(this).animate({
				opacity: 0.5
			},200);
		}
		if($('.password > input').attr('type') == 'password')
		{
			$('.password > input').prop('type','text');
		}
		else
		{
			$('.password > input').prop('type','password');
		}
	});
	$('.password').on('click', function(){
		$('.password > input').focus();
	});
	$('input[type=checkbox]:checked + label,input[type=checkbox]:not(:checked) + label').click(function(){
		if($('input[name="memorize"]').prop('checked'))
		{
			$(this).animate({
				borderColor: "#8FCAF9",
				color: "#8FCAF9"
			},100);
		}
		else
		{
			$(this).animate({
				borderColor: "#4CAF50",
				color: "#4CAF50"
			},100);
		}
	});
});
function login_valid()
{
	var login_error = false;
	var login = $('.login').val();
	if(login.length == 0)
	{
		$('.login').animate({
			borderColor: "rgb(238,135,136)"
		},100).removeClass("fadeIn").addClass("jello blank").focus();
		$('.description-login-error').text('Вы не ввели логин!');
		$('.error-login').animate({
			opacity: "1"
		},200);
		login_error = true;
	}
	else if(login.length > 0 && login.length < 4)
	{
		$('.login').animate({
			borderColor: "rgb(238,135,136)"
		},100).removeClass("fadeIn").addClass("jello blank").focus();
		$('.description-login-error').text('Слишком короткий логин!');
		$('.error-login').animate({
			opacity: "1"
		},200);
		login_error = true;
	}
	else if(login.length == 32)
	{
		$('.login').removeClass("fadeIn").addClass("jello blank").focus();
		login_error = true;
	}
	else if(login.match(/[^\d\sA-Z_]/ig) != null)
	{
		$('input[name="name"]').animate({
			borderColor: "rgb(238,135,136)"
		},100).removeClass("fadeIn").addClass("jello blank").focus();
		$('.description-login-error').text('Вы ввели недопустимый символ!');
		$('.error-login').animate({
			opacity: "1"
		},200);
		login_error = true;
	}
	return login_error;
}

function password_valid()
{
	var password_error = false;
	var password = $('.password > input').val();
	if(password.length == 0)
	{
		$('.password').animate({
			borderColor: "rgb(238,135,136)"
		},100);
		$('.password > input').removeClass("fadeIn").addClass("jello blank");
		$('.description-password-error').text('Вы не ввели пароль!');
		$('.error-password').animate({
			opacity: "1"
		},200);
		password_error = true;
	}
	else if(password.length > 0 && password.length < 8)
	{
		$('.password').animate({
			borderColor: "rgb(238,135,136)"
		},100);
		$('.password > input').addClass("jello blank");
		$('.description-password-error').text('Слишком короткий пароль!');
		$('.error-password').animate({
			opacity: "1"
		},200);
		password_error = true;
	}
	else if(password.length == 24)
	{
		$('.password').addClass("jello blank");
		password_error = true;
	}
	else if(password.match(/[^\d\sA-Z_]/ig) != null)
	{
		$('.password').animate({
			borderColor: "rgb(238,135,136)"
		},100);
		$('password > input').addClass("jello blank");
		$('.description-password-error').text('Вы ввели недопустимый символ!');
		$('.error-password').animate({
			opacity: "1"
		},200);
		password_error = true;
	}
	return password_error;
}
function account()
{
	var memorize = false;
	if($('input[name="memorize"]').prop('checked'))
	{
		memorize = true;
	}
	$.ajax({
		url: '../php/gotoaccount.php',
		type: 'POST',
		data: ({login: $('.login').val(), memorize: memorize,}),
		dataType: 'text',
		success:function()
		{
			window.location.href = '../index.php';
		}
	});
}
function checklogin(data)
{
	if(!data)
	{
		$('input[name="login"]').animate({
			borderColor: "rgb(238,135,136)"
		},100).removeClass("fadeIn").addClass("jello blank");
		$('.description-login-error').text('Неверный логин или пароль!');
		$('.error-login').animate({
			opacity: "1"
		},200);
		console.log(data);
	}
	else
	{
		account();
	}
}
function validation()
{
	var valid = true;
	var valid_login = login_valid();
	var valid_password = password_valid();
	if(valid_login)
	{
		$('.login').focus();
		valid = false;
	}
	else if(valid_password)
	{
		$('.password > input').focus();
		valid = false;
	}
	if(valid == true)
	{
		$.ajax({
			url: '../php/searchlogin.php',
			type: 'POST',
			data: ({login: $('.login').val(),password: $('.password > input').val()}),
			dataType: 'text',
			success: checklogin
		});
	}
	valid = false; //блок отправки
	return valid;
}