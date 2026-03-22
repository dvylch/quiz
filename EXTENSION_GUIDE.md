# Guida di Estensione - Quiz App 📖

Questa guida ti aiuterà a personalizzare e estendere l'app Quiz secondo le tue esigenze.

## Aggiungere Nuovi Quiz

### Passo 1: Modifica il file `src/data/quizzes.js`

Aggiungi un nuovo oggetto quiz all'array `quizzes`:

```javascript
{
  id: 4,
  title: "Quiz di Letteratura",
  questions: [
    {
      id: 1,
      question: "Chi ha scritto 'La Divina Commedia'?",
      correct: "Dante Alighieri",
      options: ["Petrarca", "Boccaccio", "Manzoni"]
    },
    {
      id: 2,
      question: "In quale anno è stato pubblicato 'I Promessi Sposi'?",
      correct: "1842",
      options: ["1840", "1845", "1850"]
    },
    // ... altre domande
  ]
}
```

## Modello Dati Quiz

Ogni quiz deve avere la seguente struttura:

```javascript
{
  id: number,              // ID univoco del quiz
  title: string,           // Titolo visualizzato
  questions: [
    {
      id: number,          // ID univoco della domanda
      question: string,    // Testo della domanda
      correct: string,     // Risposta corretta
      options: [           // Array di 3 risposte alternative
        string,
        string,
        string
      ]
    }
  ]
}
```

## Personalizzare i Colori

I colori sono definiti in `src/index.css` usando le CSS variables:

```css
:root {
  --primary-color: #3b82f6;      /* Blu primario */
  --primary-dark: #2563eb;       /* Blu scuro */
  --success-color: #10b981;      /* Verde (risposte corrette) */
  --error-color: #ef4444;        /* Rosso (risposte sbagliate) */
  --warning-color: #f59e0b;      /* Giallo (avvisi) */
  --background: #1f2937;         /* Sfondo scuro */
  --surface: #374151;            /* Superficie componenti */
  --text: #f3f4f6;               /* Testo principale */
  --text-secondary: #d1d5db;     /* Testo secondario */
  --border: #4b5563;             /* Bordi */
}
```

Per la modalità chiara, modifica le variabili nella media query `@media (prefers-color-scheme: light)`.

## Modificare i Messaggi di Feedback

I messaggi di feedback finale si trovano in `src/components/Results.jsx`:

```javascript
let message = '';
let emoji = '';

if (percentage === 100) {
  message = 'Perfetto! Hai risposto a tutte le domande correttamente!';
  emoji = '🌟';
} else if (percentage >= 80) {
  message = 'Ottimo lavoro! Hai ottenuto un buon risultato!';
  emoji = '🎉';
}
// ... etc
```

Modifica questi messaggi secondo le tue preferenze.

## Aggiungere Nuovi Componenti

Per aggiungere una nuova funzionalità:

1. **Crea il componente** in `src/components/NomeComponente.jsx`
2. **Crea gli stili** in `src/components/NomeComponente.css`
3. **Importa il componente** in `src/App.jsx`
4. **Aggiungi la logica di navigazione** nello stato di `App.jsx`

Esempio:

```javascript
// App.jsx
import { NomeComponente } from './components/NomeComponente'

// Nel render:
{screen === 'nuova-schermata' && (
  <NomeComponente onAction={handleAction} />
)}
```

## Modificare il Layout

### Quiz Selector
- File: `src/components/QuizSelector.jsx`
- Stili: `src/components/QuizSelector.css`

### Quiz
- File: `src/components/Quiz.jsx`
- Stili: `src/components/Quiz.css`

### Results
- File: `src/components/Results.jsx`
- Stili: `src/components/Results.css`

## Aggiungere Categorie di Quiz

Per aggiungere categorizzazione dei quiz, puoi modificare la struttura:

```javascript
{
  id: 1,
  title: "Quiz di Geografia",
  category: "Educazione",
  difficulty: "Facile",
  questions: [
    // ...
  ]
}
```

Poi aggiorna `QuizSelector` per visualizzare questa informazione:

```javascript
<p className="quiz-category">{quiz.category}</p>
<p className="quiz-difficulty">Difficoltà: {quiz.difficulty}</p>
```

## Performance

L'app utilizza React Hooks per ottimizzare le performance:

- `useState` per la gestione dello stato locale
- La funzione di shuffle è ottimizzata per non creare rendering inutili
- CSS Modules possono essere aggiunti per isolamento dello stile

## Testing

Per testare localmente:

```bash
npm run dev
```

Accedi a `http://localhost:5173` e testa il flusso completo.

## Build Ottimizzato

Per creare una versione di produzione ottimizzata:

```bash
npm run build
```

I file finali saranno in `dist/`

## Troubleshooting

### Le risposte non vengono mescolate
- Verifica che la funzione `shuffleArray` sia presente e corretta in `Quiz.jsx`

### I colori non cambiano
- Assicurati di modificare le variabili CSS in `src/index.css`
- Ricorda che alcuni browser memorizzano la cache

### Il quiz non carica
- Verifica che il file `quizzes.js` sia importato correttamente
- Controlla la console per errori di importazione

## Risorse Utili

- [Documentazione React](https://react.dev/)
- [Documentazione Vite](https://vitejs.dev/)
- [MDN CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

