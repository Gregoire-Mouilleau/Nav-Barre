import { useState } from "react";
import { Question } from "../data/quizQuestions";

interface QuizProps {
  questions: Question[];
  title: string;
}

interface QuizStats {
  totalTime: number;
  correctStreak: number;
  highestStreak: number;
}

export default function Quiz({ questions, title }: QuizProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [stats, setStats] = useState<QuizStats>({
    totalTime: 0,
    correctStreak: 0,
    highestStreak: 0
  });
  const [startTime] = useState(Date.now());

  const currentQuestion = questions[current];
  const isCorrect = selected === currentQuestion.correctIndex;

  function handleClick(index: number) {
    if (selected === null) {
      setSelected(index);
      const isAnswerCorrect = index === currentQuestion.correctIndex;
      
      if (isAnswerCorrect) {
        setScore(s => s + 1);
        setStats(prev => ({
          ...prev,
          correctStreak: prev.correctStreak + 1,
          highestStreak: Math.max(prev.highestStreak, prev.correctStreak + 1)
        }));
      } else {
        setStats(prev => ({ ...prev, correctStreak: 0 }));
      }

      setTimeout(() => {
        setSelected(null);
        setCurrent(prev => prev + 1);
      }, 1500);
    }
  }

  if (current >= questions.length) {
    const totalTime = Math.floor((Date.now() - startTime) / 1000);
    const accuracy = (score / questions.length) * 100;
    
    return (
      <div className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="relative z-10 bg-white rounded-xl shadow-2xl p-8 mx-4 max-w-xl w-full">
          <div className="text-center">
            <h2 className="text-4xl font-black mb-6 text-blue-900">
              🎉 Félicitations !
            </h2>
            <div className="space-y-4">
              <p className="text-2xl font-bold text-gray-800">
                Score: {score} / {questions.length}
              </p>
              <p className="text-xl text-gray-700">
                Précision: {accuracy.toFixed(1)}%
              </p>
              <p className="text-xl text-gray-700">
                Temps total: {totalTime}s
              </p>
              <p className="text-xl text-gray-700">
                Meilleure série: {stats.highestStreak} 🔥
              </p>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="mt-8 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Recommencer
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <div className="text-center mb-8">
          <div style={{ color: '#000000' }} className="text-2xl font-black">
            Question {current + 1} / {questions.length}
          </div>
        </div>

        <h2 style={{ color: '#000000' }} className="text-3xl font-bold mb-8 text-center">
          {currentQuestion.question}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {currentQuestion.answers.map((answer, index) => {
            const isSelected = selected === index;
            const isAnswer = index === currentQuestion.correctIndex;

            let bg = "bg-white";
            if (selected !== null) {
              if (isSelected && isCorrect) bg = "bg-green-300";
              else if (isSelected && !isCorrect) bg = "bg-red-300";
              else if (!isCorrect && isAnswer) bg = "bg-green-300";
            }

            return (
              <button
                key={index}
                onClick={() => handleClick(index)}
                disabled={selected !== null}
                className={`${bg} border border-gray-300 rounded-lg p-4 font-semibold hover:bg-gray-100 transition disabled:cursor-default`}
              >
                {answer}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
