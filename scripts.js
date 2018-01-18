/* Jogo da Velha
Precisa:
- variáveis: jogador, jogadas
- funções: clique, verificar vencedor
*/


let jogador = 'x';
let jogadas = 0;

const iguais = function(c1, c2, c3) {
  let casa1 = (document.getElementById("casa" + c1));
  let casa2 = (document.getElementById("casa" + c2));
  let casa3 = (document.getElementById("casa" + c3));

  let bg1 = casa1.style.backgroundImage;
  let bg2 = casa2.style.backgroundImage;
  let bg3 = casa3.style.backgroundImage;


  if (bg1 === bg2 && bg2 === bg3 && bg1 !== "" && bg1 !== "none") {
    return true;
  } else {
    return false;
  }
}

// se alguma das sequencias tiver bg (background) igual, o jogo termina
const verificarFim = function() {
  if (iguais(1, 2, 3) || iguais(4, 5, 6) || iguais(7, 8, 9) || iguais(1, 4, 7) || iguais(2, 5, 8) || iguais(3, 6, 9) || iguais(1, 5, 9) || iguais(3, 5, 7)) {
    return true;
  } else {
    return false;
  }
}


// cria a função encerrar o jogo: tira a função clicar de todas as casas e anuncia o vencedor
const encerrar = function() {
  let casas = document.getElementsByClassName('casa');
  for (let casa of casas) {
    casa.removeEventListener('click', clique); // o clique vai ser removido quando o jogo encerrar
  }
  let anuncio = document.getElementById('resultado');
  anuncio.innerHTML = "<h1>O vencedor é o jogador " + jogador + "!</h1>";
}

// cria a função clique mostrando o que vai acontecer quando clica nas casas

const clique = function() { // obs: funções que serão chamadas por evento não podem ter entrada ()
  jogadas++; // aumenta uma jogada

  if (jogador === 'x') {
    this.style.backgroundImage = 'url("1.jpg")'; // coloca a imagem 1 (x) no background
  } else {
    this.style.backgroundImage = 'url("2.jpg")'; // coloca a imagem 2 (o) no background
  }

  this.removeEventListener('click', clique); // remove a possibilidade de clique da casa selecionada

  if (verificarFim()) { // se verificar fim retornar true, aciona a função encerrar, caso contrario vai para o else
    encerrar();
  } else { // troca o jogador para o contrário do que estava
    if (jogador === 'x') {
      jogador = 'o';
    } else {
      jogador = 'x';
    }
    if (jogadas === 9) { // se jogadas atingir 9, "deu velha"
      let anuncio = document.getElementById('resultado');
      anuncio.innerHTML = "<h1>Deu velha!</h1>";
    }
  }
}

let casas = document.getElementsByClassName('casa');
for (let casa of casas) {
  casa.addEventListener('click', clique);
};
