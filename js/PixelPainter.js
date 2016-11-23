var clearButton = document.createElement('button');
clearButton.className = "clear-button";
document.body.appendChild(clearButton);
clearButton.innerHTML = "Clear";
clearButton.addEventListener("click", clearAll);


var eraseButton = document.createElement('button');
eraseButton.className = "erase-button";
document.body.appendChild(eraseButton);
eraseButton.innerHTML = "Erase";
eraseButton.addEventListener("click", eraseColor);

function eraseColor(){
  currentColor = "white";
}

function clearAll() {
  var allPixels = document.getElementsByClassName("clickCells");
  for(var i = 0; i < allPixels.length; i++){
    allPixels[i].style.background = "white";
  }

}

function clickedGrid() {
  // Test change by Andrea
  var grid = document.createElement('table');
  grid.className = "grid";
  document.body.appendChild(grid);

  for(var i = 0; i < 60; i++){
    var tr = document.createElement('tr');
    grid.appendChild(tr);

    for(var j = 0; j < 60; j++){
      var cell = document.createElement('td');
      cell.className = "clickCells";
      tr.appendChild(cell);
      cell.addEventListener("click", setColor);
      cell.addEventListener("mousedown", setColor);

    }
  }
return grid;
} clickedGrid();


var currentColor;
console.log(currentColor);

function setColor() {
  this.style.background = currentColor;
  console.log(currentColor, 'currentColor');
}

function grabColor() {
  var thisColor = this.style.background;
  console.log(thisColor, 'this color');
  currentColor = thisColor;
  // console.log("clickingcolor")
}

function colorGrid(){
  var colorGrid = document.createElement('table');
  colorGrid.className = "colorGrid";
  document.body.appendChild(colorGrid);

  for(var i = 0; i < 10; i++){
    var tr = document.createElement('tr');
    colorGrid.appendChild(tr);

    for(var j = 0; j < 5; j++){
      var cell = document.createElement('td');
      cell.className = "colorCells" + i + j;
      tr.appendChild(cell);
      cell.addEventListener("click", grabColor);
      cell.innerHTML = "colors";
      cell.style.background = getRandomColor();
    }
   }
    return colorGrid;

} colorGrid();

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    // console.log(color);
    return color;
}