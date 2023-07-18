const burguer = document.querySelector("#burguer");
let carrinho = [];
function toggleMenu() {
  const nav = document.querySelector("#nav");
  nav.classList.toggle("active");
}

burguer.addEventListener("click", toggleMenu);

atualizarCarrinho = (arr) => {
  const containerCarrinho = document.getElementById("carrinho");
  containerCarrinho.innerHTML = "";
  arr.map((val) => {
    if (val.quantidade > 0) {
      containerCarrinho.innerHTML += `
        <div class= "info-prod-car">
            <img src="${val.img}" alt="${val.nome}" class="img-car"/>
            <p style="float-left";> ${val.nome} </p>
            <p> Tamanho --- atençao ---</p>
            <p style="float-right";>${val.quantidade}</p>
        </div>
        `;
    }
  });
};

const botoes = document.getElementsByClassName("btnCarrinho");

function addCarrinho(item) {
  carrinho.push(item);
  console.log("carrinho",carrinho);
}


const radiobutton = document.getElementById("tamanhoP");
radiobutton.checked = true;

const containerProdutos = document.querySelector(".scroll");

const proximo = document.getElementsByClassName("proximo");
const anterior = document.querySelectorAll(".anterior");



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
    labelTamanhoG.for = "tamanhoG";
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



