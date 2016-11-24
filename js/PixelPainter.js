var pixelPainter = (function(){

  var palletteBox = (function() {
  //Creates a container div for the color bar, erase, and clear buttons
    var colorContainer = document.createElement('div');
    colorContainer.className = 'color-container';
    console.log(colorContainer);
    document.getElementById('pixelPainter').appendChild(colorContainer);

  //Creates a container div for the right side grid area
    var gridContainer = document.createElement('div');
    gridContainer.className = "grid-container";
    document.getElementById('pixelPainter').appendChild(gridContainer);
  })();

  var currentColor = "white";

  var clickedGrid = (function() {
    var grid = document.createElement('table');
    grid.className = "grid";
    document.querySelector('.grid-container').appendChild(grid);

    for(var i = 0; i < 55; i++){
      var tr = document.createElement('tr');
      grid.appendChild(tr);

      for(var j = 0; j < 75; j++){
        var cell = document.createElement('td');
        cell.className = "click-cells";
        tr.appendChild(cell);
        cell.addEventListener("mouseover", function(){
          if(event.buttons === 1){
            this.style.background = currentColor;
          }
        });
        cell.addEventListener("click", setColor);


      }
    }
  return grid;
  })();

  var colorGrid = (function(){
    var colorGrid = document.createElement('table');
    colorGrid.className = "color-grid";
    document.querySelector('.color-container').appendChild(colorGrid);

    for(var i = 0; i < 8; i++){
      var tr = document.createElement('tr');
      colorGrid.appendChild(tr);

      for(var j = 0; j < 2; j++){
        var cell = document.createElement('td');
        cell.className = "color-cells";
        tr.appendChild(cell);
        cell.innerHTML = "  ";
        cell.addEventListener("click", grabColor);
        cell.style.background = getRandomColor();
      }
     }
  return colorGrid;
  })();

  function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
  return color;
  }

  function setColor() {
    this.style.background = currentColor;
  }

  function grabColor() {
    currentColor = this.style.background;
  }

  var buttonBox = (function(){

    var buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    document.querySelector('.color-container').appendChild(buttonContainer);

    var clearButton = document.createElement('button');
    clearButton.className = "clear-button";
    document.querySelector('.button-container').appendChild(clearButton);
    clearButton.innerHTML = "Clear";
    clearButton.addEventListener("click", clearAll);

    var eraseButton = document.createElement('button');
    eraseButton.className = "erase-button";
    document.querySelector('.button-container').appendChild(eraseButton);
    eraseButton.innerHTML = "Erase";
    eraseButton.addEventListener("click", eraseColor);
  })();


  function eraseColor(){
    currentColor = "white";
  }

  function clearAll() {
    var allPixels = document.getElementsByClassName("click-cells");
    for(var i = 0; i < allPixels.length; i++){
      allPixels[i].style.background = "white";
    }
  }

})();
