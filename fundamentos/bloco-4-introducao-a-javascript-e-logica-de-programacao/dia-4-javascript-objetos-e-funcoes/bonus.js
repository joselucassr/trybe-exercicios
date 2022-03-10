function decifraAlgRomano(numEmAlgRomano) {
  const romParaDec = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let somatorio = 0;

  for (let i = 0; i < numEmAlgRomano.length; i += 1) {
    let numAtual = romParaDec[numEmAlgRomano[i]];
    let proxNum = romParaDec[numEmAlgRomano[i + 1]];

    if (numAtual >= proxNum || !proxNum) {
      somatorio += numAtual;
    } else if (numAtual < proxNum) {
      somatorio += proxNum - numAtual;
      i += 1;
    }
  }
  console.log(`${numEmAlgRomano} = ${somatorio}`);
}

console.log('- - - - -');

// Testes
decifraAlgRomano('II');
decifraAlgRomano('XXX');
decifraAlgRomano('CCC');
decifraAlgRomano('VI');
decifraAlgRomano('LX');
decifraAlgRomano('DC');
decifraAlgRomano('MD');
decifraAlgRomano('IV');
decifraAlgRomano('XL');
decifraAlgRomano('XC');
decifraAlgRomano('XXXIV');
decifraAlgRomano('LVI');
decifraAlgRomano('XCII');
decifraAlgRomano('CCXLVII');
decifraAlgRomano('CDLXXX');
decifraAlgRomano('DCCCXCVI');
decifraAlgRomano('M');
decifraAlgRomano('MM');
decifraAlgRomano('MMM');

console.log('- - - - -');

function procuraPares(vector) {
  let arrayDePares = [];

  for (let x = 0; x < vector.length; x += 1) {
    for (let y = 0; y < vector[x].length; y += 1) {
      if (vector[x][y] % 2 === 0) arrayDePares.push(vector[x][y]);
    }
  }

  console.log(arrayDePares);
}

// Testes
let vector = [
  [1, 2],
  [3, 4, 5, 6],
  [7, 8, 9, 10],
];
procuraPares(vector);

console.log('- - - - -');

function contaFrutas(basket) {
  let objFrutas = {};

  for (let i = 0; i < basket.length; i += 1) {
    if (!objFrutas[basket[i]]) {
      objFrutas[basket[i]] = 1;
    } else {
      objFrutas[basket[i]] += 1;
    }
  }

  let fraseDisplay = 'Sua cesta possui: ';
  for (fruta in objFrutas) {
    fraseDisplay += `${objFrutas[fruta]} ${fruta}${
      objFrutas[fruta] > 1 ? 's' : ''
    }, `;
  }

  fraseDisplay = fraseDisplay.replace(/..$/, '.');

  console.log(fraseDisplay);
}

const basket = [
  'Melancia',
  'Abacate',
  'Melancia',
  'Melancia',
  'Uva',
  'Laranja',
  'Jaca',
  'Pera',
  'Melancia',
  'Uva',
  'Laranja',
  'Melancia',
  'Banana',
  'Uva',
  'Pera',
  'Abacate',
  'Laranja',
  'Abacate',
  'Banana',
  'Melancia',
  'Laranja',
  'Laranja',
  'Jaca',
  'Uva',
  'Banana',
  'Uva',
  'Laranja',
  'Pera',
  'Melancia',
  'Uva',
  'Jaca',
  'Banana',
  'Pera',
  'Abacate',
  'Melancia',
  'Melancia',
  'Laranja',
  'Pera',
  'Banana',
  'Jaca',
  'Laranja',
  'Melancia',
  'Abacate',
  'Abacate',
  'Pera',
  'Melancia',
  'Banana',
  'Banana',
  'Abacate',
  'Uva',
  'Laranja',
  'Banana',
  'Abacate',
  'Uva',
  'Uva',
  'Abacate',
  'Abacate',
  'Melancia',
  'Uva',
  'Jaca',
  'Uva',
  'Banana',
  'Abacate',
  'Banana',
  'Uva',
  'Banana',
  'Laranja',
  'Laranja',
  'Jaca',
  'Jaca',
  'Abacate',
  'Jaca',
  'Laranja',
  'Melancia',
  'Pera',
  'Jaca',
  'Melancia',
  'Uva',
  'Abacate',
  'Jaca',
  'Jaca',
  'Abacate',
  'Uva',
  'Laranja',
  'Pera',
  'Melancia',
  'Jaca',
  'Pera',
  'Laranja',
  'Jaca',
  'Pera',
  'Melancia',
  'Jaca',
  'Banana',
  'Laranja',
  'Jaca',
  'Banana',
  'Pera',
  'Abacate',
  'Uva',
];

// Testes
contaFrutas(basket);
// contaFrutas(['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva']);

console.log('- - - - -');

function resolveMoradores(moradores) {
  let ultimoBlocoDois = moradores.blocoDois[moradores.blocoDois.length - 1];

  console.log(
    `O morador do bloco 2 de nome ${ultimoBlocoDois.nome} ${ultimoBlocoDois.sobrenome} mora no ${ultimoBlocoDois.andar}º andar, apartamento ${ultimoBlocoDois.apartamento}.`,
  );

  console.log('');

  for (bloco in moradores) {
    let moradoresPorBloco = moradores[bloco];

    for (morador of moradoresPorBloco) {
      console.log(`${morador.nome} ${morador.sobrenome}`);
    }
  }
}

let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

resolveMoradores(moradores);

console.log('- - - - -');
