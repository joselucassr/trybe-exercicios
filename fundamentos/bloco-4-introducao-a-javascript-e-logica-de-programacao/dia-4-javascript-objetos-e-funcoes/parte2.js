function verificaPalindromo(palavra) {
  let naoE = false;
  for (let i = 0; i <= palavra.length / 2 - 1; i += 1) {
    palavra[i] !== palavra[palavra.length - i - 1] && (naoE = true);
  }

  naoE ? console.log('Não é palíndromo.') : console.log('É palíndromo.');
  console.log('');
}

verificaPalindromo('arara');
verificaPalindromo('desenvolvimento');

function encontraIndiceDoMaior(array) {
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
}

encontraIndiceDoMaior([2, 3, 6, 7, 10, 1]);

function encontraIndiceDoMenor(array) {
  let indiceDoMenor = 0;
  let menorNum = array[0];

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] < menorNum) {
      indiceDoMenor = i;
      menorNum = array[i];
    }
  }

  console.log(indiceDoMenor);
  console.log('');
}

encontraIndiceDoMenor([2, 4, 6, 7, 10, 0, -3]);

function encontraNomeMaisLongo(array) {
  let nomeMaisLongo = array[0];

  for (let i = 1; i < array.length; i += 1) {
    if (array[i].length > nomeMaisLongo.length) {
      nomeMaisLongo = array[i];
    }
  }

  console.log(nomeMaisLongo);
  console.log('');
}

encontraNomeMaisLongo(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);

function numMaisRepetido(array) {
  let numsEncontrados = {};
  let info = {
    maisRepetido: '',
    maiorRep: 0,
  };

  for (let i = 0; i < array.length; i += 1) {
    if (numsEncontrados[array[i]]) numsEncontrados[array[i]] += 1;
    else numsEncontrados[array[i]] = 1;

    if (numsEncontrados[array[i]] > info.maiorRep) {
      info.maisRepetido = array[i];
      info.maiorRep = numsEncontrados[array[i]];
    } else if (numsEncontrados[array[i]] === info.maiorRep) {
      info.maisRepetido = `${info.maisRepetido}, ${array[i]}`;
    }
  }

  console.log(info.maisRepetido);
  console.log('');
}

numMaisRepetido([2, 3, 2, 5, 8, 2, 3, 4, 4]);

function somatorioAteN(n) {
  let soma = 0;

  for (let i = 1; i <= n; i += 1) {
    soma += i;
  }

  console.log(soma);
  console.log('');
}

somatorioAteN(5);

function verificaFimPalavra(palavra, fimParaChecar) {
  let fimVerdadeiro = palavra.substring(palavra.length - fimParaChecar.length);

  console.log(fimVerdadeiro === fimParaChecar);
}

verificaFimPalavra('tryber', 'ber');
