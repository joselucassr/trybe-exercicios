const longestWord = (text) => {
  let textArr = text.split(' ');
  return textArr.reduce((acc, cur) => (acc.length > cur.length ? acc : cur));
};

console.log(
  longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'),
);
