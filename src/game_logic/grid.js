const grid = (callerName) => {
  let container = "";
  if (callerName === "1") container = document.querySelector(".grid_i");
  else if (callerName === "2") container = document.querySelector(".grid_ii");

  // a nested array that stores all the positions of  ships for player 1
  let p1Position = [];
  // same as p1Position but for the bot
  let p2Poistion = [];
  
  createGrid(container);
};

// creates grid p.s. copied from knight travails project
const createGrid = (container) => {
  container.innerHTML = "";
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const cell = document.createElement("button");
      cell.classList.add("grid-cell");
      cell.dataset.row = row;
      cell.dataset.col = col;

      cell.addEventListener("click", () => handleCellClick(cell));
      
      container.appendChild(cell);
    }
  }
};

//logic for handling clicks also validates the clicks
const handleCellClick = (cell) => {
};
//ship selector
const ship = () =>{
  
}
export default grid;
