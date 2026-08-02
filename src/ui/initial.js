import grid from "../game_logic/grid.js";


const loadInitial = () => {
  const header = document.getElementById("header");
  //const playerName = document.getElementById("inpname").value;
  
  const playerName = "nischal"
  const content = document.getElementById("content");

  header.innerHTML = `
  <button class="nav-logo" id="homeBtn">BattleShip</button>
  <button id ="name">Hello ${playerName}</button>
  `;

  content.innerHTML = `
  <h2>Place your boats</h2>
  <div class="player1 grid_i"></div>
  <button type ="button" id="startBtn">Start Game</button>
  `;
grid("1");

};

export default loadInitial;
