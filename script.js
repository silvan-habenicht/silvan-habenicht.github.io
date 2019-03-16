/*eslint-env browser*/

/* off canvas menu script */
var opened = 0;

/* exported openCloseMenu to index.html*/
function openCloseMenu() {
    "use strict";
    if (!opened) {
        opened = 1;
        document.getElementById("patternMenu").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    } else {
        opened = 0;
        document.getElementById("patternMenu").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
}

/*global hljs*/
/* call function for syntax highlighting from highlight.pack.js*/
hljs.initHighlightingOnLoad();