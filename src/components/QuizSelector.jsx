import './QuizSelector.css';

export function QuizSelector({ quizzes, onSelectQuiz }) {
  return (
    <div className="quiz-selector-container">
      <div className="selector-header">
        <h1>Quiz App</h1>
        <p>Seleziona un quiz per iniziare</p>
      </div>

      <div className="quiz-list">
        {quizzes.map((quiz) => (
          <button
            key={quiz.id}
            className="quiz-card"
            onClick={() => onSelectQuiz(quiz)}
          >
            <h2>{quiz.title}</h2>
            <p className="quiz-description">
              {quiz.questions.length} domande
            </p>
            <span className="quiz-arrow">→</span>
          </button>
        ))}
      </div>
    </div>
  );
}

