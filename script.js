let botao = document.querySelector("#botao");
let mensagem = document.querySelector("#mensagem");

botao.style.background="pink";

botao.addEventListener("mouseover",e =>{
    botao.style.background="purple";
});

botao.addEventListener("mouseout",e =>{
    botao.style.background="pink";
});

botao.addEventListener("click", e => {
    botao.style.background = "white";
    mensagem.textContent = "O que realmente importa não é onde você está no momento, mas para onde você está indo!";
});
