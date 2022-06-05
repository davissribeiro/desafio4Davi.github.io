class Carrossel{

    constructor(nomeImagem,descricao,destino){
        this._nomeImagem=nomeImagem;
        this._descricao=descricao;
        this._destino=destino;
    }

    //Responsável por iniciar a exibição das imagens
    static start(conjuntoImagens){
        if (typeof conjuntoImagens == "object"){
    
            if(conjuntoImagens.length > 0){
                Carrossel._sequencia=0;
                Carrossel._tamanho=conjuntoImagens.length;

                Carrossel.next(conjuntoImagens);
                
                setInterval(function(){
                    Carrossel.next(conjuntoImagens);
                },2000);
            }
        } else{
            throw new Error ("O método start deve receber uma array");
        }      
    }

    //Responsável por mudar a imagem exibida
    static next(conjuntoImagens){
        
            let imagem=conjuntoImagens[Carrossel._sequencia];

            let divImagem=document.querySelector("#carrossel");
            divImagem.innerHTML="<a href='"+imagem._destino+"'><img src='img/"+imagem._nomeImagem+"'></a>";

            let divDescricao=document.querySelector("#descricaoCarrossel");
            if (imagem._destino=="#"){
                divDescricao.innerHTML=imagem._descricao;
            }else {
                divDescricao.innerHTML=imagem._descricao+"<a href='"+imagem._destino+"'>Aqui</a>";
            }

            Carrossel._sequencia +=1;
        if(Carrossel._sequencia>=Carrossel._tamanho){
            Carrossel._sequencia = 0;
        }
        
    }
}