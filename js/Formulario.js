//Pendente:
//Transformar metodo de exibição de mensagem de erro para alternar entre display none e block.

class Formulario{
    constructor(nome,email,telefone,motivo,mensagem){
        this._nome=nome;
        this._email=email;
        this._telefone=telefone;
        this.adicinarMotivo(motivo);
        this._mensagem=mensagem;
    }

    //Responsável por adicionar o motivo a partir do código
    adicinarMotivo(motivo){
        switch(motivo){
            case "0":
                this._motivo="Elogio";
                break
            case "1":
                this._motivo="Reclamação";
                break   
            case "2":
                this._motivo="Solicitação";
        }
    }

    //Responsável por gerar o formulário
    static post(){
        
        let form=document.querySelector("#formulario");

        let formularioPreenchido= new Formulario(form.elements.namedItem("campoNome").value,
        form.elements.namedItem("campoEmail").value,
        form.elements.namedItem("campoTelefone").value,
        form.elements.namedItem("campoMotivo").value,
        form.elements.namedItem("campoMensagem").value);

        formularioPreenchido.enviar(form);
    }

    //Responsável por verificar se o formulário está completo e mandar a mensagem para o usuário
    enviar(form){
        let mensagemEnvio=document.querySelector("#mensagemEnvio");

        if (this._nome && this._email && this._telefone && this._motivo && this._mensagem){
            
            mensagemEnvio.className="";
            
            mensagemEnvio.classList.add("divMensagemEnvio","divMensagemEnvioCerto");

            mensagemEnvio.innerHTML="<span>Obrigado "+this._nome+", seus dados foram salvos.</span>";
        
            console.log(this);

            form.reset();
        } else {
            mensagemEnvio.className="";

            mensagemEnvio.classList.add("divMensagemEnvio","divMensagemEnvioErro");

            mensagemEnvio.innerHTML="<span>Um ou mais campos não foram preenchidos, complete para enviar.</span>";           
        }
    }
}