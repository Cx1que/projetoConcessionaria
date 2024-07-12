export default async function carregarCarros() {
    try {
      const response = await fetch('http://localhost:3001/carros');
      const carros = await response.json();
      
      const carrosTable = document.querySelector('[data-tabela]');
      carrosTable.innerHTML = ''; // Limpa conteúdo atual da tabela

      carros.forEach(carro => {
        const row = document.createElement('tr');
        row.innerHTML += `
          <td>${carro.modelo}</td>
          <td>${carro.cor}</td>
          <td>${carro.marcas}</td>
          <td>${carro.preco}</td>
          <td>
            <a href="./edita-carro.html?id=${carro.id}"><i class="icone-edicao fas fa-edit px-5"></i></a>
            <i class="fas fa-trash-alt"></i>
          </td>
        `;
        carrosTable.appendChild(row);
      });
    } catch (error) {
      console.error('Erro ao carregar carros:', error);
    }
  }

  // Chama a função para carregar os carros ao carregar a página
  document.addEventListener('DOMContentLoaded', carregarCarros);