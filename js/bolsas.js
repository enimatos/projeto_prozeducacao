
const bolsas = [ 
    {
        codigo: 1,
        nome: "Blusa Unity",
        preco: 41.99,
        descricao: [        
            "Decote V entalhado",
            "Sem manga",
            "Tecido não elástico, 92% Poliéster, 8% Elastano"
        ],
        img: "/imagens/bolsas/bolsa1.jpg",
    },
    {
        codigo: 2,
        nome: "bsfgfsdfsdfs",
        preco: 37.90,
        descricao: "fssfsfs",
        img: "/imagens/bolsas/bolsa2.jpg",
    },
    {
        codigo: 3,
        nome: "bsfgfsdfsdfs",
        preco: 37.90,
        descricao: "fssfsfs",
        img: "/imagens/bolsas/bolsa3.jpg",
    },{
        codigo: 4,
        nome: "Blusa Malha de contraste",
        preco: 63.99,
        descricao: [        
            "Decote V entalhado",
            "Manga Cpomprida tipo bishop",
            "Tecido não elástico, 95% Poliéster, 5% Elastano"
        ],
        img: "/imagens/bolsas/bolsa4.jpg",
    },
    {
        codigo: 5,
        nome: "Blusa Privê",
        preco: 40.95,
        descricao: [        
            "Colarinho Baixo com babado",
            "Sem Mangas",
            "Tecido não elástico, 100% Poliéster"
        ],
        img: "/imagens/bolsas/bolsa5.jpg",
    },
    {
        codigo: 6,
        nome: "Blusa Frenchy",
        preco: 37.90,
        descricao: [        
            "Decote V pequeno",
            "Sem mangas",
            "Tecido não elástico, 95% Poliéster, 5% Elastano"
        ],
        img: "/imagens/bolsas/bolsa6.webp",
    },{
        codigo: 7,
        nome: " Blusa Vcay ",
        preco: 63.95,
        descricao: [        
            "Decote V pequeno",
            "Manga Curta esvoaçante, bainha estreita",
            "Tecido não elástico, 100% Poliéster"
        ],
        img: "/imagens/bolsas/bolsa7.jpg",
    },
    {
        codigo: 8,
        nome: "LUNE Zíper ",
        preco: 68.99,
        descricao: "fssfsfs",
        descricao: [        
            "Decote V pequeno",
            "Manga Comprida de enriolar",
            "Tecido não elástico, 100% Poliéster"
        ],
        img: "/imagens/bolsas/bolsa8.jpg",
    },
    {
        codigo: 9,
        nome: "Blusa Clasi",
        preco: 47.95,
        descricao: [        
            "Decote V entalhado",
            "Manga Curta tipo Morcego",
            "Tecido não elástico, 100% Poliéster"
        ],
        img: "/imagens/bolsas/bolsa9.webp",
    },
    {
        codigo: 10,
        nome: "Blusa Sólida",
        preco: 55.99,
        descricao: [        
            "Decote V Pequeno",
            "Manga Comprida, regular",
            "Baixa elasticidade, 92% Poliéster e 8% Elastano"
        ],
        img: "/imagens/bolsas/bolsa10.webp",
    }


]

const produtos = document.querySelector("#scroll-bolsa");

let produto = {}

function abrirDetalheProduto(codigo) {
    const produtoCurrent = bolsas.find((bolsa) => bolsa.codigo === codigo);
    produtoCurrent = detalheProduto.classList.add("detalheProdutoAberto");    
}


renderProducts = () => {
    const produtos = document.querySelector("#scroll-bolsa");
    bolsas.map((bolsa) => {
        produtos.innerHTML +=  `
                <div class="caixa">
                    <div class="produto_item" >
                        <p class="nome">${bolsa.nome}</p> 
                        <img src="${bolsa.img}" alt="${bolsa.nome}">
                        <span class="preco">R$ ${bolsa.preco}</span>
                        <div id=descricao>
                            <p > ${bolsa.descricao[0]}</p>
                            <p > ${bolsa.descricao[1]}</p> 
                            <p > ${bolsa.descricao[2]}</p>
                        </div>
                        <div id="tamanhos">
                            <input type="radio" id="tamanhoP" name="tamanho" value="P" />
                            <label for="tamanhoP">P</label>

                            <input type="radio" id="tamanhoM" name="tamanho" value="M" />
                            <label for="tamanhoM">M</label>

                            <input type="radio" id="tamanhoG" name="tamanho" value="G" />
                            <label for="tamanhoG">G</label>
                        </div>
                        <button class="btnCarrinho" onclick="addCarrinho(${bolsa.codigo})">Comprar</button>
                    </div>
                </div>
            `;

    });
}



renderProducts()



