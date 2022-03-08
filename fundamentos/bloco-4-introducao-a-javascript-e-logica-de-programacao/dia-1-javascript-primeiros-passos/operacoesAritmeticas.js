const fazOperacao = (a, operacao, b) => {
  const operacoes = {
    '+': a + b,
    '-': a - b,
    '/': a / b,
    '*': a * b,
  };

  if (typeof a !== 'number' || typeof b !== 'number')
    return console.log('Somente números.');

  if (!operacoes[operacao]) return console.log('Insira uma operação válida.');

  return console.log(`${a} ${operacao} ${b} = ${operacoes[operacao]}`);
};

fazOperacao(2, '-', 3);
