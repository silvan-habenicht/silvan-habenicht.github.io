---
title: BendisPasta
layout: default
---

## Das Decorator-Pattern <a class="testjump" href="#decoratorForm">...direkt zum Test...</a>

<p class="note">
    Zur „dynamische[n] Erweiterung der Funktionalität eines Objekts. Decorator-Objekte stellen hinsichtlich der Ergänzung einer Klasse um weitere Zuständigkeiten eine flexible Alternative zur Unterklassenbildung dar.“ [GoF]
</p>

Als nächstes möchten wir den Kunden von _BendisPasta_ die Möglichkeit bieten, ihren Gerichten  eine Garnitur hinzuzufügen. So soll es für alle Pizzen die Option geben, sie u. A. mit Knoblauch, Oregano oder scharfer Sauce serviert zu bekommen. Hier sehen wir einen ersten Vorschlag, diesem Wunsch zu entsprechen &mdash; durch Bildung weiterer Unterklassen:

```java
public class PizzaMargheritaMitKnoblauch extends PizzaMargherita {...}

public class PizzaMargheritaMitOregano extends PizzaMargherita {...}

public class PizzaMargheritaMitScharferSauce extends PizzaMargherita {...}

public class PizzaMargheritaMitOreganoUndKnoblauch extends PizzaMargherita {...}

public class PizzaMargheritaMitKnoblauchUndScharferSauce extends PizzaMargherita {...}

public class PizzaMargheritaMitOreganoUndScharferSauce extends PizzaMargherita {...}

public class PizzaMargheritaMitKnoblauchUndOreganoUndScharferSauce extends PizzaMargherita {...}

```

Es ist wohl recht offensichtlich, dass das nicht der richtige Weg sein kann. Mit jeder zusätzlichen Garnitur im Angebot würde sich die Menge an Unterklassen verdoppeln. Zudem müsste für jedes konkrte Gericht eine eigene Menge solcher Unterklassen erstellt werden. Früher oder später würde das in einem einzigen Chaos enden.

#### Was ist zu tun?

Wir suchen eine einfache und saubere Möglichkeit, unseren konkreten Gerichten optionale Eigenschaften hinzuzufügen. Weitere Unterklassen dieser Gerichte sind, wie wir gesehen haben, für uns keine Option. Besser wäre es, für jede Garnitur eine eigene Klasse vom Typ ``Garnitur`` zu bilden und diese den Gerichten irgendwie als optionale Eigenschaft beizufügen. Der intuitive Ansatz bestünde wohl darin, die Gerichte-Klasse um neue Instanzvariablen zu ergänzen, in denen die verschiedenen Garnituren hinterlegt werden können. Doch mit dem Decorator-Pattern haben wir ein Muster zur Hand, dass unser Problem auf bewährte Art und Weise, doch etwas anders angeht.

#### Die Lösung

Dreh- und Angelpunkt unseres neuen Patterns ist eine abstrakte Decorator-Klasse, die wir in unserem Fall Garnitur nennen. Dazu hier ein Beispiel, wie wir das Decorator-Pattern zum Würzen unserer Pizzen nutzen können:

```java
public abstract class PizzaGarnitur extends Pizza {

    private Pizza pizza;

    public PizzaGarnitur(Pizza pizza){
        this.pizza = pizza;
    }

    @Override
    public void servieren() {
        pizza.servieren();
    }

    public double preis() {
        return pizza.preis() + this.preis;
    }

}
```

Unsere neue Klasse ``PizzaGarnitur`` erweitert die abstrakte Klasse ``Pizza`` &mdash; sie ist damit sozusagen selbst eine Pizza. Der Konstruktor erwartet allerdings im Übergabeparameter die „echte“ Pizza, welche dann in der Instanzvariable ``pizza`` gesichert wird. Für jede Methode, die eine Klasse vom Typ ``Pizza`` bereitstellen muss, ruft die Klasse vom Typ ``GerichteGarnitur`` die entsprechende Methode per Zugriff auf das gespeicherte Pizza-Objekt auf. Im Fall von Knoblauch sieht das dann in etwa so aus:

```java
public class Knoblauch extends PizzaGarnitur {

    public Knoblauch(Pizza pizza) {
        super(pizza);
        this.preis = 0.5;
    }

    @Override
    public void zubereiten() {
        super.zubereiten();
        ... // mit Knoblauch garnieren
    }

}
```

Wenn wir nun eine Pizza Margherita mit Knoblauch erzeugen möchten, so geschieht dies einfach durch die Anweisung ``Pizza meinePizza = new Knoblauch(new PizzaMargherita)``. Möchten wir außerdem Oregano dazu, so wäre folgende Anweisung ebenfalls möglich: ``meinePizza = new Oregano(meinePizza)``. Für Restaurantgäste ohne Begleitung bestünde sogar die Option eine Pizza mit doppelt Knoblauch zu bekommen: ``meinePizza = new Knoblauch(new Knoblauch(new PizzaMargherita))``.



<form id="decoratorForm">
    <h3>Multiple Choice-Test</h3>
    <fieldset>
        Worin besteht die wesentliche Aufgabe eines Decorators?
        <ul>
            <li>
                <label>
                    <input type="radio" id="decoratorA" name="decoratorA">
                    Erweitern eines Objektes
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="decoratorA">
                    Verschönern der Klassenstruktur
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="decoratorA">
                    Sammeln von Funktionen ohne Rückgabewert
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="decoratorA">
                    Verbesserung der Fabrikmethode
                </label>
            </li>
        </ul>
    </fieldset>
    <br/>
    <button type="button" onclick="checkDecorator()" id="decoratorButton">Auswerten</button>&nbsp;&nbsp;&nbsp;&nbsp;<center id="decoratorResult"></center>
</form>
