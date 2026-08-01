import './ui/styles.css';
import loadWelcome from './ui/Welcome.js';
import loadPlay from './ui/Play.js';


loadWelcome();

document.querySelector('#goBtn').addEventListener('click',loadPlay)