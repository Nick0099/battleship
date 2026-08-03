import grid from "../game_logic/grid.js";
import loadPlay from "./Play.js";

const loadInitial = () => {
  const header = document.getElementById("header");
  // const playerName = document.getElementById("inpname").value;

  const playerName = "nischal";
  const content = document.getElementById("content");
  content.classList.add("initial");

  header.innerHTML = `
    <button class="nav-logo" id="homeBtn">BattleShip</button>
    <button id="name">Hello ${playerName}</button>
  `;

  content.innerHTML = `
    <h2 class="head2">Place your boats</h2>
    <button type="button" class="patrolBoat">Patrol Boat</button>
    <button type="button" class="Submarine">Submarine</button>
    <button type="button" class="Destroyer">Destroyer</button>
    <button type="button" class="Battleship">Battleship</button>
    <button type="button" class="Carrier">Carrier</button>
    <div class="player1 grid grid_i"></div>
    <button type="button" class="startBtn">Start Game</button>
  `;
  const start = document.querySelector('.startBtn');
  start.addEventListener('click',() => loadPlay())
  grid("1");
};

export default loadInitial;