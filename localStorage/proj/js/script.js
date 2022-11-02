const body = document.getElementById('body');
const bgButtons = document.querySelector('.bg-change__buttons');

let currentColor = localStorage.getItem('color') ? (localStorage.getItem('color')) : 'powderblue';
body.classList.add(`${currentColor}-theme`);


bgButtons.addEventListener('click', changeBG);

function changeBG(e) {
	const button = e.target.closest('.bg-change__button');
	if (!button) return
	if (currentColor) body.classList.remove(`${currentColor}-theme`);

	currentColor = button.id;
	body.classList.add(`${currentColor}-theme`);
	localStorage.setItem('color', currentColor);

}