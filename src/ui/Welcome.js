const loadWelcome = () => {
  const header = document.getElementById("header");
  const content = document.getElementById("content");
  header.innerHTML = 
  `
   <button class="nav-logo" id="homeBtn">BattleShip</button>
  `;
  content.innerHTML = `
  <h1 id="welcomeScreen">Welcome to Battleship</h1>
  <br>
  <form class="input-field">
    <input type="text" required id="inpname"> 
    <label>Name</label>
    <button id="goBtn">Go!</button>
  </form>
  `;

};

export default loadWelcome;
