// check color range callback function
function checkColor(element,index,array) {
  return (element >= 0 && element < 256);
}
// check to ensure three RGB colors
function checkCount(element,index,array) {
  return (element.length == 3);
}
function testingCallbacks() {
  // color array
  var colors = new Array();
  colors[0] = [0,262,255];
  colors[1] = [255,255,255];
  colors[2] = [255,0,0];
  colors[3] = [0,255,0];
  colors[4] = [0,0,255];
  colors[5] = [-5,999,255];
  colors[6] = [255,255,1204556];
  // filter on color range
  var testedColors = new Array();
  for (var i in colors) {
    testedColors[i] = colors[i].filter(checkColor);
  }
  console.log("Here is the result: %s", testedColors);

  // print results of first round
  document.writeln("<h3>First check</h3>");
  for (i in testedColors) {
    document.writeln(testedColors[i] + "<br />");
  }
  // filter fewer than three values
  var newTested = testedColors.filter(checkCount);
  document.writeln("<br /><h3>Second</h3>");
  // print survivors
  for (i in newTested) {
    document.writeln(newTested[i] + "<br />");
  }
}
