

	 var percentageBtnElement = document.querySelectorAll(".btn-group button");
     var billInputElement = document.getElementById("input-bill");
	 var tipElement = document.getElementById("input-bill");
	 var noOfPersonInputElement = document.getElementById("input-people"); 
	 var tipPerPersonElement = document.querySelector(".tip-per-person");
	 var tipTotalElement = document.querySelector(".tip-total");
	 var resetBtnElement = document.querySelector(".reset-btn");
	 var customInputElement = document.querySelector(".custom-btn");
	 var tipValueParaElement = document.querySelector(".tip-per-person .tip-value");
	 var tipTotalParaElement = document.querySelector(".tip-total .tip-value")
	 
	 
	 // Maths
	 billInputElement.addEventListener("keyup", () => {tipOutOfBill();});
	 
	 function tipOutOfBill() {
		 var percent = getPercentValue();
		 var noOfPeople = noOfPersonInputElement.value;
		 var result = (billInputElement.value / 100 * percent) / noOfPeople;
		 printResult(result, noOfPeople);
	 }
	 
	 function getPercentValue() {
		for(iLoop = 0; iLoop < percentageBtnElement.length; iLoop++) {
           if(percentageBtnElement[iLoop].style.backgroundColor == "rgb(93, 223, 212)") {
		      return percentageBtnElement[iLoop].innerHTML.slice(1, percentageBtnElement[iLoop].innerHTML.length - 2);
		   } else if(customInputElement.style.backgroundColor == "rgb(93, 223, 212)") {
			   if(customInputElement.value == null || customInputElement.value == "") {
				   var reqStr = customInputElement.placeholder;
				   return reqStr.slice(0, reqStr.length - 1);
			   }
			   return customInputElement.value;
		   }
		}
        return 15;		
	 }
	 
	 function printResult(obj, obj2) {
		 tipValueParaElement.innerHTML = Math.round(obj * 100) / 100;
		 tipTotalParaElement.innerHTML = Math.round(obj * obj2 * 100) / 100;
	 }
	 
	 
	 
	 // Coloring the btn Elements
     percentageBtnElement[0].addEventListener("click", () => {styleBtn(0);});
     percentageBtnElement[1].addEventListener("click", () => {styleBtn(1);});
     percentageBtnElement[2].addEventListener("click", () => {styleBtn(2);});
     percentageBtnElement[3].addEventListener("click", () => {styleBtn(3);});
     percentageBtnElement[4].addEventListener("click", () => {styleBtn(4);});
	 customInputElement.addEventListener("click", () => {styleBtn(-1);});
	 
	 
	 function styleBtn(index) {
		 if(index != -1) {
     	     percentageBtnElement[index].style.backgroundColor ="hsl(175, 67%, 62%)";
		 } else {
			 customInputElement.style.backgroundColor ="hsl(175, 67%, 62%)";
		 }
		 for(iLoop = 0; iLoop < percentageBtnElement.length; iLoop++) {
			 if(iLoop == index) {
			 	 customInputElement.style.backgroundColor ="hsl(189, 41%, 97%)";
				 continue;
			 }
		     percentageBtnElement[iLoop].style.backgroundColor ="hsl(183, 100%, 15%)";
		 }
		 tipOutOfBill();
	 }
	 
	 
	 
	 customInputElement.addEventListener("keyup", () => {changePlaceholderValue(customInputElement);});
	 
	 function changePlaceholderValue(obj) {
		 tipOutOfBill();
	 }
	 
	 
	 // Reset function
	 resetBtnElement.addEventListener("click", () => {resetInput();});
	 
	 function resetInput() {
		 billInputElement.value = 0;
		 noOfPersonInputElement.value = 1;
		 styleBtn(2);
		 customInputElement.value = null;
		 customInputElement.placeholder = "Custom";
		 tipOutOfBill();
	 }
	 
	 
	 // on keyup in the input element of number of people
	 noOfPersonInputElement.addEventListener("keyup", () => {calculateResult(noOfPersonInputElement);});
	 noOfPersonInputElement.addEventListener("focusout", () => {validateInput(noOfPersonInputElement);});
	 
	 
	 function validateInput(obj) {
		 if(obj.value[0] == null || obj.value[0] == 0) {
			 obj.value = 1;
		 }
		 tipOutOfBill();
	 }
	 
	 function calculateResult(obj) {
		 if(obj.value[0] == null) {
			 obj.value = 0;
		 } else {
			 for(iLoop = 0; iLoop < obj.value.length; iLoop++) {
				if(obj.value[iLoop] == "0") {
					obj.value = obj.value.slice(iLoop + 1, obj.value.length);
				}
				break;
			 }
		 }
		 tipOutOfBill();
	 }
	 
	 // dont know anymore 
	 customInputElement.addEventListener("focusin", () => {getTheChange(customInputElement);});
	 customInputElement.addEventListener("focusout", () => {validateCustomInput(customInputElement);});
	 
	 function getTheChange(obj) {
		 if(obj.placeholder != "Custom") {
			 obj.value = obj.placeholder.slice(0, obj.placeholder.length -1);
			 obj.placeholder = "Custom";
		 }
	 }
	 
	 function validateCustomInput(obj) {
		 if(obj.value != "") {
			 obj.placeholder = obj.value + "%";
			 obj.value = "";
		 }
	 }