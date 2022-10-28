console.log('%cПривет:)', 'font-size: 50px;font-weight: 700;padding: 1em;color: yellow;text-transform: capitalize;background-color: purple;text-shadow: -4px 4px 0px violet;')


//----------------validation--------------------//
const form = document.getElementById('validate-form');
const errorP = document.querySelector('.validation__alert');

class ValidationError extends Error {
	constructor(message) {
		super(message); // (1)
		this.name = "Validation Error"; // (2)
	}
}

function validateNumInput(input) {
	try {
		if (input.className.includes('wrong')) { input.classList.remove('wrong') };

		console.log(input.value);
		if (!input.value) throw new ValidationError('Вы ничего не ввели');

		let value = input['value'].trim();

		value = +value;
		if (!value) throw new ValidationError('Не является числом')

		if (value < 5) throw new ValidationError('число слишком мало');
		if (value > 10) throw new ValidationError('число слишком велико');
	}
	catch (e) {
		if (e instanceof ValidationError) {
			setTimeout(() => {
				input.classList.add('wrong');
			}, 0);

			errorP.insertAdjacentHTML('beforeend', `<span>${e.name} in ${input.id} input: </span> ${input.value} ${e.message}<br>`);
		} else {
			throw e;
		}
	}
}

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const inputs = Array.from(e.currentTarget.querySelectorAll('input')).filter(i => (i.type !== 'submit'));
	const numInputs = inputs.filter(i => (/numInput/.test(i.className)));

	errorP.innerHTML = '';
	numInputs.forEach(i => {
		try {

			validateNumInput(i);
		}
		catch {
			console.log('Другая ошибка')
		}
	})
})