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
