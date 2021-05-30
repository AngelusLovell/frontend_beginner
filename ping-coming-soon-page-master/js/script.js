

    var targetObjInput = document.getElementById("pre-register-email");
	targetObjInput.addEventListener("focus", () => {styleInput(true);});
	targetObjInput.addEventListener("blur", () => {styleInput(false);});
	targetObjInput.addEventListener("keyup", () => {styleInput(true);});
	
	var targetObjBtn = document.getElementById("pre-register-submit-btn");
	targetObjBtn.addEventListener("mouseover", () => {styleBtn(true);});
	targetObjBtn.addEventListener("mouseout", () => {styleBtn(false);});
	
	
	function styleInput(condition) {
		if(condition) {
			if(!targetObjInput.checkValidity() || targetObjInput.value == "") {
	           targetObjInput.style.border ="2px solid hsl(354, 100%, 66%)";
		    } else {
	           targetObjInput.style.border ="2px solid hsl(154, 59%, 51%)";
    		}
			return;
		}
		targetObjInput.style.border ="1px solid lightgrey";
	}
	
	function styleBtn(condition) {
		if(condition) {
		    if(targetObjInput.value == "") {
		    	targetObjBtn.style.cursor ="not-allowed";
				targetObjBtn.style.background ="hsl(223, 100%, 88%)";
				
		    	targetObjInput.placeholder ="Type something...";
				styleInput(true);
		    	return ;
		    } else if(targetObjInput.value.indexOf("@gmail.com") == -1) {
				if(targetObjInput.value.indexOf("@")) {
					targetObjInput.value = targetObjInput.value.slice(0, targetObjInput.value.indexOf("@"));
				}
	            targetObjInput.value += "@gmail.com";
			}
		    targetObjBtn.style.background ="hsl(223, 90%, 75%)";
			return;
		}

		styleInput(false);
    	targetObjInput.placeholder ="Your email address...";
		
		targetObjBtn.style.background ="hsl(223, 87%, 63%)";
		targetObjBtn.style.cursor ="pointer";
	}