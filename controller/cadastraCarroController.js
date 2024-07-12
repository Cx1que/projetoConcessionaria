import { carroService } from "../service/carroService.js";

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault()
    const modelo = evento.target.querySelector('[data-modelo]').value
    const cor = evento.target.querySelector('[data-cor]').value
    const marcas = evento.target.querySelector('[data-marcas]').value
    const preco = evento.target.querySelector('[data-preco]').value

    carroService.criaCarro(modelo, cor, marcas, preco)
    .then(() => {
        window.location.href = './tabela-carros.html'
    })
})