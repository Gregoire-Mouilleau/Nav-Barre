import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { knotSteps } from '../data/marineKnotsSteps';
import QuizStep from '../components/QuizStep';
import ImageStep from '../components/ImageStep';

interface StepButton {
  id: number;
  position: { top: string; left: string };
  title: string;
}

export default function MarineKnotsMap() {
  const navigate = useNavigate();
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<{ [key: number]: number }>({});
  const [moduleCompleted, setModuleCompleted] = useState(false);
  const [started, setStarted] = useState(false);
  const [showFinalScore, setShowFinalScore] = useState(false);

  const playHoverSound = () => {
    const audio = new Audio('/src/assets/hover.mp3'); // Assurez-vous d'ajouter un fichier son
    audio.volume = 0.2; // Volume à 20%
    audio.play().catch(() => {}); // Ignore les erreurs si le son ne peut pas être joué
  };

  const handleStepComplete = (stepScore: number) => {
    const newScores = {
      ...scores,
      [currentStep]: stepScore
    };
    setScores(newScores);

    const newTotalScore = Object.values(newScores).reduce((sum, score) => sum + score, 0);

    if (currentStep === knotSteps.length - 1) {
      // C'est la dernière étape
      setShowFinalScore(true);
      const totalQuestions = knotSteps.reduce((total, step) => total + (step.questions?.length || 1), 0);
      const passThreshold = Math.ceil(totalQuestions / 2);
      const hasPassedModule = newTotalScore >= passThreshold;
      
      if (hasPassedModule) {
        localStorage.setItem('moduleNoeudsComplete', 'true');
      }
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  if (showFinalScore) {
    const totalQuestions = knotSteps.reduce((total, step) => total + (step.questions?.length || 1), 0);
    const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
    const passThreshold = Math.ceil(totalQuestions / 2);
    const hasPassedModule = totalScore >= passThreshold;

    return (
      <div className="p-6 bg-white/90 rounded-xl text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#8b4513]">Score Final</h2>
        <div className="text-2xl mb-4">
          Score total : {totalScore}/{totalQuestions}
        </div>
        <div className={`text-xl mb-6 ${hasPassedModule ? 'text-green-600' : 'text-red-600'}`}>
          {hasPassedModule 
            ? "🎉 Félicitations ! Vous avez validé le module Nœuds Marins !" 
            : "❌ Vous n'avez pas obtenu le score minimum requis."}
        </div>
        <button
          onClick={() => window.location.href = '/'}
          className="px-6 py-3 rounded-lg text-white bg-blue-500 hover:bg-blue-600"
        >
          Retour à l'accueil
        </button>
      </div>
    );
  }

  const mapButtons: StepButton[] = [
    {
      id: 1,
      position: { top: '45%', left: '50%' }, // Position centrée
      title: "Les Nœuds de Base"
    },
  ];

  return started ? (
    <div className="min-h-screen flex items-center justify-center pt-16 relative">
      <div className="container mx-auto p-8 relative">
        {knotSteps[currentStep].type === 'quiz' ? (
          <QuizStep
            key={`step-${currentStep}`} // Forcer la réinitialisation du composant
            questions={knotSteps[currentStep].questions!}
            onComplete={handleStepComplete}
            stepNumber={currentStep + 1}
            totalScore={Object.values(scores).reduce((sum, score) => sum + score, 0)}
          />
        ) : (
          <ImageStep
            imageUrl={knotSteps[currentStep].imageUrl!}
            correctAnswer={knotSteps[currentStep].correctAnswer!}
            onComplete={handleStepComplete}
            stepNumber={currentStep + 1}
          />
        )}
      </div>
    </div>
  ) : (
    <div 
      className="min-h-screen flex items-center justify-center pt-16" // Ajout du padding top
      style={{
        backgroundImage: "url('/assets/fonds/Noeuds_Marins_fond.png')", // Modifié
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative', // Changé de 'fixed' à 'relative'
        zIndex: 0
      }}
    >
      <div className="relative w-[800px] h-[600px] z-10">
        {/* Bouton principal */}
        <div 
          style={{
            position: 'absolute',
            top: '350px',
            left: '850px',
            transform: 'translate(-50%, -50%)',
            zIndex: 50
          }}
        >
          <button
            onClick={() => setStarted(true)}
            onMouseEnter={playHoverSound}
            className="group treasure-button p-6 rounded-xl mb-8" // Ajout de mb-8
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              boxShadow: 'none',
            }}
          >
            <div
              className="relative p-6 rounded-xl treasure-button"
              style={{
                background: 'linear-gradient(45deg, #d5bc93 0%, #e6d5b8 100%)'
              }}
            >
              <div className="flex flex-col items-center gap-3">
                <span className="text-4xl text-[#8b4513]">⚓</span>
                <div className="text-2xl text-[#5c3317] font-pirates">
                  Étape I
                </div>
                <div className="text-xl font-bold text-[#8b4513]">
                  Les Nœuds de Base
                </div>
                <div className="text-sm italic text-[#5c3317]">
                  ~ Cliquez pour découvrir le trésor ~
                </div>
              </div>
            </div>
          </button>
          
          {/* Temps estimé placé sous le bouton */}
          <div 
            className="text-white bg-blue-900/80 px-4 py-2 rounded-lg font-pirates mt-4 text-center"
            style={{ 
              zIndex: 20,
              transform: 'translateX(20px)' // Décalage vers la droite
            }}
          >
            <span role="img" aria-label="time" className="mr-2">⏱️</span>
            Temps estimé : 15 minutes
          </div>
        </div>
      </div>
    </div>
  );
}
