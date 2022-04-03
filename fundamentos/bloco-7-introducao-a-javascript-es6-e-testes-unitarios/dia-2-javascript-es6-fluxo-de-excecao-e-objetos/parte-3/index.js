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
