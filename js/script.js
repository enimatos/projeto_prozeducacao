const arrayBlusa = [
    {
      nome: "blusa1",
      descricao: "descricao dfsdfsdfsdfs",
      imagem: "./imagens/blusa/blusa1.webp",
      preco: 21.00,
    },
    {
        nome: "blusa1",
        descricao: "descricao dfsdfsdfsdfs",
        imagem: "./imagens/blusa/blusa2.webp",
        preco: 21.00,
    },
    {
        nome: "blusa1",
        descricao: "descricao dfsdfsdfsdfs",
        imagem: "./imagens/blusa/blusa3.webp",
        preco: 21.00,
    },
    
  ];

  disponibilizaItens = () => {
    let containerProdutos = document.querySelector(".card");
    arrayBlusa.map((val)=>{
        containerProdutos.innerHTML+= `
        <div class="produto_item">
            <img src="`+val.imagem+`" />
            <p>`+val.nome+`</p>
            <p>`+val.descricao+`</p>
            <p>`+val.preco+`</p>
            <a key="`+val.id+`" href="#">Adicionar ao carrinho</a>
         </div>
        `;
    })
}
disponibilizaItens()

atualizarCarrinho = () => {
    console.log(arrayBlusa)
}


const botao = document.getElementsByTagName("a");

for(let i = 0; i < botao.length; i++){
    botao[i].addEventListener("click", function(){
        let key = this.getAttribute("key");
        items[key].quantidade= items[key].quantidade +1;
        atualizarCarrinho();
        //return false;
    })
}

const menu = document.getElementById("burguer");
const links = document.querySelector(".lista_links")

menu.addEventListener("click", function(){
    console.log("display")
    links.style.display = 'block';
})