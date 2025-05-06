import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { boatPartSteps } from '../data/boatPartsSteps';
import QuizStep from '../components/QuizStep';
import ImageStep from '../components/ImageStep';

export default function BoatPartsMap() {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<{ [key: number]: number }>({});
  const [moduleCompleted, setModuleCompleted] = useState(false);
  const [started, setStarted] = useState(false);

  const handleStepComplete = (stepScore: number) => {
    const newScores = {
      ...scores,
      [currentStep]: stepScore
    };
    setScores(newScores);

    const newTotalScore = Object.values(newScores).reduce((sum, score) => sum + score, 0);

    if (currentStep === boatPartSteps.length - 1) {
      // Calculer le score total sur toutes les étapes
      const totalPossibleScore = 30; // Adapter selon le nombre total de questions
      const passThreshold = Math.ceil(totalPossibleScore / 2);
      const hasPassedModule = newTotalScore >= passThreshold;
      
      setModuleCompleted(hasPassedModule);
      if (hasPassedModule) {
        localStorage.setItem('moduleBoatComplete', 'true');
      }
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  return started ? (
    <div className="min-h-screen flex items-center justify-center pt-16 relative"
      style={{
        backgroundImage: "url('/src/assets/Parties_Bateau_fond.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container max-w-4xl mx-auto p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl">
        {boatPartSteps[currentStep].type === 'quiz' ? (
          <QuizStep
            key={`step-${currentStep}`}
            questions={boatPartSteps[currentStep].questions!}
            onComplete={handleStepComplete}
            stepNumber={currentStep + 1}
            totalSteps={20}
            totalScore={Object.values(scores).reduce((sum, score) => sum + score, 0)}
          />
        ) : (
          <ImageStep
            imageUrl={boatPartSteps[currentStep].imageUrl!}
            correctAnswer={boatPartSteps[currentStep].correctAnswer!}
            onComplete={handleStepComplete}
            stepNumber={currentStep + 1}
          />
        )}
      </div>
    </div>
  ) : (
    <div 
      className="min-h-screen flex items-center justify-center pt-16"
      style={{
        backgroundImage: "url('/src/assets/Parties_Bateau_fond.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        zIndex: 0
      }}
    >
      <div className="relative w-[800px] h-[600px] z-10">
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
            className="group treasure-button p-6 rounded-xl mb-8"
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
                <span className="text-4xl text-[#8b4513]">⛵</span>
                <div className="text-2xl text-[#5c3317] font-pirates">
                  Étape II
                </div>
                <div className="text-xl font-bold text-[#8b4513]">
                  Les Parties du Bateau
                </div>
                <div className="text-sm italic text-[#5c3317]">
                  ~ Cliquez pour commencer ~
                </div>
              </div>
            </div>
          </button>
          
          <div 
            className="text-white bg-blue-900/80 px-4 py-2 rounded-lg font-pirates mt-4 text-center"
            style={{ 
              zIndex: 20,
              transform: 'translateX(20px)'
            }}
          >
            <span role="img" aria-label="time" className="mr-2">⏱️</span>
            Temps estimé : 20 minutes
          </div>
        </div>
      </div>
    </div>
  );
}
