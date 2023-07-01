
let assunto = document.querySelector("#assunto");
let labelAssunto = document.querySelector("#labelAssunto")
let nome = document.querySelector("#nome");
let labelNome = document.querySelector("#labelNome")
let telefone = document.querySelector("#telefone")
let labelTelefone = document.querySelector("#labelTelefone")
let email = document.querySelector("#email")
let labelEmail = document.querySelector("#labelEmail")

let emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
let telefoneRegex = /^[0-9]{2}-([0-9]{8}|[0-9]{9})/;

assunto.addEventListener('keyup', () => {
    if(assunto.value.length < 5){
        labelAssunto.setAttribute('style', 'color: red');
        labelAssunto.innerHTML = '<strong>Assunto *O seu assunto deve ter ao menos 6 caracteres</strong>'
        assunto.setAttribute('style', 'border-color: red');
    }else{
        labelAssunto.setAttribute('style', 'color: green');
        assunto.setAttribute('style', 'border-color: green');
        labelAssunto.innerHTML = 'Assunto *'
    }
});

nome.addEventListener('keyup', () => {
    if(nome.value.length < 3){
        labelNome.setAttribute('style', 'color: red');
        labelNome.innerHTML = '<strong>Nome *Insira no mínimo 2 caracteres</strong>'
        nome.setAttribute('style', 'border-color: red');
    }else{
        labelNome.setAttribute('style', 'color: green');
        nome.setAttribute('style', 'border-color: green');
        Nome.innerHTML = 'Nome *'
    }
});


email.addEventListener("keyup", () => {
    if (emailRegex.test(email.value)){
        labelEmail.setAttribute('style', 'color: green');
        email.setAttribute('style', 'border-color: green');
        labelEmail.innerHTML = 'E-mail*'
        e
    }else{
        labelEmail.setAttribute('style', 'color: red');
        email.setAttribute('style', 'border-color: red');
        labelEmail.innerHTML = '<strong>E-mail *e-mail inválido'
    }
})

telefone.addEventListener("keyup", () => {
    if (telefoneRegex.test(telefone.value)){
        labelTelefone.setAttribute('style', 'color: green');
        telefone.setAttribute('style', 'border-color: green');
        labelTelefone.innerHTML = 'Telefone *'
        e
    }else{
        labelTelefone.setAttribute('style', 'color: red');
        telefone.setAttribute('style', 'border-color: red');
        labelTelefone.innerHTML = '<strong>Telefone *Insire um valor válido'
    }
})



