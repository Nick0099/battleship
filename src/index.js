import "./ui/styles.css";
import loadWelcome from "./ui/Welcome.js";
import loadInitial from "./ui/initial.js";
import loadPlay from "./ui/Play.js";
import { error } from "jquery";

loadWelcome();

// this part is nested in if else as the load buttons are rendered dynamically
document.addEventListener("click", (e) => {
  if (e.target.matches("#homeBtn")) {
    loadWelcome();
  } else if (e.target.matches("#goBtn")) {
    loadInitial();
  } else if (e.target.matches("#startBtn")) {
    loadPlay();
  }else{ throw new Error('Error while loading game')}
});
