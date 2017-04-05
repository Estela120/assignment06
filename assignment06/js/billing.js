////////////  BILLING FORM   ///////////////////

////////// Variables ////////
var billingForm = document.getElementById("myBillingForm");
var userInput = document.getElementsByTagName("input");
var fnameCC = document.getElementById("inputFullName");
var creditCard = document.getElementById("creditCard");
var password = document.getElementById("inputPassword");
var securityNumber = document.getElementById("secNum");
var reVisa = new RegExp(/^4[0-9]{12}(?:[0-9]{3})?$/);
var reAMEX = new RegExp(/^3[47][0-9]{13}$/);
var reMASTER = new RegExp(/^5[1-5][0-9]{14}$/);
var ccNumber = document.getElementById("creditCard").innerHTML;
//var secNumVal = new RegExp(/^([0-9]{3,4})+$/);
var nameVal = new RegExp(/^([a-zA-Z_\.\-]{10,15})+$/);
var nameVal = /^[A-Za-z0-9 ]{3,20}$/;
var pass1Val = new RegExp (/^([a-zA-Z0-9_\#\@\$\-]{6,10})+$/);
//var pass1Val = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;
var luhn_validate = function (imei) {
	"use strict";
    return !/^\d+$/.test(imei) || (imei.split('').reduce(function (sum, d, n) {
        return n === (imei.length - 1)
                   ? 0
                   : sum + parseInt((n % 2) ? d : [0, 2, 4, 6, 8, 1, 3, 5, 7, 9][d]);
    }, 0)) % 10 === 0;
};
var cardType = "";
var flag;
//////////////////// end of Variables ///////////////


billingForm.addEventListener("submit", function () {
	"use strict";
	
//	checkInput(billingForm);
	checkInput(fnameCC);
	checkInput(password);
	checkInput(securityNumber);
	checkInput(creditCard);
				
});

function checkInput(control) {
	if (control.value == "") {
//		window.alert("The information must not be blank!");
		document.getElementById("errorMessg").innerHTML = " Information must not be blank!";
		flag = false;
	} else {
			switch (control) { 
				case inputFullName:
					var res = nameVal.test(fnameCC);
						if(res === false) {
						document.getElementById("errorMessgName").innerHTML = " Enter a valid username - min 3 max 20 chars";
						flag = false;
						break;
				 	}	
				case creditCard:
					GetCardType(creditCard);
					
				case inputPassword:
					var res = pass1Val.test(password);
					if(res === false) {
						document.getElementById("errorMessgPsw").innerHTML = " Enter 6 to 10 digits";
						flag = false;
				    	break;
					} 
				case secNum:
					var res = secNumVal.test(securityNumber);
					if(res === false) {
					document.getElementById("errorMessgSecN").innerHTML = " Enter 3 to 4 digits";
						flag = false;
				    	break;
					}
				default:
					window.alert("Looks good!");
					flag = true;
				    break;
				} //end switch
};
};


function GetCardType (res) {
	switch (res) { 
	 case reVisa:
		var card = (ccNumber.match(reVisa));
			if (card != null) {
		cardType = "Visa";
		valid_credit_card(ccNumber);
//		document.getElementById("errorMessgCC").innerHTML = " Valid CC" + cardType
		}
		flag = true;
		break;
	case reAMEX:
		var card = (ccNumber.match(reAMEX));
		if (card != null) {
		cardType = "American Express"; 
		valid_credit_card(ccNumber);
//		document.getElementById("errorMessgCC").innerHTML = " Valid CC" + cardType
		}
		flag = true;
		break;
	case reMASTER:
		var card = (ccNumber.match(reMASTER));
		if (card != null) {
		cardType = "MasterCard";
		valid_credit_card(ccNumber);
//		document.getElementById("errorMessgCC").innerHTML = " Valid CC" + cardType
		}
		flag = true;
		break;
	default:
		document.getElementById("errorMessgCC").innerHTML = " Wrong Number"
		flag = false;
		break;
	}
}
	
///The Luhn Algorithm///
function valid_credit_card(value) {
  // accept only digits, dashes or spaces
	if (/[^0-9-\s]+/.test(value)) return false;
	var nCheck = 0, nDigit = 0, bEven = false;
	value = value.replace(/\D/g, "");
	for (var n = value.length - 1; n >= 0; n--) {
		var cDigit = value.charAt(n),
			  nDigit = parseInt(cDigit, 10);
		if (bEven) {
			if ((nDigit *= 2) > 9) nDigit -= 9;
		}
		nCheck += nDigit;
		bEven = !bEven;
	} return (nCheck % 10) == 0;
	document.getElementById("errorMessgCC").innerHTML = " Valid CC" + cardType;
}

//////  The Luhn Algorithm ////
//function digits_of(number){
//     for (var i in str(number))
//		 return int(i);
//}
//
//function luhn_checksum(number){
//   var digits = digits_of(number);
//   var odd_digits = digits[-1::-2];
//   var  even_digits = digits[-2::-2];
//   var total = sum(odd_digits);
//    for (digit in even_digits){
//        total += sum(digits_of(2 * digit))}
//    return (total % 10);
//}
//	
//function valid_credit_card(number){
//    return luhn_checksum(number) == 0
//}


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


//////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
/////////    idea  with a "do while loop"   /////////////////////
//////////////////////////////////////////////////////////////////////
//function checkInput(control) {
//	"use strict";
//do {
////code to validate Name//
//	  		var inputFullName = control.value;
//			if (!nameVal.test('inputFullName')) {
//				document.getElementById("errorMessg").innerHTML = " Enter a valid username";
//				flag = false;
//			} else {
////** code to validate Credit Card//					
//				var creditCard = control.value;
//				GetCardType (creditCard);
////				flag =   // function return "flag" is not needed here
//				} else {
////code to validate Password//
//					var inputPassword = control.value;
//					if(!pass1Val.test(inputPassword)) {
//						document.getElementById("errorMessg").innerHTML = " Enter 6 to 10 digits"};
//						flag = false;
//					} else {	
////code to validate Security Number//
//						var secNum = control.value;
//						if(!secNumVal.test(secNum)) {
//						document.getElementById("errorMessg").innerHTML = " Enter 3 to 4 digits"};
//						flag = false;
//						} else {
//							window.alert("All good!"); 
//							flag = true;
//							};
//} while (control.value === "");// closing  while loop
//} ; //closing checkInput fn
//////////////////////////////////////////	
////    //////////////        ///////
//////////////////////////////////////////		

////////////////////////////////////
//if (payInfo[control]) {
//    fn = payInfo[control];
//  } else {
//	fn = payInfo['default'];
//  }
//  	return fn();
//}
//////////////////////////////////////////////
//////////////////////////////////////////////