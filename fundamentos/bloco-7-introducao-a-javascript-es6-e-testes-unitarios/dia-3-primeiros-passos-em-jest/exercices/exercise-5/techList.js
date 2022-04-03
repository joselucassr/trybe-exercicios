const techList = (arr, name) =>
  arr.length === 0
    ? 'Vazio!'
    : arr.sort().map((tech) => {
        return { name, tech };
      });

module.exports = techList;
