let btn = document.querySelector(".fa-eye")
let btnConfirm = document.querySelector(".verConfirmSenha")
let nome = document.querySelector(".nome");
let labelNome = document.querySelector(".labelNome")
let sobrenome = document.querySelector(".sobrenome")
let labelSobrenome = document.querySelector(".labelSobrenome")
let cpf = document.querySelector(".cpf")
let labelCpf = document.querySelector(".labelCpf")
let email = document.querySelector(".email")
let labelEmail = document.querySelector(".labelEmail")
let senha = document.querySelector(".senha");
let labelSenha = document.querySelector(".labelSenha");
let confirmSenha = document.querySelector(".confirmSenha")
let labelConfirmSenha = document.querySelector(".labelConfirmSenha")
let emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
let cpfRegex = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/;
let enviarEmail = document.querySelector(".fazerLogin")
let assunto = document.querySelector(".assunto");
let labelAssunto = document.querySelector(".labelAssunto")
let telefone = document.querySelector(".telefone")
let labelTelefone = document.querySelector(".labelTelefone")
let telefoneRegex = /^[0-9]{2}-([0-9]{8}|[0-9]{9})/;


nome.addEventListener('keyup', () => {
    if(nome.value.length < 3){
        labelNome.setAttribute('style', 'color: red');
        labelNome.innerHTML = '<strong>Nome *Insira no mínimo 3 caracteres</strong>'
        nome.setAttribute('style', 'border-color: red');
    }else{
        labelNome.setAttribute('style', 'color: green');
        nome.setAttribute('style', 'border-color: green');
        labelNome.innerHTML = 'Nome'
    }
});

sobrenome.addEventListener('keyup', () => {
    if(sobrenome.value.length < 2){
        labelSobrenome.setAttribute('style', 'color: red');
        labelSobrenome.innerHTML = '<strong>Nome *Insira no mínimo 2 caracteres</strong>'
        sobrenome.setAttribute('style', 'border-color: red');
    }else{
        labelSobrenome.setAttribute('style', 'color: green');
        sobrenome.setAttribute('style', 'border-color: green');
        labelSobrenome.innerHTML = 'Sobrenome'
    }
});

cpf.addEventListener("keyup", () => {
    if (cpfRegex.test(cpf.value)){
        labelCpf.setAttribute('style', 'color: green');
        cpf.setAttribute('style', 'border-color: green');
        labelCpf.innerHTML = 'CPF*'
        e
    }else{
        labelCpf.setAttribute('style', 'color: red');
        cpf.setAttribute('style', 'border-color: red');
        labelCpf.innerHTML = '<strong>CPF *Insire um valor válido'
    }
})


email.addEventListener("keyup", () => {
    if (emailRegex.test(email.value)){
        labelEmail.setAttribute('style', 'color: green');
        email.setAttribute('style', 'border-color: green');
        labelEmail.innerHTML = 'E-mail*'
    }else{
        labelEmail.setAttribute('style', 'color: red');
        email.setAttribute('style', 'border-color: red');
        labelEmail.innerHTML = '<strong>E-mail *e-mail inválido</strong>'
    }
})

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 7){
        labelSenha.setAttribute('style', 'color: red');
        labelSenha.innerHTML = '<strong>Senha *Insira no mínimo 8 caracteres</strong>'
        senha.setAttribute('style', 'border-color: red');
    }else{
        labelSenha.setAttribute('style', 'color: green');
        senha.setAttribute('style', 'border-color: green');
        labelSenha.innerHTML = 'Senha'
    }
});

confirmSenha.addEventListener('keyup', () => {
    if(confirmSenha.value != senha.value){
        labelConfirmSenha.setAttribute('style', 'color: red');
        labelConfirmSenha.innerHTML = '<strong>Confirmar Senha *As senhas não conferem</strong>'
        confirmSenha.setAttribute('style', 'border-color: red');
    }else{
        labelConfirmSenha.setAttribute('style', 'color: green');
        confirmSenha.setAttribute('style', 'border-color: green');
        labelConfirmSenha.innerHTML = 'Confirmar Senha'
    }
});


btn.addEventListener("click", ()=> {
    if(senha.getAttribute('type') == "password"){
        senha.setAttribute('type', 'text')
    } else{
        senha.setAttribute('type', 'password')
    }
})


btnConfirm.addEventListener("click", ()=> {
    let confirmSenha = document.querySelector(".confirmSenha")

    if(confirmSenha.getAttribute('type') == "password"){
        confirmSenha.setAttribute('type', 'text')
    } else{
        confirmSenha.setAttribute('type', 'password')
    }
})



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

telefone.addEventListener("keyup", () => {
    if (telefoneRegex.test(telefone.value)){
        labelTelefone.setAttribute('style', 'color: green');
        telefone.setAttribute('style', 'border-color: green');
        labelTelefone.innerHTML = 'Telefone *'
        e
    }else{
        labelTelefone.setAttribute('style', 'color: red');
        telefone.setAttribute('style', 'border-color: red');
        labelTelefone.innerHTML = '<strong>Telefone *Insire um valor válido</strong>'
    }
})









