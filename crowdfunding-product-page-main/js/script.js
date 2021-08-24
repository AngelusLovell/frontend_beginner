
// HTML Elements
var menuBtn = document.querySelector(".menu-btn");
var menu = document.querySelector(".menu-opt-group");
var bookmarkBtn = document.querySelector(".bookmark");
var menuBackground = document.querySelector(".menu-veil");
var pledgePopUp = document.querySelector(".pledge-wrapper");
var pledgeSuccessPopup = document.querySelector(".pledge-success-wrapper");
var pledgeBtn = document.querySelector(".pledge-success .btn-pledge");
var radioBtn = document.querySelectorAll(".radio-btn");
var pledgeCard = document.querySelectorAll(".popup-pledge .card")
var popUpCloseBtn = document.querySelector(".popup-pledge .close-btn-pledge");
var backThisProjectBtn = document.querySelector(".back-this-project-btn");
var selectRewardBtn = document.querySelectorAll(".select-reward-btn");
var pledgeSubmitBtn = document.querySelectorAll(".popup-pledge .card .card__footer .submit-btn");
var pledgeInput = document.querySelectorAll(".popup-pledge .card .card__footer input");
var supportAmount = document.getElementById("support-amount");
var supportPeople = document.getElementById("support-people");



// Event Listener
menuBtn.addEventListener("click", () => { toggleMenu(menuBtn, menu, menuBackground); });
bookmarkBtn.addEventListener("click", () => { addToBookmark(bookmarkBtn); });
menuBackground.addEventListener("click", () => { removeMenuPopUp(menuBackground); });
pledgeBtn.addEventListener("click", () => { removePledgePopUp(pledgeSuccessPopup); });
radioBtn[0].addEventListener("click", () => { styleCard(radioBtn, pledgeCard, 0); });
radioBtn[1].addEventListener("click", () => { styleCard(radioBtn, pledgeCard, 1); });
radioBtn[2].addEventListener("click", () => { styleCard(radioBtn, pledgeCard, 2); });
popUpCloseBtn.addEventListener("click", () => { closePopup(pledgePopUp); });
backThisProjectBtn.addEventListener("click", () => { openPledgePopup(pledgePopUp); });
selectRewardBtn[0].addEventListener("click", () => { openActivePledgePopup(radioBtn, pledgePopUp, 0); });
selectRewardBtn[1].addEventListener("click", () => { openActivePledgePopup(radioBtn, pledgePopUp, 1); });
pledgeSubmitBtn[0].addEventListener("click", () => { confirmPledge(pledgeInput, pledgeSuccessPopup, 0); });
pledgeSubmitBtn[1].addEventListener("click", () => { confirmPledge(pledgeInput, pledgeSuccessPopup, 1); });
pledgeSubmitBtn[2].addEventListener("click", () => { confirmPledge(pledgeInput, pledgeSuccessPopup, 2); });


// function 
function toggleMenu(btn, obj, bg) {
    if(obj.style.display != "block") {
        bg.style.display = "block";
        obj.style.display = "block";
        btn.src ="./images/icon-close-menu.svg";
    } else {
        bg.style.display = "none";
        obj.style.display = "none";
        btn.src ="./images/icon-hamburger.svg";
    }
}

function addToBookmark(obj) {
    var bookmarkImg = obj.querySelector(".bookmark__img g");
    var bookmarkItem = obj.querySelector(".bookmark__item-lg");
   
    if(bookmarkItem.innerHTML != "Bookmarked") {
        bookmarkItem.innerHTML = "Bookmarked";
        bookmarkImg.style.fill = "hsl(176, 72%, 28%)";
        bookmarkItem.style.color ="hsl(176, 72%, 28%)";
    } else {
        bookmarkItem.innerHTML = "Bookmark";
        bookmarkImg.style.fill = "hsl(0, 0%, 20%)";
        bookmarkItem.style.color = "hsl(0, 0%, 20%)";
    }
}

function removeMenuPopUp(obj) {
    if(menu.style.display == "block") {
        toggleMenu(menuBtn, menu, obj);
    }
    obj.style.display = none;
}

function removePledgePopUp(objOne) {
    objOne.style.display = "none";
}

function styleCard(obj, parentObj, index) {
    styleRadioBtn(obj, index);
    selectActivatedCard(parentObj, index);
    deselectRemainingCard(parentObj, index);
}

function styleRadioBtn(obj, index) {
    obj[index].querySelector(".radio-content").style.display ="block";
    for(iLoop = 0; iLoop < obj.length-1; iLoop++) {
        if(iLoop != index) {
          obj[iLoop].querySelector(".radio-content").style.display ="none";
        }
    }
}

function selectActivatedCard(obj, index) {
    if(window.innerWidth >= 1200) {
        obj[index].querySelector(".card__footer").style.display ="grid";
    } else {
        obj[index].querySelector(".card__footer").style.display ="block";
    }
}

function deselectRemainingCard(obj, index) {
    for(iLoop = 0; iLoop < obj.length-1; iLoop++) {
        if(iLoop != index) {
            var currentCardFooter = obj[iLoop].querySelector(".card__footer");
            currentCardFooter.style.display = "none";
        }
    }
}

function closePopup(popupWindow) {
    popupWindow.style.display = "none";
    for(iLoop = 0; iLoop < 2; iLoop++) {
        radioBtn[iLoop].querySelector(".radio-content").style.display ="none";
        pledgeCard[iLoop].querySelector(".card__footer").style.display = "none";
    }
}

function openPledgePopup(obj) {
    obj.style.display ="flex";
    obj.focus();
}

function openActivePledgePopup(btn, popup, index) {
    openPledgePopup(popup);
    styleCard(btn, pledgeCard, index+1);
}

function confirmPledge(inputEle, popup, index) {
    addPledge(inputEle, index);
    closePopup(pledgePopUp);
    popup.style.display ="flex";
}

function addPledge(obj, index) {
    var amountEle = supportAmount.innerHTML;
    var peopleEle = supportPeople.innerHTML;

    var amountInDollar = validateAmount(amountEle.slice(2, amountEle.length));
    var peopleInNum = validateAmount(peopleEle);

    var totalAmountInDollar = parseInt(amountInDollar) + parseInt(getInputAmount(obj, index));
    var totaPeopleInNum = parseInt(peopleInNum) + 1;

    supportAmount.innerHTML = "$" + addComa(totalAmountInDollar.toString());
    supportPeople.innerHTML = addComa(totaPeopleInNum.toString());
}

function addComa(num) {
    var resultNum = "";
    num = flipTheValue(num);
    for(iLoop = 0; iLoop < num.length; iLoop++) {
        resultNum += num.substr(iLoop, 1);
        if(((iLoop + 1) % 3) == 0) {
            resultNum += ",";
        }
    }
    return flipTheValue(resultNum);
}

function flipTheValue(num) {
    var resultNum ="";
    for(iLoop = num.length-1; iLoop >= 0; iLoop--) {
        resultNum += num.substr(iLoop, 1);
    }
    return resultNum;
}

function validateAmount(myStr) {
    var validStr = "";
    for(iLoop = 0; iLoop < myStr.length; iLoop++) {
        if(myStr[iLoop] != ',') {
            validStr += myStr.substr(iLoop, 1);
        } 
    }
    return validStr;
}

function getInputAmount(obj, index) {
    if(obj.value == null) {
        if(index == 0) {
            return 0;
        }
        if(index == 1) {
            return 25;
        }
        if(index == 2) {
            return 75;
        }
    }
    return obj.value;
}