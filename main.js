const controls = document.querySelectorAll(".controls button");

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

for (let i = 0; i < controls.length; i++) {
  controls[i].addEventListener("click", () => {
    switch (i) {
      case 0:
        startClock();
        break;
      case 1:
        console.log("stop");
        break;
      case 2:
        console.log("reset");
        break;
    }
  });
}

const startClock = () => {
  // 1) get the time from LS
  let currentTime = getFromLS("storedTime");

  // 2) start incrementing the time
  const intervalID = setInterval(currentTime++, 1000);
  // 3) display the time
  console.log(currentTime);
};

const stopClock = (type) => {
  // 1) stop incrementing the time
  // 2) if type === 0, then store the give time.
  //    if type === 1, then store 0 to the time.
  // 3) display the time
};
