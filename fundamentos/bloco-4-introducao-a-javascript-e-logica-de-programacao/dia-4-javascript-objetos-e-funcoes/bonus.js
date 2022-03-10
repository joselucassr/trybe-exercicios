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
