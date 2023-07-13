const burguer = document.querySelector("#burguer");


function toggleMenu(){
    const nav = document.querySelector("#nav")
    nav.classList.toggle('active');
}

burguer.addEventListener("click", toggleMenu);





const botaoAbrir = document.getElementsByClassName("abrir");
const botaoFechar =document.getElementsByClassName("fechar")

const detalheProdutoBl = document.querySelector(".detalhe-produto")


let cart = []



