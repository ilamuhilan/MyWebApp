
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
		
		//window.confirm("Continue");
		console.log("Click here to calculate gst")
	};
	var blikeele  = document.getElementById("likebutton");
blikeele.onclick = function() {
    //alert('Liked');
    var request =new XMLHttpRequest();
    request.onreadystatechange =function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status ===200){
            var counter =  request.responseText;
            var span=document.getElementById('likecount');
            span.innerHTML = counter.toString();
           
        } 
        }
    };
	request.open('GET','http://52.15.135.89:8080/counter',true);
        request.send(null);
};
var commentsop = document.getElementById('commentoutput');
var submitclick = document.getElementById('commentbutton');
 submitclick.onclick = function() {
var commentsip = document.getElementById('commentin');
 commentsipvalue=commentsip.value;
 if(commentsipvalue!=='')
    {
		var request =new XMLHttpRequest();
        request.onreadystatechange =function() {
            if(request.readyState === XMLHttpRequest.DONE) {
                if(request.status ===200){
                    var list = ' ';
                var comments =  request.responseText;
				comments=JSON.parse(comments);
				 for(var temp=0;temp<comments.length;++temp) {
							 list += ('<li>' + comments[temp]);
							  commentsop.innerHTML = list.toString();
							  commentsip.value="";
							}
							} 
							}
						};
						request.open('GET','http://52.15.135.89:8080/submit-comment?commentinput='+commentsipvalue,true);
            request.send(null);
	}
 };

	
};
