let carroArr=[];

class Carro{
    constructor(imagem, nome, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, preco){
        this._imagem=imagem;
        this._nome=nome;
        this._alturaCacamba=alturaCacamba;
        this._alturaVeiculo=alturaVeiculo;
        this._alturaSolo=alturaSolo;
        this._capacidadeCarga=capacidadeCarga;
        this._motor=motor;
        this._potencia=potencia;
        this._volumeCacamba=volumeCacamba;
        this._roda=roda;
        this.adicionarPreco(preco);
    }

    //Responsável por formatar o valor do preço
    adicionarPreco(preco){
        this._preco=new Intl.NumberFormat("pt-BR", {
            style:"currency",
            currency:"BRL"
        }).format(preco);
    }

    //Responsável por adicinar e remover carro da arrey quando mudar o status do checkbox
    static prepararComparacao(checkBox, carro){
        if(carro instanceof Carro){
            let conferir=Carro.conferirArr(carro);
    
            if(checkBox.checked){
                if(conferir==-1){
                    carroArr.push(carro);
                }
            }else{
                if(conferir!=-1){
                    carroArr.splice(conferir,1);
                }
            }
        } else{
            throw new Error ("O elemento deve ser uma instância da classe Carro");
        }
        console.log(carroArr);
    }

    //Responsável por conferir se carro já foi adicionado antes
    static conferirArr(carro){
        for(let i=0;i<carroArr.length;i++){
            if (carroArr[i]._nome == carro._nome){
                return i;
            }
        }
        return -1;
    }

    //Responsável por abrir a janela de comparação
    static abrirJanela(){
        let mensagemComparacao=document.querySelector("#mensagemComparacao");

        if(carroArr.length>2){

            mensagemComparacao.style.display="none";

            setTimeout(function(){
                mensagemComparacao.style.display="block";
            },400)
            
            mensagemComparacao.innerHTML="<span>Somente dois modelos podem ser comparados por vez, desmarque algum deles.</span>";
        }else if(carroArr.length<2){
            
            mensagemComparacao.style.display="none";

            setTimeout(function(){
                mensagemComparacao.style.display="block";
            },400)
        
            mensagemComparacao.innerHTML="<span>Dois carros devem ser selecionados para iniciar a comparação.</span>";
        }else{

            mensagemComparacao.style.display="none";

            Carro.tabelarCarros();
            
            let janelaComparar=document.querySelector("#janelaComparar");
            janelaComparar.style.display="block";
        }
    }

    //Responsável por botar os dados dos carros na tabela
    static tabelarCarros(){
        for(let i=0;i<2;i++){
            let selecionado=[];

            selecionado.push(carroArr[i]._imagem);
            selecionado.push(carroArr[i]._nome);
            selecionado.push(carroArr[i]._alturaCacamba);
            selecionado.push(carroArr[i]._alturaVeiculo);
            selecionado.push(carroArr[i]._alturaSolo);
            selecionado.push(carroArr[i]._capacidadeCarga);
            selecionado.push(carroArr[i]._motor);
            selecionado.push(carroArr[i]._potencia);
            selecionado.push(carroArr[i]._volumeCacamba);
            selecionado.push(carroArr[i]._roda);
            selecionado.push(carroArr[i]._preco);

            let tabela=document.querySelectorAll(".tabela_"+i+"");

            for(let j=0; j<tabela.length;j++){
                if(j==0){
                    tabela[j].innerHTML="<img src="+selecionado[j]+">";
                } else{
                    tabela[j].innerHTML=selecionado[j];
                }
            }
            
        }
        
    }
    
    //Responsável por fechar a janela de comparação
    static fecharJanela(){
    
        let janelaComparar=document.querySelector("#janelaComparar");
        janelaComparar.style.display="none";
    }
}