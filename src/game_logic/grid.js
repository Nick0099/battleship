const grid = () => {
  
// creates grid p.s. copied from knight travails project
  const createGrid = () => {
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

  const handleCellClick = (cell) => {
    
  };
  createGrid();
  
};

export default grid;
