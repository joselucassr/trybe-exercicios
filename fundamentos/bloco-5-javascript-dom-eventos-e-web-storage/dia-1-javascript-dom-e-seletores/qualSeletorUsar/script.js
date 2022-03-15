document.querySelector('.emergency-tasks').style = 'background-color: #FF9F84';

let emergencyH3s = document.querySelectorAll('.emergency-tasks h3');

for (let i = 0; i < emergencyH3s.length; i += 1) {
  emergencyH3s[i].style = 'background-color: #A500F3';
}

document.querySelector('.no-emergency-tasks').style =
  'background-color: #F9DB5E';

let noEmergencyH3s = document.querySelectorAll('.no-emergency-tasks h3');

for (let i = 0; i < noEmergencyH3s.length; i += 1) {
  noEmergencyH3s[i].style = 'background-color: #232525';
}

document.querySelector('#header-container').style = 'background-color: #00B069';
document.querySelector('#footer-container').style = 'background-color: #003533';
