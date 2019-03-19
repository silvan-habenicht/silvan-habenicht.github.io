/*eslint-env browser*/
var commandSolved = false,
    factorySolved = false,
    decoratorSolved = false,
    strategySolved = false,
    observerSolved = false;

function checkSolved() {
    "use strict";
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
    }, 1000);
}

var audio = new Audio('audio/tinder-message.mp3');
audio.volume = 0.1;

function playTone() {
    "use strict";
    audio.play();
}

/* Checking the multiple choice test for the command pattern. */
function checkCommand(pattern) { /* exported checkCommand */
    "use strict";
    var patternForm = document.getElementById(pattern + "Form"),
        patternMenu = document.getElementById(pattern + "Menu"),
        patternResult = document.getElementById(pattern + "Result");
    
    if (!patternForm.commandA1.checked &&
            !patternForm.commandA2.checked &&
            patternForm.commandA3.checked &&
            !patternForm.commandA4.checked &&
            !patternForm.commandB1.checked &&
            !patternForm.commandB2.checked &&
            !patternForm.commandB3.checked &&
            patternForm.commandB4.checked) {
        
        patternMenu.style.color = "darkgreen";
        patternMenu.innerHTML = "Command &#10003;";
        patternResult.style.color = "darkgreen";
        patternResult.innerHTML = "&#10003;";
        commandSolved = true;
        playTone();
        checkSolved();
    
    } else {
        patternMenu.style.color = "darkred";
        patternMenu.innerHTML = "Command";
        patternResult.style.color = "darkred";
        patternResult.innerHTML = "&#10007; Bitte überprüfe deine Eingaben.";
        commandSolved = false;
    }
}

/* Checking the multiple choice test for the factory pattern. */
function checkFactory(pattern) { /* exported checkFactory */
    "use strict";
    var patternForm = document.getElementById(pattern + "Form"),
        patternMenu = document.getElementById(pattern + "Menu"),
        patternResult = document.getElementById(pattern + "Result");
    
    if (!patternForm.factoryA1.checked &&
            patternForm.factoryA2.checked &&
            !patternForm.factoryA3.checked &&
            !patternForm.factoryA4.checked &&
            !patternForm.factoryB1.checked &&
            patternForm.factoryB2.checked &&
            patternForm.factoryB3.checked &&
            !patternForm.factoryB4.checked) {
        
        patternMenu.style.color = "darkgreen";
        patternMenu.innerHTML = "Factory &#10003;";
        patternResult.style.color = "darkgreen";
        patternResult.innerHTML = "&#10003;";
        factorySolved = true;
        playTone();
        checkSolved();
    
    } else {
        patternMenu.style.color = "darkred";
        patternMenu.innerHTML = "Factory";
        patternResult.style.color = "darkred";
        patternResult.innerHTML = "&#10007; Bitte überprüfe deine Eingaben.";
        factorySolved = false;
    }
}

/* Checking the multiple choice test for the decorator pattern. */
function checkDecorator(pattern) { /* exported checkDecorator */
    "use strict";
    var patternForm = document.getElementById(pattern + "Form"),
        patternMenu = document.getElementById(pattern + "Menu"),
        patternResult = document.getElementById(pattern + "Result");
    
    if (patternForm.decoratorA1.checked &&
            !patternForm.decoratorA2.checked &&
            !patternForm.decoratorA3.checked &&
            !patternForm.decoratorA4.checked) {
        
        patternMenu.style.color = "darkgreen";
        patternMenu.innerHTML = "Decorator &#10003;";
        patternResult.style.color = "darkgreen";
        patternResult.innerHTML = "&#10003;";
        decoratorSolved = true;
        playTone();
        checkSolved();
    
    } else {
        patternMenu.style.color = "darkred";
        patternMenu.innerHTML = "Decorator";
        patternResult.style.color = "darkred";
        patternResult.innerHTML = "&#10007; Bitte überprüfe deine Eingaben.";
        decoratorSolved = false;
    }
}

/* Checking the multiple choice test for the strategy pattern. */
function checkStrategy(pattern) { /* exported checkStrategy */
    "use strict";
    var patternForm = document.getElementById(pattern + "Form"),
        patternMenu = document.getElementById(pattern + "Menu"),
        patternResult = document.getElementById(pattern + "Result");
    
    if (!patternForm.strategyA1.checked &&
            !patternForm.strategyA2.checked &&
            !patternForm.strategyA3.checked &&
            patternForm.strategyA4.checked) {
        
        patternMenu.style.color = "darkgreen";
        patternMenu.innerHTML = "Strategy &#10003;";
        patternResult.style.color = "darkgreen";
        patternResult.innerHTML = "&#10003;";
        strategySolved = true;
        playTone();
        checkSolved();
    
    } else {
        patternMenu.style.color = "darkred";
        patternMenu.innerHTML = "Strategy";
        patternResult.style.color = "darkred";
        patternResult.innerHTML = "&#10007; Bitte überprüfe deine Eingaben.";
        strategySolved = false;
    }
}

/* Checking the multiple choice test for the observer pattern. */
function checkObserver(pattern) { /* exported checkObserver */
    "use strict";
    var patternForm = document.getElementById(pattern + "Form"),
        patternMenu = document.getElementById(pattern + "Menu"),
        patternResult = document.getElementById(pattern + "Result");
    
    if (!patternForm.observerA1.checked &&
            !patternForm.observerA2.checked &&
            !patternForm.observerA3.checked &&
            patternForm.observerA4.checked &&
            !patternForm.observerB1.checked &&
            !patternForm.observerB2.checked &&
            patternForm.observerB3.checked &&
            !patternForm.observerB4.checked) {
        
        patternMenu.style.color = "darkgreen";
        patternMenu.innerHTML = "Observer &#10003;";
        patternResult.style.color = "darkgreen";
        patternResult.innerHTML = "&#10003;";
        observerSolved = true;
        playTone();
        checkSolved();
    
    } else {
        patternMenu.style.color = "darkred";
        patternMenu.innerHTML = "Observer";
        patternResult.style.color = "darkred";
        patternResult.innerHTML = "&#10007; Bitte überprüfe deine Eingaben.";
        observerSolved = false;
    }
}

function getCertificate() { /* exported getCertificate*/
    "use strict";
    window.open("pictures/pasta.jpg");
}