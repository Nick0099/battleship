const loadWelcome = () => {
  // const name = document.getElementById("name");
  // content.innerHTML = `Hello ${playerName} `;
  const content = document.getElementById("content");
  content.innerHTML = `
  <h1>Welcome to Battleship</h1>
  <br>
  <div class="input-field">
    <input type="text" required spellcheck="false"> 
    <label>Enter email</label>
  </div>
  `;
};

export default loadWelcome;
