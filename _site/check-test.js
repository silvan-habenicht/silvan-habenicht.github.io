/*eslint-env browser*/
/*global Audio: false */
var adapterSolved = false,
    commandSolved = false,
    factorySolved = false,
    decoratorSolved = false,
    strategySolved = false,
    observerSolved = false;

var patternForm,
    patternMenu,
    patternResult,
    patternButton;

function setPatternVariables(pattern) {
    "use strict";
    patternForm = document.getElementById(pattern + "Form");
    patternMenu = document.getElementById(pattern + "Menu");
    patternResult = document.getElementById(pattern + "Result");
    patternButton = document.getElementById(pattern + "Button");
}

function solveAll() { /* exported solveAll*/
    "use strict";
    var form = document.getElementById("adapterForm");
    form.elements[4].checked = true;
    form.elements[6].checked = true;
    form = document.getElementById("commandForm");
    form.elements[3].checked = true;
    form.elements[9].checked = true;
    form = document.getElementById("observerForm");
    form.elements[4].checked = true;
    form.observerB3.checked = true;
    form.observerB4.checked = true;
    form = document.getElementById("factoryForm");
    form.elements[2].checked = true;
    form.factoryB1.checked = true;
    form.factoryB2.checked = true;
    form.factoryB3.checked = true;
    form = document.getElementById("strategyForm");
    form.elements[4].checked = true;
    form = document.getElementById("decoratorForm");
    form.elements[1].checked = true;
}

    
function checkSolved() {
    "use strict";
    if (!adapterSolved) { return; }
    if (!commandSolved) { return; }
    if (!factorySolved) { return; }
    if (!decoratorSolved) { return; }
    if (!strategySolved) { return; }
    if (!observerSolved) { return; }
    document.getElementById("certificate").disabled = false;
    setTimeout(function () {
        var audio = new Audio('audio/tinder-match.mp3');
        audio.volume = 0.2;
        audio.play();
        document.getElementById("alert").style.display = "block";
    }, 1000);
}

var audio = new Audio('audio/tinder-message.mp3');
audio.volume = 0.1;

function playTone() {
    "use strict";
    audio.play();
}


/* Checking the multiple choice test for the adapter pattern. */
function checkAdapter() { /* exported checkAdapter */
    "use strict";
    setPatternVariables("adapter");
    
    if (patternForm.elements[4].checked &&
            patternForm.elements[6].checked &&
            patternForm.adapterC1.value === "hasNext()" &&
            patternForm.adapterC2.value === "enumeration.hasMoreElements()" &&
            patternForm.adapterC3.value === "enumeration.nextElement()" &&
            patternForm.adapterC4.value === "remove()") {
        
        patternMenu.style.color = "darkgreen";
        patternMenu.innerHTML = "Adapter &#10003;";
        patternResult.innerHTML = "";
        patternButton.style.background = "darkgreen";
        adapterSolved = true;
        playTone();
        checkSolved();
    
    } else {
        patternMenu.style.color = "darkred";
        patternMenu.innerHTML = "Adapter";
        patternResult.style.color = "darkred";
        patternResult.innerHTML = "&#10007; Bitte überprüfe deine Eingaben.";
        patternButton.style.background = "darkred";
        adapterSolved = false;
    }
}

/* Checking the multiple choice test for the command pattern. */
function checkCommand() { /* exported checkCommand */
    "use strict";
    setPatternVariables("command");
    
    if (patternForm.elements[3].checked &&
            patternForm.elements[9].checked) {
        
        patternMenu.style.color = "darkgreen";
        patternMenu.innerHTML = "Command &#10003;";
        patternResult.innerHTML = "";
        patternButton.style.background = "darkgreen";
        commandSolved = true;
        playTone();
        checkSolved();
    
    } else {
        patternMenu.style.color = "darkred";
        patternMenu.innerHTML = "Command";
        patternResult.style.color = "darkred";
        patternResult.innerHTML = "&#10007; Bitte überprüfe deine Eingaben.";
        patternButton.style.background = "darkred";
        commandSolved = false;
    }
}

/* Checking the multiple choice test for the observer pattern. */
function checkObserver() { /* exported checkObserver */
    "use strict";
    setPatternVariables("observer");
    
    if (patternForm.elements[4].checked &&
            !patternForm.observerB1.checked &&
            !patternForm.observerB2.checked &&
            patternForm.observerB3.checked &&
            patternForm.observerB4.checked &&
            patternForm.observerC1.value === "extends" &&
            patternForm.observerC2.value === "Observable" &&
            patternForm.observerC3.value === "!bestellungAbholbereit" &&
            patternForm.observerC4.value === "notifyObservers()") {
        
        patternMenu.style.color = "darkgreen";
        patternMenu.innerHTML = "Observer &#10003;";
        patternResult.innerHTML = "";
        patternButton.style.background = "darkgreen";
        observerSolved = true;
        playTone();
        checkSolved();
    
    } else {
        patternMenu.style.color = "darkred";
        patternMenu.innerHTML = "Observer";
        patternResult.style.color = "darkred";
        patternResult.innerHTML = "&#10007; Bitte überprüfe deine Eingaben.";
        patternButton.style.background = "darkred";
        observerSolved = false;
    }
}

/* Checking the multiple choice test for the factory pattern. */
function checkFactory() { /* exported checkFactory */
    "use strict";
    setPatternVariables("factory");
    
    if (patternForm.elements[2].checked &&
            patternForm.factoryB1.checked &&
            patternForm.factoryB2.checked &&
            patternForm.factoryB3.checked &&
            !patternForm.factoryB4.checked &&
            patternForm.factoryC1.value === "Gericht" &&
            patternForm.factoryC2.value === "erzeugeGericht" &&
            patternForm.factoryC3.value === "int") {
        
        patternMenu.style.color = "darkgreen";
        patternMenu.innerHTML = "Factory &#10003;";
        patternResult.innerHTML = "";
        patternButton.style.background = "darkgreen";
        factorySolved = true;
        playTone();
        checkSolved();
    
    } else {
        patternMenu.style.color = "darkred";
        patternMenu.innerHTML = "Factory";
        patternResult.style.color = "darkred";
        patternResult.innerHTML = "&#10007; Bitte überprüfe deine Eingaben.";
        patternButton.style.background = "darkred";
        factorySolved = false;
    }
}

/* Checking the multiple choice test for the strategy pattern. */
function checkStrategy() { /* exported checkStrategy */
    "use strict";
    setPatternVariables("strategy");
    
    if (patternForm.elements[4].checked &&
            patternForm.strategyC1.value === "AmerikanischeZubereitungsart" &&
            patternForm.strategyC2.value === "implements" &&
            patternForm.strategyC3.value === "Zubereitungsart" &&
            patternForm.strategyC4.value === "void" &&
            patternForm.strategyC5.value === "zubereiten" &&
            patternForm.strategyC6.value === "String[]") {
        
        patternMenu.style.color = "darkgreen";
        patternMenu.innerHTML = "Strategy &#10003;";
        patternResult.innerHTML = "";
        patternButton.style.background = "darkgreen";
        strategySolved = true;
        playTone();
        checkSolved();
    
    } else {
        patternMenu.style.color = "darkred";
        patternMenu.innerHTML = "Strategy";
        patternResult.style.color = "darkred";
        patternResult.innerHTML = "&#10007; Bitte überprüfe deine Eingaben.";
        patternButton.style.background = "darkred";
        strategySolved = false;
    }
}

/* Checking the multiple choice test for the decorator pattern. */
function checkDecorator() { /* exported checkDecorator */
    "use strict";
    setPatternVariables("decorator");
    
    if (patternForm.elements[1].checked) {
        
        patternMenu.style.color = "darkgreen";
        patternMenu.innerHTML = "Decorator &#10003;";
        patternResult.innerHTML = "";
        patternButton.style.background = "darkgreen";
        decoratorSolved = true;
        playTone();
        checkSolved();
    
    } else {
        patternMenu.style.color = "darkred";
        patternMenu.innerHTML = "Decorator";
        patternResult.style.color = "darkred";
        patternResult.innerHTML = "&#10007; Bitte überprüfe deine Eingaben.";
        patternButton.style.background = "darkred";
        decoratorSolved = false;
    }
}

function getCertificate() { /* exported getCertificate*/
    "use strict";
    window.open("pictures/pasta.jpg");
}