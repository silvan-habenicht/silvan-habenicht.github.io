---
title: BendisPasta
layout: library_index
---

## Template Method-Pattern

<p class="note">
    Zur „Definition der Grundstruktur eines Algorithmus in einer Operation sowie Delegation einiger Ablaufschritte an Unterklassen. Das Design Pattern Template Method (Schablonenmethode) ermöglicht den Unterklassen, bestimmte Schritte eines Algorithmus zu überschreiben, ohne dessen grundlegende Struktur zu verändern.“ [GoF]
</p>

Betrachten wir die folgende abstrakte Klasse mit dem Namen „Pizza“

```java

  public abstract class Pizza {

      public abstract void zubereiten();

  }

```

sowie zwei ihrer erweiternden Klassen:

```java

  public class PizzaCipolla extends Pizza {

      @Override
      public void zubereiten() {
          teigAusrollen();
          tomatensauce();
          mitZwiebelnBelegen();
          kaese();
          backen();
      }

      ... // Implementierung der Methoden
  }

```

```java

  public class PizzaProsciutto extends Pizza {

      @Override
      public void zubereiten() {
          teigAusrollen();
          tomatensauce();
          mitSchinkenBelegen();
          kaese();
          backen();
      }

      ... // Implementierung der Methoden
  }

```

Man erkennt, dass die Implementierungen der ``zubereiten()``-Methode sehr ähnlich ausfallen. Sie unterscheiden sich einzig durch denjenigen Schritt, der für das Belegen der Zutaten zuständig ist. Eine Codeverdopplung dieser Art ist äußerst unschön, da mögliche Änderungen in jeder Pizza-Subklasse einzeln durchgeführt werden müssen. Das Template Method-Pattern bietet eine einfache Variante, den bestehenden Code zu verbessern. Wir implementieren dazu alle sich wiederholdenen Schritte der ``zubereiten()``-Methode bereits in der abstrakten ``Pizza``-Klasse und lagern den Schritt zum Belegen der Zutaten (der sich in jeder erbenden Klasse unterscheidet) in eine separate abstrakte Methode aus. Die ``zubereiten()``-Methode kann nun ``final`` gesetzt werden und alle Subklassen von ``Pizza`` müssen ab sofort nur noch die darin enthaltene ``belegen()``-Methode implementieren. Unser Code wird dadurch robuster und agiler:

```java

  public abstract class Pizza {

      public final void zubereiten() {
          teigAusrollen();
          tomatensauce();
          belegen();
          kaese();
          backen();
      }

      public abstract void belegen();

      ... // Implementierung der übrigen Methoden
  }

```  