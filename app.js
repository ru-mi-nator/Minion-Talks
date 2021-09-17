var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input) {
    return serverURL + "?text=" + input;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something is wrong with the server. Try again later.")
}

console.log(txtInput)
    
function clickHandler() {

    // console.log("clicked!!")
    // console.log("input", txtInput.value);
    // outputDiv.innerText = "fygdsufyds fstfu " + txtInput.value;

    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
}

btnTranslate.addEventListener("click", clickHandler);