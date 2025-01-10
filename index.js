//funçao para tamanho de tela
function MudouTamanho(){
    if(window.innerWidth >= 768){
        itens.style.display = 'block'
    }
    else{
        itens.style.display = 'none'
    }
}

//funçao para menu
function clickMenu(){
    if (itens.style.display ==  'none'){
        itens.style.display = 'block'
        if(itens.style.display =='block'){
            cab.style.height = '160px'
  
  
        }
    }
    else{
        
        itens.style.display = 'none'
       
        cab.style.height = '100px'
        hambur.style.width = '24px'
        hambur.style.textAlign = 'left'
    }
}

/*/dados cliente
let nome = document.getElementById('nclien')
let cpf = document.getElementById('cpf')
let telefone = document.getElementById('telefone')
let email = document.getElementById('email')
let data = document.getElementById('data')
let endereco = document.getElementById('ende')*/
//dados os

let desc = document.getElementById('Descricao')
let quanti = document.getElementById('Quantidade')
let valuni = document.getElementById('valoruni')
let total = document.getElementById('restot')
let adicionados = document.getElementById('Adicionados')
let botadd = document.getElementById('add')
//os´s
let os = document.getElementById('os')
let obs = document.getElementById('Observacoes')



function adicionar(){
    desc = desc.value
    if(desc.length != 0){
        adicionados.innerHTML = desc

    }
}










/* criação do botao para remover itens adicionado

 {order.items.length > 1 && (
                  <button
                    onClick={() => removeItem(index)}
                    className="mt-6 text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
*/
