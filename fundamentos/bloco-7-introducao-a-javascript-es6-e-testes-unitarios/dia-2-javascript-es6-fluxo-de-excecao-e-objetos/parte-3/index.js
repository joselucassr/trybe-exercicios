const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addAttribute = (obj, key, value) => (obj[key] = value);
addAttribute(lesson2, 'turno', 'noite');
console.log(lesson2);

const listKeys = (obj) => Object.keys(obj);
console.log(listKeys(lesson2));

const objLength = (obj) => Object.keys(obj).length;
console.log(objLength(lesson2));

const listValues = (obj) => Object.values(obj);
console.log(listValues(lesson2));

const allValues = () => {
  return {
    lesson1,
    lesson2,
    lesson3,
  };
};
console.log(allValues());

const countStudents = (obj) =>
  Object.keys(obj).reduce((acc, curr) => acc + obj[curr].numeroEstudantes, 0);
console.log(countStudents(allValues()));

const getValueByNumber = (obj, pos) => obj[Object.keys(obj)[pos]];
console.log(getValueByNumber(lesson1, 0));

const verifyPair = (obj, key, value) => obj[key] === value;
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

// Bônus
const checkMathViewership = (obj) => {
  return obj.lesson2.numeroEstudantes;
};
console.log(checkMathViewership(allValues()));
