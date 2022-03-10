let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

const exercicio1 = ({ personagem } = info) => {
  console.log(`Bem vinda, ${personagem}`);
};

exercicio1();
