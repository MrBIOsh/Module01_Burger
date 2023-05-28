const MONTHS = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

Date.prototype.getWeek = function () {
    var target  = new Date(this.valueOf());
    var dayNr   = (this.getDay() + 6) % 7;
    target.setDate(target.getDate() - dayNr + 3);
    var firstThursday = target.valueOf();
    console.log(target.getFullYear())
    if (target.getFullYear() < this.getFullYear()) {
      target.setMonth(11, 31);
      target.setFullYear(this.getFullYear());
    } else target.setMonth(0, 1);
    if (target.getDay() != 4) {
        target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
    }
    return 1 + Math.ceil((firstThursday - target) / 604800000);
}


function getDayInfo(date) {
  date = formatDate(date);
  let firstDate = new Date(date.getFullYear(), date.getMonth(), 1)
  let options = { weekday: 'long'};
  let weekday = new Intl.DateTimeFormat('ru-RU', options)
  .format(date);
  weekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);  
  let weekNum = (date.getWeek() - firstDate.getWeek()) + 1;
  return `Дата добавления:<br>${weekday}, ${weekNum} неделя ${getMonthName(date)} ${date.getFullYear()} года`;
}

function formatDate(date) {
  let dateFormat = new Date(date.split(".").reverse().join("."));
  return dateFormat;
}

function getMonthName(date) {
  let monthName = null;
  for (let i = 0; MONTHS.length > i; i++) {
    if (date.getMonth() === i) {
      monthName = MONTHS[i].charAt(0).toUpperCase() + MONTHS[i].slice(1);
      break;
    }
  }
  return monthName;
}

document.getElementById('item1').querySelector('.day-info').innerHTML = getDayInfo('31.12.2022');
document.getElementById('item2').querySelector('.day-info').innerHTML = getDayInfo('05.02.2023');
document.getElementById('item3').querySelector('.day-info').innerHTML = getDayInfo('20.01.2023');
document.getElementById('item4').querySelector('.day-info').innerHTML = getDayInfo('30.04.2023');
document.getElementById('item5').querySelector('.day-info').innerHTML = getDayInfo('15.05.2023');
document.getElementById('item6').querySelector('.day-info').innerHTML = getDayInfo('03.03.2023');
document.getElementById('item7').querySelector('.day-info').innerHTML = getDayInfo('13.11.2022');
document.getElementById('item8').querySelector('.day-info').innerHTML = getDayInfo('28.02.2023');
document.getElementById('item9').querySelector('.day-info').innerHTML = getDayInfo('10.05.2023');

//console.log(getDayInfo('01.01.2023'));
