# Quiz App 🎯

Un'applicazione interattiva di quiz con risposte multiple casuali, costruita con React e Vite.

## Caratteristiche ✨

- 🎪 **Interfaccia moderna e responsive**: Design elegante che funziona su desktop e mobile
- 🔀 **Rimescolamento casuale delle risposte**: Le risposte vengono mescolate automaticamente per ogni domanda
- 🔀 **Rimescolamento casuale delle domande**: L'ordine delle domande cambia ad ogni quiz
- 📊 **Feedback immediato**: Risposta corretta/sbagliata con indicazione della risposta giusta
- 🏆 **Punteggio finale**: Visualizzazione dei risultati con percentuale e messaggi personalizzati
- 📱 **Completamente responsive**: Perfetto su tutti i dispositivi
- ⚡ **Veloce e fluido**: Realizzato con React + Vite per performance ottimali
- 🎨 **Tema chiaro/scuro**: Supporto per entrambi i temi di sistema

## Come Iniziare 🚀

### Prerequisiti
- Node.js (versione 14 o superiore)
- npm o yarn

### Installazione

```bash
# Clona il repository
git clone [repository-url]
cd quiz

# Installa le dipendenze
npm install
```

### Esegui in Modalità Sviluppo

```bash
npm run dev
```

L'applicazione sarà disponibile su `http://localhost:5173`

### Build per Produzione

```bash
npm run build
```

I file ottimizzati saranno nella cartella `dist/`

### Preview della Build di Produzione

```bash
npm run preview
```

## Struttura del Progetto 📁

```
src/
├── App.jsx                 # Componente principale
├── App.css                 # Stili dell'app
├── main.jsx               # Entry point
├── index.css              # Stili globali
├── components/
│   ├── Quiz.jsx           # Componente quiz
│   ├── Quiz.css           # Stili del quiz
│   ├── QuizSelector.jsx   # Selezione quiz
│   ├── QuizSelector.css   # Stili selettore
│   ├── Results.jsx        # Schermata risultati
│   └── Results.css        # Stili risultati
└── data/
    └── quizzes.js         # Database di quiz
```

## Aggiungere Nuovi Quiz 📚

Per aggiungere un nuovo quiz, modifica il file `src/data/quizzes.js`:

```javascript
{
  id: 4,
  title: "Titolo del Quiz",
  questions: [
    {
      id: 1,
      question: "Testo della domanda?",
      correct: "Risposta corretta",
      options: ["Opzione 1", "Opzione 2", "Opzione 3"]
    },
    // ... altre domande
  ]
}
```

## Flusso dell'Applicazione 🔄

1. **Home**: Selezione del quiz da risolvere
2. **Quiz**: Risposta alle domande con feedback immediato
3. **Risultati**: Visualizzazione del punteggio finale e opzione per ripetere

## Tecnologie Utilizzate 🛠️

- [React](https://react.dev/) - Libreria UI
- [Vite](https://vitejs.dev/) - Build tool e dev server
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) - Styling

## Versione Attuale 📦

- React 19.2.4
- Vite 8.0.1

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
