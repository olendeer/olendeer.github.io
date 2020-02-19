$(document).ready(function(){
	$('form > h1').css({
		'opacity' : '1'
	});
	$('form > h1').textillate({ in: { effect: 'fadeIn',  delayScale: 1.5 } });
	$('.wrapper_drapAndDrop').delay(200).animate({
		opacity : '1'
	},200);
	$('.form-wrapper-login').delay(400).animate({
		opacity : '1'
	},200);
	$('.form-wrapper-password').delay(600).animate({
		opacity : '1'
	},200);
	$('.wrap-email').delay(800).animate({
		opacity : '1'
	},200);
	$('form > button').delay(1000).animate({
		opacity : '1'
	},200);
	$('.wrap-agreement').delay(1200).animate({
		opacity : '1'
	},200);
	$('.illustration > img').delay(400).animate({
		opacity : '1'
	},700);
	$('.modal > a').on('click', function(){
		window.location.href = '../index.php';
	});
	let dropArea = document.getElementById('dragAndDrop');
	['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
		dropArea.addEventListener(eventName, preventDefaults, false);
	});
	function preventDefaults(e) 
	{
		e.preventDefault();
		e.stopPropagation();
	}
	['dragenter', 'dragover'].forEach(eventName => {
	    dropArea.addEventListener(eventName, function()
	    	{
	    		$('#dragAndDrop').css({
					'border-style' : 'solid',
					'background-color': '#2196f3'
				});
				$('.avatar-img').css({
					'border-color' : '#fff'
				});
				$('.wrapper_span > span').css({
					'color' : '#fff'
				});
				$('.drag > svg > path').css({
					'fill' : '#fff'
				});
	    	}
	    	, false);
	});
  	dropArea.addEventListener('dragleave', function()
  		{
			$('#dragAndDrop').css({
				'border-style' : 'dashed',
				'background-color': '#fff',
				'transition-duration' : '.3s'
			});
			$('.avatar-img').css({
				'border-color' : '#8FCAF9'
			});
			$('.wrapper_span > span').css({
				'color' : '#2196f3'
			});
			$('.drag > svg > path').css({
				'fill' : '#2196f3'
			});
  		}
  		, false);
	dropArea.addEventListener('drop', draganddrop , false);
	$('.wrapper_warning').on('mouseenter', function()
	{
		$('.description-avatar').animate({
			opacity : '1'
		},300);
	});
	$('.wrapper_warning').on('mouseleave', function()
	{
		$('.description-avatar').animate({
			opacity : '0'
		},300);
	});
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
$('.name').focusin(function(){
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
var name_detection = false;
$('.name').on("input",function(){
	var name_length = $.trim($('.name').val());
	if(name_length.length > 0 && name_length.length < 4)
	{
		name_detection = false;
		$(this).animate({
			borderColor: "#2196F3",
			color: "#2196F3"
		},100);
		$('.error-login').animate({
			opacity: "0"
		},300);
	}
	else if(name_length.length >= 4 && name_length.length < 32)
	{
		name_detection = true;
		$(this).animate({
			borderColor: "#4CAF50",
			color: "#4CAF50"
		},100);
		$('.error-login').animate({
			opacity: "0"
		},300);
	}
	else if(name_length.length == 32)
	{
		name_detection = false;
		$(this).animate({
			borderColor: "rgb(238,135,136)"
		},100).addClass("blank wow jello");
		valid = false;
		$('.description-login-error').text('Слишком длинное имя!');
		$('.error-login').animate({
			opacity: "1"
		},200);
	}
});
$('.name').focusout(function(){
	if(name_detection != true)
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
$('.verification > input').focusin(function(){
	if($(this).hasClass("blank") == false)
	{
		if(verification_detection != true)
		{
			$('.verification').animate({
				borderColor: "#2196F3",
			},100);
		}
	}
});
var verification_detection = false;
$('.verification > input').on("input",function(){
	var verification_length = $.trim($('.verification > input').val());
	if(verification_length.length > 0 && verification_length.length < 8)
	{
		verification_detection = false;
		$('.verification').animate({
			borderColor: "#2196F3"
		},100);
		$(this).animate({
			color: "#2196F3"
		},100);
		$('.error-password').animate({
			opacity: "0"
		},300);
	}
	else if(verification_length.length >= 8)
	{
		verification_detection = true;
		$('.verification').animate({
			borderColor: "#4CAF50"
		},100);
		$(this).animate({
			color: "#4CAF50"
		},100);
		$('.error-password').animate({
			opacity: "0"
		},300);
	}
});
$('.verification > input').focusout(function(){
	if(verification_detection != true)
	{
		$('.verification').animate({
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


$('.verification > img').on('click', function(){
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
	if($('.verification > input').attr('type') == 'password')
	{
		$('.verification > input').prop('type','text');
	}
	else
	{
		$('.verification > input').prop('type','password');
	}
});
$('.verification').on('click', function(){
	$('.verification > input').focus();
});
$('.email').focusin(function(){
	if($(this).hasClass("blank") == false)
	{
		if(email_detection != true)
		{
			$(this).animate({
				borderColor: "#2196F3",
			},100);
		}
	}
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
	$('input[name="agreement"]:checked + label,input[name="agreement"]:not(:checked) + label').on('click', function(){
	if($('input[name="agreement"]').prop('checked'))
	{
		$(this).animate({
			borderColor: "#AFAFAF",
			color: "#AFAFAF"
		},100);
		$('label[for="agreement"] > a').animate({
			borderColor: "#AFAFAF",
			color: "#AFAFAF"
		},100);
	}
	else
	{
		$('.error-agreement').animate({
			opacity: "0"
		},200);
		$(this).animate({
			borderColor: "#4CAF50",
			color: "#4CAF50"
		},100);
		$('label[for="agreement"] > a').animate({
			borderColor: "#4CAF50",
			color: "#4CAF50"
		},100);
	}
});
var email_detection = false;
$('.email').on("input", function(){
	var email_length = $.trim($('.email').val());
	if(email_length.length > 0 && email_length.length < 4)
	{
		email_detection = false;
		$(this).animate({
			borderColor: "#2196F3",
			color: "#2196F3"
		},100);
		$('.error-email').animate({
			opacity: "0"
		},300);
	}
	else if(email_length.length >= 4 && email_length.length < 32)
	{
		email_detection = true;
		$(this).animate({
			borderColor: "#4CAF50",
			color: "#4CAF50"
		},100);
		$('.error-email').animate({
			opacity: "0"
		},300);
	}
	else if(email_length.length == 32)
	{
		email_detection = false;
		$(this).animate({
			borderColor: "rgb(238,135,136)"
		},100).addClass("blank");
		valid = false;
		$('.description-email-error').text('Слишком длинная почта!');
		$('.error-email').animate({
			opacity: "1"
		},200);
	}
});
$('.email').focusout(function(){
	if(email_detection != true)
	{
		$(this).animate({
			borderColor: "#8FCAF9",
			color: "#2196F3"
		},100);
	}
	$('.error-email').animate({
		opacity: "0"
	},200);
	$(this).removeClass('blank');
	$('.modal > .ok, .modal > .close').on('click', function()
	{
		$('.modal_wrap').animate({
			opacity : '0',
			zIndex : '-1'
		},300);
	});
});
var sceneRegistration = $('#sceneRegistration').get(0);
var parallaxInstance = new Parallax(sceneRegistration);
function name_valid()
{
	var name_error = false;
	var name = $('.name').val();
	if(name.length == 0)
	{
		$('.name').animate({
			borderColor: "rgb(238,135,136)"
		},100).removeClass("fadeIn").addClass("jello blank");
		$('.description-login-error').text('Вы не ввели имя!');
		$('.error-login').animate({
			opacity: "1"
		},200);
		name_error = true;
	}
	else if(name.length > 0 && name.length < 4)
	{
		$('.name').animate({
			borderColor: "rgb(238,135,136)"
		},100).removeClass("fadeIn").addClass("jello blank");
		$('.description-login-error').text('Слишком короткое имя!');
		$('.error-login').animate({
			opacity: "1"
		},200);
		name_error = true;
	}
	else if(name.length == 32)
	{
		$('.name').removeClass("fadeIn").addClass("jello blank");
		name_error = true;
	}
	else if(name.match(/[\d]/ig) != null)
	{
		$('input[name="name"]').animate({
			borderColor: "rgb(238,135,136)"
		},100).removeClass("fadeIn").addClass("jello blank");
		$('.description-login-error').text('Вы ввели недопустимый символ!');
		$('.error-login').animate({
			opacity: "1"
		},200);
		name_error = true;
	}
	return name_error;
}
function login_valid()
{
	var login_error = false;
	var login = $('.login').val();
	if(login.length == 0)
	{
		$('.login').animate({
			borderColor: "rgb(238,135,136)"
		},100).removeClass("fadeIn").addClass("jello blank");
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
		},100).removeClass("fadeIn").addClass("jello blank");
		$('.description-login-error').text('Слишком короткий логин!');
		$('.error-login').animate({
			opacity: "1"
		},200);
		login_error = true;
	}
	else if(login.length == 32)
	{
		$('.login').removeClass("fadeIn").addClass("jello blank");
		login_error = true;
	}
	else if(login.match(/[^\d\sA-Z_]/ig) != null)
	{
		$('input[name="login"]').animate({
			borderColor: "rgb(238,135,136)"
		},100).removeClass("fadeIn").addClass("jello blank");
		$('.description-login-error').text('Вы ввели недопустимый символ!');
		$('.error-login').animate({
			opacity: "1"
		},200);
		login_error = true;
	}
	return login_error;
}
function emptyEmail(data)
{
	if(data)
	{
		$('input[name="email"]').animate({
			borderColor: "rgb(238,135,136)"
		},100).removeClass("fadeIn").addClass("jello blank");
		$('.description-email-error').text('Данная почта уже привязана к аккаунту!');
		$('.error-email').animate({
			opacity: "1"
		},200);
	}
	else
	{
		gotobase();
		modal();
	}
}
function emptyLogin(data)
{
	if(data)
	{
		$('input[name="login"]').animate({
			borderColor: "rgb(238,135,136)"
		},100).removeClass("fadeIn").addClass("jello blank");
		$('.description-login-error').text('Этот логин уже занят!');
		$('.error-login').animate({
			opacity: "1"
		},200);
	}
	else
	{
		$.ajax({
			url: '../php/emptyemail.php',
			type: 'POST',
			data: ({email: $('.email').val()}),
			dataType: 'text',
			success: emptyEmail,
		});
	}
}
function gotobase()
{
	var password = $('.password > input').val();
	var login = $('.login').val();
	var name = $('.name').val();
	var email = $('.email').val();
	$.ajax({
		url: '../php/gotobase.php',
		type: 'POST',
		data: {login: login, password: password, name: name, email: email},
		dataType: 'text'
	});
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

function verification_valid()
{
	var verification_error = false;
	var verification = $('.verification > input').val();
	if(verification != $('.password > input').val())
	{
		$('.verification').animate({
			borderColor: "rgb(238,135,136)"
		},100);
		$('.verification > input').addClass("jello blank");
		verification_error = true;
	}
	return verification_error;
}
function email_valid()
{
	var email_error = false;
	var email = $('.email').val();
	if(email.length == 0)
	{
		$('.email').animate({
			borderColor: "rgb(238,135,136)"
		},100).addClass("blank");
		$('.description-email-error').text('Вы не ввели почту!');
		$('.error-email').animate({
			opacity: "1"
		},200);
		email_error = true;
	}
	else if(email.length > 0 && email.length < 4)
	{
		$('.email').animate({
			borderColor: "rgb(238,135,136)"
		},100).addClass("blank");
		$('.description-email-error').text('Слишком короткая почта!');
		$('.error-email').animate({
			opacity: "1"
		},200);
		email_error = true;
	}
	else if(email.length == 32)
	{
		$('.email').addClass("blank");
		email_error = true;
	}
	else if(!validateEmail(email))
	{
		$('.email').animate({
			borderColor: "rgb(238,135,136)"
		},100).addClass("blank");
		$('.description-email-error').text('Недопустимая почта!');
		$('.error-email').animate({
			opacity: "1"
		},200);
		email_error = true;
	}
	return email_error;
}
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function agreement_valid()
{
	var agreement_error = false;
	if(!$('input[name="agreement"]').prop('checked'))
	{
		$('.description-agreement-error').text('Ознакомтесь с правилами сервиса!');
		$('.error-agreement').animate({
			opacity: "1"
		},200);
		agreement_error = true;
	}
	return agreement_error;
}

function validation()
{
	var valid = true;
	var valid_login = login_valid();
	var valid_name = name_valid();
	var valid_password = password_valid();
	var valid_verification = verification_valid();
	var valid_email = email_valid();
	var valid_agreement = agreement_valid();
	if(valid_name)
	{
		$('.name').focus();
		valid = false;
	}
	else if(valid_login)
	{
		$('.login').focus();
		valid = false;
	}
	else if(valid_password)
	{
		$('.password > input').focus();
		valid = false;
	}
	else if(valid_verification)
	{
		$('.verification > input').focus();
		valid = false;
	}
	else if(valid_email)
	{
		$('.email').focus();
		valid = false;
	}
	if(valid_password == false && valid_verification == true)
	{
		$('.description-password-error').text('Пароли не совпадает!');
		$('.error-password').animate({
			opacity: "1"
		},200);
		valid = false;
	}
	if(valid_agreement)
	{
		valid = false;
	}
	return valid;
}
function upload_avatar(file)
{
	console.log(file);
	var data = new FormData();
    data.append("image", file);
    $.ajax({
        url: '../php/uploadavatar.php',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false
    });
}
function avatar_loaded(avatar)
{
	$('.avatar-img > img').attr('src' , '../img/avatars/' + avatar);
}
function draganddrop(e)
{
	var file_data;
	if(e === undefined)
	{
		file_data = $("input[type=file]").prop("files")[0];
	}
	else
	{
		let dt = e.dataTransfer;
    	let files = dt.files;
    	file_data = files[0];
	}
	upload_avatar(file_data);
	$('#dragAndDrop').css({
		'background-color': '#fff',
		'border' : 'none',
		'transition-duration' : '.3s'
	});
	$('.drag > svg').animate({
		opacity : '0'
	},100);
	$('.wrapper_span > span').animate({
		opacity : '0'
	},100);
	setTimeout(function(){
		$('#dragAndDrop, .avatar, .label, .drag').css({
			'cursor' : 'default'
		});
		$('.avatar').css({
			'display' : 'none'
		});
		$('.label').css({
			'width': 'calc(1em + 2vh + 5vw)'
		});
		$('.drag ,.drag > svg').css({
			'display' : 'none'
		});
		$('.wrapper_span > span').css({
			'margin-top' : '-1px'
		});
	},1000);
	setTimeout(function(){
		$('.label').css({
			'width': '100%',
			'background-color': '#2196f3',
			'transition-duration': '1.5s'
		});
	},1500);
	setTimeout(function(){
		$('.drag').css({
			'display' : 'flex'
		});
		$('.wrapper_span > span').text('Аватар загружен').animate({
			color: '#fff',
			opacity : '1'
		});
		$('.avatar-img > img').css({
			'width': '100%',
		    'height': '100%',
		    'position': 'relative',
		    'border-radius': '50%'
		}); 
	},3000);
	setTimeout(function(){
		$('.avatar-img > img').animate({
			opacity : '0'
		},300);
	},1500);
	setTimeout(function(){
		avatar_loaded(file_data['name']);
	},2000);
	setTimeout(function(){
		$('.wrapper_tick').css({
			'width' : 'calc(.1em + .5vh + 1vw)'
		});
		$('.avatar-img > img').animate({
			opacity : '1'
		},300);
	},3100);
}
function modal()
{
	$('.modal_wrap').css({
		'z-index' : '5'
	});
	setTimeout(function(){
		$('.modal_wrap').animate({
			opacity : '1',
		},300);
	},200);
}
function valid_detection()
{
	var detection = validation();
	if(detection == true)
	{
		$.ajax({
			url: '../php/emptylogin.php',
			type: 'POST',
			data: ({login: $('.login').val()}),
			dataType: 'text',
			success: emptyLogin,
		});
	}
	detection = false; //блок отправки 
	return detection;
}