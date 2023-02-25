const controls = document.querySelectorAll(".controls button");
let intervalID;

const getFromLS = (name) => {
  if (localStorage.getItem(name) == null) {
    localStorage.setItem(name, 0);
  }
  return JSON.parse(localStorage.getItem(name));
};

const storeToLS = (aName, aInput) => {
  const bInput = JSON.stringify(aInput);
  localStorage.setItem(aName, bInput);
};

const convertSStoTime = (ss) => {
  const hours = Math.floor(ss / 3600);
  const minutes = Math.floor((ss - hours * 3600) / 60);
  const seconds = Math.floor(ss % 60);
  return [hours, minutes, seconds];
};

const displayTime = () => {
  let storedTime = getFromLS("storedTime");
  const [hours, minutes, seconds, remainingMS] = convertSStoTime(storedTime);
  let = displayHTML = `${hours}:${minutes}:${seconds}`;
  document.querySelector(".clock").innerHTML = displayHTML;
  storedTime++;
  storeToLS("storedTime", storedTime);
};

for (let i = 0; i < controls.length; i++) {
  controls[i].addEventListener("click", () => {
    switch (i) {
      case 0:
        startClock();
        break;
      case 1:
        stopClock(0);
        break;
      case 2:
        stopClock(1);
        break;
    }
  });
}

const startClock = () => {
  // 1) get the time from LS
  let currentTime = getFromLS("storedTime");

  // 2) start incrementing the time
  intervalID = setInterval(displayTime, 1000);
};

const stopClock = (type) => {
  // 1) stop incrementing the time
  setTimeout(() => {
    clearInterval(intervalID);
  }, 1);
  //    if type === 1, then store 0 to the time.
  if (type === 1) {
    storeToLS("storedTime", 0);
    displayTime();
  }
  // 3) display the time
};
