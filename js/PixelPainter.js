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

    for(var i = 0; i < 70; i++){
      var tr = document.createElement('tr');
      grid.appendChild(tr);

      for(var j = 0; j < 110; j++){
        var cell = document.createElement('td');
        cell.className = "click-cells";
        tr.appendChild(cell);
        cell.addEventListener("mouseover", function(){
          if(event.buttons === 1){
            this.style.backgroundColor = currentColor;
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
    document.getElementById("color-cells00").style.backgroundColor = "black";
    document.getElementById("color-cells10").style.backgroundColor = "#000066";
    document.getElementById("color-cells20").style.backgroundColor = "#0000cc";
    document.getElementById("color-cells30").style.backgroundColor = "#006699";
    document.getElementById("color-cells40").style.backgroundColor = "#339933";
    document.getElementById("color-cells50").style.backgroundColor = "#33cc33";
    document.getElementById("color-cells60").style.backgroundColor = "#66ff33";
    document.getElementById("color-cells70").style.backgroundColor = "#ffff00";
    document.getElementById("color-cells80").style.backgroundColor = "#ff9900";
    document.getElementById("color-cells90").style.backgroundColor = "#ff3300";

    document.getElementById("color-cells01").style.backgroundColor = "grey";
    document.getElementById("color-cells11").style.backgroundColor = "#6600cc";
    document.getElementById("color-cells21").style.backgroundColor = "#6600ff";
    document.getElementById("color-cells31").style.backgroundColor = "#9999ff";
    document.getElementById("color-cells41").style.backgroundColor = "#ff66ff";
    document.getElementById("color-cells51").style.backgroundColor = "#660033";
    document.getElementById("color-cells61").style.backgroundColor = "#990033";
    document.getElementById("color-cells71").style.backgroundColor = "#ff0066";
    document.getElementById("color-cells81").style.backgroundColor = "#ff6600";
    document.getElementById("color-cells91").style.backgroundColor = "red";

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
    colorNow.style.backgroundColor = "white";


  })();

  function setDisplayColor() {
    document.getElementById("current-color").style.backgroundColor = currentColor;
  }

  // function getRandomColor() {
  //     var letters = '0123456789ABCDEF';
  //     var color = '#';
  //     for (var i = 0; i < 6; i++ ) {
  //         color += letters[Math.floor(Math.random() * 16)];
  //     }
  // return color;
  // }

  function setColor() {
    this.style.backgroundColor = currentColor;
  }

  function grabColor() {
    currentColor = this.style.backgroundColor;
  }


  function eraseColor(){
    currentColor = "white";
  }

  function clearAll() {
    var allPixels = document.getElementsByClassName("click-cells");
    for(var i = 0; i < allPixels.length; i++){
      allPixels[i].style.backgroundColor = "white";
    }
  }

  var colorArray = [];

  var overallPicture;


  function savePicture() {
    var currentPicture = document.getElementsByClassName("click-cells");
    if (colorArray.length === 0){
      for(var i = 0; i < currentPicture.length; i++){
        colorArray.push(currentPicture[i].style.backgroundColor);
      }
      console.log(currentPicture[0]);
      console.log(colorArray);
    } else {
        colorArray = [];
        for(var j = 0; j < currentPicture.length; j++){
        colorArray.push(currentPicture[j].style.backgroundColor);
      }
    }

   var newArray = JSON.stringify(colorArray);
   localStorage.setItem("saveFile", newArray);
  }

  function loadPicture() {
    var currentPicture = document.getElementsByClassName("click-cells");
    var storedArray = JSON.parse(localStorage.getItem("saveFile"));
    for(var i = 0; i < storedArray.length ; i++){
      currentPicture[i].style.backgroundColor = storedArray[i];
    }

  }



})();
