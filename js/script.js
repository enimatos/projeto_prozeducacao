
const burguer = document.querySelector("#burguer");



function toggleMenu(){
    const nav = document.querySelector("#nav")
    nav.classList.toggle('active');
}

burguer.addEventListener("click", toggleMenu);

const botaoAbrir = document.getElementsByClassName("abrir");
const botaoFechar =document.querySelector(".fechar")
 
function openModal(){
    const modal = document.querySelector("#div-modal");
    modal.classList.toggle = "active";
    modal.style.display = "block";
    const conteudo = document.createElement("div")

    conteudo.classList.add("modal-content");
    conteudo.innerHTML += `
        <div class="imagem">
            <img src ="${blusas[1].img}" alt="" />
        </div>
        <div class="descricao">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores doloremque, officia voluptates consequatur ad velit, dolor quibusdam, possimus magnam pariatur deleniti distinctio aspernatur eos facilis consequuntur obcaecati ipsam nostrum.</p>
        </div>
        </div>
        
    `
    modal.appendChild(conteudo)

    modal.innerHTML += `
        <div class="modal-opcoes">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores doloremque, officia voluptates consequatur ad velit, dolor quibusdam, possimus magnam pariatur deleniti distinctio aspernatur eos facilis consequuntur obcaecati ipsam nostrum.</p>

        </div>
        <button class="fechar">Fechar</button>
        <button class="adCarrinho">Adicionar ao carrinho</button>
        `

 
}

for(i =0;i < botaoAbrir.length; i++){
    botaoAbrir[i].addEventListener("click", openModal)

}


function fecharModal(){
    const modal = document.querySelector("#div-modal");
    modal.classList.toggle = "null";
    modal.style.display = "none";
}


botaoFechar.addEventListener("click", fecharModal)