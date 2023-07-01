let btn = document.querySelector(".fa-eye")

let enviarEmail = document.querySelector("#envio")
let email = document.querySelector("#email")
let labelEmail = document.querySelector("#labelemail")
let senha = document.querySelector("#senha")
let labelSenha = document.querySelector("#labelSenha")
let emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;


email.addEventListener("keyup", () => {
    if (emailRegex.test(email.value)){
        labelEmail.setAttribute('style', 'color: green');
        email.setAttribute('style', 'border-color: green');
        labelEmail.innerHTML = 'E-mail*'
    }else{
        labelEmail.setAttribute('style', 'color: red');
        email.setAttribute('style', 'border-color: red');
        labelEmail.innerHTML = '<strong>E-mail *e-mail inválido'
    }
})


btn.addEventListener("click", ()=> {
    if(senha.getAttribute('type') == "password"){
        senha.setAttribute('type', 'text')
    } else{
        senha.setAttribute('type', 'password')
    }
})

