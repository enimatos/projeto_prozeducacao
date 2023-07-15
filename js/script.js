


const burguer = document.querySelector("#burguer");


function toggleMenu(){
    const nav = document.querySelector("#nav")
    nav.classList.toggle('active');
}

burguer.addEventListener("click", toggleMenu);


atualizarCarrinho = (arr) => {
    const containerCarrinho = document.getElementById("carrinho")
    containerCarrinho.innerHTML = ""
    arr.map((val) => {
        if(val.quantidade > 0){
        containerCarrinho.innerHTML += `
        <div class= "info-prod-car">
            <img src="${val.img}" alt="${val.nome}" class="img-car"/>
            <p style="float-left";> ${val.nome} </p>
            <p> Tamanho --- atençao ---</p>
            <p style="float-right";>${val.quantidade}</p>
        </div>
        `
        }
    })

}


const botoes = document.getElementsByClassName("btnCarrinho")

function addCarrinho(arr){
    for(let i = 0; i < botoes.length; i++){
        botoes[i].addEventListener("click", function(){
            let key = botoes[i].getAttribute('key');
            arr[key].quantidade++;
            atualizarCarrinho();
        })
    }
}








const radiobutton = document.getElementById("tamanhoP");
      radiobutton.checked = true;


const containerProdutos = document.querySelector(".scroll");

const proximo = document.getElementsByClassName("proximo");
const anterior = document.querySelectorAll(".anterior");

console.log(containerProdutos)
containerProdutos.forEach((item, i) => {
    let dimensao = item.getBoundingClientRect();
    let tamanhoContainer = dimensao.width;

    proximo[i].addEventListener("click", () =>{
        item.scrollLeft += tamanhoContainer;
    })

    anterior[i].addEventListener("click", () =>{
        item.scrollLeft -= tamanhoContainer;
    })
})




