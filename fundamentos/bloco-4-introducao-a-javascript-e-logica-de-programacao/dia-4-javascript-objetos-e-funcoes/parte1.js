let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

const exercicio1 = ({ personagem } = info) => {
  console.log(`Bem vinda, ${personagem}`);
};

exercicio1();

const exercicio2 = (obj) => {
  obj.recorrente = 'Sim';
};

exercicio2(info);
console.log(info);

const exercicio3 = (obj) => {
  for (chave in obj) {
    console.log(chave);
  }
};

exercicio3(info);
