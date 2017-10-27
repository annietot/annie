try{
	document.addEventListener('keyup',function(){
		var input = document.getElementById('field_text1').value;
		document.getElementById('input_text1').innerHTML = input;

		if (input%2 == 0) {
			document.getElementById('oddEven').innerHTML = "EVEN";
			//even numbers
		}
		else{
			document.getElementById('oddEven').innerHTML = "ODD";
			//odd numbers
		}
	});
}
catch(e){
	//may error dito
	console.log(e);
}