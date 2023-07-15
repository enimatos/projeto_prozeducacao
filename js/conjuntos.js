
const conjuntos = [ 
    {
        codigo: 0,
        nome: "Blusa Unity",
        preco: 41.99,
        descricao: [        
            "Decote V entalhado",
            "Sem manga",
            "Tecido não elástico, 92% Poliéster, 8% Elastano"
        ],
        img: "/imagens/conjunto/conjunto1.jpg",
        quantidade:0
    },
    {
        codigo: 1,
        nome: "bsfgfsdfsdfs",
        preco: 37.90,
        descricao: "fssfsfs",
        img: "/imagens/conjunto/conjunto2.jpg",
        quantidade:0
    },
    {
        codigo: 2,
        nome: "bsfgfsdfsdfs",
        preco: 37.90,
        descricao: "fssfsfs",
        img: "/imagens/conjunto/conjunto3.webp",
        quantidade:0
    },{
        codigo: 3,
        nome: "Blusa Malha de contraste",
        preco: 63.99,
        descricao: [        
            "Decote V entalhado",
            "Manga Cpomprida tipo bishop",
            "Tecido não elástico, 95% Poliéster, 5% Elastano"
        ],
        img: "/imagens/conjunto/conjunto4.jpg",
        quantidade:0
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
        img: "/imagens/conjunto/conjunto5.jpg",
        quantidade:0
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
        img: "/imagens/conjunto/conjunto6.jpg",
        quantidade:0
    },{
        codigo: 6,
        nome: " Blusa Vcay ",
        preco: 63.95,
        descricao: [        
            "Decote V pequeno",
            "Manga Curta esvoaçante, bainha estreita",
            "Tecido não elástico, 100% Poliéster"
        ],
        img: "/imagens/conjunto/conjunto7.jpg",
        quantidade:0
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
        img: "/imagens/conjunto/conjunto8.jpg",
        quantidade:0
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
        img: "/imagens/conjunto/conjunto9.webp",
        quantidade:0
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
        img: "/imagens/conjunto/conjunto10.jpg",
        quantidade:0
    }
    ,
    {
        codigo: 10,
        nome: "Blusa Sólida",
        preco: 55.99,
        descricao: [        
            "Decote V Pequeno",
            "Manga Comprida, regular",
            "Baixa elasticidade, 92% Poliéster e 8% Elastano"
        ],
        img: "/imagens/conjunto/conjunto11.jpg",
        quantidade:0
    }
]

renderProducts = () => {
    const produtosCo = document.querySelector("#scroll-conjunto");
    conjuntos.map((item) => {
        produtosCo.innerHTML +=  `
                <div class="caixa">
                    <div class="produto_item" >
                        <p class="nome">${item.nome}</p> 
                        <img src="${item.img}" alt="${item.nome}">
                        <span class="preco">R$ ${item.preco}</span>
                        <div id=descricao>
                            <p > ${item.descricao[0]}</p>
                            <p > ${item.descricao[1]}</p> 
                            <p > ${item.descricao[2]}</p>
                        </div>
                        <div id="tamanhos">
                            <input type="radio" id="tamanhoP" name="tamanho" value="P" />
                            <label for="tamanhoP">P</label>

                            <input type="radio" id="tamanhoM" name="tamanho" value="M" />
                            <label for="tamanhoM">M</label>

                            <input type="radio" id="tamanhoG" name="tamanho" value="G" />
                            <label for="tamanhoG">G</label>
                        </div>
                        <button class="btnDetalhe" onclick="addCarrinho(${item.codigo})">Comprar</button>
                    </div>
                </div>
            `;

    });
}



renderProducts()
