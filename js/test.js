class Input{
	constructor(options){
		this.maxLength = options.maxLength;
		this.minLength = options.minLength;
		this.elements = options.elements;
		this.error = options.error;
	}
	controlInput(element){
		if(this.getLengthInput(element) > 0 && this.getLengthInput(element) <= this.minLength)
		{
			this.setNewStyle(element, '#2196f3');
			this.error = false;
		}
		else if(this.getLengthInput(element) > this.minLength && this.getLengthInput(element) < this.maxLength)
		{
			this.setNewStyle(element, '#4CAF50');
			this.error = false;
		}
		else if(this.getLengthInput(element) == this.maxLength)
		{
			this.error = true;
			this.setNewStyle(element, '#EE8788', '');
			this.showError(element);
		}
	}
	getLengthInput(element){
		return element.value.length;
	}
	setNewStyle(element ,color){
		element.style.color = color;
		element.style.borderColor = color;
	}
	showError(element, textError){
		let error = document.querySelector('.error-' + element.className);
		error.style.opacity = 0;
		error.innerHTML = textError;
	}
	hideError(element){
		let error = document.querySelector('.error-' + element.className);
		error.style.opacity = 0;
	}
	checkError(){
		return this.error;
	}
}

let classicInput = new Input({
	maxLength: 32,
	minLength: 4,
	elements: document.querySelectorAll('input:not(#rule):not(#avatar)'),
	error: false
});
// let passwordInput = new Input({
// 	maxLength: 32,
// 	minLength: 8,
// 	elements: document.querySelectorAll('.password'),
// 	error: false
// });
for (let element = 0; element < classicInput.elements.length; element++)
{
	classicInput.elements[element].addEventListener('input', function(){
		classicInput.controlInput(this);
	});
}