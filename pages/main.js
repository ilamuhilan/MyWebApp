
window.onload = function() {
var price = document.getElementById('price');
var total = document.getElementById('total');
var calculate = document.getElementById('calculate');
var taxed = document.getElementById('taxed');
price.focus	();


calculate.onclick = function() {
	var gstprice = 18;
	var taxed1 = (price.value / 100 ) * 18;
	var total1 = parseInt(taxed1) + parseInt(price.value) ;
	taxed.value = taxed1;
	total.value = total1;
	
};
	document.getElementById('price').onblur = function() {
		
	//	window.alert("OnFocus");
		console.log("OnFocus");
		document.getElementById('calculate').focus()	;
		
	};
	document.getElementById('calculate').onmouseover = function() {
		
		window.confirm("Continue");
		console.log("Click here to calculate gst")
	};
};