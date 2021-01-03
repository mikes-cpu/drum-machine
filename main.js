const kicks = [
  {
    name: "kick01",
    path: "sounds/kick-01.mp3",
  },
  {
    name: "kick02",
    path: "sounds/kick-02.mp3",
  },
  {
    name: "kick03",
    path: "sounds/kick-03.mp3",
  },
  {
    name: "kick04",
    path: "sounds/kick-04.mp3",
  },
];

const snares = [
  {
    name: "snare01",
    path: "sounds/snare-01.mp3",
  },
  {
    name: "snare02",
    path: "sounds/snare-02.mp3",
  },
  {
    name: "snare03",
    path: "sounds/snare-03.mp3",
  },
  {
    name: "snare04",
    path: "sounds/snare-04.mp3",
  },
];

const hats = [
  {
    name: "hat01",
    path: "sounds/hat-01.mp3",
  },
  {
    name: "hat02",
    path: "sounds/hat-02.mp3",
  },
  {
    name: "hat03",
    path: "sounds/hat-03.mp3",
  },
  {
    name: "hat04",
    path: "sounds/hat-04.mp3",
  },
];

const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

const title = document.createElement("h1");
title.innerText = "Drum set";
container.appendChild(title);

const infoText = document.createElement("p");
infoText.innerText = "Press K, S, H keys";
infoText.classList.add("infoText");
container.appendChild(infoText);

//KICK

const kickText = document.createElement("p");
kickText.innerText = "Kick Drum";
kickText.classList.add("drumText", "kickText");
container.appendChild(kickText);

const kickPng = document.createElement("img");
kickPng.src = "assets/kick-white.svg";
kickPng.classList.add("kickPng");
container.appendChild(kickPng);

const kickDropDownContainer = document.createElement("div");
kickDropDownContainer.classList.add("kickDropDownContainer");
container.appendChild(kickDropDownContainer);

const kickSelectorButton = document.createElement("button");
kickSelectorButton.innerHTML = `<i class="fas fa-caret-down"></i>`;
kickSelectorButton.classList.add("selectorButton", "kickSelectorButton");
kickDropDownContainer.appendChild(kickSelectorButton);

const kickUl = document.createElement("ul");
kickUl.classList.add("allUls", "kickUl");
kickDropDownContainer.appendChild(kickUl);

const kickHr = document.createElement("hr");
kickHr.classList.add("allHrs", "kickHr");
container.appendChild(kickHr);

let kickFilePath = "sounds/kick-01.mp3";

const selectKick = (e) => {
  if (e.target.innerText === "kick01") {
    kickFilePath = "sounds/kick-01.mp3";
  }
  if (e.target.innerText === "kick02") {
    kickFilePath = "sounds/kick-02.mp3";
  }
  if (e.target.innerText === "kick03") {
    kickFilePath = "sounds/kick-03.mp3";
  }
  if (e.target.innerText === "kick04") {
    kickFilePath = "sounds/kick-04.mp3";
  }
};

kicks.forEach((kick) => {
  const li = document.createElement("li");
  li.innerText = kick.name;
  // li.classList.add(`kick${counter++}`);
  kickUl.appendChild(li);

  li.addEventListener("click", selectKick);
});

const playKick = (e) => {
  if (e.code === "KeyK") {
    let kickAudio = new Audio(kickFilePath);
    kickAudio.play();
  }
};

const kickSelectorButtonPress = () => {
  if (kickUl.style.opacity == 0) {
    kickUl.style.opacity = 1;
    kickUl.style.pointerEvents = "all";
    kickUl.style.transition = "all 0.3s ease";
    kickUl.style.transform = "translateY(0px)";
  } else {
    kickUl.style.opacity = 0;
    kickUl.style.pointerEvents = "none";
    kickUl.style.transform = "translateY(-10px)";
  }
};

// SNARE

const snareText = document.createElement("p");
snareText.innerText = "Snare Drum";
snareText.classList.add("drumText", "snareText");
container.appendChild(snareText);

const snarePng = document.createElement("img");
snarePng.src = "assets/snare-white.svg";
snarePng.classList.add("snarePng");
container.appendChild(snarePng);

const snareDropDownContainer = document.createElement("div");
snareDropDownContainer.classList.add("snareDropDownContainer");
container.appendChild(snareDropDownContainer);

const snareSelectorButton = document.createElement("button");
snareSelectorButton.innerHTML = `<i class="fas fa-caret-down"></i>`;
snareSelectorButton.classList.add("selectorButton", "snareSelectorButton");
snareDropDownContainer.appendChild(snareSelectorButton);

const snareUl = document.createElement("ul");
snareUl.classList.add("allUls", "snareUl");
snareDropDownContainer.appendChild(snareUl);

let snareFilePath = "sounds/snare-01.mp3";

const selectSnare = (e) => {
  if (e.target.innerText === "snare01") {
    snareFilePath = "sounds/snare-01.mp3";
  }
  if (e.target.innerText === "snare02") {
    snareFilePath = "sounds/snare-02.mp3";
  }
  if (e.target.innerText === "snare03") {
    snareFilePath = "sounds/snare-03.mp3";
  }
  if (e.target.innerText === "snare04") {
    snareFilePath = "sounds/snare-04.mp3";
  }
};

snares.map((snare) => {
  const li = document.createElement("li");
  li.innerText = snare.name;
  snareUl.appendChild(li);

  li.addEventListener("click", selectSnare);
});

const playSnare = (e) => {
  if (e.code === "KeyS") {
    const snareAudio = new Audio(snareFilePath);
    snareAudio.play();
  }
};

const snareSelectorButtonPress = () => {
  if (snareUl.style.opacity == 0) {
    snareUl.style.opacity = 1;
    snareUl.style.pointerEvents = "all";
    snareUl.style.transition = "all 0.3s ease";
    snareUl.style.transform = "translateY(0)";
  } else {
    snareUl.style.opacity = 0;
    snareUl.style.pointerEvents = "none";
    snareUl.style.transform = "translateY(-10px)";
  }
};

const snareHr = document.createElement("hr");
snareHr.classList.add("allHrs", "snareHr");
container.appendChild(snareHr);

// HATS

const hihatText = document.createElement("p");
hihatText.innerText = "Hi-Hat Cymbol";
hihatText.classList.add("drumText", "hihatText");
container.appendChild(hihatText);

const hihatPng = document.createElement("img");
hihatPng.src = "assets/hats-white.svg";
hihatPng.classList.add("hihatPng");
container.appendChild(hihatPng);

const hihatDropDownContainer = document.createElement("div");
hihatDropDownContainer.classList.add("hihatDropDownContainer");
container.appendChild(hihatDropDownContainer);

const hihatSelectorButton = document.createElement("button");
hihatSelectorButton.innerHTML = `<i class="fas fa-caret-down"></i>`;
hihatSelectorButton.classList.add("selectorButton", "hihatSelectorButton");
hihatDropDownContainer.appendChild(hihatSelectorButton);

const hihatUl = document.createElement("ul");
hihatUl.classList.add("allUls", "hihatUl");
hihatDropDownContainer.appendChild(hihatUl);

let hihatFilePath = "sounds/hat-01.mp3";

const selectHihat = (e) => {
  if (e.target.innerText === "hat01") {
    hihatFilePath = "sounds/hat-01.mp3";
  }
  if (e.target.innerText === "hat02") {
    hihatFilePath = "sounds/hat-02.mp3";
  }
  if (e.target.innerText === "hat03") {
    hihatFilePath = "sounds/hat-03.mp3";
  }
  if (e.target.innerText === "hat04") {
    hihatFilePath = "sounds/hat-04.mp3";
  }
};

hats.map((hat) => {
  const li = document.createElement("li");
  li.innerText = hat.name;
  hihatUl.appendChild(li);

  li.addEventListener("click", selectHihat);
});

const playHihat = (e) => {
  if (e.code === "KeyH") {
    const hihatAudio = new Audio(hihatFilePath);
    hihatAudio.play();
  }
};

const hihatSelectorButtonPress = () => {
  if (hihatUl.style.opacity == 0) {
    hihatUl.style.opacity = 1;
    hihatUl.style.pointerEvents = "all";
    hihatUl.style.transition = "all 0.3s ease";
    hihatUl.style.transform = "translateY(0)";
  } else {
    hihatUl.style.opacity = 0;
    hihatUl.style.pointerEvents = "none";
    hihatUl.style.transform = "translateY(-10px)";
  }
};

const hihatHr = document.createElement("hr");
hihatHr.classList.add("allHrs", "hihatHr");
container.appendChild(hihatHr);

document.addEventListener("keydown", playKick);
document.addEventListener("keydown", playSnare);
document.addEventListener("keydown", playHihat);

kickSelectorButton.addEventListener("click", kickSelectorButtonPress);
snareSelectorButton.addEventListener("click", snareSelectorButtonPress);
hihatSelectorButton.addEventListener("click", hihatSelectorButtonPress);

// kick.addEventListener("click", playKick);
// snare.addEventListener("click", playSnare);
// hihat.addEventListener("click", playHihat);
