import { useState } from 'react';
import { KnotStep } from '../data/marineKnotsSteps';

interface StepProps {
  step: KnotStep;
  onComplete: (score: number) => void;
}

export default function KnotStepComponent({ step, onComplete }: StepProps) {
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  
  const calculateScore = () => {
    let score = 0;
    if (step.type === 'quiz' && step.questions) {
      score = answers.filter((ans, idx) => 
        step.questions![idx].correctIndex === ans
      ).length;
    }
    return score;
  };

  const handleSubmit = () => {
    setShowResults(true);
    const score = calculateScore();
    onComplete(score);
  };

  return (
    <div className="p-6 bg-white/90 rounded-xl">
      {step.type === 'quiz' && step.questions && (
        <div>
          {/* Affichage des questions */}
          {step.questions.map((question, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-bold mb-2">{question.question}</h3>
              <div className="space-y-2">
                {question.answers.map((answer, ansIndex) => (
                  <button
                    key={ansIndex}
                    onClick={() => {
                      const newAnswers = [...answers];
                      newAnswers[index] = ansIndex;
                      setAnswers(newAnswers);
                    }}
                    className={`w-full p-2 text-left rounded ${
                      answers[index] === ansIndex 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {answer}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button
            onClick={handleSubmit}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Valider
          </button>
        </div>
      )}

      {step.type === 'image' && (
        <div>
          <img 
            src={step.imageUrl} 
            alt="Nœud à identifier" 
            className="max-w-md mx-auto mb-4"
          />
          <input
            type="text"
            placeholder="Entrez le nom du nœud"
            className="w-full p-2 border rounded mb-4"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                const score = e.currentTarget.value.toLowerCase() === step.correctAnswer?.toLowerCase() ? 1 : 0;
                onComplete(score);
              }
            }}
          />
        </div>
      )}

      {showResults && (
        <div className="mt-4 p-4 bg-green-100 rounded">
          Score: {calculateScore()}
        </div>
      )}
    </div>
  );
}
