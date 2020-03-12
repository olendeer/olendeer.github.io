window.onload = function(){
    var body = document.querySelector('body');
    body.style.visibility = 'visible';
    var sceneFirstSection =  document.querySelector('#sceneFirstSection');
    var parallaxInstance = new Parallax(sceneFirstSection);
}

var draganddrop = document.querySelector('.draganddrop');
var drop_zone = document.querySelector('.label-avatar');
var content = document.querySelector('.drop-zone');
var avatar = document.querySelector('.foto-avatar');
var progress_bar = document.querySelector('.foto-avatar > svg > circle');
var widthCircle = 2 * Math.PI * progress_bar.r.baseVal.value;
progress_bar.style.strokeDashoffset = widthCircle;
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
	draganddrop.addEventListener(eventName, preventDefaults, false);
});
function preventDefaults(event) 
{
	event.preventDefault();
	event.stopPropagation();
}
draganddrop.addEventListener('dragenter', function(event){
	drop_zone.classList.add('active_label_avatar');
	drop_zone.style.borderColor = '#84c4f8';
});
draganddrop.addEventListener('dragleave', function(event){
	drop_zone.classList.remove('active_label_avatar');
});
draganddrop.addEventListener('drop', getAvatar, false);

function getAvatar(files)
{
	let upload_file;
	if(files[0] == undefined)
	{

		upload_file = files.dataTransfer.files[0];
	}
	else
	{
		drop_zone.classList.add('active_label_avatar');
		upload_file = files[0];
	}
	if(!/image/.test(upload_file.type))
	{
		drop_zone.style.borderColor = '#EE8788';
		drop_zone.classList.remove('active_label_avatar');
		return false;
	}
	else
	{
		//AJAX upload foto
	}
	content.style.opacity = '0';
	var width_drop_zone = drop_zone.offsetWidth;
	setTimeout(function(){
		drop_zone.style.width = avatar.offsetWidth + 'px';
		drop_zone.style.marginRight = (width_drop_zone - avatar.offsetWidth - 20) + 'px';
	},200);
	setTimeout(function(){
		document.querySelector('.foto-avatar > img').style.opacity = '0';
	},700);
	setTimeout(function(){
		drop_zone.style.transitionDuration = '1s';
		drop_zone.style.width = width_drop_zone + 'px';
		drop_zone.style.marginRight = '0px';
		content.style.flexDirection = 'row';
		document.querySelector('.drop-zone > svg').style.display = 'none';
		document.querySelector('.drop-zone > span').innerHTML = 'Аватар загружен';
		document.querySelector('.drop-zone > span').style.fontSize = '0.8rem';
		document.querySelector('.drop-zone > span').style.fontWeight = '600';
		document.querySelector('.drop-zone > .wrap_check_img').style.display = 'block';
	},900);
	setTimeout(function(){
		progress_bar.style.strokeDashoffset = widthCircle * 2;
		progress_bar.style.strokeDasharray = `${widthCircle} ${widthCircle}`;
		content.style.opacity = '1';
	},1200);
	setTimeout(function(){
		document.querySelector('.drop-zone > .wrap_check_img').style.width = '15px';
	},2500);
	['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
		draganddrop.removeEventListener(eventName, preventDefaults, false);
	});
}

var checkbox_label = document.querySelector('.rule');
var checkbox_error = document.querySelector('.error-rule');
checkbox_label.addEventListener('click' ,function(){
	this.classList.toggle('active_checkbox');
	checkbox_error.style.opacity = '0';
	classicInput.error = false;
});


let classicInput = new Input({
	maxLength: 32,
	minLength: 4, 
	elements: document.querySelectorAll('input:not(#rule):not(#avatar)'),
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

var btn = document.querySelector('.registration-btn');
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
	var regexp_name = /[^a-zA-Za-яА-Я ]/g;
	var regexp_login = /[^a-zA-Z0-9_]/g;
	if(classicInput.elements[2].value != classicInput.elements[3].value)
	{
		classicInput.showError(classicInput.elements[3],'Пароли не совпадают!');
		classicInput.setNewStyle(classicInput.elements[3], '#EE8788');
	}
	if(regexp_login.test(classicInput.elements[1].value) == true)
	{
		classicInput.showError(classicInput.elements[1],'Вы ввели недопустимый символ!');
		classicInput.setNewStyle(classicInput.elements[0], '#EE8788');
		//login ajax
	}
	if(regexp_name.test(classicInput.elements[0].value) == true)
	{
		classicInput.showError(classicInput.elements[0],'Вы ввели недопустимый символ!');
		classicInput.setNewStyle(classicInput.elements[0], '#EE8788');
	}
	let checkbox = document.querySelector('#rule');
	if(!checkbox.checked)
	{
		classicInput.showError(checkbox_label,'Ознакомтесь с пользовательским соглашением!');
	}
	// email ajax

	if(!classicInput.checkError())
	{
		console.log('Ajax request');
		//функция отправки данных по ajax
	}
}

// $(document).ready(function(){
// 	$('form > h1').css({
// 		'opacity' : '1'
// 	});
// 	$('form > h1').textillate({ in: { effect: 'fadeIn',  delayScale: 1.5 } });
// 	$('.wrapper_drapAndDrop').delay(200).animate({
// 		opacity : '1'
// 	},200);
// 	$('.form-wrapper-login').delay(400).animate({
// 		opacity : '1'
// 	},200);
// 	$('.form-wrapper-password').delay(600).animate({
// 		opacity : '1'
// 	},200);
// 	$('.wrap-email').delay(800).animate({
// 		opacity : '1'
// 	},200);
// 	$('form > button').delay(1000).animate({
// 		opacity : '1'
// 	},200);
// 	$('.wrap-agreement').delay(1200).animate({
// 		opacity : '1'
// 	},200);
// 	$('.illustration > img').delay(400).animate({
// 		opacity : '1'
// 	},700);
// 	$('.modal > a').on('click', function(){
// 		window.location.href = '../index.php';
// 	});



// function emptyEmail(data)
// {
// 	if(data)
// 	{
// 		$('input[name="email"]').animate({
// 			borderColor: "rgb(238,135,136)"
// 		},100).removeClass("fadeIn").addClass("jello blank");
// 		$('.description-email-error').text('Данная почта уже привязана к аккаунту!');
// 		$('.error-email').animate({
// 			opacity: "1"
// 		},200);
// 	}
// 	else
// 	{
// 		gotobase();
// 		modal();
// 	}
// }
// function emptyLogin(data)
// {
// 	if(data)
// 	{
// 		$('input[name="login"]').animate({
// 			borderColor: "rgb(238,135,136)"
// 		},100).removeClass("fadeIn").addClass("jello blank");
// 		$('.description-login-error').text('Этот логин уже занят!');
// 		$('.error-login').animate({
// 			opacity: "1"
// 		},200);
// 	}
// 	else
// 	{
// 		$.ajax({
// 			url: '../php/emptyemail.php',
// 			type: 'POST',
// 			data: ({email: $('.email').val()}),
// 			dataType: 'text',
// 			success: emptyEmail,
// 		});
// 	}
// }
// function gotobase()
// {
// 	var password = $('.password > input').val();
// 	var login = $('.login').val();
// 	var name = $('.name').val();
// 	var email = $('.email').val();
// 	$.ajax({
// 		url: '../php/gotobase.php',
// 		type: 'POST',
// 		data: {login: login, password: password, name: name, email: email},
// 		dataType: 'text'
// 	});
// }
// function validateEmail(email) {
//   var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email);
// }

//
// function upload_avatar(file)
// {
// 	console.log(file);
// 	var data = new FormData();
//     data.append("image", file);
//     $.ajax({
//         url: '../php/uploadavatar.php',
//         type: 'POST',
//         data: data,
//         cache: false,
//         dataType: 'json',
//         processData: false,
//         contentType: false
//     });
// }
// function avatar_loaded(avatar)
// {
// 	$('.avatar-img > img').attr('src' , '../img/avatars/' + avatar);
// }
// function draganddrop(e)
// {
// 	var file_data;
// 	if(e === undefined)
// 	{
// 		file_data = $("input[type=file]").prop("files")[0];
// 	}
// 	else
// 	{
// 		let dt = e.dataTransfer;
//     	let files = dt.files;
//     	file_data = files[0];
// 	}
// 	upload_avatar(file_data);
// 	$('#dragAndDrop').css({
// 		'background-color': '#fff',
// 		'border' : 'none',
// 		'transition-duration' : '.3s'
// 	});
// 	$('.drag > svg').animate({
// 		opacity : '0'
// 	},100);
// 	$('.wrapper_span > span').animate({
// 		opacity : '0'
// 	},100);
// 	setTimeout(function(){
// 		$('#dragAndDrop, .avatar, .label, .drag').css({
// 			'cursor' : 'default'
// 		});
// 		$('.avatar').css({
// 			'display' : 'none'
// 		});
// 		$('.label').css({
// 			'width': 'calc(1em + 2vh + 5vw)'
// 		});
// 		$('.drag ,.drag > svg').css({
// 			'display' : 'none'
// 		});
// 		$('.wrapper_span > span').css({
// 			'margin-top' : '-1px'
// 		});
// 	},1000);
// 	setTimeout(function(){
// 		$('.label').css({
// 			'width': '100%',
// 			'background-color': '#2196f3',
// 			'transition-duration': '1.5s'
// 		});
// 	},1500);
// 	setTimeout(function(){
// 		$('.drag').css({
// 			'display' : 'flex'
// 		});
// 		$('.wrapper_span > span').text('Аватар загружен').animate({
// 			color: '#fff',
// 			opacity : '1'
// 		});
// 		$('.avatar-img > img').css({
// 			'width': '100%',
// 		    'height': '100%',
// 		    'position': 'relative',
// 		    'border-radius': '50%'
// 		}); 
// 	},3000);
// 	setTimeout(function(){
// 		$('.avatar-img > img').animate({
// 			opacity : '0'
// 		},300);
// 	},1500);
// 	setTimeout(function(){
// 		avatar_loaded(file_data['name']);
// 	},2000);
// 	setTimeout(function(){
// 		$('.wrapper_tick').css({
// 			'width' : 'calc(.1em + .5vh + 1vw)'
// 		});
// 		$('.avatar-img > img').animate({
// 			opacity : '1'
// 		},300);
// 	},3100);
// }
// function modal()
// {
// 	$('.modal_wrap').css({
// 		'z-index' : '5'
// 	});
// 	setTimeout(function(){
// 		$('.modal_wrap').animate({
// 			opacity : '1',
// 		},300);
// 	},200);
// }
// function valid_detection()
// {
// 	var detection = validation();
// 	if(detection == true)
// 	{
// 		$.ajax({
// 			url: '../php/emptylogin.php',
// 			type: 'POST',
// 			data: ({login: $('.login').val()}),
// 			dataType: 'text',
// 			success: emptyLogin,
// 		});
// 	}
// 	detection = false; //блок отправки 
// 	return detection;
// }