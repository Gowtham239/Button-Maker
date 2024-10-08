const backgroundColor = document.querySelector("#background-color");
const fontColor = document.querySelector("#font-color");
const fontSize = document.querySelector("#font-size");
const fontWeight = document.querySelector("#font-weight");
const paddingInPx = document.querySelector("#padding-in-px");
const borderRadiusInPx = document.querySelector("#border-radius-in-px");
const applyBtn = document.querySelector("#apply-btn");
const resultBtn = document.querySelector("#result-btn");
const errorMessage = document.querySelector(".error-message")

function userInputValues() {
    if(backgroundColor.value === "" 
        || fontColor.value === "" 
        || fontSize.value === ""
        || fontWeight.value === ""
        || paddingInPx.value === ""
        || borderRadiusInPx.value === "") {
            errorMessage.textContent = "Inputs should not be empty";
            errorMessage.style.color = "red";
        } else {
            resultBtn.style.backgroundColor =  backgroundColor.value;
            resultBtn.style.color = fontColor.value;
            resultBtn.style.fontSize = fontSize.value;
            resultBtn.style.fontWeight = fontWeight.value;
            resultBtn.style.padding = paddingInPx.value;
            resultBtn.style.borderRadius = borderRadiusInPx.value;
            resultBtn.style.border = "none";

            errorMessage.textContent = "";
        }  
}

applyBtn.addEventListener("click", userInputValues);

