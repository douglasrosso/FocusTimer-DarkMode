const buttonPlay = document.querySelector("#play");
const buttonStop = document.querySelector("#stop");
const buttonIncrease = document.querySelector("#increase");
const buttonDecrease = document.querySelector("#decrease");

const buttonLightMode = document.querySelector(".lightMode");
const buttonDarkMode = document.querySelector(".darkMode");
const mode = document.querySelector("body");

const minutesDisplay = document.querySelector("#minutes");
const secondsDisplay = document.querySelector("#seconds");

const buttonForest = document.querySelector("#forest");
const forestVolume = buttonForest.querySelector("#input-forest");
const forestAudio = new Audio("./assets/sounds/forest.wav");

const buttonRain = document.querySelector("#rain");
const rainVolume = buttonRain.querySelector("#input-rain");
const rainAudio = new Audio("./assets/sounds/rain.wav");

const buttonCafeteria = document.querySelector("#cafeteria");
const cafeteriaVolume = buttonCafeteria.querySelector("#input-cafeteria");
const cafeteriaAudio = new Audio("./assets/sounds/cafeteria.wav");

const buttonFireplace = document.querySelector("#fireplace");
const firePlaceVolume = buttonFireplace.querySelector("#input-fireplace");
const firePlaceAudio = new Audio("./assets/sounds/fireplace.wav");

const kitchenTimer = new Audio(
  "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
);

let minutes = Number(minutesDisplay.textContent);
let counterPressButtonPlay = 0;
let counterPressCard = 0;
let timerTimeOut;
forestAudio.loop = true;
rainAudio.loop = true;
cafeteriaAudio.loop = true;
firePlaceAudio.loop = true;

buttonLightMode.addEventListener("click", function () {
  buttonLightMode.classList.add("hide");
  buttonDarkMode.classList.remove("hide");
  mode.classList.remove("dark");
});

buttonDarkMode.addEventListener("click", function () {
  buttonLightMode.classList.remove("hide");
  buttonDarkMode.classList.add("hide");
  mode.classList.add("dark");
});

buttonPlay.addEventListener("click", function () {
  if (!buttonPlay.getAttribute("play")) {
    buttonPlay.setAttribute("play", "true");
    countdown();
    return;
  }
  hold();
});

buttonStop.addEventListener("click", function () {
  reset();
});

buttonIncrease.addEventListener("click", function () {
  minutesDisplay.textContent = String((minutes += 05)).padStart(2, "0");
});

buttonDecrease.addEventListener("click", function () {
  if (minutesDisplay.textContent != 0)
    minutesDisplay.textContent = String((minutes -= 05)).padStart(2, "0");
});

function updateDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

function reset() {
  updateDisplay(minutes, 0);
  clearTimeout(timerTimeOut);
}

function countdown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);
    let isFinished = minutes <= 0 && seconds <= 0;

    updateDisplay(minutes, 0);

    if (isFinished) {
      reset();
      timeEnd();
      return;
    }

    if (seconds <= 0) {
      seconds = 2;
      --minutes;
    }
    updateDisplay(minutes, String(seconds - 1));

    countdown();
  }, 1000);
}

function hold() {
  buttonPlay.removeAttribute("play");
  clearTimeout(timerTimeOut);
}

function timeEnd() {
  kitchenTimer.play();
}

buttonForest.addEventListener("click", function (event) {
  if (event.target !== forestVolume) {
    if (!buttonForest.classList.contains("on")) {
      forestAudio.play();
      buttonForest.classList.add("on");
      return;
    }
    forestAudio.pause();
    buttonForest.classList.remove("on");
  }
});

buttonRain.addEventListener("click", function (event) {
  if (event.target !== rainVolume) {
    if (!buttonRain.classList.contains("on")) {
      rainAudio.play();
      buttonRain.classList.add("on");
      return;
    }
    rainAudio.pause();
    buttonRain.classList.remove("on");
  }
});

buttonCafeteria.addEventListener("click", function (event) {
  if (event.target !== cafeteriaVolume) {
    if (!buttonCafeteria.classList.contains("on")) {
      cafeteriaAudio.play();
      buttonCafeteria.classList.add("on");
      return;
    }
    cafeteriaAudio.pause();
    buttonCafeteria.classList.remove("on");
  }
});

buttonFireplace.addEventListener("click", function (event) {
  if (event.target !== firePlaceVolume) {
    if (!buttonFireplace.classList.contains("on")) {
      firePlaceAudio.play();
      buttonFireplace.classList.add("on");
      return;
    }
    firePlaceAudio.pause();
    buttonFireplace.classList.remove("on");
  }
});

forestVolume.addEventListener("input", function () {
  forestAudio.volume = forestVolume.value;
});

rainVolume.addEventListener("input", function (event) {
  rainAudio.volume = rainVolume.value;
});

cafeteriaVolume.addEventListener("input", function () {
  cafeteriaAudio.volume = cafeteriaVolume.value;
});

firePlaceVolume.addEventListener("input", function () {
  firePlaceAudio.volume = firePlaceVolume.value;
});
