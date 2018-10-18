function computePi() {
	var N=document.getElementById("PiN").value
	var endResult=0;
	if (N==""){
		alert("Please input a number");
		return;
	}
	endResult=(Math.round(Math.PI*Math.pow(10, N))/Math.pow(10, N));
	document.getElementById("PiEndResult").innerHTML = endResult;

}	
function computeFibonacci() {
	var N=document.getElementById("fibN").value, endResult="";
	if (N== ""|| N>50){
		alert("Cannot Compute");
		return;
	}
	var A=1, B=0, temp=0, i=0;
	for (i=0; i<N; i++){
		endResult=endResult+A+", "
		temp=A
		A=A+B	
		B=temp
	}
	document.getElementById("fibonacciEndResult").innerHTML = endResult;
}

document.getElementById("computeFib").onclick = function(){
	computeFibonacci();
};

document.getElementById("computePi").onclick = function(){
	computePi();
};