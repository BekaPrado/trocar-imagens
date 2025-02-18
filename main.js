"use strict";

const botaoTrocarImagem = document.getElementById('trocar-imagem');

const imagens = [
    'url("imagens/paratodososgarotos.jpg")',
    'url("imagens/comoperder.jpg")',
    'url("imagens/gossipgirl.jpg")',
    'url("imagens/gilmore.jpg")'
];

let indiceAtual = 0;

function trocarImagem() {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    document.documentElement.style.setProperty('--fundo-imagem', imagens[indiceAtual]);
}

botaoTrocarImagem.addEventListener('click', trocarImagem);
