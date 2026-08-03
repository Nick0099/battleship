import grid from "../game_logic/grid.js";

const loadInitial = () => {
  const header = document.getElementById("header");
  //const playerName = document.getElementById("inpname").value;

  const playerName = "nischal";
  const content = document.getElementById("content");

  header.innerHTML = `
  <button class="nav-logo" id="homeBtn">BattleShip</button>
  <button id ="name">Hello ${playerName}</button>
  `;

  content.innerHTML = `
  <h2 class="head2">Place your boats</h2>
    <button type = "button" id="patrolBoat" >Patrol Boat</button>
    <button type = "button" id="Submarine" >Submarine</button>
    <button type = "button" id="Destroyer" >Destroyer</button>
    <button type = "button" id="Battleship">Battleship</button>
    <button type = "button" id="Carrier" >Carrier</button>
  <div class="player1 grid grid_i "></div>
  <button type ="button" id="startBtn">Start Game</button>
  `;
  grid("1");
};

export default loadInitial;
