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
        let newColor = randomColor();
        cell.setAttribute(
          "style",
          `padding:0;
          background-color: #${newColor};
          width:${2 * padding}px;
          min-height: ${2 * padding}px;`
        );
      });
      row.append(cell);
    }
  }
}

// button to change size
const changeSizeBtn = document.getElementById("changeSizeBtn");
changeSizeBtn.addEventListener("click", () => {
  newSize = prompt("New square side length? Max 64");
  eraseGrid();
  if (newSize > 64) {
    newSize = 64;
  }
  drawGrid(newSize);
});

function eraseGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

function randomColor() {
  let r = randomInt(255);
  let g = randomInt(255);
  let b = randomInt(255);
  // make a string of hex values
  return [r, g, b].map((value) => value.toString(16).padStart(2, 0)).join("");
}

function randomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
