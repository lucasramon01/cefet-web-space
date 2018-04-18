// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

let anterior = document.querySelector('#anterior');
let proximo = document.querySelector('#proximo');
let slide = document.querySelector('#slide');
let indice = 0;

anterior.addEventListener('click', () => {	
	if (indice == 0) {		
		indice = 4;
	} else {
		indice = indice - 1;
	}
	slide.src = servidorDasImagens + todasAsImagens[indice];
});

proximo.addEventListener('click', () => {
	if (indice == 4) {
		indice = 0;
	} else {
		indice = indice + 1;
	}
	slide.src = servidorDasImagens + todasAsImagens[indice];
});

