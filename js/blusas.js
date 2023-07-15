const blusas = [ 
    {
        codigo: 0,
        nome: "Blusa Unity",
        preco: 41.99,
        descricao: [        
            "Decote V entalhado",
            "Sem manga",
            "Tecido não elástico, 92% Poliéster, 8% Elastano"
        ],
        img: "/imagens/blusa/blusa1.webp",
        quantidade: 0
    },
    {
        codigo: 1,
        nome: "bsfgfsdfsdfs",
        preco: 37.90,
        descricao: "fssfsfs",
        img: "/imagens/blusa/blusa2.webp",
        quantidade: 0
    },
    {
        codigo: 2,
        nome: "bsfgfsdfsdfs",
        preco: 37.90,
        descricao: "fssfsfs",
        img: "/imagens/blusa/blusa3.webp",
        quantidade: 0
    },{
        codigo: 3,
        nome: "Blusa Malha de contraste",
        preco: 63.99,
        descricao: [        
            "Decote V entalhado",
            "Manga Cpomprida tipo bishop",
            "Tecido não elástico, 95% Poliéster, 5% Elastano"
        ],
        img: "/imagens/blusa/blusa4.webp",
        quantidade: 0
    },
    {
        codigo: 4,
        nome: "Blusa Privê",
        preco: 40.95,
        descricao: [        
            "Colarinho Baixo com babado",
            "Sem Mangas",
            "Tecido não elástico, 100% Poliéster"
        ],
        img: "/imagens/blusa/blusa5.webp",
        quantidade: 0
    },
    {
        codigo: 5,
        nome: "Blusa Frenchy",
        preco: 37.90,
        descricao: [        
            "Decote V pequeno",
            "Sem mangas",
            "Tecido não elástico, 95% Poliéster, 5% Elastano"
        ],
        img: "/imagens/blusa/blusa6.jpg",
        quantidade: 0
    },{
        codigo: 6,
        nome: " Blusa Vcay ",
        preco: 63.95,
        descricao: [        
            "Decote V pequeno",
            "Manga Curta esvoaçante, bainha estreita",
            "Tecido não elástico, 100% Poliéster"
        ],
        img: "/imagens/blusa/blusa7.webp",
        quantidade: 0
    },
    {
        codigo: 7,
        nome: "LUNE Zíper ",
        preco: 68.99,
        descricao: "fssfsfs",
        descricao: [        
            "Decote V pequeno",
            "Manga Comprida de enriolar",
            "Tecido não elástico, 100% Poliéster"
        ],
        img: "/imagens/blusa/blusa8.webp",
        quantidade: 0
    },
    {
        codigo: 8,
        nome: "Blusa Clasi",
        preco: 47.95,
        descricao: [        
            "Decote V entalhado",
            "Manga Curta tipo Morcego",
            "Tecido não elástico, 100% Poliéster"
        ],
        img: "/imagens/blusa/blusa9.webp",
        quantidade: 0
    },
    {
        codigo: 9,
        nome: "Blusa Sólida",
        preco: 55.99,
        descricao: [        
            "Decote V Pequeno",
            "Manga Comprida, regular",
            "Baixa elasticidade, 92% Poliéster e 8% Elastano"
        ],
        img: "/imagens/blusa/blusa10.jpg",
        quantidade: 0
    },
    {
        codigo: 10,
        nome: "Blusa Frenchy Topo",
        preco: 45.99,
        descricao: [        
            "Frente-única",
            "Sem mangas, Malha Contraste, Bordado, Babado",
            "Tecido não elástico, 100% Poliéster"
        ],
        img: "/imagens/blusa/blusa11.webp",
        quantidade: 0
    },
    ,
    {
        codigo: 11,
        nome: "Blusa Frenchy Topo",
        preco: 37.99,
        descricao: [        
            "Frente-única",
            "Sem manga",
            "Tecido não elástico, 100% Poliéster"
        ],
        img: "/imagens/blusa/blusa12.webp",
        quantidade: 0
    }


]


renderProducts = () => {
    const produtos = document.querySelector("#scroll-blusa");
    blusas.map((blusa) => {
        produtos.innerHTML +=  `
                <div class="caixa">
                    <div class="produto_item" >
                        <p class="nome">${blusa.nome}</p> 
                        <img src="${blusa.img}" alt="${blusa.nome}">
                        <span class="preco">R$ ${blusa.preco}</span>
                        <div id=descricao>
                            <p > ${blusa.descricao[0]}</p>
                            <p > ${blusa.descricao[1]}</p> 
                            <p > ${blusa.descricao[2]}</p>
                        </div>
                        <div id="tamanhos">
                            <input type="radio" id="tamanhoP" name="tamanho" value="P" >
                            <label for="tamanhoP">P</label>

                            <input type="radio" id="tamanhoM" name="tamanho" value="M" >
                            <label for="tamanhoM">M</label>

                            <input type="radio" id="tamanhoG" name="tamanho" value="G" >
                            <label for="tamanhoG">G</label>
                        </div>
                        <div class="alteracao">
                            <label for="alteracao">Alterações desejadas: </label><br>
                            <input type="text" id="alteracao" name="alteracao"></input>

                        </div>
                        
                        <button class="btnCarrinho" onclick="addCarrinho(${blusas})" key="${blusa.codigo}">Comprar</button>
                    </div>
                </div>
            `;

    });
}


renderProducts()






