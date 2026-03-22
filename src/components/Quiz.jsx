import { useState } from 'react';
import './Quiz.css';

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function Quiz({ quiz, onFinish }) {
  // Rimescola le domande all'inizio del quiz
  const [shuffledQuestions] = useState(() => shuffleArray(quiz.questions));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState(
    shuffleArray([
      shuffledQuestions[0].correct,
      ...shuffledQuestions[0].options
    ])
  );

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const totalQuestions = shuffledQuestions.length;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  const handleAnswerClick = (answer) => {
    if (answered) return;

    setSelectedAnswer(answer);
    setAnswered(true);

    if (answer === currentQuestion.correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      onFinish(score, totalQuestions);
    } else {
      const nextQuestion = shuffledQuestions[currentQuestionIndex + 1];
      const newShuffledOptions = shuffleArray([
        nextQuestion.correct,
        ...nextQuestion.options
      ]);
      setShuffledOptions(newShuffledOptions);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h1>{quiz.title}</h1>
        <div className="progress">
          <span className="current">{currentQuestionIndex + 1}</span>
          <span className="total">/ {totalQuestions}</span>
        </div>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`
          }}
        ></div>
      </div>

      <div className="question-section">
        <h2 className="question">{currentQuestion.question}</h2>

        <div className="options">
          {shuffledOptions.map((option) => (
            <button
              key={option}
              className={`option-button ${
                selectedAnswer === option ? 'selected' : ''
              } ${
                answered && option === currentQuestion.correct
                  ? 'correct'
                  : ''
              } ${
                answered &&
                selectedAnswer === option &&
                option !== currentQuestion.correct
                  ? 'incorrect'
                  : ''
              }`}
              onClick={() => handleAnswerClick(option)}
              disabled={answered}
            >
              {option}
            </button>
          ))}
        </div>

        {answered && (
          <div className={`feedback ${
            selectedAnswer === currentQuestion.correct ? 'correct' : 'incorrect'
          }`}>
            {selectedAnswer === currentQuestion.correct
              ? '✓ Risposta corretta!'
              : `✗ Risposta sbagliata! La risposta corretta è: ${currentQuestion.correct}`}
          </div>
        )}
      </div>

      <div className="quiz-footer">
        <div className="score">Punteggio: {score}</div>
        {answered && (
          <button className="next-button" onClick={handleNext}>
            {isLastQuestion ? 'Termina Quiz' : 'Domanda Successiva'}
          </button>
        )}
      </div>
    </div>
  );
}

