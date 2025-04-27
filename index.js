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



let desc = 