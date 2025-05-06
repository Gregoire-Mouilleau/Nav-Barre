import { useState, useEffect } from 'react';
import { Question } from '../data/quizQuestions';

interface Props {
  questions: Question[];
  onComplete: (score: number) => void;
  stepNumber: number;
  totalSteps?: number; // Nouveau prop
  totalScore?: number;
}

export default function QuizStep({ questions, onComplete, stepNumber, totalSteps = 15, totalScore = 0 }: Props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFinalScore, setShowFinalScore] = useState(false);

  useEffect(() => {
    // Debug logs
    console.log(`Étape ${stepNumber}:`, {
      score,
      totalScore,
      currentQuestion,
      questionsLength: questions.length
    });
  }, [score, totalScore, currentQuestion, stepNumber]);

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    const isCorrect = questions[currentQuestion].correctIndex === answerIndex;
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
      } else {
        const finalStepScore = score + (isCorrect ? 1 : 0);
        if (stepNumber === 20) { // Changé de 15 à 20 pour les parties du bateau
          setShowFinalScore(true);
        }
        onComplete(finalStepScore);
      }
    }, 1000);
  };

  if (showFinalScore && stepNumber === totalSteps) {
    const totalPossibleScore = 40; // Nombre total de questions pour les parties du bateau
    const passThreshold = Math.ceil(totalPossibleScore / 2);
    const finalDisplayScore = Math.min(totalScore, totalPossibleScore);
    const hasPassedModule = finalDisplayScore >= passThreshold;

    if (hasPassedModule) {
      localStorage.setItem('moduleBoatComplete', 'true');
    }

    return (
      <div className="p-6 bg-white/90 rounded-xl text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#8b4513]">
          Score Final
        </h2>
        <div className="text-2xl mb-4">
          Score total : {finalDisplayScore}/{totalPossibleScore}
        </div>
        <div className={`text-xl mb-6 ${hasPassedModule ? 'text-green-600' : 'text-red-600'}`}>
          {hasPassedModule 
            ? "🎉 Félicitations ! Vous avez validé le module Parties du Bateau !" 
            : "❌ Vous n'avez pas obtenu le score minimum requis."}
        </div>
        <button
          onClick={() => window.location.reload()}
          className={`px-6 py-3 rounded-lg text-white ${
            hasPassedModule ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {hasPassedModule ? "Module suivant" : "Recommencer le module"}
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen absolute inset-0 flex items-center justify-center">
      <div 
        className="max-w-2xl w-full mx-auto p-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl"
        style={{
          transform: 'translate(30%, 100%)' 
        }}
      >
        <div className="flex justify-center mb-8">
          <h2 className="text-3xl font-pirates text-center text-[#8b4513]">
            Question {stepNumber} sur {totalSteps}
          </h2>
        </div>
        
        <div className="mb-12"> {/* Augmentation de la marge en bas */}
        <div className="text-10xl font-bold text-center mb-12 text-[#8b4513] leading-snug">
            {questions[currentQuestion].question}
          </div>

          <div className="space-y-6 flex flex-col items-center">
            {questions[currentQuestion].answers.map((answer, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                disabled={selectedAnswer !== null}
                className={`w-full max-w-md p-4 text-center rounded-lg transition-all transform hover:scale-105 ${
                  selectedAnswer === null
                    ? 'bg-[#d5bc93] hover:bg-[#c4a484] cursor-pointer'
                    : idx === questions[currentQuestion].correctIndex
                      ? 'bg-green-500 text-white'
                      : idx === selectedAnswer
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-300'
                }`}
                style={{
                  background: 'linear-gradient(45deg, #d5bc93 0%, #e6d5b8 100%)',
                  border: '2px solid #8b4513',
                  color: '#8b4513'
                }}
              >
                {answer}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
