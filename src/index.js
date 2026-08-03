import "./ui/styles.css";
import loadWelcome from "./ui/Welcome.js";
import loadInitial from "./ui/initial.js";
import loadPlay from "./ui/Play.js";

loadInitial();

document.addEventListener("click", (e) => {
  if (e.target.matches("#homeBtn")) {
    loadWelcome();
  } else if (e.target.matches("#startBtn")) {
    loadPlay();
  } else if (e.target.matches("#goBtn")) {
    loadInitial();
  } else {
    return 'error'
  }
});
