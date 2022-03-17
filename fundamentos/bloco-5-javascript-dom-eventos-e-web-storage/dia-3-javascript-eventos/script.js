function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
let selectionColor = '#036B52';

class Day {
  constructor(dayNum) {
    this.dayNum = dayNum;
    this.liElement = this.buildElement();
    this.classes = [];
    this.isHighlighted = false;
    this.isSelected = false;
    this.watcher();
  }

  buildElement() {
    let li = document.createElement('li');
    li.classList = 'day';
    li.innerText = this.dayNum;
    return li;
  }

  addClass(className) {
    this.liElement.classList.add(className);
    this.classes.push(className);
  }

  highlightSelf() {
    if (!this.isHighlighted) {
      this.liElement.style = 'background-color: #8effef;';
      this.isHighlighted = true;
    } else {
      this.liElement.style = '';
      this.isHighlighted = false;
    }
  }

  changeDisplayText() {
    if (this.liElement.innerText == this.dayNum) {
      this.liElement.innerText = 'É SEXTA o/';
    } else {
      this.liElement.innerText = this.dayNum;
    }
  }

  watcher() {
    this.liElement.addEventListener('mouseenter', () => {
      this.liElement.style =
        'color: #036B52; font-size: 1.5rem; cursor: pointer';
    });

    this.liElement.addEventListener('mouseleave', () => {
      if (!this.isSelected) {
        this.liElement.style.color = 'rgb(119, 119, 119)';
      }
      this.liElement.style.fontSize = '1rem';
    });

    this.liElement.addEventListener('click', () => {
      if (!this.isSelected) {
        this.liElement.style.color = selectionColor;
        this.isSelected = true;
      } else {
        this.liElement.style.color = 'rgb(119, 119, 119)';
        this.isSelected = false;
      }
    });
  }
}

let days = [];

function drawDays() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  const holiday = [24, 25, 31];
  const friday = [4, 11, 18, 25];

  const daysTag = document.getElementById('days');

  for (const dayNum of dezDaysList) {
    let day = new Day(dayNum);

    if (holiday.includes(dayNum)) day.addClass('holiday');
    if (friday.includes(dayNum)) day.addClass('friday');

    daysTag.appendChild(day.liElement);
    days.push(day);
  }
}

drawDays();

function addBtn(name, id, func) {
  let btn = document.createElement('button');
  btn.innerText = name;
  btn.id = id;

  document.querySelector('.buttons-container').appendChild(btn);

  btn.addEventListener('click', func);
}

addBtn('Feriados', 'btn-holiday', highlightHolidays);

function highlightHolidays() {
  for (const day of days) {
    if (day.classes.includes('holiday')) {
      day.highlightSelf();
    }
  }
}

addBtn('Sexta-feira', 'btn-friday', changeFridays);

function changeFridays() {
  for (const day of days) {
    if (day.classes.includes('friday')) {
      day.changeDisplayText();
    }
  }
}

function createTask(taskName) {
  let task = document.createElement('span');
  task.innerText = taskName;

  let parent = document.querySelector('.my-tasks');
  parent.appendChild(task);
}

createTask('cozinhar');

function createLabel(color) {
  let label = document.createElement('div');
  label.style.backgroundColor = color;
  label.classList = 'task';

  let parent = document.querySelector('.my-tasks');
  parent.appendChild(label);

  return label;
}

let label = createLabel(selectionColor);

label.addEventListener('click', selectLabel);

function selectLabel() {
  label.classList.toggle('selected');
}
