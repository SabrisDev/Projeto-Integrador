// BOTÃO MENU PROJETOS
const botaoProjeto = document.querySelector(".item-menu-projeto");

const subMenu1 = document.querySelector(".submenu1");

botaoProjeto.addEventListener("click", () => {
    if (botaoProjeto.classList.contains("closed")) {
        botaoProjeto.classList.remove("closed");
        botaoProjeto.classList.add("open");
        subMenu1.classList.add("open");
    } else {
        botaoProjeto.classList.remove("open");
        botaoProjeto.classList.add("closed");
        subMenu1.classList.remove("open");
    }
});


// BOTAO MENU DADOS
const botaoDados = document.querySelector(".item-menu-dados");

const subMenu2 = document.querySelector(".submenu2");

botaoDados.addEventListener("click", () => {
    if (botaoDados.classList.contains("closed")) {
        botaoDados.classList.remove("closed");
        botaoDados.classList.add("open");
        subMenu2.classList.add("open");
    } else {
        botaoDados.classList.remove("open");
        botaoDados.classList.add("closed");
        subMenu2.classList.remove("open");
    }
});



