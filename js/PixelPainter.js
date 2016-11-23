


var currentColor;
console.log(currentColor);

var colorContainer = document.createElement('div');
colorContainer.id = "color-container";
document.getElementById('pixelPainter').appendChild(colorContainer);

var gridContainer = document.createElement('div');
gridContainer.id = "grid-container";
document.getElementById('pixelPainter').appendChild(gridContainer);


function setColor() {
  this.style.background = currentColor;
  console.log(currentColor, 'currentColor');
}

function grabColor() {
  var thisColor = this.style.background;
  currentColor = thisColor;
  // console.log("clickingcolor")
}

function colorGrid(){
  var colorGrid = document.createElement('table');
  colorGrid.className = "color-grid";
  document.getElementById('color-container').appendChild(colorGrid);

  for(var i = 0; i < 8; i++){
    var tr = document.createElement('tr');
    colorGrid.appendChild(tr);

    for(var j = 0; j < 2; j++){
      var cell = document.createElement('td');
      cell.className = "color-cells";
      tr.appendChild(cell);
      cell.addEventListener("click", grabColor);
      cell.innerHTML = "  ";
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



var clearButton = document.createElement('div');
clearButton.className = "clear-button";
document.getElementById('color-container').appendChild(clearButton);
clearButton.innerHTML = "Clear";
clearButton.addEventListener("click", clearAll);

var eraseButton = document.createElement('div');
eraseButton.className = "erase-button";
document.getElementById('color-container').appendChild(eraseButton);
eraseButton.innerHTML = "Erase";
eraseButton.addEventListener("click", eraseColor);

function clickedGrid() {
  var grid = document.createElement('table');
  grid.className = "grid";
  document.getElementById('grid-container').appendChild(grid);

  for(var i = 0; i < 20; i++){
    var tr = document.createElement('tr');
    grid.appendChild(tr);

    for(var j = 0; j < 20; j++){
      var cell = document.createElement('td');
      cell.className = "click-cells";
      tr.appendChild(cell);
      cell.addEventListener("click", setColor);
      cell.innerHTML = "   ";
    }
  }
return grid;
} clickedGrid();

function eraseColor(){
  currentColor = "white";
}


function clearAll() {
  var allPixels = document.getElementsByClassName("click-cells");
  for(var i = 0; i < allPixels.length; i++){
    allPixels[i].style.background = "white";
  }

}