---
title: BendisPasta
layout: default
---

## Das Adapter-Pattern <a class="testjump" href="#adapterForm">...direkt zum Test...</a>

<p class="note">
    Zur „Anpassung der Schnittstelle einer Klasse an ein anderes von den Clients erwartetes Interface. Das Design Pattern Adapter (Adapter) ermöglicht die Zusammenarbeit von Klassen, die ansonsten aufgrund der Inkompatibilität ihrer Schnittstellen nicht dazu in der Lage wären.“ [GoF]
</p>

Im Restaurant <em>BendisPasta</em> werden in erster Linie zwei Arten von Objekten serviert: Gerichte und Getränke.


<div style="display:flex; flex-wrap: wrap;">
    <div style="margin-left: auto;margin-right: auto;overflow-x: scroll;">
    <h4>Gerichte-API</h4>
    <pre><div class="code"><code>
interface Gericht {

  void zubereiten();
  void servieren();

}
    </code></div></pre>
    </div>
    <div style="margin-left: auto;margin-right: auto;overflow-x: scroll;">
    <h4>Getränke-API</h4>
    <pre><div class="code"><code>
interface Getraenk {

  void einschenken();
  void servieren();

}
    </code></div></pre>
    </div>
</div>

Bislang wurde die Methode ``zubereiten()`` ausschließlich von einer Instanz der Klasse ``Koch`` aufgerufen, das Einschenken der Getränke wurde hingegen von einem ``Barkeeper``-Objekt übernommen. Im Zuge der betrieblichen Rationalisierungsmaßnahmen wird von den Mitarbeitern nun mehr Flexibilität verlangt. Um an besucherarmen Tagen effizienter zu arbeiten, sollen alle Mitarbeiter, die bislang nur mit Gerichten zu tun hatten, auch mit Getränken umgehen können.

#### Was ist zu tun?

Im Kern machen die beiden Methoden ``zubereiten()`` und ``einschenken()`` dasselbe: Sie bereiten eine Bestellung so vor, dass sie vom Kellner serviert werden kann. Wann immer ein Koch auf einem Gerichte-Objekt ``zubereiten()`` aufrufen würde, müsste er also anstelle dessen ``einschenken()`` aufrufen, sofern er es mit einem Getränk zu tun hat. Eine Möglichkeit das zu realisieren besteht in einem Refactoring. Wir könnten z. B. alle Klassen so anpassen, dass ``Gericht`` und ``Getraenk`` sowie ``Koch``, ``Barkeeper`` und alle anderen Mitarbeiter nur noch mit einer einheitlichen Methode (z. B. ``vorbereiten()``) arbeiten. Der Refactoring Ansatz ist jedoch mit hohem Aufwand verbunden, falls die bisherigen Methodennamen und Strukturen schon vielfach genutzt wurden und verstreut im Einsatz sind.


#### Die Lösung

Eine schnelle und einfach Lösung des Problems besteht darin, das Adapter-Pattern zu nutzen. Unten siehst du eine Getränke-Adapter-Klasse, die es dem Koch ermöglicht, ein Getränk genau so zu behandeln, wie er es von seinen Gerichten gewohnt ist:


```java
public class GetraenkeAdapter implements Gericht {

  private Getraenk getraenk;

  public GetraenkeAdapter(Getraenk getraenk) {
    this.getraenk = getraenk;
  }

  public void zubereiten() {
    getraenk.einschenken();
  }

  public void servieren() {
    getraenk.servieren();
  }
...

}
```

Wann immer wir unserem Koch also ein Getränk übergeben möchten, stecken wir es vorher in einen Getränkeadapter. Wenn wir beispielsweise möchten, dass sich unser Koch um ein Wasser kümmert, so schreiben wir ihm anstelle von ``new Wasser`` folgendes auf Aufgabenliste: ``new GetraenkeAdapter(new Wasser())``. Wir erzeugen also ein Objekt der Klasse ``GetraenkeAdapter``, welchem wir im Konstruktor ein Getränk übergeben. Der Getränke-Adapter kümmert sich darum, die Funktionen der Getränke-Klasse in ihre Entsprechungen aus der Gerichte-Klasse zu übersetzen. Da ``GetraenkeAdapter`` eine Unterklasse von ``Gericht`` ist, sind keine weiteren Änderungen in der ``Koch``-Klasse erforderlich.


#### Ein Praxisbeispiel

Wenn du schon eine Weile mit Java gearbeitet hast, wird dir das Interface <code>java.util.Iterator</code> vielleicht ein Begriff sein. Die Schnittstelle beinhaltet die Funktionen ``hasNext()``, ``next()`` sowie ``remove()`` und löst damit ihren Vorgänger ``java.util.Enumeration`` ab. Die beiden Methoden der Enumeration-Schnittstelle sind ``hasMoreElements()`` und ``nextElement()``. Es kann durchaus vorkommen, dass wir in einem alten Java-Projekt auf Enumerations stoßen, obwohl wir inzwischen Iterators verwenden. In einem solchen Fall würde es sich anbieten, mit einem Enumeration-Adapter zu arbeiten.


<p class="note">
    Übrigens: Auch der Iterator ist ein sogenanntes Design Pattern. Zweck des Iterator-Patterns ist es, den Zugriff auf Objekte einer Collection zu ermöglichen, ohne die zugrunde liegende Implementierung zu kennen.
</p>

<form id="adapterForm">
    <h3>Zwischenprüfung</h3>
    <fieldset>
        Was ist die Aufgabe des Adapter-Patterns?
        <ul>
            <li>
                <label>
                    <input type="radio" name="adapterA">
                    Transformation von angloamerikanischen Maßeinheiten in das metrische System und umgekehrt
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="adapterA">
                    Refactoring
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="adapterA" >
                    Es reduziert eine Schnittstelle auf die Elemente, die ein bestimmter Client benötigt
                </label>
            </li>
            <li>
                <label>
                    <input id="adapterA" type="radio" name="adapterA">
                    Übersetzung der Schnittstelle einer bestimmten Klasse in die Schnittstelle einer ähnlich gearteten anderen Klasse
                </label>
            </li>
        </ul>
    </fieldset>
    <br/>
    <fieldset>
        Welches Objekt wird der Adapter-Klasse im Konstruktor übergeben?
        <ul>
            <li>
                <label>
                    <input id="adapterB" type="radio" name="adapterB">
                    Das Objekt, dessen Schnittstelle für den Client übersetzt werden muss
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="adapterB">
                    Das Objekt, dessen Schnittstelle der Client erwartet
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="adapterB">
                    Das <code>null</code>-Objekt
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="adapterB">
                    Das Client-Objekt
                </label>
            </li>
        </ul>
    </fieldset>
    <br/>
    <fieldset>
        Ergänze den nachfolgenden Code-Ausschnitt. Zur Erinnerung: Das Interface <code>Iterator</code> besitzt die drei Methoden <code>hasNext()</code>, <code>next()</code> sowie <code>remove()</code>. Das Interface <code>Enumeration</code> hat lediglich die beiden Funktionen <code>hasMoreElements()</code> und <code>nextElement()</code>.
    </fieldset>
    <pre><div class="code"><code>
import java.util.Enumeration;
import java.util.Iterator;

public class EnumerationAdapter implements Iterator&lt;Object&gt; {

  private Enumeration&lt;?&gt; enumeration;

  public EnumerationAdapter(Enumeration&lt;?&gt; enumeration) {
    this.enumeration = enumeration;
  }

  public boolean <input type="text" id="adapterC1" style="width: 9ch;"> { // Bitte vervollständigen
    return <input type="text" id="adapterC2" style="width: 29ch;">; // Bitte vervollständigen
  }

  public Object next() {
    return <input type="text" id="adapterC3" style="width: 25ch;">; // Bitte vervollständigen
  }

  public void <input type="text" id="adapterC4" style="width: 8ch;"> { // Bitte vervollständigen
    throw new UnsupportedOperationException();
  }

}
    </code></div></pre>
    <button type="button" onclick="checkAdapter()" id="adapterButton">Auswerten</button>&nbsp;&nbsp;&nbsp;&nbsp;<center id="adapterResult"></center>
    <center><a id="adapterNext" style="display: none;" href="/ex-command.html">Nächstes Pattern...</a></center>
</form>
