DIVID = "square-container";
CLEARBUTTONID = "clearButton";
HOVERCOLOR = "orange";
number_of_rows_and_columns = 75;

squareContainer = document.getElementById(DIVID);
clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", (event) => main());

function clearGrid() {
  number_of_rows_and_columns = parseInt(prompt("Enter Grid Size"));
  squareContainer.textContent = "";
  if (number_of_rows_and_columns > 100) {
    alert("Enter Value less than 100");
    clearGrid();
  }
}

function createCell() {
  cell = document.createElement("div");
  cell.classList.add("cell");
  return cell;
}

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createRow(columns) {
  for (let i = 0; i < columns; i++) {
    cell = createCell();
    cell.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = getRandomColor();
    });
    squareContainer.appendChild(cell);
  }
}

function updateGridSize() {
  squareContainer.setAttribute(
    "style",
    `grid-template-rows: repeat(${number_of_rows_and_columns}, 1fr)`
  );
  squareContainer.setAttribute(
    "style",
    `grid-template-columns: repeat(${number_of_rows_and_columns}, 1fr)`
  );
}

function main() {
  clearGrid();
  updateGridSize();

  for (let i = 0; i < number_of_rows_and_columns; i++) {
    createRow(number_of_rows_and_columns);
  }
}

main();
