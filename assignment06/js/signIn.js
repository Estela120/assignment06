///// VALIDATION /////
		
////Sign In FORM /////	


var theform = document.getElementById("myForm");
var fname = document.getElementById("inputFullName");
var address = document.getElementById("inputAddress");
var phone = document.getElementById("inputPhone");
var email = document.getElementById("inputEmail");
var pass1 = document.getElementById("inputPassword1");
var flag = true;
var patt = "";
var emailVal = new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
var nameVal = new RegExp(/^([a-zA-Z_\.\-]{10,15})+$/);
var addrVal = new RegExp(/^([0-9A-Za-z\.]{15,20})+$/);
var phoneVal = new RegExp(/^([0-9_\-]{8,10})+$/);
var pass1Val = new RegExp(/^([a-zA-Z0-9_\#\@\$\-]{6,10})+$/);

theform.addEventListener("submit", function () {
	"use strict";
	
checkInput(fname);
checkInput(address);
checkInput(phone);
checkInput(email);
checkInput(pass1);
				
});


function checkInput(control) {
	if (control.value == "") {
		window.alert("The information must not be blank!");
		flag = false;
	} else {
	//var res = patt.test(str);
			switch (control) { 
				case inputFullName:
				 if(!nameVal.test('control')){
					 document.getElementById("messageFullName").innerHTML = " Enter a valid username"
					flag = false;
					break;
				 }	
				case inputAddress:
				if(!addrVal.test('control')){
					flag = false;
					break;
				 }	
				case inputPhone:
				if(!phoneVal.test('control')){
					flag = false;
				    break;
				 }
				case inputEmail:
				if(!emailVal.test('control')){
					flag = false;
					break;
				 }   
				case inputPassword1:
				if(!pass1Val.test('control')){
					flag = false;
				    break;
				 }
				 default:
					window.alert("Looks good!");
					flag = true;
				    break;
				} //end switch	
	} //end else if	
} //end checkInput
						

//	////////////  EXAMPLE   //////
//var str = "The best things in life are free";
//var patt = new RegExp("e");
//var res = patt.exec(str);
//	 ~  RESULT WILL BE e SINCE IS IN THE STRING
/////////////////////////////////	 	 
//var str = "The best things in life are free";
//var patt = new RegExp("e");
//var res = patt.test(str);	 
///  ~  RESULT WILL BE true SINCE IS IN THE STRING

//////////////////
// takes the form field value and returns true on valid number

///////////////////////////////

