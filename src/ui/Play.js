import grid from "../game_logic/grid.js";

const loadPlay = () => {
  const header = document.getElementById("header");
  // const playerName = document.getElementById("inpname").value;

  const playerName = "nischal";
  const content = document.getElementById("content");
  content.classList.remove("initial");
  content.classList.add("play");

  header.innerHTML = `
    <button class="nav-logo" id="homeBtn">BattleShip</button>
    <button id="name">Hello ${playerName}</button>
  `;

  content.innerHTML = `
    <div class="div3 player1 grid grid_ii">3</div>
    <div class="div4 player2 grid grid_ii">4</div>
    <div class="div5 patrolBoat player1">5</div>
    <div class="div6 Submarine player1">6</div>
    <div class="div7 Destroyer player1">7</div>
    <div class="div8 Battleship player1">8</div>
    <div class="div9 Carrier player1">9</div>
    <div class="div10 patrolBoat player2">10</div>
    <div class="div11 Submarine player2">11</div>
    <div class="div12 Destroyer player2">12</div>
    <div class="div13 Battleship player2">13</div>
    <div class="div14 Carrier player2">14</div>
    <div class="div15">Dynamic text goes here</div>
    <div class="div16">Your Side</div>
    <div class="div17">Opponent's side</div>
  `;

  grid("2");
};

export default loadPlay;