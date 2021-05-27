
     var inputObj = document.getElementsByTagName("input");
	 inputObj[0].addEventListener("blur", removeStyle);
	 inputObj[1].addEventListener("blur", removeStyle);
	 inputObj[2].addEventListener("blur", removeStyle);
	 inputObj[3].addEventListener("blur", removeStyle);
     
	 inputObj[0].addEventListener("focus", addStyle);
	 inputObj[1].addEventListener("focus", addStyle);
	 inputObj[2].addEventListener("focus", addStyle);
	 inputObj[3].addEventListener("focus", addStyle);

     function addStyle() {
        this.style.border ="2px solid var(--color-red)";
     }	 
	 function removeStyle() {
	    this.style.border ="1px solid var(--color-grayish-blue)"; 
	 }
	 
     function validating(index) {
	    var targetEle = document.getElementsByTagName("input");
        var errorEle = document.getElementsByClassName("error-icon");
		var checkEle = document.querySelectorAll(".error-icon img");
		if(!targetEle[index].checkValidity()) {
			targetEle[index].style.border ="2px solid var(--color-red)";
		    errorEle[index].style.display ="block";
			checkEle[index].src ="./images/icon-error.svg";
		} else if(index == 3) {
		    errorEle[index].style.display ="none";
			targetEle[index].style.border ="2px solid var(--color-green)";
		} else {
		    errorEle[index].style.display ="block";
			targetEle[index].style.border ="2px solid var(--color-green)";
			checkEle[index].src ="./images/icon-checkmark.svg";
		}
	 }
	 