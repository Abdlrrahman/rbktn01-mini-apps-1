var counter = 0;
var checker = {};
var xValues = {};
var xCounter = 0;
var win = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
function change(id) {
	if (!checker[id]) {
		checker[id] = id;
		if(counter % 2 === 0) {
			counter++;
			xValues[xCounter++] = id.slice(7);
			console.log(xValues)
			document.getElementById(id).innerText = "X";
		}
		else {
			counter++;
			document.getElementById(id).innerText = "O";
		}
	}
	if (xCounter >= 3) {
		if (xCounter % 2 === 1) {
			document.getElementById("result").innerText = "YOU WON";
		}
	}
}