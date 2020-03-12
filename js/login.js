window.onload = function(){
    var body = document.querySelector('body');
    body.style.visibility = 'visible';
    // var sceneFirstSection = $('#sceneFirstSection').get(0);
    // var parallaxInstance = new Parallax(sceneFirstSection);
}

let classicInput = new Input({
	maxLength: 32,
	minLength: 4, 
	elements: document.querySelectorAll('input:not(#memory)'),
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

var btn = document.querySelector('.login-btn');
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
	let memory = false;
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
	let checkbox = document.querySelector('#memory');
	if(checkbox.checked)
	{
		memory = true;
	}
	if(!classicInput.checkError())
	{
		console.log('Login');
		//Вход
	}
}
var checkbox_label = document.querySelector('.memory');
checkbox_label.addEventListener('click' ,function(){
	this.classList.toggle('active_checkbox');
});














// $(document).ready(function(){
// 	$('.loginInputs > h1').css({
// 		'opacity' : '1'
// 	});
// 	$('.loginInputs > h1').textillate({ in: { effect: 'fadeIn',  delayScale: 1.5 } });
// 	$('.login').animate({
// 		opacity : '1'
// 	},200);
// 	$('.fieldset').delay(200).animate({
// 		opacity : '1'
// 	},200);
// 	$('.password-action').delay(400).animate({
// 		opacity : '1'
// 	},200);
// 	$('button[type="submit"]').delay(600).animate({
// 		opacity : '1'
// 	},200);
// 	$('form > h2').delay(1000).animate({
// 		opacity : '1'
// 	},200);
// 	$('.loginIllustration > img').delay(400).animate({
// 		opacity : '1'
// 	},700);
// 	$('.modal > a').on('click', function(){
// 		$('.modal_wrap').animate({
// 			opacity : '0',
// 		},300);
// 		setTimeout(function(){
// 			$('.modal_wrap').css({
// 				'z-index' : '-1'
// 			});
// 		},200);
// 	});

// function account()
// {
// 	var memorize = false;
// 	if($('input[name="memorize"]').prop('checked'))
// 	{
// 		memorize = true;
// 	}
// 	$.ajax({
// 		url: '../php/gotoaccount.php',
// 		type: 'POST',
// 		data: ({login: $('.login').val(), memorize: memorize,}),
// 		dataType: 'text',
// 		success:function()
// 		{
// 			window.location.href = '../index.php';
// 		}
// 	});
// }
// function checklogin(data)
// {
// 	if(!data)
// 	{
// 		$('input[name="login"]').animate({
// 			borderColor: "rgb(238,135,136)"
// 		},100).removeClass("fadeIn").addClass("jello blank");
// 		$('.description-login-error').text('Неверный логин или пароль!');
// 		$('.error-login').animate({
// 			opacity: "1"
// 		},200);
// 		console.log(data);
// 	}
// 	else
// 	{
// 		account();
// 	}
// }
// function validation()
// {
// 	var valid = true;
// 	var valid_login = login_valid();
// 	var valid_password = password_valid();
// 	if(valid_login)
// 	{
// 		$('.login').focus();
// 		valid = false;
// 	}
// 	else if(valid_password)
// 	{
// 		$('.password > input').focus();
// 		valid = false;
// 	}
// 	if(valid == true)
// 	{
// 		$.ajax({
// 			url: '../php/searchlogin.php',
// 			type: 'POST',
// 			data: ({login: $('.login').val(),password: $('.password > input').val()}),
// 			dataType: 'text',
// 			success: checklogin
// 		});
// 	}
// 	valid = false; //блок отправки
// 	return valid;
// }