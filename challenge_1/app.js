var counter = 0;
var checker = {};
var xValues = {};
var result;
var check =[];

var win = [['1','2','3'],['4','5','6'],['7','8','9'],['1','4','7'],['2','5','8'],['3','6','9'],['1','5','9'],['3','5','7']];
function change(id) {
	check.push(id);
	if (!result) {
		if (!checker[id]) {
		checker[id] = id;
		if(counter % 2 === 0) {
			counter++;
			xValues[id.slice(7)] = 'X';
			document.getElementById(id).innerText = "X";
		}
		else {
			counter++;
			document.getElementById(id).innerText = "O";
		}
	}
			if (xValues[1] && xValues[2] && xValues[3] || xValues[4] && xValues[5] && xValues[6] || xValues[7] && xValues[8] && xValues[9] || xValues[1] && xValues[4] && xValues[7] || xValues[2] && xValues[5] && xValues[8] || xValues[3] && xValues[6] && xValues[9] || xValues[1] && xValues[5] && xValues[9] || xValues[3] && xValues[5] && xValues[7]) {
				result = document.getElementById("result").innerText = "YOU WON";
			}
		else if (Object.values(xValues).length === 9) {
			result = document.getElementById("result").innerText = "TIE";
		}
}}

function rest() {
	for (var i = 0; i < check.length; i++) {
document.getElementById(check[i]).innerText = "";
}
counter = 0;
checker = {};
xValues = {};
result = null;
}