const blusas = [ 
    {
        codigo: 1,
        nome: "Blusa Unity",
        preco: 41.99,
        descricao: [        
            "Decote V entalhado",
            "Sem manga",
            "Tecido não elástico, 92% Poliéster, 8% Elastano"
        ],
        img: "/imagens/blusa/blusa1.webp",
    },
    {
        codigo: 2,
        nome: "bsfgfsdfsdfs",
        preco: 37.90,
        descricao: "fssfsfs",
        img: "/imagens/blusa/blusa2.webp",
    },
    {
        codigo: 3,
        nome: "bsfgfsdfsdfs",
        preco: 37.90,
        descricao: "fssfsfs",
        img: "/imagens/blusa/blusa3.webp",
    },{
        codigo: 4,
        nome: "Blusa Malha de contraste",
        preco: 63.99,
        descricao: [        
            "Decote V entalhado",
            "Manga Cpomprida tipo bishop",
            "Tecido não elástico, 95% Poliéster, 5% Elastano"
        ],
        img: "/imagens/blusa/blusa4.webp",
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
        img: "/imagens/blusa/blusa5.webp",
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
        img: "/imagens/blusa/blusa6.jpg",
    },{
        codigo: 7,
        nome: " Blusa Vcay ",
        preco: 63.95,
        descricao: [        
            "Decote V pequeno",
            "Manga Curta esvoaçante, bainha estreita",
            "Tecido não elástico, 100% Poliéster"
        ],
        img: "/imagens/blusa/blusa7.webp",
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
        img: "/imagens/blusa/blusa8.webp",
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
        img: "/imagens/blusa/blusa9.webp",
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
        img: "/imagens/blusa/blusa10.jpg",
    },
    {
        codigo: 11,
        nome: "Blusa Frenchy Topo",
        preco: 45.99,
        descricao: [        
            "Frente-única",
            "Sem mangas, Malha Contraste, Bordado, Babado",
            "Tecido não elástico, 100% Poliéster"
        ],
        img: "/imagens/blusa/blusa11.webp",
    },
    ,
    {
        codigo: 12,
        nome: "Blusa Frenchy Topo",
        preco: 37.99,
        descricao: [        
            "Frente-única",
            "Sem manga",
            "Tecido não elástico, 100% Poliéster"
        ],
        img: "/imagens/blusa/blusa12.webp",
    }


]



var produtosBl = document.querySelector("#scroll-blusa");


renderProducts = () => {
    produtosBl = document.getElementById("scroll-blusa");
    blusas.map((val) => {
        produtosBl.innerHTML +=  `
            <div class="caixa">
                <div class="produto_item" >
                    <img src="${val.img}" alt="">
                    <p class="preco">R$ `+val.preco+`</p>        
                    <button class="btn-detalhe" value="$`+val.codigo+`">Detalhe</button>
                </div>
                <div class="detalhe">
                    <div class="img-detalhe" style="color: aquamarine;"></div>
                    <div class="detalhe" style="color: blue;">
                        <h3 class="nome">`+val.nome+`</h3>
                        <p class="desccricao" style="color: brown;">`+val.descricao+`</p>
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






