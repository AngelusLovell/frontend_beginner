  

      function changeSliderWindow(changeDir) {
	     var targetImg = document.querySelectorAll(".slider__img");
		 var targetText = document.querySelectorAll(".slider__text");
		 var targetHeading = document.querySelectorAll(".slider__heading");
		 var activeSliderIndex = getAtiveSliderIndex(targetImg);
		 displaySliderWindowElement(targetImg, "none");
		 displaySliderWindowElement(targetText, "none");
		 displaySliderWindowElement(targetHeading, "none");
		 
		 displayReqSliderWindow(changeDir, activeSliderIndex, targetImg, targetText, targetHeading);
	  }
	  function getAtiveSliderIndex(sliderAddr) {
	     var activeSliderIndex = 0;
	     for(i = 0; i < sliderAddr.length; i++) {
		    var targetStyle = getComputedStyle(sliderAddr[i]);
		    if(targetStyle.display != "none") {
			   return i;
			}
		 }
		 return activeSliderIndex;
	  }
	  function displaySliderWindowElement(sliderAddr, propertyValue) {
		 for(i = 0; i < sliderAddr.length; i++) {
		    sliderAddr[i].style.display = propertyValue;
			
		 }
	  }
	  function displayReqSliderWindow(direction, activeIndex, element1, element2, element3) {
	     var requiredIndex = 0;
	     if(direction == "prev") {
		    if(activeIndex != 0) {
			   requiredIndex = activeIndex - 1;
			} else {
			   requiredIndex = element1.length - 1;
			}
			element1[requiredIndex].style.display = "block";
			element2[requiredIndex].style.display = "block";
			element3[requiredIndex].style.display = "block";
		 }
	     if(direction == "next") {
		    if(activeIndex != element1.length - 1) {
			   requiredIndex = (activeIndex + 1);
			} else {
			   requiredIndex = 0;
			}
			element1[requiredIndex].style.display = "block";
			element2[requiredIndex].style.display = "block";
			element3[requiredIndex].style.display = "block";
		 }
	  }