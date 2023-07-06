
const bolsas = [ 
    {
        codigo: 0,
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

const btnAdd = document.querySelector()


function renderizar(){
    bolsas.forEach((bolsa) => {
        const prodContainer = document.querySelector(".prods_container");
        const produtos = document.createElement("div")
        produtos.classList.add("card")
        produtos.innerHTML += `
            <div class="produto_item" >
                <img src ="${bolsa.img}" alt="${bolsa.descricao}">
                <p class="preco"><button class="abrir"></span><i class="fa-solid fa-cart-plus"></i></button>R$ ${bolsa.preco}</p>
            </div>
        `
        console.log(prodContainer)
        prodContainer.appendChild(produtos)
    });
}

renderizar()


function mostrarItem(){
    const divModal = document.querySelector(".modal");
    const item = document.createElement("div");
    item.classList.add("modal-content");
    item.innerHTML += `
    <div class="imagem">
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea dolores nostrum, sed temporibus maiores earum voluptatibus unde nisi saepe ratione nulla expedita vel provident optio sapiente. Reiciendis ad perspiciatis iusto!</p>
    </div>
    <div class="descricao">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores doloremque, officia voluptates consequatur ad velit, dolor quibusdam, possimus magnam pariatur deleniti distinctio aspernatur eos facilis consequuntur obcaecati ipsam nostrum.</p>
    </div>
    </div>
    <div class="modal-opcoes">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores doloremque, officia voluptates consequatur ad velit, dolor quibusdam, possimus magnam pariatur deleniti distinctio aspernatur eos facilis consequuntur obcaecati ipsam nostrum.</p>

    </div>
    <button class="fechar">Fechar</button>
    <button class="adCarrinho">Adicionar ao carrinho</button>
        `
}

