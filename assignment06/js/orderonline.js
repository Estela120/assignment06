/////////////// 
var order = document.getElementById("myForm");
var checkOpt = document.getElementById("btnCheck");
var totalCost= 0;

var pizza = {
    handTossed: ["Hand Tossed ($)", "Small ($14.90)", "Medium ($15.90)", "Large ($16.90)", "Extra Large ($18.90)"],
    thinCrust: ["Thin Crust ($)", "Small ($10.90)", "Medium ($12.90)", "Large ($14.90)", "Extra Large ($16.90)"],
    nyStyle: ["New York Style ($)", "Small ($14.90)", "Medium ($15.90)", "Large ($16.90)", "Extra Large ($18.90)"],
    gluten: ["Gluten ($)", "Small ($12.90)", "Medium ($13.90)", "Large ($15.90)", "Extra Large ($16.90)"]
};

var pizzaDls = {
    handTossed: [0, 14.90, 15.90, 16.90, 18.90],
    thinCrust: [0, 10.90, 12.90, 14.90, 16.90],
    nyStyle: [0, 14.90, 15.90, 16.90, 18.90],
    gluten: [0, 12.90, 13.90, 15.90, 16.90]
};

var userInput = document.getElementsByTagName("input");
var h1 = document.getElementById("handTossed");
var j1 = document.getElementById("thinCrust");
var k1 = document.getElementById("nyStyle");
var m1 = document.getElementById("gluten");
var h2 = document.getElementById("pSm");
var j2 = document.getElementById("pMed");
var k2 = document.getElementById("pLg");
var m2 = document.getElementById("xLg");

var ht = document.getElementById("ht");
var htSmall = document.getElementById("htSmall");
var htMedium = document.getElementById("htMedium");
var htLarge = document.getElementById("htLarge");
var htExtraLarge = document.getElementById("htExtraLarge");
var htVal = document.getElementById("ht").value;
var htSmallVal = document.getElementById("htSmall").value;
var htMediumVal = document.getElementById("htMedium").value;
var htLargeVal = document.getElementById("htLarge").value;
var htExtraLargeVal = document.getElementById("htExtraLarge").value;
var htCost = 0;
var htSmallCost = 14.90;
var htMediumCost = 15.90;
var htLargeCost = 16.90;
var htExtraLargeCost = 18.90;
//////////////////////////////////////////////////

var tc = document.getElementById("tc");
var tcSmall = document.getElementById("tcSmall");
var tcMedium = document.getElementById("tcMedium");
var tcLarge = document.getElementById("tcLarge");
var tcExtraLarge = document.getElementById("tcExtraLarge");
var tcVal = document.getElementById("tc").value;
var tcSmallVal = document.getElementById("htSmall").value;
var tcMediumVal = document.getElementById("htMedium").value;
var tcLargeVal = document.getElementById("htLarge").value;
var tcExtraLargeVal = document.getElementById("htExtraLarge").value;
var tcCost = 0;
var tcSmallCost = 10.90;
var tcMediumCost = 12.90;
var tcLargeCost = 14.90;
var tcExtraLargeCost = 16.90;
///////////////////////////////////////////////////

var ny = document.getElementById("ny");
var nyVal = document.getElementById("ny").value;
var nySmallVal = document.getElementById("nySmall").value;
var nyMediumVal = document.getElementById("nyMedium").value;
var nyLargeVal = document.getElementById("nyLarge").value;
var nyExtraLargeVal = document.getElementById("nyExtraLarge").value;
var nyCost = Number(nyCost);
var nySmallCost = Number(nySmallCost);
var nyMediumCost = Number(nyMediumCost);
var nyLargeCost = Number(nyLargeCost);
var nyExtraLargeCost = Number(nyExtraLargeCost);

var gl = document.getElementById("gl");
var glVal = document.getElementById("gl").value;
var glSmallVal = document.getElementById("glSmall").value;
var glMediumVal = document.getElementById("glMedium").value;
var glLargeVal = document.getElementById("glLarge").value;
var glExtraLargeVal = document.getElementById("glExtraLarge").value;
var glCost = Number(glCost);
var glSmallCost = Number(glSmallCost);
var glMediumCost = Number(glMediumCost);
var glLargeCost = Number(glLargeCost);
var glExtraLargeCost = Number(glExtraLargeCost);


var normalChVal = document.getElementById("normalCh");
var lightChVal = document.getElementById("lightCh");
var extraChVal = document.getElementById("extraCh");
var doubleChVal = document.getElementById("doubleCh");

var regSauceVal = document.getElementById("regSauce");
var heartySauceVal = document.getElementById("heartySauce");
var bbSauceVal = document.getElementById("bbSauce");

//var ht = document.getElementById("ht");
var htDls = Number(ht.options[ht.selectedIndex].value)

//var tc = document.getElementById("tc");
var tcDls = Number(tc.options[tc.selectedIndex].value);
//window.alert(tcDls + htDls );

//var ny = document.getElementById("ny");
var nyDls = Number(ny.options[ny.selectedIndex].value);

//var gl = document.getElementById("gl");
var glDls = Number(gl.options[gl.selectedIndex].value);

////////////////////  end of var   ////////////////
////////////////////////////////////////////////////

var submit = document.getElementById("submit", function(){
 "use strict";
 checkOpt (userInput);
 getSelCheckbox(myForm);
	window.alert("Your order was submitted!");
 clearCheckbox(frm);	
});

/////////////////////////////////////////////////
checkOpt.addEventListener("click", function () {
"use strict";
function firstCheck () {	
	if ((!h1.checked && !j1.checked && !k1.checked && !m1.checked))
	{
		window.alert("Please select Pizza Dough and Size");

	} else {
		userSelection(userInput);
	}
}
firstCheck();	
});

////////////////////////////////////////////////////////

function userSelection(userInput) {
	var value = [];
			for (var i = 0; i < userInput.length; i++) {
				if (userInput[i].checked){	
				
				  var value = userInput[i].value; 

				  window.alert( "Your choice is " + value);
				}
			};		
				 x = document.getElementById("cheeseOpt").value;
				 y = document.getElementById("sauceOpt").value;
			
				window.alert("You selected: " + x + "  " + y);
				
			document.getElementById("placeHere").innerHTML = "You selected(-): " + x + " " + y;			

			document.getElementById("placeHere1").innerHTML = "You selected(1): " + value;
};
	
///////////////////////////////////////////
function unhide(event) {
	window.console.log(event.target.checked);
	if (event.target.checked) {
		switch (event.target.value) {				
			case "HandTossed":
				document.getElementById("cost1").setAttribute("class", "zak");
				document.getElementById("cost2").setAttribute("class", "zak hide");
				document.getElementById("cost3").setAttribute("class", "zak hide");
				document.getElementById("cost4").setAttribute("class", "zak hide");			
				break;	
				
			case "ThinCrust":
				document.getElementById("cost2").setAttribute("class", "zak");
				document.getElementById("cost1").setAttribute("class", "zak hide");
				document.getElementById("cost3").setAttribute("class", "zak hide");
				document.getElementById("cost4").setAttribute("class", "zak hide");
				break;
				
			case "NewYorkStyle":
				document.getElementById("cost3").setAttribute("class", "zak");
				document.getElementById("cost1").setAttribute("class", "zak hide");
				document.getElementById("cost2").setAttribute("class", "zak hide");
				document.getElementById("cost4").setAttribute("class", "zak hide");
				break;
				
			case "Glutten":
				document.getElementById("cost4").setAttribute("class", "zak4");
				document.getElementById("cost1").setAttribute("class", "zak4 hide");
				document.getElementById("cost2").setAttribute("class", "zak4 hide");
				document.getElementById("cost3").setAttribute("class", "zak4 hide");
				break;
		} 
	}
}
///////////////////////////////////////////////

var select1 = document.getElementById("cost1");
pizza.handTossed.forEach(function (element) {
	"use strict";
	var opt = document.createElement("option");
	opt.innerHTML = element;
	select1.appendChild(opt);	
});	

select1.addEventListener("change", function () {
	"use strict";
window.console.log(select1.options[select1.selectedIndex].value);
	var z1 = select1.options[select1.selectedIndex].value;
	document.getElementById("zakTotal").value = z1;
	
	
}); 
	
var select2 = document.getElementById("cost2");
	pizza.thinCrust.forEach(function (element) {
		"use strict";
		var opt = document.createElement("option");
		opt.innerHTML = element;
		select2.appendChild(opt);	
});

select2.addEventListener("change", function () {
		"use strict";
		window.console.log(select2.options[select2.selectedIndex].value);
	var z2 = select2.options[select2.selectedIndex].value;
	document.getElementById("zakTotal").value = z2;
});	

var select3 = document.getElementById("cost3");
	pizza.nyStyle.forEach(function (element) {
		"use strict";
		var opt = document.createElement("option");
		opt.innerHTML = element;
		select3.appendChild(opt);	
});
select3.addEventListener("change", function () {
		"use strict";
	window.console.log(select3.options[select3.selectedIndex].value);
	var z3 = select3.options[select3.selectedIndex].value;
	document.getElementById("zakTotal").value = z3;
});

var select4 = document.getElementById("cost4");
	pizza.gluten.forEach(function (element) {
		"use strict";
		var opt = document.createElement("option");
		opt.innerHTML = element;
		select4.appendChild(opt);	
});
select4.addEventListener("change", function () {
    	"use strict";
    	window.console.log(select4.options[select4.selectedIndex].value);
	var z4 = select4.options[select4.selectedIndex].value;
	document.getElementById("zakTotal").value = z4;
});

//////////////////////////////////////////////////

//
h1.addEventListener("change", unhide);
j1.addEventListener("change", unhide);
k1.addEventListener("change", unhide);
m1.addEventListener("change", unhide);



document.getElementById("myForm").addEventListener("change", zakTotal);


