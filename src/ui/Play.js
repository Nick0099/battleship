const loadPlay = () => {
  const header = document.getElementById("header");
  const playerName = document.getElementById("inpname").value;
  const content = document.getElementById("content");
  header.innerHTML = `
  <button class="nav-logo" id="homeBtn">BattleShip</button>
  <button id ="name">Hello ${playerName}</button>
  `;

  content.innerHTML = `
  <p>Game View</p>
  
  <div class="player1 grid"></div>
  <div class="player2 grid"></div>
  `;
};

export default loadPlay;
