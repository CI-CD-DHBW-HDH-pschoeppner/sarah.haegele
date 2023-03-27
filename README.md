# Klausur 2023 DHBW HDH

## Setup

### Klone dieses Repository

1. Klone das Repository
    ```bash
    git clone <TODO repo url>
    cd klausur
    git remote remove origin
    ```
2. Erstelle in der GitHub Organisation ein Repository mit dem Namen **\<vorname>.\<nachname>**
3. Lade den Stand in das Repository hoch
   ```bash
   git remote add origin <url deines Repositories>
   git push -u origin master
   ```
4. Erstelle einen Branch für die Bearbeitung
   > Vergesse am Ende nicht deine Bearbeitung hochzuladen

### Sicherstellen, dass alles geht

Führe folgende Befehle in deinem Repository aus, um sicherzustellen, dass alles geht:

```bash
npm install

npm run dev
```

## Aufgaben **(20 Punkte)**

**Wunderschönes Design 🎉🤩**

1. Vervollständige alle Funktionen **(5 Punkte)** (5)
2. Teste alle Funktionen in `todo.ts`, sodass **(5 Punkte)** (5)
   * Alle in den TODOs formulierten Requirements getested werden
   * Die Funktionalität ausreichend sichergestellt wird
   > Für Funktionen, die zufällige Werte zurück geben, ist es ausreichend zu testen, dass die Funktion bei zweifacher ausführung nicht
   > den gleichen Wert zurück gibt
3. Installiere: **(3 Punkte)** (3)
   * ESLint (eslint-plugin-svelte3, eslint-plugin-unused-imports)
   * Jest (ts-jest, ts-node)
   * Prettier (prettier-plugin-svelte)
   > Die Config Dateien brauchen nicht angepasst werden.
   > Denkt an @types für Typescript
4. Schreibe ein `Dockerfile`, dass theoretisch dazu benutzt werden kann, die Seite zur Verfügung zu stellen **(1 Punkt)** (1)
   > Du musst kein Image lokal bauen, es sollte nachher nur ein Image in GitHub Packages abliegen
5. Schreibe GitHub Actions für:
   * Continuous Integration **(2 Punkte)** (2)
   * Continuous Delivery (GitHub Packages) **(2 Punkte)** (2)
   * Continuous Deployment (GitHub Pages) **(2 Punkte)** (2)

(20 / 20)

## Zusatzaufgabe (fließt nicht in die Bewertung ein):

Persistiere die Liste an Todos, sodass nach einem Neuladen der Seite die Todos erhalten bleiben