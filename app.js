let size = 16;
let grid = document.getElementById("grid");
const gridWidth = 800;
grid.setAttribute("width", `${gridWidth}px`);
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
      let padding = (gridWidth - 2 * size) / (2 * size); // border = 1px * 2
      cell.setAttribute("style", `padding:${padding}px`);
      cell.innerText = " ";
      cell.addEventListener("mouseenter", () => {
        cell.setAttribute("class", "on");
        cell.setAttribute("style", "padding:0");
        cell.setAttribute("style", `width:${2 * padding + 2}px`); // border = 1px * 2
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
