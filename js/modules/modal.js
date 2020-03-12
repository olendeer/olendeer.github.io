let closeSelector = document.querySelectorAll('.section, .close-modal, .okey-btn');
let modal = document.querySelector('.modal');
closeSelector.forEach((selector) => {
	selector.addEventListener('click', function(){
		modal.style.opacity = '0';
		modal.style.bottom = '-150px';
	});
})
function showModal(modal){
	modal.style.opacity = '1';
	modal.style.bottom = '1vw';
}