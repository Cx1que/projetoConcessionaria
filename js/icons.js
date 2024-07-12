const edicoes = document.querySelectorAll('.icone-edicao');

edicoes.forEach(function(edicao) {
    edicao.addEventListener('click', function() {
        window.location.href = 'formulario-carros.html';
    });
});
