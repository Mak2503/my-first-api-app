var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var txtOutput = document.querySelector("#txt-output");
var transUrl = "https://api.funtranslations.com/translate/yoda.json";

function clicked() {
    var takeInput = transUrl + "?text=" + txtInput.value;
    fetch(takeInput)
        .then(response => response.json())
        .then(json => {
            var outputTxt = json.contents.translated;
            txtOutput.innerText = outputTxt;
        })
        .catch(error => alert("An error occured. Please try again in sometime"));
}

btnTranslate.addEventListener("click", clicked);