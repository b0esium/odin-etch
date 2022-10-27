let size = 16;
let grid = document.getElementById("grid");
let body = document.querySelector("body");

body.addEventListener("load", drawGrid(size));

function drawGrid(size) {
  for (let row = 1; row <= size; row++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    grid.append(row);
    for (let column = 1; column <= size; column++) {
      let cell = document.createElement("div");
      cell.setAttribute("class", "cell");
      cell.innerText = " ";
      cell.addEventListener("mouseenter", () => {
        cell.setAttribute("class", "on");
      });
      row.append(cell);
    }
  }
}

function eraseGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

// button to change size
const changeSizeBtn = document.getElementById("changeSizeBtn");
changeSizeBtn.addEventListener("click", () => {
  newSize = prompt("New square side length?");
  eraseGrid();
  drawGrid(newSize);
});
