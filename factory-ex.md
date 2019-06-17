---
title: BendisPasta
layout: default
---

<h2>Das Factory Method-Pattern <a class="testjump" href="#factoryForm">...direkt zum Test...</a></h2>

<p class="note">
    Zur „Definition einer Schnittstelle zur Objekterzeugung, wobei die Bestimmung der zu instanziierenden Klasse den Unterklassen überlassen bleibt. Das Design Pattern Factory Method (Fabrikmethode) gestattet einer Klasse, die Instanziierung an Unterklassen zu delegieren.“ [GoF]
</p>

Bislang war es so, dass der Kunde zunächst wissen musste, wie er ein bestimmtes Gericht erzeugt, ehe er dieses in Form einer <code>GerichteBestellung</code> in Auftrag geben konnte. Eigentlich ist das nicht die Aufgabe des Kunden und sollte ein Geheimnis der Küche bleiben. Der Kunde hat eine Menükarte, in dem die einzelnen Gerichte mit Nummern versehen aufgelistet sind. Wir möchten daher unsere Befehls-Klassen dahingehend ändern, dass die Zuständigkeit der Gericht-Instanziierung nicht mehr beim Kunden liegt.

#### Was ist zu tun?

Anstelle konkreter Menü-Objekte, wollen wir den Befehlsklassen in Zukunft die entsprechenden Nummern aus der Karte übergeben. Die neue <code>GerichteBestellung</code>-Klasse könnte in etwa so aussehen:


```java
public class GerichteBestellung implements Befehl {

  private Gericht gericht;

  public GerichteBestellung(int gerichtID) {

    switch(gerichtID) {

      case 1:
        gericht = new InsalataMista();
        break;
      case 2:
        gericht = new InsalataCapricciosa();
        break;

      ...

      case 35:
        gericht = new PizzaMargherita();
        break;
      case 36:
        gericht = new PizzaCipolla();
        break;
      case 37:
        gericht = new PizzaCalzone();
        break;

      ...

      case 68:
        gericht = new PenneAllArrabiata();
        break;

      ...

  }

  public void ausführen() {
    gericht.zubereiten();
    gericht.servieren();
  }

}
```

Wie du vielleicht schon erkannt hast, ist diese Art der Implementierung eher nicht zu empfehlen. Sie macht Änderungen der Menükarte enorm umständlich und sie bürdet der Befehlsklasse eine Rolle auf, für die sie eigentlich nicht gedacht ist. Besser wäre es, die Instanziierung der einzelnen Gerichte in eine eigens dafür geschaffene Klasse auszulagern.

#### Die Lösung

Das Factory Method-Pattern empfiehlt uns genau das. Wir erstellen eine neue Klasse <code>GerichteFabrik</code>, die eine Methode zur Erzeugung von Gerichten bereitstellt: <code>erzeugeGericht()</code>. Wie genau diese Methode implementiert wird, interessiert uns dabei erstmal nicht. Dies kann wie im vorigen Beispiel anhand einer Menge von if- bzw. case-Abfragen geschehen, mithilfe einer inneren bzw. globalen Speisekarten-Klasse oder auf der Grundlage sonstiger geeigneter Datenstrukturen. Entscheidend ist, dass wir unsere Klassenstruktur allein durch die Auslagerung schon erheblich verbessert haben. Änderungen der Speisekarte müssen jetzt nur noch in die zentrale Gerichte-Fabrik übertragen werden, um alle Klassen, die die Fabrik nutzen, auf einen Schlag zu aktualisieren. Zudem kann die Gerichtefabrik im Bedarfsfall auch zur Laufzeit ausgetauscht werden.

#### Neuer Code
```java
public class GerichteBestellung implements Befehl {

    private Gericht gericht;
    private GerichteFabrik fabrik;

    public GerichteBestellung(int gerichtID) {
        fabrik = new GerichteFabrikImpl();
        gericht = fabrik.erzeugeGericht(gerichtID);
    }

    public void ausfuehren() {
        gericht.zubereiten();
        gericht.servieren();
    }

    public void setFabrik(GerichteFabrik fabrik) {
        this.fabrik = fabrik;
    }

}
```


<form id="factoryForm">
    <h3>Zwischenprüfung</h3>
    <fieldset>
        Was ist die wesentliche Aufgabe der Fabrikmethode?
        <ul>
            <li>
                <label>
                    <input type="radio" name="factoryA">
                    Erstellen von Objekt-Kopien
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" id="factoryA" name="factoryA">
                    Instanziieren von Objekten
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="factoryA">
                    Einer Variable Initialwerte zuweisen
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="factoryA">
                    Überschreiben eines Konstruktors
                </label>
            </li>
        </ul>
    </fieldset>
    <br/>
    <fieldset>
        Welche Aussagen treffen auf das Factory Method-Muster zu?
        <ul>
            <li>
                <label>
                    <input type="checkbox" id="factoryB1">
                    Es fördert die Kapselung
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox" id="factoryB2">
                    Die Erzeugung von Objekten wird ausgelagert
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox" id="factoryB3">
                    Durch die zusätzliche Factory-Klasse erhöht sich die Gesamtanzahl an Klassen in einem Projekt
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox" id="factoryB4">
                    Eine Factory-Klasse kann keine weiteren Unterklassen haben
                </label>
            </li>
        </ul>
    </fieldset>
    <br/>
    <fieldset>
        Ergänze das untenstehende Gerüst für unsere GerichteFabrik.
    </fieldset>
    <pre><div class="code"><code>
public class GerichteFabrik {

  public GerichteFabrik() {}

  // Fabrikmethode
  <input type="text" id="factoryC1" style="width: 7ch;"> <input type="text" id="factoryC2" style="width: 14ch;color: rgb(44,0,159);font-weight: bold;">(<input type="text" id="factoryC3" style="width: 3ch;color: rgb(0,85,153);font-weight: bold;"> gerichtID) { // Rückgabetyp, Methodennamen und Parametertyp eintragen
  ... // beliebige Implementierung (nichts zu ergänzen)
  }

}
    </code></div></pre>
    <button type="button" onclick="checkFactory()" id="factoryButton">Auswerten</button>&nbsp;&nbsp;&nbsp;&nbsp;<center id="factoryResult"></center>
</form>
