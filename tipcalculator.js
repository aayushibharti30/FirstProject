document.getElementById("button").onclick = function(){
	calculate();
	};
function calculate() {
	var amt= document.getElementById("amt").value;	
	var servicevalue= document.getElementById("servicevalue").value;
	var ppl= document.getElementById("ppl").value;
	var tipamt;
	tipamt=(amt*servicevalue)/ppl;
	document.getElementById("para").innerHTML="Tip Amount per head = $"+tipamt;			
	}