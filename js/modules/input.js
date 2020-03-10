class Input{
	constructor(options){
		this.maxLength = options.maxLength;
		this.minLength = options.minLength;
		this.elements = options.elements;
		this.error = options.error;
		let errorBlock;
	}
	actionInput(action, element){
		this.minLength = this.getMinLength(element);
		switch(action){
			case 'input':
				this.controlInput(element);
				break;
			case 'focus':
				this.focusInput(element);
				break;
			case 'blur':
				this.blurInput(element);
				break;
		}
	}
	controlInput(element){
		if(this.getLengthInput(element) > 0 && this.getLengthInput(element) <= this.minLength)
		{
			this.setNewStyle(element, '#2196f3');
			this.hideError(element);
			this.error = false;
		}
		else if(this.getLengthInput(element) > this.minLength && this.getLengthInput(element) < this.maxLength)
		{
			this.setNewStyle(element, '#4CAF50');
			this.hideError(element);
			this.error = false;
		}
		else if(this.getLengthInput(element) == this.maxLength)
		{
			this.error = true;
			this.setNewStyle(element, '#EE8788');
			this.showError(element,'Слишком много символов!');
		}
	}
	focusInput(element){
		if(this.getLengthInput(element) >= 0 && this.getLengthInput(element) <= this.minLength)
		{
			this.setNewStyle(element, '#2196f3')
		}
	}
	blurInput(element){
		if(this.getLengthInput(element) == 0)
		{
			this.hideError(element);
			this.setNewStyle(element, '#84c4f8');
		}
		else if(this.getLengthInput(element)> 0 && this.getLengthInput(element) <= this.minLength)
		{
			this.showError(element, 'Слишком мало символов!');
			this.setNewStyle(element, '#EE8788');
		}
	}
	getMinLength(element){
		if(element.className == 'password')
		{
			this.minLength = 8;
		}
		else
		{
			this.minLength = 4;
		}
		return this.minLength;
	}
	getLengthInput(element){
		return element.value.length;
	}
	setNewStyle(element ,color){
		element.style.color = color;
		element.style.borderColor = color;
	}
	showError(element, textError){
		this.errorBlock = document.querySelector('.error-' + element.className);
		this.error = true;
		// element.focus();
		this.errorBlock.style.opacity = 1;
		this.errorBlock.innerHTML = textError;
	}
	hideError(element){
		this.errorBlock = document.querySelector('.error-' + element.className);
		this.errorBlock.style.opacity = 0;
		this.error = false;
	}
	checkElements(){
		for(var i = this.elements.length - 1; i >= 0; i--)
		{
			if(this.getLengthInput(this.elements[i]) == 0)
			{
				this.showError(this.elements[i], 'Вы ничего не ввели!');
				this.setNewStyle(this.elements[i], '#EE8788');
			}
		}
	}
	checkError(){
		return this.error;
	}
}
document.querySelectorAll('.eye').forEach(function(eye){
	eye.addEventListener('click' ,function(){
		this.classList.toggle('active_eye');
		var input_eye = document.getElementById(this.getAttribute('for'));
		if(input_eye.getAttribute('type') == 'password')
		{
			input_eye.setAttribute('type', 'text');
		}
		else
		{
			input_eye.setAttribute('type', 'password');
		}
	});
});