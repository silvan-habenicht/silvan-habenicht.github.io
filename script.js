/*eslint-env browser*/

/* off canvas menu script */
var opened = 0;

/* exported openCloseMenu to index.html*/
function openCloseMenu() {
    "use strict";
    if (!opened) {
        opened = 1;
        document.getElementById("patternMenu").style.width = "240px";
        if (window.innerWidth >= 1280) {
            document.getElementById("patternMenu").style.width = (window.innerWidth - 802) / 2 + "px";
        } else if (window.innerWidth > 600) {
            document.getElementById("main").style.marginLeft = "240px";
        }
    } else {
        opened = 0;
        document.getElementById("patternMenu").style.width = "0";
        document.getElementById("main").style.marginLeft = "auto";
    }
}

/*global hljs*/
/* call function for syntax highlighting from highlight.pack.js*/
hljs.initHighlightingOnLoad();

if (window.innerWidth > 600) {
    if (window.innerWidth < 1280) {
        document.getElementById("main").style.marginLeft = "240px";
    }
    setTimeout(function () {
        "use strict";
        openCloseMenu();
    }, 500);
}

window.onresize = function (event) {
    "use strict";
    
    if (opened) {
        if (window.innerWidth < 800) {
            document.getElementById("main").style.padding = "2em 1em 2em 1em";
        } else {
            document.getElementById("main").style.padding = "2em 4em 4em";
            if (window.innerWidth >= 1280) {
                document.getElementById("main").style.marginLeft = "auto";
                document.getElementById("patternMenu").style.width = (window.innerWidth - 802) / 2 + "px";
            } else if (window.innerWidth > 600) {
                document.getElementById("main").style.marginLeft = "240px";
            }
        }
    } else {
        if (window.innerWidth < 600) {
            document.getElementById("main").style.padding = "2em 1em 2em 4em";
        } else {
            document.getElementById("main").style.padding = "2em 4em 4em";
        }
    }
};

/* exported checkCommand to index.html*/
function checkCommand() {
    "use strict";
    var commandForm = document.getElementById("commandForm"),
        commandMenu = document.getElementById("commandMenu"),
        commandResult = document.getElementById("commandResult");
    
    if (!commandForm.commandA1.checked &&
            !commandForm.commandA2.checked &&
            commandForm.commandA3.checked &&
            !commandForm.commandA4.checked &&
            !commandForm.commandB1.checked &&
            !commandForm.commandB2.checked &&
            !commandForm.commandB3.checked &&
            commandForm.commandB4.checked) {
        
        commandMenu.style.color = "rgba(0,140,69,1)";
        commandMenu.innerHTML = "Command &#10003;";
        commandResult.style.color = "rgba(0,140,69,1)";
        commandResult.innerHTML = "&#10003;";
    
    } else {
        commandMenu.style.color = "darkred";
        commandMenu.innerHTML = "Command";
        commandResult.style.color = "darkred";
        commandResult.innerHTML = "&#10007; Bitte überprüfe deine Eingaben.";
    }
}