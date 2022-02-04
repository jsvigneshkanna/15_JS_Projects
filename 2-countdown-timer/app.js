const newYear = "1 jan 2023";

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

function timer() {
  const newYearDate = new Date(newYear);
  const curDate = new Date();
  const totSeconds = (newYearDate - curDate) / 1000;
  const days = Math.floor(totSeconds / 86400);
  const hours = Math.floor((totSeconds % 86400) / 3600);
  const mins = Math.floor((totSeconds % 3600) / 60);
  const seconds = Math.floor(totSeconds % 60);
  daysEl.innerText = formatTime(days);
  hoursEl.innerText = formatTime(hours);
  minsEl.innerText = formatTime(mins);
  secondsEl.innerText = formatTime(seconds);
}

function formatTime(time) {
  return time > 10 ? time : `0${time}`;
}

setInterval(timer, 1000);
