DIVID = "square-container";

squareContainer = document.getElementById(DIVID);

function createCell() {
  cell = document.createElement("span");
  cell.classList.add("cell");
  return cell;
}

function createRow(columns) {
  rowContainer = document.createElement("div");
  rowContainer.classList.add("row-container");
  for (let i = 0; i < columns; i++) {
    cell = createCell();
    rowContainer.appendChild(cell);
  }
  squareContainer.appendChild(rowContainer);
}

for (let i = 0; i < 16; i++) {
  createRow(16);
}
