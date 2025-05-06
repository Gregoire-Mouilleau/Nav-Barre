import { useState } from 'react';

interface Props {
  imageUrl: string;
  correctAnswer: string;
  onComplete: (score: number) => void;
  stepNumber: number;
}

export default function ImageStep({ imageUrl, correctAnswer, onComplete, stepNumber }: Props) {
  const [answer, setAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    const isCorrect = answer.toLowerCase().trim() === correctAnswer.toLowerCase();
    onComplete(isCorrect ? 1 : 0);
    
    // Attendre un peu avant d'envoyer le score final pour la dernière question
    if (stepNumber === 15) {
      setTimeout(() => {
        // Forcer un second onComplete pour s'assurer que le score final est bien envoyé
        onComplete(isCorrect ? 1 : 0);
        // Forcer un troisième onComplete après un délai plus long
        setTimeout(() => {
          onComplete(isCorrect ? 1 : 0);
        }, 100);
      }, 100);
    }
  };

  return (
    <div className="p-6 bg-white/90 rounded-xl relative">
      {/* Nouveau titre positionné */}
      <div style={{
        position: 'absolute',
        top: '300px',
        right: '680px',
        width: '300px',
        textAlign: 'center',
        background: 'linear-gradient(45deg, #d5bc93 0%, #e6d5b8 100%)',
        border: '3px solid #8b4513',
        borderRadius: '10px',
        padding: '10px',
        boxShadow: '0 4px 6px rgba(139, 69, 19, 0.2)'
      }}>
        <span className="text-6xl font-pirates text-[#8b4513] font-bold" style={{
          textShadow: '2px 2px 4px rgba(139, 69, 19, 0.3)',
          display: 'block',
          transform: 'rotate(-2deg)'
        }}>
          Question {stepNumber}/15
        </span>
      </div>

      <img 
        src={imageUrl} 
        alt="Nœud à identifier" 
        className="quiz-image"
      />

      {/* Zone de saisie avec style carte au trésor */}
      <div style={{
        position: 'absolute',
        top: '370px',
        right: '702px',
        width: '300px'
      }}>
        <div className="treasure-input-container flex gap-2">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="flex-1 p-3 rounded-lg font-pirates text-lg"
            style={{
              background: 'linear-gradient(45deg, #d5bc93 0%, #e6d5b8 100%)',
              border: '2px solid #8b4513',
              color: '#8b4513',
              outline: 'none'
            }}
            placeholder="Nom du nœud..."
            disabled={submitted}
          />
          <button
            onClick={handleSubmit}
            disabled={submitted || !answer}
            className="p-4 font-pirates text-xl transition-all transform hover:scale-105 whitespace-nowrap"
            style={{
              background: 'linear-gradient(45deg, #d5bc93 0%, #e6d5b8 100%)',
              border: '3px solid #8b4513',
              color: '#8b4513',
              boxShadow: '0 4px 6px rgba(139, 69, 19, 0.2)'
            }}
          >
            🎯 Valider
          </button>
        </div>
      </div>
    </div>
  );
}
