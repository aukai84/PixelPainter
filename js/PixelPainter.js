

function stub(argument) {
  //this is just a stub
}



function clickedGrid() {
  // Test change by Andrea
  var grid = document.createElement('table');
  grid.className = "grid";
  document.body.appendChild(grid);

  for(var i = 0; i < 20; i++){
    var tr = document.createElement('tr');
    grid.appendChild(tr);

    for(var j = 0; j < 20; j++){
      var cell = document.createElement('td');
      cell.className = "clickCells" + i + j;
      tr.appendChild(cell);
      cell.addEventListener("click", onClickFunction);
      cell.innerHTML = "test";
    }
  }

return grid;

} clickedGrid();


function onClickFunction() {
  console.log("clicking")
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
      cell.innerHTML = "colors";
    }
   }
    return colorGrid;

} colorGrid();
