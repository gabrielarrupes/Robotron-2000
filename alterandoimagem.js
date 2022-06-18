//variáveis 

const robo = document.querySelector('.robo');
const dataRobo = document.querySelector('[data-robo]');
const arrayDeCores = ["amarelo", "branco", "vermelho", "preto", "rosa"];
let i = 0;

//click no robô para alterar a cor;

robo.addEventListener("click", () => {

    trocaCorRobo(arrayDeCores);

})

//função para trocar a cor do robô e conteúdo textual(acessibilidade);
// condição para impedir que a cor se repita em sequência;

function trocaCorRobo(array) {

    dataRobo.src = `img/robotron${array[i]}.png`;
    dataRobo.alt = `Robotron ${array[i]}`

        if (i == array.length){
            dataRobo.src = `img/robotron.png`;
            dataRobo.alt = `Robotron ${array[i]}`
            i=0;
        } else { 
            i++
        };

};

