// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML
let buttonList = document.querySelectorAll('.botao-expandir-retrair');

for (let button of buttonList) {
	button.addEventListener('click', () => {
		if(button.parentNode.classList.contains('expandido')) {
			button.parentNode.classList.remove('expandido');
			button.innerHTML = '+'
		} else {
			button.parentNode.classList.add('expandido');
			button.innerHTML = '-'
		}
	});
}


