const replaceX = (string, newWord) => string.replaceAll('x', newWord);

let skills = ['Javascript', 'HTML', 'CSS', 'Typescript', 'Jest'];

const buildPhrase = (presentationString) =>
  `${presentationString} Minhas 5 principais habilidades são:\n${skills.reduce(
    (acc, curr) => `${acc};\n${curr}`,
  )};\n#goTrybe`;

console.log(buildPhrase(replaceX('Tryber x aqui!', 'Zé')));
