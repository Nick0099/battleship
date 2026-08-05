const result = (input) => {
    const win = String(input).trim().toLowerCase() === "true";
    const pop = document.querySelector(".pop");
  if (win == true) {
    pop.classList.add('win','pop')
    pop.innerHTML = `
    <p>Horray! You Won</p>
    <button type="button" onclick="loadInitial()">Play Again</button>
    `;
  } else {
    pop.classList.add('loss','pop')
    pop.innerHTML = `
    <p>Horray! You Won</p>
    <button type="button" onclick="loadInitial()">Play Again</button>
    `;
  }
};

export default result;
