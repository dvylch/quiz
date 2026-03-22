import './Results.css';

export function Results({ score, totalQuestions, quizTitle, onRetry, onHome }) {
  const percentage = Math.round((score / totalQuestions) * 100);

  let message = '';
  let emoji = '';

  if (percentage === 100) {
    message = 'Perfetto! Hai risposto a tutte le domande correttamente!';
    emoji = '🌟';
  } else if (percentage >= 80) {
    message = 'Ottimo lavoro! Hai ottenuto un buon risultato!';
    emoji = '🎉';
  } else if (percentage >= 60) {
    message = 'Bene! Puoi rifare il quiz per migliorare!';
    emoji = '👍';
  } else if (percentage >= 40) {
    message = 'Non male, ma puoi fare meglio. Riprova!';
    emoji = '💪';
  } else {
    message = 'Ritenta! Ti consiglio di rifare il quiz!';
    emoji = '📚';
  }

  return (
    <div className="results-container">
      <div className="results-card">
        <div className="emoji">{emoji}</div>
        <h1>Quiz Completato!</h1>
        <h2>{quizTitle}</h2>

        <div className="score-display">
          <div className="score-circle">
            <span className="score-number">{percentage}</span>
            <span className="score-percent">%</span>
          </div>
          <div className="score-details">
            <p className="score-text">{score} / {totalQuestions}</p>
            <p className="score-correct">Risposte corrette</p>
          </div>
        </div>

        <p className="feedback-message">{message}</p>

        <div className="results-buttons">
          <button className="btn-retry" onClick={onRetry}>
            Ripeti il Quiz
          </button>
          <button className="btn-home" onClick={onHome}>
            Torna alla Home
          </button>
        </div>
      </div>
    </div>
  );
}

