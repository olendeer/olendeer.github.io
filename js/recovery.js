window.onload = function(){
    var body = document.querySelector('body');
    body.style.visibility = 'visible';
    // var sceneFirstSection = $('#sceneFirstSection').get(0);
    // var parallaxInstance = new Parallax(sceneFirstSection);
}

let classicInput = new Input({
	maxLength: 32,
	minLength: 4, 
	elements: document.querySelectorAll('input:not(#rule)'),
	error: false
});

for (let element = 0; element < classicInput.elements.length; element++)
{
	classicInput.elements[element].addEventListener('input', function(){
		classicInput.actionInput('input',this);
	});
	classicInput.elements[element].addEventListener('focus', function(){
		classicInput.actionInput('focus',this);
	});
	classicInput.elements[element].addEventListener('blur', function(){
		classicInput.actionInput('blur',this);
	});
}

var checkbox_label = document.querySelector('.rule');
var checkbox_error = document.querySelector('.error-rule');
checkbox_label.addEventListener('click' ,function(){
	this.classList.toggle('active_checkbox');
	checkbox_error.style.opacity = '0';
	classicInput.error = false;
});

var btn = document.querySelector('.send-btn');
btn.addEventListener('click', checkInput);
window.addEventListener('keydown', function(event){
	if(event.keyCode == 13)
	{
		checkInput(event);
	}
});

function checkInput(event)
{
	event.preventDefault();
	classicInput.checkElements();
	var regexp_login = /[^a-zA-Z0-9_@\.-]/g;
	var regexp_email = /@/g;
	if(regexp_login.test(classicInput.elements[0].value) == true)
	{
		classicInput.showError(classicInput.elements[1],'Вы ввели недопустимый символ!');
		classicInput.setNewStyle(classicInput.elements[0], '#EE8788');
		//login ajax
	}
	else if(regexp_email.test(classicInput.elements[0].value) == true){
		//Ajax check email
	}
	else{
		//Ajax check login
	}
	let checkbox = document.querySelector('#rule');
	if(!checkbox.checked)
	{
		classicInput.showError(checkbox_label,'Ознакомтесь с пользовательским соглашением!');
	}
	if(!classicInput.checkError())
	{
		console.log('Login');
		//Вход
	}
}



// $(document).ready(function(){
// 	$('.content > h1').css({
// 		'opacity': '1'
// 	});
// 	$('.content > h1').textillate({ in: { effect: 'fadeIn',  delayScale: 1.5 } });
// 	$('.content > .description').delay(200).animate({
// 		opacity : '1'
// 	},200);
// 	$('form > div:first-child').delay(400).animate({
// 		opacity : '1'
// 	},200);
// 	$('form > div:not(:first-child)').delay(600).animate({
// 		opacity : '1'
// 	},200);
// 	$('form > button').delay(800).animate({
// 		opacity : '1'
// 	},200);
// 	$('.wrap_agreement').delay(1000).animate({
// 		opacity : '1'
// 	},200);
// 	$('.illustration > img').delay(1000).animate({
// 		opacity : '1'
// 	},1000);
// 	$('.email').focusin(function(){
// 		if($(this).hasClass("blank") == false)
// 		{
// 			if(email_detection != true)
// 			{
// 				$(this).animate({
// 					borderColor: "#2196F3",
// 				},100);
// 			}
// 		}
// 	});
// 	var email_detection = false;
// 	$('.email').on("input", function(){
// 		var email_length = $.trim($('.email').val());
// 		if(email_length.length > 0 && email_length.length < 4)
// 		{
// 			email_detection = false;
// 			$(this).animate({
// 				borderColor: "#2196F3",
// 				color: "#2196F3"
// 			},100);
// 			$('.error-email').animate({
// 				opacity: "0"
// 			},300);
// 		}
// 		else if(email_length.length >= 4 && email_length.length < 32)
// 		{
// 			email_detection = true;
// 			$(this).animate({
// 				borderColor: "#4CAF50",
// 				color: "#4CAF50"
// 			},100);
// 			$('.error-email').animate({
// 				opacity: "0"
// 			},300);
// 		}
// 		else if(email_length.length == 32)
// 		{
// 			email_detection = false;
// 			$(this).animate({
// 				borderColor: "rgb(238,135,136)"
// 			},100).addClass("blank");
// 			valid = false;
// 			$('.description-email-error').text('Слишком длинная почта!');
// 			$('.error-email').animate({
// 				opacity: "1"
// 			},200);
// 		}
// 	});
// 	$('.email').focusout(function(){
// 		if(email_detection != true)
// 		{
// 			$(this).animate({
// 				borderColor: "#8FCAF9",
// 				color: "#2196F3"
// 			},100);
// 		}
// 		$('.error-email').animate({
// 			opacity: "0"
// 		},200);
// 		$(this).removeClass('blank');
// 	});
// 	$('.login').focusin(function(){
// 		if($(this).hasClass("blank") == false)
// 		{
// 			if(login_detection != true)
// 			{
// 				$(this).animate({
// 					borderColor: "#2196F3",
// 				},100);
// 			}
// 		}
// 	});
// 	var login_detection = false;
// 	$('.login').on("input",function(){
// 		var login_length = $.trim($('.login').val());
// 		if(login_length.length > 0 && login_length.length < 4)
// 		{
// 			login_detection = false;
// 			$(this).animate({
// 				borderColor: "#2196F3",
// 				color: "#2196F3"
// 			},100);
// 			$('.error-login').animate({
// 				opacity: "0"
// 			},300);
// 		}
// 		else if(login_length.length >= 4 && login_length.length < 32)
// 		{
// 			login_detection = true;
// 			$(this).animate({
// 				borderColor: "#4CAF50",
// 				color: "#4CAF50"
// 			},100);
// 			$('.error-login').animate({
// 				opacity: "0"
// 			},300);
// 		}
// 		else if(login_length.length == 32)
// 		{
// 			login_detection = false;
// 			$(this).animate({
// 				borderColor: "rgb(238,135,136)"
// 			},100).addClass("blank");
// 			valid = false;
// 			$('.description-login-error').text('Слишком длинный логин!');
// 			$('.error-login').animate({
// 				opacity: "1"
// 			},200);
// 		}
// 	});
// 	$('.login').focusout(function(){
// 		if(login_detection != true)
// 		{
// 			$(this).animate({
// 				borderColor: "#8FCAF9",
// 				color: "#2196F3"
// 			},100);
// 		}
// 		$('.error-login').animate({
// 			opacity: "0"
// 		},200);
// 		$(this).removeClass('blank');
// 	});
// 	$('input[name="agreement"]:checked + label,input[name="agreement"]:not(:checked) + label').on('click', function(){
// 		if($('input[name="agreement"]').prop('checked'))
// 		{
// 			$(this).animate({
// 				borderColor: "#AFAFAF",
// 				color: "#AFAFAF"
// 			},100);
// 			$('label[for="agreement"] > a').animate({
// 				borderColor: "#AFAFAF",
// 				color: "#AFAFAF"
// 			},100);
// 		}
// 		else
// 		{
// 			$('.error-agreement').animate({
// 				opacity: "0"
// 			},200);
// 			$(this).animate({
// 				borderColor: "#4CAF50",
// 				color: "#4CAF50"
// 			},100);
// 			$('label[for="agreement"] > a').animate({
// 				borderColor: "#4CAF50",
// 				color: "#4CAF50"
// 			},100);
// 		}
// 	});
// 	$('.modal > .ok, .modal > .close').on('click', function()
// 	{
// 		$('.modal_wrap').animate({
// 			opacity : '0',
// 			zIndex : '-1'
// 		},300);
// 	});
// });
// var sceneRecovery = $('#sceneRecovery').get(0);
// var parallaxInstance = new Parallax(sceneRecovery);
// var user = detect.parse(navigator.userAgent);
// if(user.browser.family == 'Firefox') 
// {
//     $('.error-agreement').css({
//     	'margin-top' : 'calc(.1em + 17.7vw + 6vh)'
//     });
// }
// else if(user.browser.family == 'Other')
// {
// 	$('.error-login, .error-password, .error-agreement, form > h2 > a').css({
// 		'display' : 'none'
// 	});
// }
// function login_valid()
// {
// 	var login_error = false;
// 	var login = $('.login').val();
// 	if(login.length == 0)
// 	{
// 		$('.login').animate({
// 			borderColor: "rgb(238,135,136)"
// 		},100).addClass("blank");
// 		$('.description-login-error').text('Вы не ввели логин!');
// 		$('.error-login').animate({
// 			opacity: "1"
// 		},200);
// 		login_error = true;
// 	}
// 	else if(login.length > 0 && login.length < 4)
// 	{
// 		$('.login').animate({
// 			borderColor: "rgb(238,135,136)"
// 		},100).addClass("blank");
// 		$('.description-login-error').text('Слишком короткий логин!');
// 		$('.error-login').animate({
// 			opacity: "1"
// 		},200);
// 		login_error = true;
// 	}
// 	else if(login.length == 32)
// 	{
// 		$('.login').addClass("blank").focus();
// 		login_error = true;
// 	}
// 	else if(login.match(/[^\d\sA-Z_]/ig) != null)
// 	{
// 		$('.login').animate({
// 			borderColor: "rgb(238,135,136)"
// 		},100).addClass("blank");
// 		$('.description-login-error').text('Вы ввели недопустимый символ!');
// 		$('.error-login').animate({
// 			opacity: "1"
// 		},200);
// 		login_error = true;
// 	}
// 	return login_error;
// }

// function email_valid()
// {
// 	var email_error = false;
// 	var email = $('.email').val();
// 	if(email.length == 0)
// 	{
// 		$('.email').animate({
// 			borderColor: "rgb(238,135,136)"
// 		},100).addClass("blank").focus();
// 		$('.description-email-error').text('Вы не ввели почту!');
// 		$('.error-email').animate({
// 			opacity: "1"
// 		},200);
// 		email_error = true;
// 	}
// 	else if(email.length > 0 && email.length < 4)
// 	{
// 		$('.email').animate({
// 			borderColor: "rgb(238,135,136)"
// 		},100).addClass("blank").focus();
// 		$('.description-email-error').text('Слишком короткая почта!');
// 		$('.error-email').animate({
// 			opacity: "1"
// 		},200);
// 		email_error = true;
// 	}
// 	else if(email.length == 32)
// 	{
// 		$('.email').addClass("blank").focus();
// 		email_error = true;
// 	}
// 	else if(!validateEmail(email))
// 	{
// 		$('.email').animate({
// 			borderColor: "rgb(238,135,136)"
// 		},100).addClass("blank").focus();
// 		$('.description-email-error').text('Недопустимая почта!');
// 		$('.error-email').animate({
// 			opacity: "1"
// 		},200);
// 		email_error = true;
// 	}
// 	return email_error;
// }
// function validateEmail(email) {
//   var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email);
// }
// function agreement_valid()
// {
// 	var agreement_error = false;
// 	if(!$('input[name="agreement"]').prop('checked'))
// 	{
// 		$('.description-agreement-error').text('Ознакомтесь с правилами сервиса!');
// 		$('.error-agreement').animate({
// 			opacity: "1"
// 		},200);
// 		agreement_error = true;
// 	}
// 	return agreement_error;
// }
// function validation()
// {
// 	var valid = true;
// 	var valid_email = email_valid();
// 	var valid_login = login_valid();
// 	var valid_agreement = agreement_valid();
// 	if(valid_email)
// 	{
// 		$('.email').focus();
// 		valid = false;
// 	}
// 	else if(valid_login)
// 	{
// 		$('.login').focus();
// 		valid = false;
// 	}
// 	if(valid_agreement)
// 	{
// 		valid = false;
// 	}
// 	return valid;
// }
// function modal()
// {
// 	$('.modal_wrap').animate({
// 		opacity : '1',
// 		zIndex : '5'
// 	},300);
// }
// function checklogin(data)
// {
// 	if(data)
// 	{
// 		$.ajax({
// 			url: '../php/randompassword.php',
// 			type: 'POST',
// 			data: ({login: $('.login').val(), email: $('.email').val()}),
// 			dataType: 'text',
// 			success: function(data)
// 			{
// 				if(!data)
// 				{
// 					$('.email').animate({
// 						borderColor: "rgb(238,135,136)"
// 					},100).addClass("blank");
// 					$('.description-email-error').text('К этому логину привязана другая почта!');
// 					$('.error-email').animate({
// 						opacity: "1"
// 					},200);
// 				}
// 				else
// 				{
// 					modal();
// 				}
// 			}
// 		});
// 	}
// 	else
// 	{
// 		$('.login').animate({
// 			borderColor: "rgb(238,135,136)"
// 		},100).addClass("blank");
// 		$('.description-login-error').text('Пользователь не найден!');
// 		$('.error-login').animate({
// 			opacity: "1"
// 		},200);
// 	}
// }
// function valid_detection()
// {
// 	var detection = validation();
// 	if(detection)
// 	{
// 		$.ajax({
// 			url: '../php/emptylogin.php',
// 			type: 'POST',
// 			data: ({login: $('.login').val()}),
// 			dataType: 'text',
// 			success: checklogin,
// 		});
// 		detection = false; //блок отправки 
// 	}
// 	return detection;
// }