const INTERVAL_DURATION = 7500;
const SCREEN_INITIAL_TRANSITION_DURATION = 2000;
const SCREEN_TRANSITION_DURATION = 5000;
const SCREEN_TRANSITION_FUNCTION = "ease-in-out";
const INFO_TRANSITION_DURATION = 1000;
const INFO_INCREMENTAL_DELAY = 150;

var global = {
  screen: document.getElementById("screen"),
  current: {
    name: document.getElementById("current-name"),
    rgb: document.getElementById("current-rgb"),
    hex: document.getElementById("current-hex"),
    copiedName: document.getElementById("copied-name"),
    copiedRgb: document.getElementById("copied-rgb"),
    copiedHex: document.getElementById("copied-hex")
  },

  currentColor: new Object()
};

window.addEventListener("load", init);

function init() {
  console.log("running");
  run();
}
