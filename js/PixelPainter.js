var pixelPainter = (function(){

  var palletteBox = (function() {
  //Creates a container div for the color bar, erase, and clear buttons
    var colorContainer = document.createElement('div');
    colorContainer.className = 'color-container';
    console.log(colorContainer);
    document.getElementById('pixelPainter').appendChild(colorContainer);

    //creating pixel painter banner inside of Color Container

    var banner = document.createElement("div");
    colorContainer.appendChild(banner);
    banner.id = "banner-div";
    banner.innerHTML = "Random Pixel Painter";

  //Creates a container div for the right side grid area
    var gridContainer = document.createElement('div');
    gridContainer.className = "grid-container";
    document.getElementById('pixelPainter').appendChild(gridContainer);
  })();

  var currentColor;

  var clickedGrid = (function() {
    var grid = document.createElement('table');
    grid.className = "grid";
    document.querySelector('.grid-container').appendChild(grid);

    for(var i = 0; i < 50; i++){
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

    for(var i = 0; i < 10; i++){
      var tr = document.createElement('tr');
      colorGrid.appendChild(tr);

      for(var j = 0; j < 2; j++){
        var cell = document.createElement('td');
        cell.id = "color-cells" + i + j;
        cell.className = "color-palette";
        tr.appendChild(cell);
        cell.innerHTML = "  ";
        cell.addEventListener("click", grabColor);
        cell.addEventListener("click", setDisplayColor);

        //cell.style.background = getRandomColor();
      }
     }
  return colorGrid;
  })();

  var colorPalette = (function(){
    document.getElementById("color-cells00").style.background = "black";
    document.getElementById("color-cells10").style.background = "#000066";
    document.getElementById("color-cells20").style.background = "#0000cc";
    document.getElementById("color-cells30").style.background = "#006699";
    document.getElementById("color-cells40").style.background = "#339933";
    document.getElementById("color-cells50").style.background = "#33cc33";
    document.getElementById("color-cells60").style.background = "#66ff33";
    document.getElementById("color-cells70").style.background = "#ffff00";
    document.getElementById("color-cells80").style.background = "#ff9900";
    document.getElementById("color-cells90").style.background = "#ff3300";

    document.getElementById("color-cells01").style.background = "grey";
    document.getElementById("color-cells11").style.background = "#6600cc";
    document.getElementById("color-cells21").style.background = "#6600ff";
    document.getElementById("color-cells31").style.background = "#9999ff";
    document.getElementById("color-cells41").style.background = "#ff66ff";
    document.getElementById("color-cells51").style.background = "#660033";
    document.getElementById("color-cells61").style.background = "#990033";
    document.getElementById("color-cells71").style.background = "#ff0066";
    document.getElementById("color-cells81").style.background = "#ff6600";
    document.getElementById("color-cells91").style.background = "red";

  })();

  var buttonBox = (function(){

    var buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    document.querySelector('.color-container').appendChild(buttonContainer);

    var clearButton = document.createElement('button');
    clearButton.className = "function-buttons";
    document.querySelector('.button-container').appendChild(clearButton);
    clearButton.innerHTML = "Clear";
    clearButton.addEventListener("click", clearAll);

    var eraseButton = document.createElement('button');
    eraseButton.className = "function-buttons";
    document.querySelector('.button-container').appendChild(eraseButton);
    eraseButton.innerHTML = "Erase";
    eraseButton.addEventListener("click", eraseColor);

    var saveButton = document.createElement('button');
    saveButton.className = "function-buttons";
    buttonContainer.appendChild(saveButton);
    saveButton.innerHTML = "Save";
    saveButton.addEventListener("click", savePicture);

    var loadButton = document.createElement('button');
    loadButton.className = "function-buttons";
    buttonContainer.appendChild(loadButton);
    loadButton.innerHTML = "Load";
    loadButton.addEventListener("click", loadPicture);

    var colorNow = document.createElement('div');
    colorNow.id = "current-color";
    document.querySelector(".color-container").appendChild(colorNow);
    colorNow.style.background = "white";


  })();

  function setDisplayColor() {
    document.getElementById("current-color").style.background = currentColor;
  }

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
    currentColor = this.style.backgroundColor;
    console.log("This is my ",currentColor);
  }


  function eraseColor(){
    currentColor = "white";
  }

  function clearAll() {
    var allPixels = document.getElementsByClassName("click-cells");
    for(var i = 0; i < allPixels.length; i++){
      allPixels[i].style.background = "white";
    }
  }

  var colorArray = [];

  function savePicture() {
    var currentPicture = document.querySelectorAll(".click-cells");
    if (colorArray.length === 0){
      for(var i = 0; i < currentPicture.length; i++){
        colorArray.push(currentPicture[i].style.background);
        console.log(colorArray);
      }
    } else {
        colorArray = [];
        for(var j = 0; j < currentPicture.length; j++){
        colorArray.push(currentPicture[j].style.background);
      }
    }
  }

  function loadPicture() {
    var currentPicture = document.querySelectorAll(".click-cells");
    for(var i = 0; i < colorArray.length; i++){
      currentPicture[i].style.backgroundColor  = colorArray[i];
    }
  }

})();
