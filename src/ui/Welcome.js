const loadWelcome = () => {
  const header = document.getElementById("header");
  const content = document.getElementById("content");
  
  header.innerHTML = 
  `
   <h1 id="welcomeHead">BattleShip</h1>
  `;

  content.innerHTML = `
  <br>
  <form class="input-field" id="nameForm">
    <input type="text" required id="inpname"> 
    <label>Name</label><br>
    <button type = "button" id="goBtn">Go!</button>
  </form>
  `;

};

export default loadWelcome;
