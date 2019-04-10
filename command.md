---
title: Ristorante BendisPasta
layout: default
---

## Das Command-Pattern <a class="testjump" href="#commandForm">...direkt zum Test...</a>

<p class="note">
    Zur „Kapselung eines Requests als Objekt, um so die Parametrisierung von Clients mit verschiedenen Requests, Warteschlangen- oder Logging-Operationen sowie das Rückgängigmachen von Operationen zu ermöglichen.“ [GoF]
</p>


In letzter Zeit gab es mehrere Beschwerden von Kunden des Ristorante Bendispasta, die etwa versucht haben bei einem Koch ein Getränk zu bestellen. Sie wurden barsch zurückgewiesen mit Aussagen wie „Dafür bin ich nicht zuständig!“ oder „Jetzt nicht!“. Ein Ähnliches verhalten legten auch andere Mitarbeiter an den Tag. Viele Kunden sind verunsichert, an wen Sie sich mit Ihren Bestellwünschen wenden sollen.


#### Was ist zu tun?


Unser Geschäftsführer Jens schlägt vor, die ausführenden Mitarbeiter von den Kunden zu entkoppeln. Jegliche Bestellung soll nur noch über einen Vermittler, den Kellner, abgewickelt werden. Dem Kunde kann egal sein auf welchem Wege sein Gericht zubereitet, sein Getränk einschenkt oder ihm eine <a target="_blank" href="https://www.youtube.com/watch?v=XFj45oeA7bE" >saubere Gabel</a> gebracht wird &mdash; Ansprechpartner soll in allen Fällen der Kellner sein.

#### Die Lösung


An dieser Stelle bedienen wir uns dem Command-Pattern, welches sich in vier Klassen und ein Interface gliedert: Es gibt den Kunden (<em>Client</em>), den Empfänger (<em>Receiver</em>), den Aufrufer (<em>Invoker</em>) und den konkreten Befehl (<em>concrete Command</em>), der ein Interface vom Typ Befehl (<em>Command</em>) implementiert. Dieses Interface, enthält eine einzige Methode <code>ausfuehren()</code> bzw. <code>execute()</code>:


```java
interface Befehl {
    void ausfuehren();
}
```


Der Ablauf in einem Command-Pattern sieht in etwa wie folgt aus: Der Kunde erzeugt zunächst ein konkretes Befehls-Objekt und benennt darin den Empfänger (das Objekt, welches den Befehl am Ende ausführen soll/kann). Der Aufrufer nimmt das Befehls-Objekt entgegen, speichert es und ruft bei Gelegenheit dessen ausfuehren()-Methode auf. Diese wiederum ruft den Empfänger auf, der schließlich den eigentlichen Befehl ausführt. Sehen wir uns einmal an, wie so eine konkrete Befehls-Klasse aussehen könnte. Der Empfänger ist in diesem Fall ein Gericht:


```java
class GerichteBestellung implements Befehl {

    private Gericht gericht;

    public GerichteBestellung (Gericht gericht) {
        this.gericht = gericht;
    }

    void ausfuehren() {
        gericht.zubereiten();
        gericht.servieren();
    }

}
```

Nun werfen wir einen Blick auf die Kellner-Klasse, welche in unserem Beispiel als Aufrufer fungiert. Nachdem der Kunde einen konkreten Befehl erzeugt hat, kann er ihn dem Kellner in der Methode <code>bestellungEntgegennehmen(Befehl befehl)</code> übergeben. Dieser wird dann später alle Befehle ausführen lassen.

```java
class Kellner {

    List&lt;Befehl&gt; bestellung;

    public Kellner () {
        bestellung = new ArrayList&lt;Befehl&gt;();
    }

    void bestellungEntgegennehmen(Befehl befehl) {
        bestellung.add(befehl);
    }

    void bestellungAbschliessen() {
        for(Befehl b : bestellung) {
            b.ausfuehren();
        }
        bestellung.clear();
    }

}
```

<form id="commandForm">
    <h3>Zwischenprüfung</h3>
    <fieldset>
        Was macht das Command-Pattern?
        <ul>
            <li>
                <label>
                    <input type="radio" name="commandA">
                    Es kontrolliert eine größere Anzahl verwandter Klassen
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="commandA">
                    Es überwacht die main-Methode
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="commandA">
                    Es kapselt einen Auftrag in ein Objekt
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="commandA">
                    Es sortiert eine Menge von Befehlen
                </label>
            </li>
        </ul>
    </fieldset>
    <br/>
    <fieldset>
        Wie heißt üblicherweise die Methode, die von einer konkreten Command-Klasse implementiert werden muss?
        <ul>
            <li>
                <label>
                    <input type="radio" name="commandB">
                    <code>command()</code>
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="commandB">
                    <code>transfer()</code>
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="commandB">
                    <code>deploy()</code>
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="commandB">
                    <code>execute()</code>
                </label>
            </li>
        </ul>
    </fieldset>
    <br/>
    <button type="button" onclick="checkCommand()" id="commandButton">Auswerten</button>&nbsp;&nbsp;&nbsp;&nbsp;<center id="commandResult"></center>
</form>
