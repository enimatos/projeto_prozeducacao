const burguer = document.querySelector("#burguer");
const medida = document.querySelector("#medida")
const containerCarrinho = document.querySelector("#carrinho");

let carrinho = [];

function toggleMenu() {
  const nav = document.querySelector("#nav");
  nav.classList.toggle("active");
}

function show() {
  const sumario = document.querySelector("#sumario");
  sumario.classList.toggle("show");
}

burguer.addEventListener("click", toggleMenu);
medida.addEventListener('click', show)



//const botoes = document.getElementsByClassName("btnCarrinho");

function addCarrinho(item) {
  //console.log(carrinho, item)
  if(carrinho.some((item) => item.codigo === codigo)){
    mudaQuantidade("mais", codigo)
  }else{
    produto.find((el) => el.codigo === codigp)
    const item =  el.find((produto) => produto.codigo === codigo)
    carrinho.push({
      ...item,
      quantidade: 1,
    });
    }
  atualizarCarrinho()
  //console.log(carrinho);
}

function atualizarCarrinho(){
  mostraCarrinho();
};


function mostraCarrinho(){
  containerCarrinho.innerHTML = "";
  carrinho.forEach((produto) => {
    containerCarrinho.innerHTML += `
      <div class="item-carrinho">
        <div class= "info-prod-car">
          <img src="${produto.img}" alt="${produto.nome}" class="img-car"/>
          <p> ${produto.nome} </p>
          <p>R$ ${produto.preco} </p>
          <p> Tamanho --- atençao ---</p>
        </div>
        <div class="unidades">
          <div class="botaoMenos" onclick="mudaQuantidade('menos', ${produto.codigo})">-</div>
          <div class="numero">${produto.quantidade}</div>
          <div class="botaoMais" onclick="mudaQuantidade('mais', ${produto.codigo})">+</div>
        </div>
      </div>
    
    `
  });
}


function mudaQuantidade(action, codigo){
  carrinho = carrinho.map((produto) => {

    let quantidade = produto.quantidade;
    if(produto.codigo === codigo){
      if (action === "menos"){
        quantidade--;
      }else if (action === "mais"){
        quantidade++;

      }

    }
    return {
      ...produto,
      quantidade,
    };
  });
  atualizarCarrinho()

}



function renderizarProdutos(arr, secao) {
  arr.map((produto) => {
    const produtos = document.querySelector("#scroll-" + secao);

    const caixa = document.createElement("div");

    caixa.classList.add("caixa");

    const produto_item = document.createElement("div");

    produto_item.classList.add("produto_item");

    const nome = document.createElement("p");

    nome.classList.add("nome");

    const img = document.createElement("img");

    const preco = document.createElement("span");

    preco.classList.add("preco");

    const descricao = document.createElement("div");

    descricao.classList.add("descricao");

    const labelObs = document.createElement("label")
    labelObs.classList.add("labelObs")

    const inputObs = document.createElement("input");
    inputObs.classList.add("inputObs")

    const tamanhos = document.createElement("div");
    tamanhos.classList.add("tamanhos");
    const inputTamanhoP = document.createElement("input");
    const inputTamanhoM = document.createElement("input");
    const inputTamanhoG = document.createElement("input");
    const labelTamanhoP = document.createElement("label");
    const labelTamanhoM = document.createElement("label");
    const labelTamanhoG = document.createElement("label");

    const btnCarrinho = document.createElement("button");
    btnCarrinho.textContent = "Comprar";

    nome.innerHTML = produto.nome;
    img.src = produto.img;
    preco.innerHTML = produto.preco;

    descricao.innerHTML = `
     <p > ${produto.descricao[0]}</p>
    <p > ${produto.descricao[1]}</p> 
    <p > ${produto.descricao[2]}</p>
    `;

    labelObs.htmlFor = "inputObs";
    labelObs.textContent = "Alteração desejada";
    inputObs.type = "text"


    inputTamanhoP.type = "radio";
    inputTamanhoP.id = "tamanhoP";
    inputTamanhoP.name = "tamanho";
    labelTamanhoP.htmlFor = "tamanhoP";
    labelTamanhoP.textContent = "P";

    inputTamanhoM.type = "radio";
    inputTamanhoM.id = "tamanhoM";
    inputTamanhoM.name = "tamanho";
    labelTamanhoM.htmlFor = "tamanhoM";
    labelTamanhoM.textContent = "M";

    inputTamanhoG.type = "radio";
    inputTamanhoG.id = "tamanhoG";
    inputTamanhoG.name = "tamanho";
    labelTamanhoG.htmlFor = "tamanhoG";
    labelTamanhoG.textContent = "G";

    btnCarrinho.onclick = function () {
      addCarrinho(produto);
      
    };


    tamanhos.appendChild(inputTamanhoP);
    tamanhos.appendChild(labelTamanhoP);
    tamanhos.appendChild(inputTamanhoM);
    tamanhos.appendChild(labelTamanhoM);
    tamanhos.appendChild(inputTamanhoG);
    tamanhos.appendChild(labelTamanhoG);

    produto_item.appendChild(nome);
    produto_item.appendChild(img);
    produto_item.appendChild(preco);
    produto_item.appendChild(descricao);
    produto_item.appendChild(labelObs);
    produto_item.appendChild(inputObs);
    produto_item.appendChild(tamanhos);
    produto_item.appendChild(btnCarrinho);

    btnCarrinho.classList.add("btnCarrinho");

    caixa.appendChild(produto_item);

    produtos.appendChild(caixa);
  });
}

// exemplo carrinho



