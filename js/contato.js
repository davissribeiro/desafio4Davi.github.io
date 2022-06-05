let botaoEnviarFormulario=document.querySelector("#botaoEnviarFormulario");

botaoEnviarFormulario.addEventListener("click",function(event){
    event.preventDefault();
        
    Formulario.post();
})

