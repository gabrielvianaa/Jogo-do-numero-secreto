let listaNumeroSorteados = [];
let numeroLimite = 100

//Função para gerar o número aleatório.
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt((Math.random() * numeroLimite + 1));
    let quantidadeDeElementosNaLista = listaNumeroSorteados.length;
    if(quantidadeDeElementosNaLista == numeroLimite){
        listaNumeroSorteados = []
    }
    if(listaNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio;
    }else{
        listaNumeroSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
let numeroSecreto = gerarNumeroAleatorio();

//Função que irá limpar o campo de input.
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Tente adivinhar o número secreto que está entre 0 e ${numeroLimite}`);

}

exibirMensagemInicial();



//Funç${numeroLimite} responsável por alterar os textos na tela web.
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    //Adiciona voz ao site.
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 2.0; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

let numeroSorteados = [];

let tentativas = 1;

//Função que irá verificar se o número digitado é igual, maior ou menor que o número secreto.
function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('h1', 'Parabéns, você acertou!');
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', `Errou! O número secreto é menor que ${chute}`);
        }else{
            exibirTextoNaTela('p', `Errou! O número secreto é maior que ${chute}`);
        }
        tentativas++;
        limparCampo();
    }
}

//Função que irá reiniciar o jogo.
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
    exibirMensagemInicial(); 
    document.getElementById('reiniciar').setAttribute('disabled', true);
}



