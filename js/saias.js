
const saias = [ 
    {
        codigo: 1,
        nome: "Blusa Unity",
        preco: 41.99,
        descricao: [        
            "Decote V entalhado",
            "Sem manga",
            "Tecido não elástico, 92% Poliéster, 8% Elastano"
        ],
        img: "/imagens/saias/saia1.jpg",
    },
    {
        codigo: 2,
        nome: "bsfgfsdfsdfs",
        preco: 37.90,
        descricao: "fssfsfs",
        img: "/imagens/saias/saia2.png",
    },
    {
        codigo: 3,
        nome: "bsfgfsdfsdfs",
        preco: 37.90,
        descricao: "fssfsfs",
        img: "/imagens/saias/saia3.jpg",
    },{
        codigo: 4,
        nome: "Blusa Malha de contraste",
        preco: 63.99,
        descricao: [        
            "Decote V entalhado",
            "Manga Cpomprida tipo bishop",
            "Tecido não elástico, 95% Poliéster, 5% Elastano"
        ],
        img: "/imagens/saias/saia4.jpg",
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
        img: "/imagens/saias/saia5.webp",
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
        img: "/imagens/saias/saia6.png",
    },{
        codigo: 7,
        nome: " Blusa Vcay ",
        preco: 63.95,
        descricao: [        
            "Decote V pequeno",
            "Manga Curta esvoaçante, bainha estreita",
            "Tecido não elástico, 100% Poliéster"
        ],
        img: "/imagens/saias/saia7.webp",
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
        img: "/imagens/saias/saia8.webp",
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
        img: "/imagens/saias/saia9.webp",
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
        img: "/imagens/saias/saia10.webp",
    }


]

renderProducts = () => {
    const produtosSa = document.querySelector("#scroll-saia");
    saias.map((item) => {
        produtosSa.innerHTML +=  `
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
