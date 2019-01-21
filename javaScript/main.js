//console.log("Go Time");
var heartDiv = document.getElementById('heart');
var crushBTN = document.getElementById("crush");
var rentBTN = document.getElementById("landlord");
var classicalBTN = document.getElementById("ClassyMusic");
var resetBTN = document.getElementById("reset");

crushBTN.onclick = function functionName() {
  heartBeat('.6s');
  //console.log('crushBTN pressed');
}
rentBTN.onclick = function functionName() {
  heartBeat('.25s');
  //console.log('rentBTN pressed');
}
classicalBTN.onclick = function functionName() {
  heartBeat('1.3s');
  //console.log('classicalBTN pressed');
}
resetBTN.onclick = function functionName() {
  heartBeat('1s');
  //console.log('resetBTN pressed');
}
function heartBeat(speed) {
  heartDiv.style.animationDuration = speed;
}
