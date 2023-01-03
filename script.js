setInterval(setClock, 1000)

const hoursHand = document.querySelector('.hour');
const minutesHand = document.querySelector('.minute');
const secondsHand = document.querySelector('.second');

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondsHand, secondsRatio)
  setRotation(minutesHand, minutesRatio)
  setRotation(hoursHand, hoursRatio)
}

const setRotation = (element, ratio) => {
  element.style.setProperty('--rotation', ratio * 360)
}



let todaysDate = new Date();
const digitalHour = todaysDate.getHours() % 12 || 12;
const digitalMinute = todaysDate.getMinutes();
const digHour = document.querySelector('.digHour');
const digMinute = document.querySelector('.digMinute');

digHour.innerText = digitalHour;
digMinute.innerText = `:${digitalMinute}`;