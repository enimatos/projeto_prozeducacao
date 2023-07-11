

const burguer = document.querySelector("#burguer");



function toggleMenu(){
    const nav = document.querySelector("#nav")
    nav.classList.toggle('active');
}

burguer.addEventListener("click", toggleMenu);





const botaoAbrir = document.getElementsByClassName("abrir");

const botaoFechar =document.getElementsByClassName("fechar")
const btnDetalhe = document.getElementsByClassName("btn-detalhe")




btnDetalhe[0].addEventListener("click", function(){
    const detalhe = document.querySelector(".detalhe")
    
    if(detalhe.style.display === "none"){
        detalhe.style.display = "block"
    }else{
        detalhe.style.display = "none";
    }

})






function fecharModal(){
    const modal = document.querySelector("#div-modal");
    modal.classList.toggle = "null";
    modal.style.display = "none";
}

for(i =0;i < botaoAbrir.length; i++){
    botaoAbrir[i].addEventListener("click", () => {
        openModal(blusas)

    })

}

