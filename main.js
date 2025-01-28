"use strict"



const botaoTrocarImagem = document.getElementById('trocar-imagem')
 
function trocarImagem () {
 
 const imagem = 'url("imagens/isaias.jpg")';
    document.documentElement.style.setProperty('--fundo-imagem', imagem)

const imagemdois = 'url("imagens/mateus.jpg")';
    document.documentElement.style.setProperty('--fundo-imagem', imagem)
}

botaoTrocarImagem.addEventListener('click', trocarImagem)