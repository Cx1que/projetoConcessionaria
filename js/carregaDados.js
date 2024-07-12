function popularTabela(dados) {
    var tabela = document.querySelector('#dataTable');
    var tabelaCorpo = tabela.querySelector('tbody.tabelaDados');

    dados.forEach(function(dados) {
        var linha = document.createElement('tr');

        var celulaMarca = document.createElement('td');
        celulaMarca.textContent = dados.marca;
        linha.appendChild(celulaMarca);

        var celulaModelo = document.createElement('td');
        celulaModelo.textContent = dados.modelo;
        linha.appendChild(celulaModelo);

        var celulaPlaca = document.createElement(`td`);
        celulaPlaca.textContent = dados.modelo;
        linha.appendChild(celulaPlaca);

        var celulaCombustivel = document.createElement(`td`);
        celulaCombustivel.textContent = dados.tipoCombustivel;
        linha.appendChild(celulaCombustivel);

        var celulaData = document.createElement(`td`);
        celulaData.textContent = dados.data;
        linha.appendChild(celulaData);

        var celulaPreco = document.createElement(`td`);
        celulaPreco.textContent = dados.preco;
        linha.appendChild(celulaPreco);
        // ... (repita para os outros campos: placa, combustivel, ano, preço)

        tabelaCorpo.appendChild(linha);
    });
}


// Obter dados do localStorage
var dadosCompletos = localStorage.getItem('dadosCompletos') || [];

// Popular tabela com dados
popularTabela(dadosCompletos);

console.log(dadosCompletos);