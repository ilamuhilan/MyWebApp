
window.onload = function() {
var price = document.getElementById('price');
var total = document.getElementById('total');
var calculate = document.getElementById('calculate');
var taxed = document.getElementById('taxed');
price.onfocus;


calculate.onclick = function() {
	var price1 = price;
	var gstprice = 18;
	taxed.innerHTML = gstprice.value;
total.value = price1.value;
};
};