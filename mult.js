/* Liam Reynolds, University of MA, Lowell. CS.
liam_reynolds@student.uml.edu
Copyright(c) 15 November 2018. All rights reserved.*/

function createTable(){
  //input from table is stored as upper and lower bounds of axis
  var lowY = parseInt(document.getElementById("inloY").value);
  var upY = parseInt(document.getElementById("inupY").value);
  var lowX = parseInt(document.getElementById("inloX").value);
  var upX = parseInt(document.getElementById("inupX").value);
  //window error message if bounds are in wrong order
  if(lowY > upY || lowX > upX){
    window.alert("Upper bound must be greater than lower bound.");
    exit(1);
  }
  //arrays for storing range of integers between two bounds
  var arrY = [];
  var arrX = [];
  var Ysize = upY - lowY + 1;
  var Xsize = upX - lowX + 1;

  if(Ysize > 20 || Xsize > 20){
    window.alert("Table can only contain bounds with a range of <20.");
    exit(1);
  }
  var node, prod, newRow, rowEl;
  var tab = document.getElementById("multTable");

  newRow = tab.insertRow(0);
  rowEl = newRow.insertCell(0);
  rowEl.innerHTML = " ";
  //loop assigns values to array by incrementing lower bound by one
  for(var i = 0; i < Ysize; i++){
      arrY[i] = lowY;
      lowY = lowY + 1;
  }
  //insert first row of Y axis range integers into table while creating array
  for(var j = 0; j < Xsize; j++){
      arrX[j] = lowX;
      rowEl = newRow.insertCell(j + 1);
      rowEl.innerHTML = lowX.toString();
      lowX = lowX + 1;
  }
  //insert new row for every element in arrY
  for(i = 0; i < arrY.length; i++){
      newRow = tab.insertRow(i + 1);
      rowEl = newRow.insertCell(0);
      rowEl.innerHTML = arrY[i].toString();
      //insert new cell containing the product of current X and Y value
    for(j = 0; j < arrX.length; j++){
        prod = (arrY[i] * arrX[j]).toString();
        rowEl = newRow.insertCell(j + 1);
        rowEl.innerHTML = prod;
    }
  }
}
//function for resetting table to be called when submit button is pressed
function eraseTable(){
  document.getElementById("multTable").textContent = "";
}
