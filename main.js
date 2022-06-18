const controle = document.querySelectorAll("[data-controle]");
const estatistica = document.querySelectorAll("[data-estatistica]");
const pecas = { 
    
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
  
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },

    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },

    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },

    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
  };

controle.forEach ((elemento) => {

    elemento.addEventListener('click', (evento) => {
        alteraCaracteristicas(evento.target.dataset.controle, evento.target.parentNode);
        atualizaHabilidades(evento.target.dataset.peca);
    });

});
  
function alteraCaracteristicas (op, controle) {

    const peca = controle.querySelector("[data-contador]");
    let valorPeca = parseInt(peca.value);
  
        if (op === "-") {
        peca.value = valorPeca - 1;
        } else {
        peca.value = valorPeca + 1;
        };

};
  
function atualizaHabilidades(peca) {   

    estatistica.forEach((elemento) => {
    elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    });

};

