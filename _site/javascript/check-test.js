
$(document).ready(function() {
  solveAllTests();

  if (localStorage.getItem("adapterSolved") == null) {
    setAllTestsUnsolved();
  } else {
    retrieveSolvedTests();
  }

  ion.sound({
      sounds: [
          {name: "bell_ring"}
      ],
      path: "javascript/ion/sounds/",
      preload: true,
      volume: 0.5
  });

});

function setAllTestsUnsolved() {
  localStorage.setItem("adapterSolved","false");
  localStorage.setItem("commandSolved","false");
  localStorage.setItem("observerSolved","false");
  localStorage.setItem("factorySolved","false");
  localStorage.setItem("strategySolved","false");
  localStorage.setItem("decoratorSolved","false");
}

function retrieveSolvedTests() {
  if (localStorage.getItem("adapterSolved") == "true") {
    solveAdapter();
    styleSolved("adapter", "Adapter");
  }
  if (localStorage.getItem("commandSolved") == "true") {
    solveCommand();
    styleSolved("command", "Command");
  }
  if (localStorage.getItem("observerSolved") == "true") {
    solveObserver();
    styleSolved("observer", "Observer");
  }
  if (localStorage.getItem("factorySolved") == "true") {
    solveFactory();
    styleSolved("factory", "Factory");
  }
  if (localStorage.getItem("strategySolved") == "true") {
    solveStrategy();
    styleSolved("strategy", "Strategy");
  }
  if (localStorage.getItem("decoratorSolved") == "true") {
    solveDecorator();
    styleSolved("decorator", "Decorator");
  }
  checkSolved();

}

function solveAllTests() {

    solveAdapter();
    solveCommand();
    solveObserver();
    solveFactory();
    solveStrategy();
    solveDecorator();

}

function solveAdapter() {
  $("#adapterA").attr("checked",true);

  $("#adapterB").attr("checked",true);

  $("#adapterC1").attr("value", "hasNext()");
  $("#adapterC2").attr("value", "enumeration.hasMoreElements()");
  $("#adapterC3").attr("value", "enumeration.nextElement()");
  $("#adapterC4").attr("value", "remove()");
}

function solveCommand() {
  $("#commandA").attr("checked",true);

  $("#commandB").attr("checked",true);
}

function solveObserver() {
  $("#observerA").attr("checked",true);

  $("#observerB1").attr("checked",false);
  $("#observerB2").attr("checked",false);
  $("#observerB3").attr("checked",true);
  $("#observerB4").attr("checked",true);

  $("#observerC1").attr("value", "extends");
  $("#observerC2").attr("value", "Observable");
  $("#observerC3").attr("value", "!bestellungAbholbereit");
  $("#observerC4").attr("value", "notifyObservers()");
}

function solveFactory() {
  $("#factoryA").attr("checked",true);

  $("#factoryB1").attr("checked",true);
  $("#factoryB2").attr("checked",true);
  $("#factoryB3").attr("checked",true);
  $("#factoryB4").attr("checked",false);

  $("#factoryC1").attr("value", "Gericht");
  $("#factoryC2").attr("value", "erzeugeGericht");
  $("#factoryC3").attr("value", "int");
}

function solveStrategy() {
  $("#strategyA").attr("checked",true);

  $("#strategyC1").attr("value", "AmerikanischeZubereitungsart");
  $("#strategyC2").attr("value", "implements");
  $("#strategyC3").attr("value", "Zubereitungsart");
  $("#strategyC4").attr("value", "void");
  $("#strategyC5").attr("value", "zubereiten");
  $("#strategyC6").attr("value", "String[]");
}

function solveDecorator() {
  $("#decoratorA").attr("checked",true);
}


function checkSolved() {
    if (localStorage.getItem("adapterSolved") == "false") { return; }
    if (localStorage.getItem("commandSolved") == "false") { return; }
    if (localStorage.getItem("factorySolved") == "false") { return; }
    if (localStorage.getItem("decoratorSolved") == "false") { return; }
    if (localStorage.getItem("strategySolved") == "false") { return; }
    if (localStorage.getItem("observerSolved") == "false") { return; }
    $("#certificate").prop("disabled", false);
    setTimeout(function () {
        ion.sound.play("bell_ring");
        document.getElementById("alert").style.display = "block";
    }, 1000);
}

function checkAdapter() {

    if ($("#adapterA").prop("checked") &&
            $("#adapterB").prop("checked") &&
            $("#adapterC1").val() === "hasNext()" &&
            $("#adapterC2").val() === "enumeration.hasMoreElements()" &&
            $("#adapterC3").val() === "enumeration.nextElement()" &&
            $("#adapterC4").val() === "remove()") {

        styleSolved("adapter", "Adapter");
        localStorage.setItem("adapterSolved","true");
        ion.sound.play("bell_ring");
        checkSolved();

    } else {
        styleUnsolved("adapter", "Adapter");
        localStorage.setItem("adapterSolved","false");
    }
}

function checkCommand() {

    if ($("#commandA").prop("checked") &&
            $("#commandB").prop("checked")) {

        styleSolved("command", "Command");
        localStorage.setItem("commandSolved","true");
        ion.sound.play("bell_ring");
        checkSolved();

    } else {
        styleUnsolved("command", "Command");
        localStorage.setItem("commandSolved","false");
    }
}

function checkObserver() {

    if ($("#observerA").prop("checked") &&
            !$("#observerB1").prop("checked") &&
            !$("#observerB2").prop("checked") &&
            $("#observerB3").prop("checked") &&
            $("#observerB4").prop("checked") &&
            $("#observerC1").val() === "extends" &&
            $("#observerC2").val() === "Observable" &&
            $("#observerC3").val() === "!bestellungAbholbereit" &&
            $("#observerC4").val() === "notifyObservers()") {

        styleSolved("observer", "Observer");
        localStorage.setItem("observerSolved","true");
        ion.sound.play("bell_ring");
        checkSolved();

    } else {
        styleUnsolved("observer", "Observer");
        localStorage.setItem("observerSolved","false");
    }
}

function checkFactory() {

    if ($("#factoryA").prop("checked") &&
            $("#factoryB1").prop("checked") &&
            $("#factoryB2").prop("checked") &&
            $("#factoryB3").prop("checked") &&
            !$("#factoryB4").prop("checked") &&
            $("#factoryC1").val() === "Gericht" &&
            $("#factoryC2").val() === "erzeugeGericht" &&
            $("#factoryC3").val() === "int") {

        styleSolved("factory", "Factory");
        localStorage.setItem("factorySolved","true");
        ion.sound.play("bell_ring");
        checkSolved();

    } else {
        styleUnsolved("factory", "Factory");
        localStorage.setItem("factorySolved","false");
    }
}

function checkStrategy() {

    if ($("#strategyA").prop("checked") &&
            $("#strategyC1").val() === "AmerikanischeZubereitungsart" &&
            $("#strategyC2").val() === "implements" &&
            $("#strategyC3").val() === "Zubereitungsart" &&
            $("#strategyC4").val() === "void" &&
            $("#strategyC5").val() === "zubereiten" &&
            $("#strategyC6").val() === "String[]") {

        styleSolved("strategy", "Strategy");
        localStorage.setItem("strategySolved","true");
        ion.sound.play("bell_ring");
        checkSolved();

    } else {
        styleUnsolved("strategy", "Strategy");
        localStorage.setItem("strategySolved","false");
    }
}

function checkDecorator() {

    if ($("#decoratorA").prop("checked")) {

        styleSolved("decorator", "Decorator");
        localStorage.setItem("decoratorSolved","true");
        ion.sound.play("bell_ring");
        checkSolved();

    } else {
        styleUnsolved("decorator", "Decorator");
        localStorage.setItem("decoratorSolved","false");
    }
}

function styleSolved(pattern, menuPattern) {
  $("#" + pattern + "Menu").css('color','darkgreen');
  $("#" + pattern + "Menu").html(menuPattern + " &#10003;");
  $("#" + pattern + "Result").html("");
  $("#" + pattern + "Button").css('background','darkgreen');
}

function styleUnsolved(pattern, menuPattern) {
  $("#" + pattern + "Menu").css('color','darkred');
  $("#" + pattern + "Menu").html(menuPattern + "");
  $("#" + pattern + "Result").html("&#10007; Bitte überprüfe deine Eingaben.");
  $("#" + pattern + "Button").css('background','darkred');
}

function getCertificate() {
    "use strict";
    window.open("data/pictures/pasta.jpg");
}
