let btnEye = document.querySelector(".fa-eye")
let emailLogin = document.querySelector("#emailLogin")
let enviarEmail = document.querySelector("#envio")
let labelSenhaLogin = document.querySelector("#labelSenha")
let emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

let labelEmailLogin = document.querySelector("#labelemail")
let senhaLogin = document.querySelector("#senha")

emailLogin.addEventListener("keyup", () => {
    if (emailRegex.test(emailLogin.value)){
        labelEmailLogin.setAttribute('style', 'color: green');
        emailLogin.setAttribute('style', 'border-color: green');
        labelEmailLogin.innerHTML = 'E-mail*'
        e
    }else{
        labelEmailLogin.setAttribute('style', 'color: red');
        emailLogin.setAttribute('style', 'border-color: red');
        labelEmailLogin.innerHTML = '<strong>E-mail *e-mail inválido'
    }
})


btnEye.addEventListener("click", ()=> {
    if(senhaLogin.getAttribute('type') == "password"){
        senhaLogin.setAttribute('type', 'text')
    } else{
        senhaLogin.setAttribute('type', 'password')
    }
})


if (emailLogin.value != '' || senhaLogin.value != ''){
    enviarEmail.setAttribute('style', disabled)
}else{
    enviarEmail.setAttribute('style', 'disabled: false')
    enviarEmail.addEventListener("click", () =>{
        alert("Aproveite")
    })
}
