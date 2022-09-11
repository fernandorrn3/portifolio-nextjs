


export function criarContainer(container, selecionarContainer,passaMouse,tiraMouse) {

    const criarContainer = document.createElement('div') 
   criarContainer.className = "bg-[blue] w-full"
   criarContainer.id = 'containerPai'
   criarContainer.setAttribute('contenteditable','true')
   criarContainer.setAttribute('style','min-height:4rem; cursor: pointer; padding:8px; margin-top:4px;')
   container.appendChild(criarContainer)
    criarContainer.onclick = selecionarContainer
    criarContainer.onmouseover = passaMouse
    criarContainer.onmouseout  = tiraMouse

}


export function centralizar(elemento, botao) {

    switch (botao) {
        case 'centralizar':
            console.log(elemento.parentElement)
            elemento.parentElement.parentElement.classList.remove('flex')
            elemento.parentElement.parentElement.classList.remove('justify-center')  
            elemento.parentElement.parentElement.className += ' flex justify-center'
            break;
    }
}


export function criarTag(tag, caixa, clickElement) {
 
    const criarTag = document.createElement(tag)
    const div = document.createElement('div')
    const div2 = document.createElement('div')
    div.setAttribute('id', 'pai')
    div2.setAttribute('id', 'filho')    
    div2.appendChild(criarTag)
    div.appendChild(div2)
    caixa.appendChild(div)
    criarTag.textContent = 'edite aqui'
    criarTag.onclick = clickElement
}



export function criarCaixas(caixa,selecionarContainer,passaMouse,tiraMouse){
    const caixaElemento = document.createElement('div')
    
    caixaElemento.setAttribute('id', 'caixaelemento')
    caixaElemento.className = 'bg-[green] w-full'
    caixaElemento.setAttribute('style','min-height:4rem; margin:4px 4px 0px 0px; cursor: pointer; padding:8px')
    caixaElemento.setAttribute('contenteditable','true')
    caixa.appendChild(caixaElemento)
    caixaElemento.onclick = selecionarContainer
    caixaElemento.onmouseover = passaMouse
    caixaElemento.onmouseout   = tiraMouse
}