
const grid = (callerName) => {
  let container = ""
  if (callerName === "1") container = document.querySelector(".grid_i");
  else if (callerName === "2") container = document.querySelector(".grid_ii");
  else return "do nothing"

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

  let p1Position=[]
  let p2Poistion = []

  const handleCellClick = (cell) => {
    let select =[]
    let length = p1Position(item => Array.isArray(item)? item.length:0);
    let sortLength = length.sort((a,b)=> a-b);

    if(callerName === "1"){
      switch(ship){
      case(1):
      if(sortLength[0] == 2){}
      select = document.querySelector(`
        [data-row="${p1Position[0]}"][data-col="${p1Position[1]}"]
        `)
      
      //for the smallest 2 pixel ship
        if(select[2] <= 8){

        }else{ return "out of bounds"}
        break

    }
      

    }

  };
  createGrid();
};

export default grid;
