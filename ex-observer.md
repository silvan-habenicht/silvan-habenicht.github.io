---
title: BendisPasta
layout: default
---

## Das Observer-Pattern <a class="testjump" href="#observerForm">...direkt zum Test...</a>

<p class="note">
    Definition einer 1-zu-n-Abhängigkeit zwischen Objekten, damit im Fall einer Zustandsänderung eines Objekts alle davon abhängigen Objekte entsprechend benachrichtigt und automatisch aktualisiert werden.
</p>

Werfen wir einen Blick in den Arbeitsalltag eines Kellners im _Ristorante BendisPasta_:


* Eine Gruppe von neuen Gästen betritt das Restaurant.
* Der Kellner bringt die Menükarten und fragt, was er den Gästen zu trinken bringen kann.
* Die Gäste sagen, sie müssen noch überlegen.
* Die Gäste haben sich entschieden und _warten_ auf den Kellner.
* Der Kellner kommt _irgendwann_ wieder und nimmt eine Getränkebestellung entgegen.
* Der Kellner übermittelt die Bestellung an den Barkeeper.
* Der Kellner _wartet_, bis der Barkeeper die Getränke _irgendwann_ eingeschenkt hat.
* Der Kellner serviert die Getränke und fragt, was die Gäste essen möchten.
* Die Gäste bitten um etwas Bedenkzeit.
* Die Gäste _warten_ auf den Kellner.
* _Irgendwann_ kommt der Kellner wieder und nimmt die Bestellung auf.
* Die Bestellung wird an die Küche weitergeleitet.
* _Irgendwann_ geht der Kellner zurück zum Tisch, um Wein nachzuschenken.
* Die Gläser sind jedoch noch voll.
* Der Kellner erkundigt sich _irgendwann_ in der Küche, ob schon ein Gericht servierbereit ist.
* Der Koch schickt ihn weg. Der Kellner _wartet_.
* Inzwischen ist die Bestellung zubereitet.
* Der Kellner kommt _irgendwann_ wieder zur Küche. Das Essen ist nun nicht mehr ganz warm
* Er serviert die Bestellung.
* ...


Zwei Wörter stechen in dieser Aufzählung besonders hervor &mdash; _warten_ und _irgendwann_. Die Kellner unseres Restaurants leisten eigentlich hervorragende Arbeit, doch ihr Timing ist unter aller Sau. Während eines Arbeitstages verbringen sie einen Großteil ihrer Zeit damit zu warten oder unnötige Strecken zu laufen, weil sie nicht wissen, wann sie wo zu sein haben. Diese Vergeudung von kostbarer Arbeitszeit sollte Geschäftsführer Jens nicht weiter auf sich sitzen lassen.


#### Was ist zu tun?

Derzeit müssen die Kellner von _BendisPasta_ einen Teil des Restaurants nach dem anderen abklappern und sich jedes Mal erkundigen, ob sie dort gerade gebraucht werden oder nicht. Umgekehrt wird ein Schuh draus: Würden die Kellner nur im Bedarfsfall zu sich gerufen, so ließe sich deren Arbeitseffizienz enorm steigern. Wir möchten daher ein neues System etablieren, in welchem die Kellner benachrichtigt werden können, sobald ein Kunde bestellen möchte bzw. sobald ein Gericht fertig zubereitet worden ist.

Die Lösung

Glücklicherweise müssen wir uns auch für dieses Problem nicht mehr den Kopf zerbrechen, denn das Observer-Pattern bietet hierfür eine praktikable Schablone. Und nicht nur das &mdash; im Package ``java.util`` findet sich sogar ein entsprechendes Framework, welches wir direkt einsetzen können! Dazu zählen das Interface ``Observer`` sowie die Klasse ``Observable``.

<p class="note">
    Hinweis: <code> java.util.Observer </code> und <code> java.util.Observable </code> sind seit Java 9 <em>depracated</em> und sollten in der Praxis nicht mehr verwendet werden. Die <a target="blank" href="https://docs.oracle.com/javase/9/docs/api/java/util/Observable.html">Begründung von Oracle</a> macht deutlich, dass das Observer-Pattern auch als ein <em>Antipattern</em> angesehen werden kann.
</p>

<div style="display:flex; flex-wrap: wrap;">
    <div style="margin-left: auto;margin-right: auto;overflow-x: scroll;">
    <h4>Observer-API</h4>
    <pre><div class="code" style="max-width: 300px;"><code>
interface Observer {

   void update(Observable o, Object arg);

}
    </code></div></pre>
    </div>
    <div style="margin-left: auto;margin-right: auto;overflow-x: scroll;">
    <h4>Observable-API</h4>
    <pre><div class="code" style="max-width: 300px;" ><code>
class Observable {

  public void addObserver(Observer o) {...}
  protected void clearChanged() {...}
  public int countObservers() {...}
  public void deleteObserver(Observer o) {...}
  public void deleteObservers() {...}
  public boolean hasChanged() {...}
  public void notifyObservers() {...}
  public void notifyObservers(Object arg) {...}
  protected void setChanged() {...}

}
    </code></div></pre>
    </div>
</div>


In unserem Fall implementiert der Kellner das Interface ``Observer``, damit er von den ``Observables``, die er beobachtet (_observe_), benachrichtigt werden kann. Dazu muss er eine einzige Methode ``update()`` implementieren; sie wird später von den Observables aufgerufen, welche darin eine Referenz auf sich selbst übergeben. Auf diese Weise kann der Kellner direkt auf das Objekt zugreifen, von dem er benachrichtigt wurde:


```java
public class Kellner implements Observer {

    public void update(Observable observable, Object arg) {
        if (observable instanceof Tisch) {
            Tisch tisch = (Tisch) observable;
            zumOrtGehen(tisch);
        } else if (observable instanceof Theke) {
            Theke theke = (Theke) observable;
            zumOrtGehen(theke);
        } // ggf. Abfrage weiterer in Frage kommenden Observables
    }

    public void zumOrtGehen(Ort ort) {} // zum Restaurantteil „ort“ gehen

}
```

Unterklassen von ``java.util.Observable``, die einen Observer bzw. im konkreten Fall einen Kellner benachrichtigen möchten, können dazu einfach die geerbte Methode ``notifyObservers()`` nutzen. Ihr Aufruf hat zur Folge, dass in allen eingetragenen Observern die Update-Methode ausgeführt wird; als Parameter wird das Observable selbst übergeben. Ein solches Observable könnte ein Objekt der (hier nicht genauer spezifizierten) Klasse ``Tisch`` sein:

```java
public class Tisch extends Observable implements Ort {

    // diverse Instanzvariablen für Tischnummer, Standort, Bestellung o. Ä.

    public Tisch() {}

    // diverse Methoden

    // Wann immer an einem Tisch etwas benötigt wird, wird diese Funktion aufgerufen
    public void statusAenderung() {
        setChanged();
        notifyObservers(); // Kellner und sonstige Observer benachrichtigen
    }
}
```

<form id="observerForm">
    <h3>Multiple Choice-Test</h3>
    <fieldset>
        Wozu dient das Observer-Muster?
        <ul>
            <li>
                <label>
                    <input type="radio" name="observerA">
                    Vermeidung von zeitgleichen Objektzugriffen bei nebenläufigen Anwendungen
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="observerA">
                    Effizienteres Pair-Programming
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="observerA">
                    Kontrolle der Nutzung von Variablentypen
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" id="observerA" name="observerA">
                    Objekte über Änderungen in einem anderen Objekt auf dem Laufenden halten
                </label>
            </li>
        </ul>
    </fieldset>
    <br/>
    <fieldset>
        Welche Aussagen stimmen nicht?
        <ul>
            <li>
                <label>
                    <input type="checkbox" id="observerB1">
                    Ein Observable kann mehrere Observer registrieren
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox" id="observerB2">
                    Ein Observer-Objekt kann sich in mehreren Obervables registrieren
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox" id="observerB3">
                    <code>java.util.Observable </code> ist ein Interface
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox" id="observerB4">
                    <code>java.util.Observer </code> ist eine abstrakte Klasse
                </label>
            </li>
        </ul>
    </fieldset>
    <br/>
    <fieldset>
        Vervollständige das folgende Klassengerüst.
    </fieldset>
    <pre><div class="code"><code>
public class Theke <input type="text" id ="observerC1" style="width: 7ch;font-weight: bold; color: rgb(0,85,153);"> <input type="text" id="observerC2" style="width: 10ch;font-weight: bold; color: rgb(44,0,159);"> {

private boolean bestellungAbholbereit = false;

public Theke() {...}

/* Diese Methode wird aufgerufen, nachdem alle Getränke einer Bestellug eingeschänkt wurden.
 * Sie wird erneut aufgerufen, sobald diese abgeholt worden sind. */
  public void abholstatusAendern() {
    bestellungAbholbereit = <input type="text" id="observerC3" style="width: 22ch;">; // Abholstatus umkehren
    statusAenderung();
  }

  public void statusAenderung() {
    setChanged();
    <input type="text" id="observerC4" style="width: 17ch;">; // Kellner und sonstige Observer benachrichtigen
  }

}
    </code></div></pre>
    <button type="button" onclick="checkObserver()" id="observerButton">Auswerten</button>&nbsp;&nbsp;&nbsp;&nbsp;<center id="observerResult"></center>
    <center><a id="observerNext" style="display: none;" href="/ex-factory.html">Nächstes Pattern...</a></center>
</form>
