
const grid = (callerName) => {
  let container1 = "";
  let container2 = "";
  if (callerName === "1") {
    container1 = document.querySelector(".grid_i");
  } else if (callerName === "2") {
    container1 = document.querySelector(".div3");
    container2 = document.querySelector(".div4");
  }
  
  // a nested array that stores all the positions of  ships for player 1
  let p1Position = [];
  // same as p1Position but for the bot
  let p2Poistion = [];
  
  createGrid(container1,container2);
};

// creates grid p.s. copied from knight travails project
const createGrid = (container1,container2 = null) => {
  container1.innerHTML = "";
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const cell = document.createElement("button");
      cell.classList.add("grid-cell");
      cell.dataset.row = row;
      cell.dataset.col = col;
      
      cell.addEventListener("click", () => handleCellClick(cell));
      
      container1.appendChild(cell);
    }
  }
  if(container2 !== null){
    container2.innerHTML = "";
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        const cell = document.createElement("button");
        cell.classList.add("grid-cell");
        cell.dataset.row = row;
        cell.dataset.col = col;

        cell.addEventListener("click", () => handleCellClick(cell));
        
        container2.appendChild(cell);
      }
    }}
  };
//logic for handling clicks also validates the clicks
const handleCellClick = (cell) => {};
//ship selector
const ship = () => {};
export default grid;
