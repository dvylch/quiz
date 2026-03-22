import { useState } from 'react'
import './App.css'
import { quizzes } from './data/quizzes'
import { QuizSelector } from './components/QuizSelector'
import { Quiz } from './components/Quiz'
import { Results } from './components/Results'

function App() {
  const [screen, setScreen] = useState('home') // 'home', 'quiz', 'results'
  const [selectedQuiz, setSelectedQuiz] = useState(null)
  const [quizScore, setQuizScore] = useState(null)

  const handleSelectQuiz = (quiz) => {
    setSelectedQuiz(quiz)
    setScreen('quiz')
  }

  const handleFinishQuiz = (score, total) => {
    setQuizScore({ score, total })
    setScreen('results')
  }

  const handleRetryQuiz = () => {
    setScreen('quiz')
  }

  const handleGoHome = () => {
    setScreen('home')
    setSelectedQuiz(null)
    setQuizScore(null)
  }

  return (
    <div className="app">
      {screen === 'home' && (
        <QuizSelector quizzes={quizzes} onSelectQuiz={handleSelectQuiz} />
      )}
      {screen === 'quiz' && selectedQuiz && (
        <Quiz quiz={selectedQuiz} onFinish={handleFinishQuiz} />
      )}
      {screen === 'results' && quizScore && selectedQuiz && (
        <Results
          score={quizScore.score}
          totalQuestions={quizScore.total}
          quizTitle={selectedQuiz.title}
          onRetry={handleRetryQuiz}
          onHome={handleGoHome}
        />
      )}
    </div>
  )
}

export default App
