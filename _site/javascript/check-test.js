
$(document).ready(function() {
  // Uncomment to initially checkmark all correct choices:
  // solveAllTests();

  if (localStorage.getItem("adapterSolved") == null) {
    setAllTestsUnsolved();
  } else {
    retrieveSolvedTests();
  }

  ion.sound({
      sounds: [
          {name: "tinder-message"},
          {name: "tinder-match"}
      ],
      path: "data/audio/",
      preload: true,
      volume: 0.2
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
  // Enable download of certificate if all exercises are solved
  if (allPatternsSolved()) {
    $("#certificate").prop("disabled", false);
  }
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
  // Solve exercise 1
  $("#adapterA").attr("checked",true);

  // Solve exercise 2
  $("#adapterB").attr("checked",true);

  // Solve exercise 3
  $("#adapterC1").attr("value", "hasNext()");
  $("#adapterC2").attr("value", "enumeration.hasMoreElements()");
  $("#adapterC3").attr("value", "enumeration.nextElement()");
  $("#adapterC4").attr("value", "remove()");
}

function solveCommand() {
  // Solve exercise 1
  $("#commandA").attr("checked",true);

  // Solve exercise 2
  $("#commandB").attr("checked",true);

  // Solve exercise 3
  $("#commandC").attr("checked",true);
}

function solveObserver() {
  // Solve exercise 1
  $("#observerA").attr("checked",true);

  // Solve exercise 2
  $("#observerB1").attr("checked",false);
  $("#observerB2").attr("checked",false);
  $("#observerB3").attr("checked",true);
  $("#observerB4").attr("checked",true);

  // Solve exercise 3
  $("#observerC1").attr("value", "extends");
  $("#observerC2").attr("value", "Observable");
  $("#observerC3").attr("value", "!bestellungAbholbereit");
  $("#observerC4").attr("value", "notifyObservers()");
}

function solveFactory() {
  // Solve exercise 1
  $("#factoryA").attr("checked",true);

  // Solve exercise 2
  $("#factoryB1").attr("checked",true);
  $("#factoryB2").attr("checked",true);
  $("#factoryB3").attr("checked",true);
  $("#factoryB4").attr("checked",false);

  // Solve exercise 3
  $("#factoryC1").attr("value", "Gericht");
  $("#factoryC2").attr("value", "erzeugeGericht");
  $("#factoryC3").attr("value", "int");
}

function solveStrategy() {
  // Solve exercise 1
  $("#strategyA").attr("checked",true);

  // Solve exercise 2
  $("#strategyB").attr("checked",true);

  // Solve exercise 3
  $("#strategyC1").attr("value", "AmerikanischeZubereitungsart");
  $("#strategyC2").attr("value", "implements");
  $("#strategyC3").attr("value", "Zubereitungsart");
  $("#strategyC4").attr("value", "void");
  $("#strategyC5").attr("value", "zubereiten");
  $("#strategyC6").attr("value", "String[]");
}

function solveDecorator() {
  // Solve exercise 1
  $("#decoratorA").attr("checked",true);

  // Solve exercise 2
  $("#decoratorB").attr("checked",true);
}

// Check whether all exercises have been solved and if so, show a message
function checkSolved() {
  if (allPatternsSolved()) {
    $("#certificate").prop("disabled", false);
    setTimeout(function () {
        ion.sound.play("tinder-match");
        document.getElementById("alert").style.display = "block";
    }, 1000);
  }
}

// Returns true iff all exercises have been solved correctly
function allPatternsSolved() {
  if (localStorage.getItem("adapterSolved") == "false") { return false; }
  if (localStorage.getItem("commandSolved") == "false") { return false; }
  if (localStorage.getItem("factorySolved") == "false") { return false; }
  if (localStorage.getItem("decoratorSolved") == "false") { return false; }
  if (localStorage.getItem("strategySolved") == "false") { return false; }
  if (localStorage.getItem("observerSolved") == "false") { return false; }
  return true;
}

// Each of the "check" function is called when pressing the corresponding
// "Auswerten"-HTML-Buttons

function checkAdapter() {

    if ($("#adapterA").prop("checked") &&
            $("#adapterB").prop("checked") &&
            $("#adapterC1").val() === "hasNext()" &&
            $("#adapterC2").val() === "enumeration.hasMoreElements()" &&
            $("#adapterC3").val() === "enumeration.nextElement()" &&
            $("#adapterC4").val() === "remove()") {

        styleSolved("adapter", "Adapter");
        localStorage.setItem("adapterSolved","true");
        ion.sound.play("tinder-message");
        checkSolved();

    } else {
        styleUnsolved("adapter", "Adapter");
        localStorage.setItem("adapterSolved","false");
    }
}

function checkCommand() {

    if ($("#commandA").prop("checked") &&
            $("#commandB").prop("checked") &&
            $("#commandC").prop("checked")) {

        styleSolved("command", "Command");
        localStorage.setItem("commandSolved","true");
        ion.sound.play("tinder-message");
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
        ion.sound.play("tinder-message");
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
        ion.sound.play("tinder-message");
        checkSolved();

    } else {
        styleUnsolved("factory", "Factory");
        localStorage.setItem("factorySolved","false");
    }
}

function checkStrategy() {

    if ($("#strategyA").prop("checked") &&
            $("#strategyB").prop("checked") &&
            $("#strategyC1").val() === "AmerikanischeZubereitungsart" &&
            $("#strategyC2").val() === "implements" &&
            $("#strategyC3").val() === "Zubereitungsart" &&
            $("#strategyC4").val() === "void" &&
            $("#strategyC5").val() === "zubereiten" &&
            $("#strategyC6").val() === "String[]") {

        styleSolved("strategy", "Strategy");
        localStorage.setItem("strategySolved","true");
        ion.sound.play("tinder-message");
        checkSolved();

    } else {
        styleUnsolved("strategy", "Strategy");
        localStorage.setItem("strategySolved","false");
    }
}

function checkDecorator() {

    if ($("#decoratorA").prop("checked") &&
          $("#decoratorB").prop("checked")) {

        styleSolved("decorator", "Decorator");
        localStorage.setItem("decoratorSolved","true");
        ion.sound.play("tinder-message");
        checkSolved();

    } else {
        styleUnsolved("decorator", "Decorator");
        localStorage.setItem("decoratorSolved","false");
    }
}

function styleSolved(pattern, nameInMenu) {
  $("#" + pattern + "Menu").css('color','darkgreen');
  $("#" + pattern + "Menu").html(nameInMenu + " &#10003;");
  $("#" + pattern + "Result").html("");
  $("#" + pattern + "Next").css('display', 'block');
  $("#" + pattern + "Button").css('background','darkgreen');
}

function styleUnsolved(pattern, nameInMenu) {
  $("#" + pattern + "Menu").css('color','darkred');
  $("#" + pattern + "Menu").html(nameInMenu + "");
  $("#" + pattern + "Result").html("&#10007; Bitte überprüfe deine Eingaben.");
  $("#" + pattern + "Next").css('display', 'none');
  $("#" + pattern + "Button").css('background','darkred');
}
