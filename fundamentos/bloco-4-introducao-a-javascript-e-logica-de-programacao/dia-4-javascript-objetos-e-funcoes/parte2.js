const verificaPalindromo = (palavra) => {
  let naoE = false;
  for (let i = 0; i <= palavra.length / 2 - 1; i += 1) {
    palavra[i] !== palavra[palavra.length - i - 1] && (naoE = true);
  }

  naoE ? console.log('Não é palíndromo.') : console.log('É palíndromo.');
  console.log('');
};

verificaPalindromo('arara');
verificaPalindromo('desenvolvimento');

const encontraIndiceDoMaior = (array) => {
  let indiceDoMaior = 0;
  let maiorNum = array[0];

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] > maiorNum) {
      indiceDoMaior = i;
      maiorNum = array[i];
    }
  }

  console.log(indiceDoMaior);
  console.log('');
};

encontraIndiceDoMaior([2, 3, 6, 7, 10, 1]);
