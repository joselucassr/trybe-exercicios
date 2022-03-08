let comidas = ['hamburger', 'sushi', 'strogonoff'];

// for (let i = comidas.length - 1; i >= 0; i--) {
//   console.log('i', i);
//   console.log(comidas[i]);
// }

comidas.forEach((comida) => {
  console.log('Eu gosto muito de ' + comida);
  console.log(`Eu gosto muito de ${comida}`);
});
