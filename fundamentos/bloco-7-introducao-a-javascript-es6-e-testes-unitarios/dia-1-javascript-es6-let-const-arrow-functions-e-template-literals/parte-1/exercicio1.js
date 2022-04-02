const testingScope = (escopo) =>
  escopo
    ? `Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !`
    : `Não devo ser utilizada fora meu escopo (else)`;

console.log(testingScope(true));
