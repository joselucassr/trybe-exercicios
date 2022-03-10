let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

const exercicio1 = ({ personagem } = info) => {
  console.log(`Bem vinda, ${personagem}`);

  console.log('');
};
exercicio1();

const exercicio2 = (obj) => {
  obj.recorrente = 'Sim';
};
exercicio2(info);
console.log(info);
console.log('');

const exercicio3 = (obj) => {
  for (chave in obj) {
    console.log(chave);
  }

  console.log('');
};
exercicio3(info);

const exercicio4 = (obj) => {
  for (chave in obj) {
    console.log(obj[chave]);
  }

  console.log('');
};
exercicio4(info);

let infoPatinhas = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

const exercicio5 = (obj1, obj2) => {
  for (chave in obj1) {
    console.log(
      obj1[chave] !== obj2[chave]
        ? `${obj1[chave]} e ${obj2[chave]}`
        : `Ambos ${chave}s`,
    );
  }
  console.log('');
};
exercicio5(info, infoPatinhas);
