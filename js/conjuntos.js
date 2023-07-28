
const conjuntos = [ 
    {
        codigo: 0,
        nome: "Conjunto UNO",
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
        nome: "Conjunto Verao",
        preco: 37.90,
        descricao: "fssfsfs",
        img: "/imagens/conjunto/conjunto2.jpg",
        quantidade:0
    },
    {
        codigo: 2,
        nome: "Conjunto Chic",
        preco: 37.90,
        descricao: [        
            "Decote V entalhado",
            "Blazer longo e calça capri",
            "Cor: Verde Militar"
        ],
        img: "/imagens/conjunto/conjunto3.webp",
        quantidade:0
    },{
        codigo: 3,
        nome: "Conjunto Social Largo",
        preco: 63.99,
        descricao: [        
            "Camisa fechada decote redondo, com meia-manga",
            "Calça pantalona",
            "Cor: Caqui - Tecido: crepe"
        ],
        img: "/imagens/conjunto/conjunto4.jpg",
        quantidade:0
    },
    {
        codigo: 4,
        nome: "Conjunto na Moda",
        preco: 40.95,
        descricao: [        
            "Camisa fechada,decote quadrado e meia-manga",
            "Calça pantalona acinturada",
            "Cor: Azul"
        ],
        img: "/imagens/conjunto/conjunto5.jpg",
        quantidade:0
    },
    {
        codigo: 5,
        nome: "Conjunto Legal",
        preco: 78.90,
        descricao: [        
            "Camisa fechada com manga curta",
            "Calça pantalona acinturada",
            "Cor: Preto"
        ],
        img: "/imagens/conjunto/conjunto6.jpg",
        quantidade:0
    },{
        codigo: 6,
        nome: " Conjunto Vcay ",
        preco: 83.95,
        descricao: [        
            "Cropped com decote V",
            "Manga longa e calça capri",
            "Cor: Azul"
        ],
        img: "/imagens/conjunto/conjunto7.jpg",
        quantidade:0
    },
    {
        codigo: 7,
        nome: "Conjunto LUNE",
        preco: 109.99,
        descricao: [        
            "Cropped com decote V, sem manga",
            "Calça Pantalona",
            "Tecido não elástico, 100% Poliéster"
        ],
        img: "/imagens/conjunto/conjunto8.jpg",
        quantidade:0
    },
    {
        codigo: 8,
        nome: "Conjunto Clasi",
        preco: 89.95,
        descricao: [        
            "Blazer longo com cinto",
            "Calça Capri",
            "Cor: Azul - Tecido: 100% Poliéster"
        ],
        img: "/imagens/conjunto/conjunto9.webp",
        quantidade:0
    },
    {
        codigo: 9,
        nome: "Conjunto rod",
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
        nome: "Conjunto Curto",
        preco: 55.99,
        descricao: [        
            "Decote V Pequeno",
            "Manga Comprida, regular",
            "Cor: Vermelho"
        ],
        img: "/imagens/conjunto/conjunto11.jpg",
        quantidade:0
    }
]


renderizarProdutos(conjuntos, "conjunto")