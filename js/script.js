const burguer = document.querySelector("#burguer");
const medida = document.querySelector("#medida");
const containerCarrinho = document.querySelector("#carrinho");
let quantidadeProd = document.getElementsByClassName("quantidade")
let precoProd = document.getElementsByClassName("tpreco")
let precoTotal = document.querySelector(".preco-total")
const total = [];

let carrinho = [];

function toggleMenu() {
  const nav = document.querySelector("#nav");
  nav.classList.toggle("active");
}

function show() {
  const sumario = document.querySelector(".sumario");
  sumario.classList.toggle("show");
}

burguer.addEventListener("click", toggleMenu);
medida.addEventListener("click", show);

//const botoes = document.getElementsByClassName("btnCarrinho");

function addCarrinho(item, carrinho) {
  // let geraId = `${item.nome}-${item.codigo}-${item.tamanho}`;
  // let id = geraId.split(" ").join("-");
  if (
    carrinho.some((prod) => {
      prod.codigo === item.codigo && prod.tamanho === item.tamanho;
    })
  ) {
    return;
  } else {
    let itemCopia = { ...item };
    itemCopia = { ...itemCopia, ["quantidade"]: 1 };
    carrinho.push(itemCopia);
    total.push(itemCopia.preco)
    let soma = total.reduce((acumulador,valorAtual) =>{
      return acumulador+ valorAtual;
    })
    precoTotal.textContent = soma;
  }
  atualizarCarrinho();
}

function atualizarCarrinho() {
  mostraCarrinho(carrinho);
}

function mostraCarrinho() {
  
  containerCarrinho.innerHTML = "";
  carrinho.forEach((produto, index) => {
    let geraId = `${produto.nome}-${produto.codigo}-${produto.tamanho}`;
    let id = geraId.split(" ").join("-");
    containerCarrinho.innerHTML += `
      <div class="item-carrinho">
        <div class= "info-prod-car">
          <img src="${produto.img}" alt="${produto.nome}" class="img-car"/>
          <p class="tnome"> ${produto.nome} </p>
          <p class="tpreco">R$ ${produto.preco} </p>
          <p class="ttamanho"> ${produto.tamanho} </p>
          <p class="tsubtotal" id="subtotal-${id}">${produto.preco} </p>
        </div>
        <div class="unidades">
          <div class="botaoMenos" onclick="decremento('${id}', ${index})">-</div>
          <div id=${id} class="quantidade">1</div>
          <div class="botaoMais" onclick="incremento('${id}', ${index})">+</div>
          <button class="excluir" onclick="decremento('${id}', ${index})"><i class="fa-solid fa-circle-xmark"></i></button>
        </div>
      </div>
    
    `;
  });
}

function decremento(id, index) {
  const subtotal = document.querySelector("#subtotal-" + id )
  const numero = document.querySelector("#" + id);
  // const item = carrinho.filter((prod) => prod === carrinho.at(index));

  if (Number(numero.textContent) > 1) {
    numero.textContent = Number(numero.textContent) - 1;
    carrinho.filter((item) => {
      if (item === carrinho.at(index)) {
        item.quantidade = Number(numero.textContent);
        subtotal.textContent = item.preco * Number(numero.textContent);
        subtotal.textContent = Number(subtotal.textContent).toFixed(2)
      }
      
    });
    let subtrai = total.filter((preco, i) => {
      if(preco === carrinho.at(index).preco){
        total.splice(i, 1)
      }
    }).reduce(acumulador, valorAtual => acumulador - valorAtual)
    precoTotal.textContent = subtrai;
  } else {
    carrinho.splice(index, 1);
    //console.log(carrinho, index);
    
    atualizarCarrinho();
  }
}


function incremento(id, index) {
  const numero = document.querySelector("#" + id);
  const subtotal = document.querySelector("#subtotal-" + id )
  numero.textContent = Number(numero.textContent) + 1;
  carrinho.filter((item) => {
    if (item === carrinho.at(index)) {
      item.quantidade = Number(numero.textContent);
      total.push(item.preco)
      subtotal.textContent = item.preco * Number(numero.textContent);
      subtotal.textContent = Number(subtotal.textContent).toFixed(2)
      let soma = total.reduce((acumulador,valorAtual) =>{
        return acumulador+ valorAtual;
      })
      precoTotal.textContent = soma;
      console.log(item);
    }
  });
}

function excluir() {
  decremento()

}



function renderizarProdutos(arr, secao) {
  arr.map((produto, index) => {
    const produtos = document.querySelector("#scroll-" + secao);

    const caixa = document.createElement("div");

    caixa.classList.add("caixa");

    const produto_item = document.createElement("div");

    produto_item.classList.add("produto_item");

    const nome = document.createElement("p");

    nome.classList.add("nome");

    const img = document.createElement("img");

    const preco = document.createElement("p");

    preco.classList.add("preco");

    const descricao = document.createElement("div");

    descricao.classList.add("descricao");

    const observacao = document.createElement("div");

    observacao.classList.add("observacao");

    const labelObs = document.createElement("label");
    labelObs.classList.add("labelObs");

    const inputObs = document.createElement("input");
    inputObs.classList.add("inputObs");

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

    secao === "bolsa"
      ? (btnCarrinho.disabled = false)
      : (btnCarrinho.disabled = true);
    nome.innerHTML = produto.nome;
    img.src = produto.img;
    preco.innerHTML = "R$ " + produto.preco;

    descricao.innerHTML = `
    <p > ${produto.descricao[0]}</p>
    <p > ${produto.descricao[1]}</p> 
    <p > ${produto.descricao[2]}</p>
    `;

    labelObs.htmlFor = "inputObs"+ index;
    labelObs.textContent = "Alteração desejada" ;
    inputObs.id = "inputObs" + index;
    inputObs.type = "text";

    inputTamanhoP.type = "radio";
    inputTamanhoP.id = "tamanhoP" + index;
    inputTamanhoP.name = "tamanho" + index;
    labelTamanhoP.htmlFor = "tamanhoP" + index;
    labelTamanhoP.textContent = "P";

    inputTamanhoM.type = "radio";
    inputTamanhoM.id = "tamanhoM" + index;
    inputTamanhoM.name = "tamanho" + index;
    labelTamanhoM.htmlFor = "tamanhoM" + index;
    labelTamanhoM.textContent = "M";

    inputTamanhoG.type = "radio";
    inputTamanhoG.id = "tamanhoG" + index;
    inputTamanhoG.name = "tamanho" + index;
    labelTamanhoG.htmlFor = "tamanhoG" + index;
    labelTamanhoG.textContent = "G";

    const habilitarBtn = (el) => {
      el.addEventListener("click", () => {
        const label = document.querySelector(`label[for='${el.id}']`);
        btnCarrinho.disabled = false;

        produto = { ...produto, ["tamanho"]: label.textContent };
      });
    };

    habilitarBtn(inputTamanhoP);
    habilitarBtn(inputTamanhoM);
    habilitarBtn(inputTamanhoG);

    btnCarrinho.onclick = function () {
      // produto.tamanho = console.log(produto.tamanho);

      addCarrinho(produto, carrinho);
      btnCarrinho.disabled = true;
    };

    observacao.appendChild(labelObs);
    observacao.appendChild(inputObs);

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
    produto_item.appendChild(observacao);
    
    secao === "bolsa" ? null : produto_item.appendChild(tamanhos);
    produto_item.appendChild(btnCarrinho);

    btnCarrinho.classList.add("btnCarrinho");

    caixa.appendChild(produto_item);

    produtos.appendChild(caixa);
  });
}

// exemplo carrinho
