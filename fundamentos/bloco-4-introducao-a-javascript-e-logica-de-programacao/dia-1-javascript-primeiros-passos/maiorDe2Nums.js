const maiorDe2Nums = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number')
    return console.log('Somente números.');

  return a > b ? console.log(a) : console.log(b);
};

maiorDe2Nums(4, 3);
