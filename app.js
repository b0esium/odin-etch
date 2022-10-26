let grid = document.getElementById("grid");

const SQUARE_SIDE = 16;

for (let column = 1; column <= SQUARE_SIDE; column++) {
  let col = document.createElement("div");
  col.setAttribute("class", "column");
  grid.append(col);
  for (let row = 1; row <= SQUARE_SIDE; row++) {
    let cell = document.createElement("div");
    cell.setAttribute("class", "cell");
    cell.innerText = " ";
    cell.addEventListener("mouseenter", () => {
      cell.setAttribute("class", "on");
    });
    col.append(cell);
  }
}
