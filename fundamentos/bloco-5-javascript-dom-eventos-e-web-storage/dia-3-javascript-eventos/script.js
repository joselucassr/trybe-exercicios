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

class Day {
  constructor(dayNum) {
    this.dayNum = dayNum;
    this.liElement = this.buildElement();
    this.classes = [];
    this.isHighlighted = false;
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

  resetHighlight() {
    this.liElement.style = '';
    this.isHighlighted = false;
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

let needToReset = false;

function highlightHolidays() {
  for (const day of days) {
    if (needToReset) {
      day.resetHighlight();
      needToReset = false;
    }
    if (day.classes.includes('holiday')) {
      day.highlightSelf();
    }
  }

  needToReset = true;
}
