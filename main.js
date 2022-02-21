// GOAL RESPOSTA CERTA - eu clico na resposta certa

// GOAL RESPOSTA ERRADA - eu clico na resposta errada 

// 1. ir buscar botão resposta correta

const respostaCerta = document.getElementById('resposta-certa');

//1.2 tenho de ir buscar o <p>

const explicacao = document.getElementById('explicacao');

// 2. por elemento resposta certo a escutar o click

respostaCerta.addEventListener('click', (event) => {
	explicacao.innerHTML = "<strong>Correto!!</strong>" 
})

// GOAL RESPOSTA ERRADA

// ir buscar respostas erradas

const respostasErradas = document.querySelectorAll('.resposta-errada');

// 2. Iterar por cada resposta errada

respostasErradas.forEach((resposta)=>{
	// 3. Escuta do click
	resposta.addEventListener('click', (event) => {
		let explicacaoConteudo = "<strong>Ups, errado...</strong>"

		//4. Distinguir que resposta é 
		if(resposta.id === 'resposta-html'){
			explicacaoConteudo += " HTML permite nos dar estrutura e conteudo à nossa página"
		} else if (resposta.id === 'resposta-css'){
			explicacaoConteudo += " CSS permite nos dar estilo a nossa pagina "
		} else {
			explicacaoConteudo += " Ruby é estranho "
		}

		explicacaoConteudo += " Tenta outra vez"

		explicacao.innerHTML = explicacaoConteudo;
	})
})