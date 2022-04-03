function hydrate(string) {
  // seu código aqui
  const quantosPedidos = [...string.matchAll(/\d/g)];
  let soma = 0;
  for (let pedido of quantosPedidos) {
    soma += parseInt(pedido[0], 10);
  }
  return `${soma} copo${soma > 1 ? 's' : ''} de água`;
}

module.exports = hydrate;
