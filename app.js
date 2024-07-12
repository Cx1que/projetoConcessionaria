const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const filePath = path.join(__dirname, 'dados.txt');


const server = http.createServer((req, res) => {
  console.log('Request received');  // Log básico para saber que o request foi recebido
  const reqUrl = url.parse(req.url, true);
  const pathname = reqUrl.pathname;

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    console.log('OPTIONS request');  // Log para requisição OPTIONS
    res.writeHead(200);
    res.end();
    return;
  }

  else if (req.method === 'POST' && pathname === '/carros') {
    console.log('POST request to /carros');  // Log para requisição POST
    let corpo = '';
    req.on('data', (chunk) => {
      console.log('Receiving data...');  // Log recebendo dados
      corpo += chunk.toString(); 
    });

    req.on('end', () => {
      console.log('Data received:', corpo);  // Log dados recebidos
      try {
        const {
          modelo,
          cor,
          marcas,
          preco,
          placa,
          anoFabricacao,
          tipoCombustivel,
          potenciaMotor,
          aceleracao,
          capacidadePassageiros,
          capacidadeTanque,
          tipoTransmissao,
          quilometragem,
          velocidadeMaxima,
          tipoCarroceria,
          id
        } = JSON.parse(corpo);

        const novoCarro = {
          modelo,
          cor,
          marcas,
          preco,
          placa,
          anoFabricacao,
          tipoCombustivel,
          potenciaMotor,
          aceleracao,
          capacidadePassageiros,
          capacidadeTanque,
          tipoTransmissao,
          quilometragem,
          velocidadeMaxima,
          tipoCarroceria,
          id
        };

        console.log('Parsed new car data:', novoCarro);  // Log dados do novo carro

        fs.readFile(filePath, 'utf8', (err, dados) => {
          if (err) {
            console.error('Error reading file:', err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal Server Error' }));
          } else {
            console.log('File read successfully:', dados);  // Log arquivo lido
            let carros = JSON.parse(dados).carros;
            carros.push(novoCarro);
            fs.writeFile(filePath, JSON.stringify({ carros }), 'utf8', (err) => {
              if (err) {
                console.error('Error writing file:', err);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Internal Server Error' }));
              } else {
                console.log('File written successfully');  // Log arquivo escrito
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Car added successfully', carros: novoCarro }));
              }
            });
          }
        });
      } catch (error) {
        console.error('Error parsing JSON:', error);
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });
  }
  else if (req.method === 'GET' && pathname === '/carros') {
    console.log('GET request to /carros');  // Log para requisição GET
    fs.readFile(filePath, 'utf8', (err, dados) => {
      if (err) {
        console.error('Error reading file:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
      } else {
        const carros = JSON.parse(dados).carros;
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(carros));
      }
    });
  }
  else {
    console.log('Unknown request to:', pathname);  // Log para requisições desconhecidas
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
