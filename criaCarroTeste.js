document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('[data-form]');
    form.addEventListener('submit', async (event) => {
      event.preventDefault(); // Evita o envio padrão do formulário
      
      const modelo = document.querySelector('[data-modelo]').value;
      const cor = document.querySelector('[data-cor]').value;
      const marcas = document.querySelector('[data-marcas]').value;
      const preco = document.querySelector('[data-preco]').value;
      const anoFabricacao = document.querySelector('[data-fabricacao]').value;
      const tipoCombustivel = document.querySelector('[data-combustivel]').value;
      const placa = document.querySelector('[data-placa]').value;
      const motor = document.querySelector('[data-motor]').value;
      const aceleracao = document.querySelector('[data-aceleracao]').value;
      const capacidade = document.querySelector('[data-capacidade]').value;
      const tanque = document.querySelector('[data-tanque]').value;
      const transmissao = document.querySelector('[data-transmissao]').value;
      const quilometragem = document.querySelector('[data-quilometragem]').value;
      const velocidadeMaxima = document.querySelector('[data-velocidadeMaxima]').value;
      const carroceria = document.querySelector('[data-carroceria]').value;
  
      const novoCarro = {
        modelo: modelo,
        cor: cor,
        marcas: marcas,
        preco: preco,
        anoFabricacao: anoFabricacao,
        tipoCombustivel: tipoCombustivel,
        placa: placa,
        motor: motor,
        aceleracao: aceleracao,
        capacidade: capacidade,
        tanque: tanque,
        transmissao: transmissao,
        quilometragem: quilometragem,
        velocidadeMaxima: velocidadeMaxima,
        carroceria: carroceria
      };
  
      try {
        const response = await fetch('http://localhost:3001/carros', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(novoCarro)
        });
  
        if (!response.ok) {
          throw new Error('Erro ao criar carro');
        }
  
        console.log('Redirecionando para sucesso.html...');
        window.location.href = './sucesso.html';
        form.reset();
      } catch (error) {
        console.error('Erro ao criar carro:', error);
        console.log('Redirecionando para 404.html...');
        window.location.href = './404.html';
      }
    });
  });
  