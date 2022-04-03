const encode = (string) => {
  // seu código aqui
  let def = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  for (let key in def) {
    if (key) {
      string = string.replaceAll(key, def[key]);
    }
  }

  return string;
};

const decode = (string) => {
  // seu código aqui
  let def = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  for (let key in def) {
    if (key) {
      string = string.replaceAll(key, def[key]);
    }
  }

  return string;
};

module.exports = {
  encode,
  decode,
};
