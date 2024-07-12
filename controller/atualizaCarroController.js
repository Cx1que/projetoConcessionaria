import { carroService } from "../service/carroService.js";

const pegaURL = new URL(window.location);

const id = pegaURL.searchParams.get('id');

const inputModelo = document.querySelector('[data-modelo]');
const inputCor = document.querySelector('[data-cor]');
const inputMarca = document.querySelector('[data-marcas]');
const inputPreco = document.querySelector('[data-preco]');
const inputAno = document.querySelector('[data-ano]');
const inputTipoCombustivel = document.querySelector('[data-combustivel]');
const inputPlaca = document.querySelector('[data-placa]');
const inputPotenciaMotor = document.querySelector('[data-motor]');
const inputAceleracao = document.querySelector('[data-aceleracao]');
const inputCapacidadePassageiros = document.querySelector('[data-capacidade]');
const inputCapacidadeTanque = document.querySelector('[data-tanque]');
const inputTipoTransmissao = document.querySelector('[data-transmissao]');
const inputQuilometragem = document.querySelector('[data-quilometragem]');
const inputVelocidadeMaxima = document.querySelector('[data-velocidadeMaxima]');
const inputTipoCarroceria = document.querySelector('[data-carroceria]');
const botaoSubmit = document.querySelector('[data-submit-botao]');

// Preenche os campos do formulário com os dados do carro a ser editado
carroService.detalhaCarro(id)
  .then(dados => {
    inputModelo.value = dados.modelo;
    inputCor.value = dados.cor;
    inputMarca.value = dados.marcas;
    inputPreco.value = dados.preco;
    inputPlaca.value = dados.placa;
    inputAno.value = dados.anoFabricacao;
    inputTipoCombustivel.value = dados.tipoCombustivel;
    inputPotenciaMotor.value = dados.potenciaMotor;
    inputAceleracao.value = dados.aceleracao;
    inputCapacidadePassageiros.value = dados.capacidadePassageiros;
    inputCapacidadeTanque.value = dados.capacidadeTanque;
    inputTipoTransmissao.value = dados.tipoTransmissao;
    inputQuilometragem.value = dados.quilometragem;
    inputVelocidadeMaxima.value = dados.velocidadeMaxima;
    inputTipoCarroceria.value = dados.tipoCarroceria;
  })
  .catch(error => {
    console.error('Erro ao carregar detalhes do carro:', error);
  });

// Lida com o envio do formulário
if (botaoSubmit) {
  botaoSubmit.addEventListener('click', (evento) => {
    evento.preventDefault();

    if (!id) {
      console.error('ID não encontrado na URL');
      return;
    }

    fetch(`http://localhost:3000/carros/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        modelo: inputModelo.value,
        cor: inputCor.value,
        marca: inputMarca.value,
        preco: inputPreco.value,
        anoFabricacao: inputAno.value,
        tipoCombustivel: inputTipoCombustivel.value,
        placa: inputPlaca.value, 
        potenciaMotor: inputPotenciaMotor.value,
        aceleracao: inputAceleracao.value, 
        capacidadePassageiros: inputCapacidadePassageiros.value,
        capacidadeTanque: inputCapacidadeTanque.value,
        tipoTransmissao: inputTipoTransmissao.value,
        quilometragem: inputQuilometragem.value, 
        velocidadeMaxima: inputVelocidadeMaxima.value,
        tipoCarroceria: inputTipoCarroceria.value,
      })
    })
    .then(response => {
      if (response.ok) {
        window.location.href = "../sucesso-edicao.html";
      } else {
        console.error('Erro ao atualizar carro:', response.statusText);
      }
    })
    .catch(error => {
      console.error('Erro inesperado:', error);
    });
  });
}
