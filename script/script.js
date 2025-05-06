let Botao=document.getElementById('botao')
let Corpo=document.body
let GitHub =document.getElementsByTagName('a')[0]
let Bahenace=document.getElementsByTagName('a')[1]
let Linkedin=document.getElementsByTagName('a')[2]
let Container= document.getElementById('container')
let Contato= document.getElementById('contato')
let Email= document.getElementById('email')

let Logo=document.getElementById('logo')
let Panda= document.getElementById('panda')

Botao.addEventListener('click', ()=>{
    Botao.classList.toggle('dark')
    Corpo.classList.toggle('dark')
    GitHub.classList.toggle('dark')
    Bahenace.classList.toggle('dark')
    Linkedin.classList.toggle('dark')
    Container.classList.toggle('dark')
    Contato.classList.toggle('dark')
    Email.classList.toggle('dark')

    if(Logo.classList.toggle('dark')){
    Logo.setAttribute("src", "Images/LogoNegativo.svg");
} else{
    Logo.setAttribute("src", "Images/Logo.svg");
}

if(Panda.classList.toggle('dark')){
    Panda.setAttribute("src", "Images/HappyPanda.svg");
} else{
    Panda.setAttribute("src", "Images/PandaNormal.svg");
}
    
})
