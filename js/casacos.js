
const casacos = [ 
    {
        codigo: 1,
        nome: "Blusa Unity",
        preco: 41.99,
        descricao: [        
            "Decote V entalhado",
            "Sem manga",
            "Tecido não elástico, 92% Poliéster, 8% Elastano"
        ],
        img: "/imagens/casacos/casaco1.jpg",
    },
    {
        codigo: 2,
        nome: "bsfgfsdfsdfs",
        preco: 37.90,
        descricao: "fssfsfs",
        img: "/imagens/casacos/casaco2.webp",
    },
    {
        codigo: 3,
        nome: "bsfgfsdfsdfs",
        preco: 37.90,
        descricao: "fssfsfs",
        img: "/imagens/casacos/casaco3.webp",
    },{
        codigo: 4,
        nome: "Blusa Malha de contraste",
        preco: 63.99,
        descricao: [        
            "Decote V entalhado",
            "Manga Cpomprida tipo bishop",
            "Tecido não elástico, 95% Poliéster, 5% Elastano"
        ],
        img: "/imagens/casacos/casaco4.webp",
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
        img: "/imagens/casacos/casaco5.jpg",
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
        img: "/imagens/casacos/casaco6.webp",
    },{
        codigo: 7,
        nome: " Blusa Vcay ",
        preco: 63.95,
        descricao: [        
            "Decote V pequeno",
            "Manga Curta esvoaçante, bainha estreita",
            "Tecido não elástico, 100% Poliéster"
        ],
        img: "/imagens/casacos/casaco7.jpg",
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
        img: "/imagens/casacos/casaco8.webp",
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
        img: "/imagens/casacos/casaco9.jpg",
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
        img: "/imagens/casacos/casaco10.jpg",
    }


]

const produtosCs = document.querySelector("#scroll-casaco");

function renderProducts(){
    casacos.forEach ((casaco) => {
        produtosCs.innerHTML +=  `
            <div class="caixa">
                <div class="produto_item" >
                    <img src="${casaco.img}" alt="">
                    <p class="preco">R$ 67,89</p>        
                    <button class="btn-detalhe">Detalhe</button>
                </div>
                <div class="detalhe">
                    <div class="img-detalhe" style="color: aquamarine;"></div>
                    <div class="detalhe" style="color: blue;">
                        <h3 class="nome">${casaco.nome}</h3>
                        <p class="desccricao" style="color: brown;">${casaco.descricao}</p>
                    </div>
                    <div>
                        <button class="fecharDetalhe" onclick="fecharDetalhe()">Fechar</button>
                        <button class="carrinho"><i class="fa-solid fa-cart-plus"></i></button>
                    </div>
                </div>
            </div>
        `;
    });
}


renderProducts()
