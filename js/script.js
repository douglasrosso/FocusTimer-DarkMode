const buttonPlay = document.querySelector(".play");
const buttonStop = document.querySelector(".stop");
const buttonIncrease = document.querySelector(".increase");
const buttonDecrease = document.querySelector(".decrease");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
const buttonForest = document.querySelector(".forest");
const buttonRain = document.querySelector(".rain");
const buttonCoffee = document.querySelector(".coffee");
const buttonFireplace = document.querySelector(".fireplace");
const forestSound = new Audio("./assets/sounds/forest.wav");
const rainSound = new Audio("./assets/sounds/rain.wav");
const coffeeSound = new Audio("./assets/sounds/coffee.wav");
const fireplaceSound = new Audio("./assets/sounds/fireplace.wav");
let minutes = Number(minutesDisplay.textContent);
let counterPressButtonPlay = 0;
let counterPressCard = 0;
let timerTimeOut;

buttonPlay.addEventListener("click", function () {
  if (counterPressButtonPlay == 0) {
    a();
    counterPressButtonPlay += 1;
  } else {
    b();
    counterPressButtonPlay = 0;
  }

  function a() {
    countdown();
  }

  function b() {
    hold();
  }
});

buttonStop.addEventListener("click", function () {
  reset();
});

buttonForest.addEventListener("click", function () {
  if (counterPressCard == 0) {
    a();
    counterPressCard += 1;
  } else {
    b();
    counterPressCard = 0;
  }

  function a() {
    forestSound.play();
    forestSound.loop = true;
    buttonForest.classList.add("hide");
  }

  function b() {
    forestSound.pause();
    buttonForest.classList.remove("hide");
  }
});

buttonRain.addEventListener("click", function () {
  if (counterPressCard == 0) {
    a();
    counterPressCard += 1;
  } else {
    b();
    counterPressCard = 0;
  }

  function a() {
    rainSound.play();
    rainSound.loop = true;
    buttonRain.classList.add("hide");
  }

  function b() {
    rainSound.pause();
    buttonRain.classList.remove("hide");
  }
});

buttonCoffee.addEventListener("click", function () {
  if (counterPressCard == 0) {
    a();
    counterPressCard += 1;
  } else {
    b();
    counterPressCard = 0;
  }

  function a() {
    coffeeSound.play();
    buttonCoffee.classList.add("hide");
  }

  function b() {
    coffeeSound.pause();
    buttonCoffee.classList.remove("hide");
  }
});

buttonFireplace.addEventListener("click", function () {
  if (counterPressCard == 0) {
    a();
    counterPressCard += 1;
  } else {
    b();
    counterPressCard = 0;
  }

  function a() {
    fireplaceSound.play();
    buttonFireplace.classList.add("hide");
  }

  function b() {
    fireplaceSound.pause();
    buttonFireplace.classList.remove("hide");
  }
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
      return;
    }

    if (seconds <= 0) {
      seconds = 60;
      --minutes;
    }
    updateDisplay(minutes, String(seconds - 1));

    countdown();
  }, 1000);
}

function hold() {
  clearTimeout(timerTimeOut);
}
