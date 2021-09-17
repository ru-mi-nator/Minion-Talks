var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something went wrong. Try again later.")
}

console.log(txtInput)

btnTranslate.addEventListener("click", clickEventHandler())
    
function clickHandler() {

    // console.log("clicked!!")
    // console.log("input", txtInput.value);
    // outputDiv.innerText = "fygdsufyds fstfu " + txtInput.value;

    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(respone => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedtext;
    }
.catch(errorHandler)

}
