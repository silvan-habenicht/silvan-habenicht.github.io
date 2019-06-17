
var opened = false;

hljs.initHighlightingOnLoad();

$( document ).ready(function() {

  if(home) {
    enterHome();
  } else if (window.innerWidth > 1040){
    openMenuWithoutTransition();
  }
});

function enterHome() {
    if (window.innerWidth > 1040) {
        document.getElementById("main").style.marginLeft = (window.innerWidth - 800) / 2 + "px";
        setTimeout(function () {
            "use strict";
            toggleMenu();
        }, 1000);
    }
}

function toggleMenu() {
    "use strict";
    if (!opened) {
        opened = true;
    } else {
        opened = false;
        document.getElementById("patternMenu").style.width = "0";
    }
    window.onresize();
}

function openMenuWithoutTransition() {
  document.getElementById("main").style.marginLeft = (window.innerWidth - 800) / 2 + "px";
  opened = true;
  document.getElementById("patternMenu").classList.add('notransition'); // Disable transitions
  window.onresize();
  document.getElementById("patternMenu").offsetHeight; // Trigger a reflow, flushing the CSS changes
  document.getElementById("patternMenu").classList.remove('notransition'); // Re-enable transitions
}

function conditionCloseMenu() {
    "use strict";
    if (window.innerWidth < 1040) {
        toggleMenu();
    }
}

function getCertificate() {
    window.open("data/pictures/pasta.jpg");
}

function openLibrary() {
    window.open("library.html");
}

window.onresize = function (event) {

    if (opened) {
        if (window.innerWidth < 560) {
            document.getElementById("main").style.marginLeft = "0%";
            document.getElementById("patternMenu").style.width = "240px";
            document.getElementById("main").style.padding = "2em 1em 2em 4em";
        } else if (window.innerWidth < 800) {
            document.getElementById("main").style.marginLeft = "240px";
            document.getElementById("patternMenu").style.width = "240px";
            document.getElementById("main").style.padding = "2em 1em 2em 1em";
        } else if (window.innerWidth < 1280) {
            document.getElementById("main").style.marginLeft = "240px";
            document.getElementById("patternMenu").style.width = "240px";
            document.getElementById("main").style.padding = "2em 4em 4em";
        } else {
            document.getElementById("main").style.marginLeft = (window.innerWidth - 800) / 2 + "px";
            document.getElementById("patternMenu").style.width = (window.innerWidth - 800) / 2 + "px";
            document.getElementById("main").style.padding = "2em 4em 4em";
        }
    } else {
        if (window.innerWidth < 560) {
            document.getElementById("main").style.marginLeft = "0%";
            document.getElementById("main").style.padding = "2em 1em 2em 4em";
        } else if (window.innerWidth < 800) {
            document.getElementById("main").style.marginLeft = "0%";
            document.getElementById("main").style.padding = "2em 4em 4em";
        } else {
            document.getElementById("main").style.marginLeft = (window.innerWidth - 800) / 2 + "px";
            document.getElementById("main").style.padding = "2em 4em 4em";
        }
    }
}; 
