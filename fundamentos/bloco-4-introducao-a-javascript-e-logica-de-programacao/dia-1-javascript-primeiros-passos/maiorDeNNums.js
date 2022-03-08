const maiorDeNNums = (numeros) => {
  let numeroAtual = numeros[0];

  for (let i = 0; i < numeros.length; i++) {
    if (typeof numeros[i] !== 'number') return console.log('Somente números.');

    if (numeros[i] > numeroAtual) {
      numeroAtual = numeros[i];
    }
  }

  return console.log(numeroAtual);
};

maiorDeNNums([4, 7, 4, 5]);
