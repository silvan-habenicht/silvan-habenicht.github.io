---
title: Ristorante BendisPasta
layout: default
---

## Das Strategy-Pattern <a class="testjump" href="#strategyForm">...direkt zum Test...</a>

<p class="note">
    Zur „Definition einer Familie von einzeln gekapselten, austauschbaren Algorithmen. Das Design Pattern Strategy (Strategie) ermöglicht eine variable und von den Clients unabhängige Nutzung des Algorithmus.“ [GoF]
</p>

Die Pizzeria _BendisPasta_ legt viel Wert auf ein vielseitiges und abwechslungsreiches Angebot. Aus diesem Grund müssen die Gerichte der Karte je nach Saison und Koch auf unterschiedliche Weise zubereitet werden. So soll auch die Pizza nicht nur nach klassisch italienischer Rezeptur, sondern auch auf amerikanischer Art gebacken werden können. Zudem will man sich offen halten, noch weitere Rezepturen und Variationen anbieten und bestehende Rezepte jederzeit ändern zu können.

#### Was ist zu tun?

Derzeit ist die Methode ``zubereiten()`` in den konkreten Gerichte-Klassen der einzige Ort, an dem die einzelnen Schritte einer Rezeptur spezifiziert, d. h. implementiert sind. Wenn wir also eine Pizza Margherita nicht auf italienische, sondern auf amerikanische Art zubereiten wollen, so müssten wir dazu die gesamte Methode ``zubereiten()`` in der Klasse ``PizzaMargherita`` überschreiben. Wir sind nun auf der Suche nach einer Möglichkeit, um den darin enthaltenen Code flexibel austauschen zu können.

Die Lösung

Hier kommt uns das Strategy-Pattern wie gerufen. Dieses empfiehlt uns, die unterschiedlichen Zubereitungsarten in eigene Klassen zu kapseln und die gewünschte Zubereitungsart in einer Instanzvariable unseres Gerichtes zu speichern. Der Algorithmus zum Zubereiten der Pizza ist dann nicht mehr in der Pizza-Klasse selbst implementiert, stattdessen wird er über den Zugriff auf die darin gespeicherte Zubereitungsart aufgerufen. Wir erstellen also zunächst ein neues Interface, welches wir ``Zubereitungsart`` nennen:


```java
interface Zubereitungsart {

  void zubereiten(String[] zutaten);

}
```

Eine konkrete Zubereitungsart wäre z. B. ``ItalienischeZubereitungsart``:

```java
class ItalienischeZubereitungsart implements Zubereitungsart {

  void zubereiten(String[] zutaten) {
    ... // Pizza mit den gegebenen Zutaten auf italienische Art zubereiten
  }

}
```

Unser neues Interface hat eine einzige Methode, für die es geschaffen wurde: ``zubereiten(String[] zutaten)``. In unserer abstrakten Pizza-Klasse fügen wir nun die neue Instanzvariable ``zubereitungsart`` hinzu und ergänzen die Möglichkeit die gewünschte Zubereitungsart schon im Konstruktor zu spezifizieren:

```java
abstract class Pizza implements Gericht {

  private String[] zutaten;
  private Zubereitungsart zubereitungsart;

  public Pizza() {}

  public Pizza(Zubereitungsart zubereitungsart) {
    this.zubereitungsart = zubereitungsart;
  }

  abstract void zubereiten();

}
```

So könnte dann eine konkrete Klasse vom Typ Pizza aussehen:

```java
class PizzaMargherita extends Pizza {

  public PizzaMargherita() {
    this.zubereitungsart = new ItalienischeZubereitungsart(); // Standard-Zubereitungsart
    zutaten = {"Tomatensauce", "Mozarella"};
  }

  public PizzaMargherita(Zubereitungsart zubereitungsart) {
    this.zubereitungsart = zubereitungsart;
    zutaten = {"Tomatensauce", "Mozarella"};
  }

  void zubereiten() {
    zubereitungsart.zubereiten(zutaten);
  }

}
```

Nun können wir Pizzen flexibel mit unterschiedlichen Zubereitungsarten erzeugen. Mithilfe einer Setter-methode &mdash; ``setZubereitungsart()`` &mdash; könnten wir die Zubereitungsart sogar zur Laufzeit ändern. Wird eine Zubereitungsart bearbeitet, so werden die Änderungen von allen Gerichteklassen, die diese Zubereitungsart verwenden, automatisch übernommen. Wie du siehst, bietet das Strategy-Pattern eine ganze Reihe von Vorteilen.

<form id="strategyForm">
    <h3>Multiple Choice-Test</h3>
    <fieldset>
        Was ist die wesentliche Motivation des Strategy-Ansatzes?
        <ul>
            <li>
                <label>
                    <input type="radio" name="strategyA">
                    Einen konkreten Algorithmus möglichst effizient gestalten
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="strategyA">
                    Die Menge an Klassenvariablen minimieren
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="strategyA">
                    Den vorrangigen Zweck eines Projektes stets im Auge behalten
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" id="strategyA" name="strategyA">
                    Algorithmen bzw. Methoden einer Klasse leichter austauschbar halten
                </label>
            </li>
        </ul>
    </fieldset>
    <br/>
    <fieldset>
        Ergänze das Gerüst für eine neue Zubereitungsart <code>AmerikanischeZubereitungsart</code>
    </fieldset>
    <pre><div class="code"><code>
class <input type="text" id="strategyC1" style="width: 28ch;font-weight: bold; color: rgb(44,0,159);"> <input type="text" id="strategyC2" style="width: 10ch;font-weight: bold; color: rgb(0,85,153);"> <input type="text" id="strategyC3" style="width: 15ch;font-weight: bold; color: rgb(44,0,159);"> {

<input type="text" id="strategyC4" style="width: 4ch;font-weight: bold; color: rgb(0,85,153);"> <input type="text" id="strategyC5" style="width: 10ch;color: rgb(44,0,159);font-weight: bold;">(<input type="text" id="strategyC6" style="width: 8ch;"> zutaten) { // Rückgabetyp, Methodennamen und Parametertyp eintragen
... // Pizza mit den gegebenen Zutaten auf amerikanische Art zubereiten
}

}
    </code></div></pre>
    <button type="button" onclick="checkStrategy()" id="strategyButton">Auswerten</button>&nbsp;&nbsp;&nbsp;&nbsp;<center id="strategyResult"></center>
</form>
