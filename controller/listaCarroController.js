import { carroService } from "../service/carroService.js";

const criaNovaLinha = (modelo, cor, marcas, preco, id) => {
    const linhaNovoCarro = document.createElement('tr');
    const conteudo = `
        <td class="td" data-td>${modelo}</td>
            <td>${cor}</td>
            <td>${marcas}</td>
            <td>${preco}</td>
            <td>
                <a href="./edita-carro.html?id=${id}"><i class="icone-edicao fas fa-edit px-5"></i></a>
                <i class="fas fa-trash-alt"></i>
            </td>
    `
    
    linhaNovoCarro.innerHTML = conteudo;
    linhaNovoCarro.dataset.id = id

    return linhaNovoCarro;
}

const tabela = document.querySelector('[data-tabela]');

tabela.addEventListener('click', (evento)=> {
    let ehBotaoDeletar = evento.target.className === 'fas fa-trash-alt'
    if(ehBotaoDeletar) {
        const linhaCarro = evento.target.closest('[data-id]')
        let id = linhaCarro.dataset.id
        carroService.removeCarro(id)
        .then( ()=> {
            linhaCarro.remove()
        })
    }
})

carroService.listaCarros()
.then( data => {
        data.forEach(elemento => {
        tabela.appendChild(criaNovaLinha(elemento.modelo
                                        ,elemento.cor
                                        ,elemento.marcas
                                        ,elemento.preco
                                        ,elemento.id));
})});