class Formulario{
    constructor(nome,email,cpf,sobrenome,telefone,metodo){
        this._nome=nome;
        this._email=email;
        this._cpf=cpf;
        this._sobrenome=sobrenome;
        this._telefone=telefone;
        this.adicinarMetodo(metodo);
    }

    //Responsável por adicionar o método a partir do código
    adicinarMetodo(metodo){
        switch(metodo){
            case "0":
                this._metodo="Telefone";
                break
            case "1":
                this._metodo="E-mail";
        }
    }

    //Responsável por gerar o formulário
    static post(){
        
        let form=document.querySelector("#formulario");

        let formularioPreenchido= new Formulario(form.elements.namedItem("campoNome").value,
        form.elements.namedItem("campoEmail").value, 
        form.elements.namedItem("campoCpf").value,
        form.elements.namedItem("campoSobrenome").value,
        form.elements.namedItem("campoTelefone").value,
        form.elements.namedItem("campoMetodo").value);

        formularioPreenchido.enviar(form);
    }

    //Responsável por verificar se o formulário está completo e mandar a mensagem para o usuário
    enviar(form){
        let mensagemEnvio=document.querySelector("#mensagemEnvio");

        if (this._nome && this._email && this._cpf && this._sobrenome && this._telefone && this._metodo){
            
            mensagemEnvio.className="";
            
            mensagemEnvio.classList.add("divMensagemEnvio","divMensagemEnvioCerto");

            mensagemEnvio.innerHTML="<span>Obrigado "+this._nome+" "+this._sobrenome+", seus dados foram salvos.</span>";
        
            console.log(this);

            form.reset();
        } else {
            mensagemEnvio.className="";

            mensagemEnvio.classList.add("divMensagemEnvio","divMensagemEnvioErro");

            mensagemEnvio.innerHTML="<span>Um ou mais campos não foram preenchidos, complete para enviar.</span>";           
        }
    }
}