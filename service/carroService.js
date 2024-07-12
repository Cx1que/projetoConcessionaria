const listaCarros = ()=> {
    return fetch(`http://localhost:3000/carros`)
    .then( resposta => {
        return resposta.json();
    })
}

const criaCarro = (modelo, cor, marcas, preco) => {
    return fetch(`http://localhost:3000/carros`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            modelo: modelo,
            cor: cor,
            marcas:marcas,
            preco: preco
            
        })
    })
    .then( resposta => {
        resposta.body
    })
}

const removeCarro = (id) => {
    return fetch(`http://localhost:3000/carros/${id}`, {
        method: 'DELETE'
    })
}

const detalhaCarro = (id) => {
    return fetch(`http://localhost:3000/carros/${id}`)
    .then( resposta => {
        return resposta.json();
    })
}

const atualizaCarro = (id, modelo, cor, marcas, preco) =>{
    return fetch(`http://localhost:3000/carros/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            modelo: modelo,
            cor: cor,
            marcas: marcas,
            preco: preco
        })
    })
    .then( resposta => {
        return resposta.JSON();
    })
}

export const carroService = {
    listaCarros,
    criaCarro,
    removeCarro,
    detalhaCarro,
    atualizaCarro
}
