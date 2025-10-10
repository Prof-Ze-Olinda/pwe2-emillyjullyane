"use strict";

const botao = document.getElementById("startBtn");

botao.addEventListener("click", () => {
    // TODO: peça ao usuário seu nome usando prompt()
    let nomeUser = prompt("Digite o seu nome");
    // TODO: peça o ano de nascimento e armazene em anoNascimento
    let anoNasc = prompt("Digite a sua data de nascimento");
    // Use uma variável para o ano atual
    let anoAtual = new Date().getFullYear();
    // TODO: converta o ano de nascimento para número (parseInt)
    anoNasc = parseInt(anoNasc);
    // TODO: exiba com alert() uma frase: "Olá, NOME! Você tem X anos."
    let idade = anoAtual - anoNasc;
    alert (`Olá, ${nomeUser}! Você tem ${idade} anos.`);
    // TODO: use confirm() para perguntar se a idade está correta
    let confirmacao = confirm (`Você possui ${idade}?`);
    // Exiba no console a escolha do usuário (console.log ou console.warn)
    if(confirmacao){
        console.log("O usuário confirmou que a idade está correta.");
    }else{
        console.warn("O usuário informou que a idade está incorreta.");
    }
    // Melhore o programa adicionando outros recursos
});