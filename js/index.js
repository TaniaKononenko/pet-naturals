function formatDate(date) {
  let day = String(date.getDate()).padStart(2, "0");
  let month = String(date.getMonth() + 1).padStart(2, "0"); // January is 0!
  let year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

document.getElementById("order-date").textContent =
  "Order date: " + formatDate(new Date());

function formatDate(date) {
  let day = String(date.getDate()).padStart(2, "0");
  let month = String(date.getMonth() + 1).padStart(2, "0"); // January is 0!
  let year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

document.getElementById("order-date").textContent =
  "Order date: " + formatDate(new Date());

function startCountdown(duration, display) {
  let timer = duration,
    hours,
    minutes,
    seconds;
  setInterval(function () {
    hours = parseInt(timer / 3600, 10);
    minutes = parseInt((timer % 3600) / 60, 10);
    seconds = parseInt(timer % 60, 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = hours + ":" + minutes + ":" + seconds;

    if (--timer < 0) {
      timer = 0;
      // Optionally add some logic when timer reaches zero
    }
  }, 1000);
}

window.onload = function () {
  let twoHours = 2 * 60 * 60; // 2 hours in seconds
  let display = document.getElementById("countdown-timer");
  startCountdown(twoHours, display);
};

$(document).ready(function () {
  $("#phone").mask("+38(0__)___-__-__");
});
