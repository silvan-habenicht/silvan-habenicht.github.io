/*eslint-env browser*/

/* off canvas menu script */
var opened = false;

$( document ).ready(function() {

  /*global hljs*/
  /* call function for syntax highlighting from highlight.pack.js*/
  hljs.initHighlightingOnLoad();

  if(home) {
    enterHome();
  } else if (window.innerWidth > 1040){
    openMenuWithoutTransition();
  }
});

/* exported openCloseMenu to index.html*/
function openCloseMenu() {
    "use strict";
    if (!opened) {
        opened = true;
    } else {
        opened = false;
        document.getElementById("patternMenu").style.width = "0";
    }
    window.onresize();
}

/* exported conditionCloseMenu to index.html*/
function conditionCloseMenu() {
    "use strict";
    if (window.innerWidth < 1040) {
        openCloseMenu();
    }
}

function enterHome() {
    if (window.innerWidth > 1040) {
        document.getElementById("main").style.marginLeft = (window.innerWidth - 800) / 2 + "px";
        setTimeout(function () {
            "use strict";
            openCloseMenu();
        }, 1000);
    }
}

function openMenuWithoutTransition() {
  document.getElementById("main").style.marginLeft = (window.innerWidth - 800) / 2 + "px";
  opened = true;
  document.getElementById("patternMenu").classList.add('notransition'); // Disable transitions
  window.onresize();
  document.getElementById("patternMenu").offsetHeight; // Trigger a reflow, flushing the CSS changes
  document.getElementById("patternMenu").classList.remove('notransition'); // Re-enable transitions
}

window.onresize = function (event) { // eslint-disable-line no-unused-vars
    "use strict";

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
